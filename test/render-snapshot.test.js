import test from "node:test";
import assert from "node:assert/strict";
import {
  encodeRenderSnapshot,
  decodeRenderSnapshot,
  MAX_RENDER_RESOURCES,
  MAX_RENDER_MATERIAL_EDITS
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

test("render snapshot keeps original GLB, material image bytes and view", async () => {
  const workbench = {
    version: 1,
    selectedIndex: 2,
    edits: [
      {
        index: 2,
        inputs: { workbenchColor: "#ffffff" },
        images: [
          {
            kind: "color",
            name: "brick.png",
            type: "image/png",
            bytes: new Uint8Array([1, 2, 3]).buffer
          }
        ]
      }
    ]
  };
  const blob = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession,
    workbench,
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
  assert.deepEqual(
    new Uint8Array(decoded.workbench.edits[0].images[0].bytes),
    new Uint8Array([1, 2, 3])
  );
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

function materialEdit(index, mapCount = 0) {
  return {
    index,
    inputs: { workbenchType: "surface" },
    images: Array.from({ length: mapCount }, (_, i) => ({
      kind: ["color", "roughness", "normal"][i],
      name: `map-${i}.png`,
      bytes: new Uint8Array([1, 2, 3]).buffer
    }))
  };
}

function packageWithEdits(edits) {
  return encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession,
    workbench: { version: 1, selectedIndex: 0, edits }
  });
}

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

test("1024 resources including the GLB round trip successfully", async () => {
  const edits = Array.from({ length: 341 }, (_, i) => materialEdit(i, 3));
  const blob = packageWithEdits(edits);
  const decoded = await decodeRenderSnapshot(new File([blob], "many.dvrender"));
  assert.equal(decoded.workbench.edits.length, 341);
  assert.equal(
    1 + decoded.workbench.edits.reduce((sum, edit) => sum + edit.images.length, 0),
    MAX_RENDER_RESOURCES
  );
  assert.throws(
    () => packageWithEdits([...edits, materialEdit(341, 1)]),
    /1024 resources/
  );
  const tooMany = await changeManifest(blob, manifest => manifest.lengths.push(0));
  await assert.rejects(decodeRenderSnapshot(tooMany), /1024 resources/);
});

test("1024 material edits round trip; both sides reject 1025", async () => {
  const edits = Array.from({ length: MAX_RENDER_MATERIAL_EDITS }, (_, i) =>
    materialEdit(i)
  );
  const blob = packageWithEdits(edits);
  const decoded = await decodeRenderSnapshot(new File([blob], "many.dvrender"));
  assert.equal(decoded.workbench.edits.length, 1024);
  assert.throws(
    () => packageWithEdits([...edits, materialEdit(1024)]),
    /1024 material edits/
  );
  const tooMany = await changeManifest(blob, manifest =>
    manifest.workbench.edits.push(materialEdit(1024))
  );
  await assert.rejects(decodeRenderSnapshot(tooMany), /1024 material edits/);
});

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

test("legacy packages without producer metadata still open", async () => {
  const original = encodeRenderSnapshot({
    fileName: "house.glb",
    fileBytes: glb.buffer,
    viewSession
  });
  const legacy = await changeManifest(original, manifest => {
    delete manifest.producer;
  });
  assert.equal((await decodeRenderSnapshot(legacy)).producer, null);
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
