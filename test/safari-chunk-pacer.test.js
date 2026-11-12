import test from "node:test";
import assert from "node:assert/strict";
import { createSafariChunkPacer } from "../js/core/safari-chunk-pacer.js";
import { SafariRenderBridgeClient } from "../js/core/safari-render-bridge.js";

test("fast acknowledged chunks are spaced out, including simultaneous reservations", async () => {
  let clock = 1000;
  const sleeps = [];
  const pace = createSafariChunkPacer({ now: () => clock, sleep: async delay => { sleeps.push(delay); } });
  await pace();
  assert.deepEqual(sleeps, [], "the first chunk is immediate");
  clock += 5;
  await Promise.all([pace(), pace()]);
  assert.deepEqual(sleeps, [75, 155], "each request reserves its own slot");
  clock = 2000;
  await pace();
  assert.equal(sleeps.length, 2, "a slow ACK already supplies the required spacing");
});

for (const transport of ["safari-native-messaging", "chromium-native-messaging"]) {
  test(`${transport} keeps cancellation immediate while pacing only Safari chunks`, async () => {
    const target = new EventTarget();
    target.location = { origin: "http://localhost:4173" };
    const calls = [];
    target.postMessage = ({ message }, origin) => {
      calls.push({ operation: message.operation, time: performance.now() });
      queueMicrotask(() => {
        const event = new Event("message");
        Object.assign(event, { source: target, origin, data: {
          channel: "drop-view-render:safari:response",
          message: { protocolVersion: 1, id: message.id, ok: true, transport, data: {} }
        } });
        target.dispatchEvent(event);
      });
    };
    const client = new SafariRenderBridgeClient(target, 1000, transport);
    await client.request("uploadChunk");
    const second = client.request("uploadChunk");
    if (transport === "chromium-native-messaging")
      assert.equal(calls.length, 2, "Chromium chunks are posted without pacing");
    await client.request("uploadAbort");
    await second;
    if (transport === "safari-native-messaging") {
      assert.deepEqual(calls.map(call => call.operation), ["uploadChunk", "uploadAbort", "uploadChunk"]);
      assert.ok(calls[2].time - calls[0].time >= 60, "rapid Safari chunks are separated");
    }
  });
}
