import test from "node:test";
import assert from "node:assert/strict";
import { SafariRenderBridgeClient } from "../js/core/safari-render-bridge.js";

test("Safari diagnostic transport rejects oversized UTF-8 text before posting", async () => {
  const client = new SafariRenderBridgeClient({ postMessage() { assert.fail(); } });
  await assert.rejects(client.ping("é".repeat(513)), /1024 bytes/);
  assert.equal(client.busy, false);
});

test("Safari diagnostic with no extension times out and cleans up without touching HTTP", async () => {
  const listeners = new Set();
  const client = new SafariRenderBridgeClient({
    location: { origin: "http://localhost:4173" },
    addEventListener: (_, callback) => listeners.add(callback),
    removeEventListener: (_, callback) => listeners.delete(callback),
    postMessage(message, origin) {
      assert.equal(origin, "http://localhost:4173");
      assert.equal(message.message.operation, "ping");
    }
  }, 10);
  await assert.rejects(client.ping(), /No Safari extension response/);
  assert.equal(listeners.size, 0);
  assert.equal(client.busy, false);
});
