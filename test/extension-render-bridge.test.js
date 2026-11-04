import test from "node:test";
import assert from "node:assert/strict";
import { ExtensionRenderBridgeClient } from "../js/core/extension-render-bridge.js";

function pageFor(transport) {
  const listeners = new Set();
  const calls = [];
  const page = {
    location: { origin: "https://hildgyorgy.github.io" },
    addEventListener: (_, fn) => listeners.add(fn),
    removeEventListener: (_, fn) => listeners.delete(fn),
    postMessage({ message }, origin) {
      calls.push(message.operation);
      if (!transport) return;
      const data = message.operation === "discover"
        ? { transport, capabilities: ["chunked-upload", "jobs"] }
        : message.operation === "pair" ? { protocolVersion: 1, token: "a".repeat(72) }
        : { app: "Drop & View Render", protocolVersion: 1 };
      queueMicrotask(() => {
        for (const fn of [...listeners]) fn({ source: page, origin, data: {
          channel: "drop-view-render:safari:response",
          message: { protocolVersion: 1, id: message.id, ok: true, transport, data }
        } });
      });
    }
  };
  return { page, calls, listeners };
}

for (const transport of ["safari-native-messaging", "chromium-native-messaging"]) {
  test(`automatic discovery selects ${transport} before pairing`, async () => {
    const { page, calls, listeners } = pageFor(transport);
    const client = new ExtensionRenderBridgeClient(page);
    assert.equal((await client.discover()).transport, transport);
    assert.equal(client.token, null);
    assert.deepEqual(calls, ["discover"]);
    assert.equal((await client.connect()).app, "Drop & View Render");
    assert.deepEqual(calls, ["discover", "pair", "status"]);
    assert.equal(listeners.size, 0);
  });
}

test("missing extension gives setup guidance without falling back to HTTP", async () => {
  const { page, calls, listeners } = pageFor(null);
  const client = new ExtensionRenderBridgeClient(page, 5);
  await assert.rejects(client.discover(), { code: "extension_not_found" });
  assert.deepEqual(calls, ["discover"]);
  assert.equal(client.token, null);
  assert.equal(listeners.size, 0);
});
