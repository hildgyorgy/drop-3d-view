import test from "node:test";
import assert from "node:assert/strict";
import {
  encodeRenderSnapshot,
  decodeRenderSnapshot
} from "../js/core/render-snapshot.js";
import { RENDER_PRODUCER } from "../js/core/render-compatibility.js";

const glb = new Uint8Array([103, 108, 84, 70, 2, 0, 0, 0, 12, 0, 0, 0]);
const viewSession = {
  version: 1,
  camera: {
    projection: "perspective",
    preset: null,
    position: [1, 2, 3],
    quaternion: [0, 0, 0, 1],
    up: [0, 1, 0],
    target: [0, 0, 0],
    zoom: 1,
    fov: 42
  },
  displayMode: "original",
  navigationMode: "orbit",
  groups: [],
  selectedIds: [],
  section: { enabled: false, axis: "y", normal: [0, -1, 0], constant: 0 },
  settings: {}
};

test("render snapshot keeps the current GLB and scene state", async () => {
  const blob = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession,
    renderSize: { width: 4064, height: 2488 },
    renderJob: { samples: 1000, bounces: 6, transmissiveBounces: 10 }
  });
  const decoded = await decodeRenderSnapshot(new File([blob], "house.dvrender"));
  assert.deepEqual(new Uint8Array(await decoded.file.arrayBuffer()), glb);
  assert.deepEqual(decoded.viewSession, viewSession);
  assert.deepEqual(decoded.renderSize, { width: 4064, height: 2488 });
  assert.deepEqual(decoded.renderJob, {
    samples: 1000,
    bounces: 6,
    transmissiveBounces: 10
  });
  assert.deepEqual(decoded.producer, RENDER_PRODUCER);
});

test("older snapshots without a render size remain readable", async () => {
  const blob = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession
  });
  const decoded = await decodeRenderSnapshot(new File([blob], "old.dvrender"));
  assert.equal(decoded.renderSize, null);
  assert.equal(decoded.renderJob, null);
  assert.equal(decoded.environment, null);
});

test("invalid path tracing target is rejected", () => {
  assert.throws(
    () =>
      encodeRenderSnapshot({
        fileName: "house.glb",
        fileBytes: glb.buffer,
        viewSession,
        renderJob: { samples: 0, bounces: 6, transmissiveBounces: 10 }
      }),
    /Invalid path tracing job settings/
  );
});

test("invalid render pixel size is rejected", () => {
  assert.throws(
    () =>
      encodeRenderSnapshot({
        fileName: "house.glb",
        fileBytes: glb.buffer,
        viewSession,
        renderSize: { width: 0, height: 1080 }
      }),
    /Invalid render pixel size/
  );
});

test("render snapshot rejects truncated resources", async () => {
  const blob = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession
  });
  const truncated = new File(
    [await blob.slice(0, blob.size - 1).arrayBuffer()],
    "bad.dvrender"
  );
  await assert.rejects(decodeRenderSnapshot(truncated), /Truncated render snapshot/);
});

// Rewrite only metadata to exercise the decoder independently of export guards.
async function changeManifest(blob, change) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  const length = new DataView(bytes.buffer).getUint32(8, true);
  const manifest = JSON.parse(new TextDecoder().decode(bytes.subarray(12, 12 + length)));
  change(manifest);
  const encoded = new TextEncoder().encode(JSON.stringify(manifest));
  const header = bytes.slice(0, 12);
  new DataView(header.buffer).setUint32(8, encoded.length, true);
  return new File([header, encoded, bytes.subarray(12 + length)], "changed.dvrender");
}

test("SECTION is rejected before creating a render package", () => {
  const clipped = structuredClone(viewSession);
  clipped.section.enabled = true;
  assert.throws(
    () =>
      encodeRenderSnapshot({
        fileName: "house.glb",
        fileBytes: glb.buffer,
        viewSession: clipped
      }),
    /Turn off SECTION/
  );
  assert.doesNotThrow(() =>
    encodeRenderSnapshot({ fileName: "house.glb", fileBytes: glb.buffer, viewSession })
  );
});

test("packages without producer metadata are rejected", async () => {
  const original = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession
  });
  const legacy = await changeManifest(original, manifest => {
    delete manifest.producer;
  });
  await assert.rejects(decodeRenderSnapshot(legacy), /producer is required/);
});

test("experimental editable packages are rejected", async () => {
  const original = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession
  });
  const legacy = await changeManifest(original, manifest => {
    manifest.workbench = null;
  });
  await assert.rejects(decodeRenderSnapshot(legacy), /Unsupported legacy/);
});

test("malformed producer metadata is rejected on both sides", async () => {
  assert.throws(
    () =>
      encodeRenderSnapshot({
        fileName: "house.glb",
        fileBytes: glb.buffer,
        viewSession,
        producer: { appVersion: 7 }
      }),
    /Invalid render package producer/
  );
  const blob = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession
  });
  const invalid = await changeManifest(blob, manifest => {
    manifest.producer.hdriId = [];
  });
  await assert.rejects(decodeRenderSnapshot(invalid), /Invalid render package producer/);
});

const hdr = new Uint8Array([
  ...new TextEncoder().encode("#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y 1 +X 1\n"),
  128, 64, 32, 129
]);

test("packaged HDRI round trips without changing the current GLB", async () => {
  const blob = encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession,
    environment: { name: "studio.hdr", bytes: hdr.buffer }
  });
  const decoded = await decodeRenderSnapshot(new File([blob], "house.dvrender"));
  assert.equal(decoded.environment.name, "studio.hdr");
  assert.deepEqual(new Uint8Array(decoded.environment.bytes), hdr);
  assert.deepEqual(new Uint8Array(await decoded.file.arrayBuffer()), glb);
});

test("invalid or aliased HDRI resources are rejected", async () => {
  assert.throws(() => encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession,
    environment: { name: "bad.hdr", bytes: glb.buffer }
  }), /Invalid packaged HDRI/);
  const blob = encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession,
    environment: { name: "studio.hdr", bytes: hdr.buffer }
  });
  const aliased = await changeManifest(blob, manifest => { manifest.environment.resource = 0; });
  await assert.rejects(decodeRenderSnapshot(aliased), /Invalid packaged HDRI resource/);
  const missing = await changeManifest(blob, manifest => { manifest.environment.resource = 99; });
  await assert.rejects(decodeRenderSnapshot(missing), /Invalid packaged HDRI resource/);
});

test("oversized HDRI dimensions are rejected before decoding pixels", () => {
  const bytes = new Uint8Array([
    ...new TextEncoder().encode("#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y 999999 +X 999999\n"),
    128, 64, 32, 129
  ]);
  assert.throws(() => encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession,
    environment: { name: "huge.hdr", bytes: bytes.buffer }
  }), /Invalid packaged HDRI dimensions/);
});

test("v1 accepts only the current GLB and optional HDRI resources", async () => {
  const blob = encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession,
    environment: { name: "studio.hdr", bytes: hdr.buffer }
  });
  const tooMany = await changeManifest(blob, manifest => manifest.lengths.push(0));
  await assert.rejects(decodeRenderSnapshot(tooMany), /at most 2 resources/);
});
