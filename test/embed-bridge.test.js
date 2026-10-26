import test from "node:test";
import assert from "node:assert/strict";
import {
  enableEmbedBridge,
  readEmbedConfiguration,
  sendEmbedEvent
} from "../js/core/embed-bridge.js";

const parentOrigin = "https://www.negyedikcsoport.hu";
const url = `https://viewer.example/?embed=1&channel=pilot&parentOrigin=${encodeURIComponent(parentOrigin)}`;

test("embed mode requires a real parent window and exact parent origin", () => {
  const originalWindow = globalThis.window;
  try {
    globalThis.window = { parent: {} };
    assert.deepEqual(readEmbedConfiguration(url), { channel: "pilot", parentOrigin, inline: false });
    assert.deepEqual(readEmbedConfiguration(`${url}&inline=1`), {
      channel: "pilot", parentOrigin, inline: true
    });
    assert.equal(readEmbedConfiguration("https://viewer.example/"), null);
    assert.equal(readEmbedConfiguration(url.replace("https%3A", "javascript%3A")), null);
    globalThis.window.parent = globalThis.window;
    assert.equal(readEmbedConfiguration(url), null);
  } finally {
    globalThis.window = originalWindow;
  }
});

test("inline embed hides viewer controls and restores them without reopening the model", async () => {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const parent = { postMessage: () => {} };
  let listener;
  let inline = true;
  let expanded = false;
  let orbitClicks = 0;
  globalThis.window = {
    parent,
    addEventListener: (name, callback) => {
      if (name === "message") listener = callback;
    }
  };
  globalThis.document = {
    documentElement: {
      classList: {
        toggle: (name, enabled) => {
          if (name === "embed-inline") inline = enabled;
          else if (name === "embed-expanded") expanded = enabled;
          else assert.fail(`Unexpected class ${name}`);
        }
      }
    },
    querySelector: () => ({ click: () => { orbitClicks++; } })
  };
  let opens = 0;
  try {
    enableEmbedBridge({ openFile: async () => { opens++; } }, {
      channel: "pilot", parentOrigin, inline: true
    });
    const send = async event => listener({
      source: parent,
      origin: parentOrigin,
      data: { type: "drop-view-embed", channel: "pilot", event }
    });
    await send("expanded");
    assert.equal(inline, false);
    assert.equal(expanded, true);
    await send("inline");
    assert.equal(inline, true);
    assert.equal(expanded, false);
    assert.equal(orbitClicks, 1);
    assert.equal(opens, 0);
  } finally {
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
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

test("embed bridge reports startup, busy and invalid-model states and can detach", async () => {
  const originalWindow = globalThis.window;
  const messages = [];
  let listener;
  let removed;
  let finishOpen;
  const parent = { postMessage: (...args) => messages.push(args) };
  globalThis.window = {
    parent,
    addEventListener: (name, callback) => { if (name === "message") listener = callback; },
    removeEventListener: (name, callback) => { if (name === "message") removed = callback; }
  };
  try {
    const config = { channel: "pilot", parentOrigin };
    assert.equal(sendEmbedEvent(config, "startup-error"), true);
    const detach = enableEmbedBridge({
      openFile: () => new Promise(resolve => { finishOpen = resolve; })
    }, config);
    const base = {
      source: parent,
      origin: parentOrigin,
      data: { type: "drop-view-embed", channel: "pilot", event: "open" }
    };
    await listener(base);
    assert.equal(messages.at(-1)[0].reason, "invalid-model");

    const opening = listener({ ...base, data: { ...base.data, blob: new Blob(["one"]) } });
    await listener({ ...base, data: { ...base.data, blob: new Blob(["two"]) } });
    assert.equal(messages.at(-1)[0].event, "busy");
    finishOpen(true);
    await opening;
    assert.equal(messages.at(-1)[0].event, "opened");

    detach();
    assert.equal(removed, listener);
  } finally {
    globalThis.window = originalWindow;
  }
});
