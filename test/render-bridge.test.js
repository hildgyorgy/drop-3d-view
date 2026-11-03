import test from "node:test";
import assert from "node:assert/strict";
import { RenderBridgeClient, RENDER_BRIDGE_URL } from "../js/core/render-bridge.js";

const token = "a".repeat(72);
const status = { app: "Drop & View Render", protocolVersion: 1, blenderAvailable: true };
const response = (data, code = 200) => ({
  ok: code >= 200 && code < 300,
  status: code,
  json: async () => data
});

test("scene submission sends the same blob and idempotency key on retry", async () => {
  const calls = [];
  const client = new RenderBridgeClient(async (url, options) => {
    calls.push({ url, options });
    if (calls.length === 1) throw new TypeError("Response lost after upload");
    return response({ id: "job-1" }, 202);
  });
  client.token = token;
  const scene = new Blob(["immutable scene"]);
  const key = "627d4ee7-2957-4806-893d-665562c23b7a";
  await assert.rejects(client.submit(scene, key), /Response lost/);
  assert.deepEqual(await client.submit(scene, key), { id: "job-1" });
  for (const call of calls) {
    assert.equal(call.url, `${RENDER_BRIDGE_URL}/v1/jobs`);
    assert.equal(call.options.body, scene);
    assert.equal(call.options.headers["Idempotency-Key"], key);
    assert.deepEqual(JSON.parse(call.options.headers["X-DVR-Settings"]), {
      version: 1,
      profile: "recommended"
    });
  }
});

test("status, cancellation and reveal address only the selected job", async () => {
  const urls = [];
  const client = new RenderBridgeClient(async (url, options) => {
    urls.push([url, options.method]);
    return response({});
  });
  client.token = token;
  await client.job("job-1");
  await client.cancel("job-1");
  await client.reveal("job-1");
  assert.deepEqual(urls, [
    [`${RENDER_BRIDGE_URL}/v1/jobs/job-1`, "GET"],
    [`${RENDER_BRIDGE_URL}/v1/jobs/job-1/cancel`, "POST"],
    [`${RENDER_BRIDGE_URL}/v1/jobs/job-1/reveal`, "POST"]
  ]);
});

test("connection pairs once, authenticates status and forgets credentials on disconnect", async () => {
  const calls = [];
  const client = new RenderBridgeClient(async (url, options) => {
    calls.push({ url, options });
    if (options.method === "POST") return response({ token, protocolVersion: 1 });
    return response(status);
  });
  assert.deepEqual(await client.connect(), status);
  await client.connect();
  await client.disconnect();
  assert.equal(calls.length, 4);
  assert.equal(calls[0].url, `${RENDER_BRIDGE_URL}/v1/pair`);
  assert.deepEqual(calls[0].options.headers, {});
  assert.equal(calls[1].options.headers.Authorization, `Bearer ${token}`);
  assert.equal(calls[1].options.targetAddressSpace, "loopback");
  assert.equal(calls[1].options.redirect, "error");
  assert.equal(calls[3].options.method, "DELETE");
  assert.equal(client.token, null);
});

test("rejected pairing never sends an authenticated request", async () => {
  let calls = 0;
  const client = new RenderBridgeClient(async () => {
    calls++;
    return response({ error: "pairing_denied" }, 403);
  });
  await assert.rejects(client.connect(), /pairing_denied/);
  assert.equal(client.token, null);
  assert.equal(calls, 1);
});

test("revoked or restarted native session requires new approval", async () => {
  const client = new RenderBridgeClient(async () =>
    response({ error: "pairing_required" }, 401)
  );
  client.token = token;
  await assert.rejects(client.status(), /pairing_required/);
  assert.equal(client.token, null);
});

test("invalid protocol and credential injection are refused", async () => {
  for (const pairing of [
    { token: "bad\r\nheader", protocolVersion: 1 },
    { token, protocolVersion: 2 }
  ]) {
    const client = new RenderBridgeClient(async () => response(pairing));
    await assert.rejects(client.connect(), /Incompatible/);
    assert.equal(client.token, null);
  }
});
