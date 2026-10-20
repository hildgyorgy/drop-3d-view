import test from "node:test";
import assert from "node:assert/strict";
import { enableEmbedBridge, readEmbedConfiguration } from "../js/core/embed-bridge.js";

const parentOrigin = "https://www.negyedikcsoport.hu";
const url = `https://viewer.example/?embed=1&channel=pilot&parentOrigin=${encodeURIComponent(parentOrigin)}`;

test("embed mode requires a real parent window and exact parent origin", () => {
  const originalWindow = globalThis.window;
  try {
    globalThis.window = { parent: {} };
    assert.deepEqual(readEmbedConfiguration(url), { channel: "pilot", parentOrigin });
    assert.equal(readEmbedConfiguration("https://viewer.example/"), null);
    assert.equal(readEmbedConfiguration(url.replace("https%3A", "javascript%3A")), null);
    globalThis.window.parent = globalThis.window;
    assert.equal(readEmbedConfiguration(url), null);
  } finally {
    globalThis.window = originalWindow;
  }
});

test("only the designated parent can hand a GLB to the embedded viewer", async () => {
  const originalWindow = globalThis.window;
  const messages = [];
  let listener;
  const parent = { postMessage: (...args) => messages.push(args) };
  globalThis.window = {
    parent,
    addEventListener: (name, callback) => {
      if (name === "message") listener = callback;
    }
  };
  const opened = [];
  const app = {
    openFile: async file => {
      opened.push(file);
      return true;
    }
  };
  const config = { channel: "pilot", parentOrigin };
  try {
    enableEmbedBridge(app, config);
    assert.equal(messages[0][0].event, "ready");
    assert.equal(messages[0][1], parentOrigin);

    const blob = new Blob(["test"]);
    const open = {
      type: "drop-view-embed",
      channel: "pilot",
      event: "open",
      blob,
      name: "house.glb"
    };
    await listener({ source: parent, origin: "https://wrong.example", data: open });
    await listener({ source: {}, origin: parentOrigin, data: open });
    await listener({
      source: parent,
      origin: parentOrigin,
      data: { ...open, channel: "wrong" }
    });
    assert.equal(opened.length, 0);

    await listener({ source: parent, origin: parentOrigin, data: open });
    assert.equal(opened.length, 1);
    assert.equal(opened[0].name, "house.glb");
    assert.equal(messages.at(-1)[0].event, "opened");
  } finally {
    globalThis.window = originalWindow;
  }
});
