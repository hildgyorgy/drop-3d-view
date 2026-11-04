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

test("Safari upload materializes only slices, checks digests and waits for each ACK", async () => {
  const size = 8 * 1024 * 1024 + 17;
  let maximumRead = 0;
  let reads = 0;
  const snapshot = {
    size,
    arrayBuffer() { assert.fail("Whole package must never be materialized"); },
    slice(start, end) {
      const count = Math.min(end, size) - start;
      assert.ok(count <= 65536);
      maximumRead = Math.max(count, maximumRead);
      reads++;
      return { arrayBuffer: async () => new Uint8Array(count).fill(start / 65536 % 256).buffer };
    }
  };
  const uploadID = crypto.randomUUID();
  const jobID = crypto.randomUUID();
  const client = new SafariRenderBridgeClient({});
  client.token = "a".repeat(72);
  let received = 0;
  let retry = false;
  client.request = async (operation, fields) => {
    if (operation === "uploadBegin") return { uploadID, offset: 0, chunkBytes: 65536 };
    if (operation === "uploadFinish") { assert.equal(received, size); return { id: jobID }; }
    assert.equal(operation, "uploadChunk");
    assert.equal(fields.uploadID, uploadID);
    const bytes = Uint8Array.from(atob(fields.base64), character => character.charCodeAt(0));
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)),
      value => value.toString(16).padStart(2, "0")).join("");
    assert.equal(hash, fields.digest);
    if (fields.offset === 0 && !retry) { retry = true; throw new Error("Lost ACK"); }
    assert.equal(fields.offset, received);
    received += bytes.length;
    return { uploadID, offset: received };
  };
  const phases = [];
  assert.deepEqual(await client.submit(snapshot, crypto.randomUUID(), {
    onProgress: progress => phases.push(progress.phase)
  }), { id: jobID });
  assert.equal(maximumRead, 65536);
  assert.equal(reads, Math.ceil(size / 65536));
  assert.equal(phases.at(-1), "submit");
  assert.equal(client.transfer, null);
});

test("Safari upload rejects wrong acknowledgements before submission", async () => {
  const client = new SafariRenderBridgeClient({});
  client.token = "a".repeat(72);
  const uploadID = crypto.randomUUID();
  client.request = async operation => {
    if (operation === "uploadBegin") return { uploadID, offset: 0, chunkBytes: 65536 };
    assert.equal(operation, "uploadChunk");
    return { uploadID, offset: 999 };
  };
  await assert.rejects(client.submit(new Blob([new Uint8Array(32)]), crypto.randomUUID()), /acknowledgement/);
  assert.equal(client.transfer, null);
});

test("Safari transfer cancellation aborts staging and never commits a job", async () => {
  const client = new SafariRenderBridgeClient({});
  client.token = "a".repeat(72);
  const uploadID = crypto.randomUUID();
  const calls = [];
  client.request = async (operation, fields) => {
    calls.push(operation);
    if (operation === "uploadBegin") return { uploadID, offset: 0, chunkBytes: 65536 };
    if (operation === "uploadChunk") return { uploadID, offset: fields.offset + 65536 };
    if (operation === "uploadAbort") return { aborted: true };
    assert.fail("Cancelled transfer cannot finish");
  };
  await assert.rejects(client.submit(new Blob([new Uint8Array(131072)]), crypto.randomUUID(), {
    onProgress() { void client.abortUpload(); }
  }), { name: "AbortError" });
  assert.deepEqual(calls, ["uploadBegin", "uploadChunk", "uploadAbort"]);
  assert.equal(client.transfer, null);
});
