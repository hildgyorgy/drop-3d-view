import test from "node:test";
import assert from "node:assert/strict";
import { encodeRenderSnapshot, decodeRenderSnapshot } from "../js/core/render-snapshot.js";

const glb = new Uint8Array([103, 108, 84, 70, 2, 0, 0, 0, 12, 0, 0, 0]);
const viewSession = {
  version: 1,
  camera: { projection: "perspective", preset: null, position: [1, 2, 3],
    quaternion: [0, 0, 0, 1], up: [0, 1, 0], target: [0, 0, 0],
    zoom: 1, fov: 42 },
  displayMode: "original", navigationMode: "orbit", groups: [],
  selectedIds: [], section: { enabled: false, axis: "y", normal: [0, -1, 0], constant: 0 },
  settings: {}
};

test("render snapshot keeps original GLB, material image bytes and view", async () => {
  const workbench = { version: 1, selectedIndex: 2, edits: [{
    index: 2, inputs: { workbenchColor: "#ffffff" },
    images: [{ kind: "color", name: "brick.png", type: "image/png",
      bytes: new Uint8Array([1, 2, 3]).buffer }]
  }] };
  const blob = encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession, workbench,
    renderSize: { width: 4064, height: 2488 }
  });
  const decoded = await decodeRenderSnapshot(new File([blob], "house.dvrender"));
  assert.deepEqual(new Uint8Array(await decoded.file.arrayBuffer()), glb);
  assert.deepEqual(decoded.viewSession, viewSession);
  assert.deepEqual(decoded.renderSize, { width: 4064, height: 2488 });
  assert.deepEqual(new Uint8Array(decoded.workbench.edits[0].images[0].bytes),
    new Uint8Array([1, 2, 3]));
});

test("older snapshots without a render size remain readable", async () => {
  const blob = encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession
  });
  const decoded = await decodeRenderSnapshot(new File([blob], "old.dvrender"));
  assert.equal(decoded.renderSize, null);
});

test("invalid render pixel size is rejected", () => {
  assert.throws(() => encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession,
    renderSize: { width: 0, height: 1080 }
  }), /Invalid render pixel size/);
});

test("render snapshot rejects truncated resources", async () => {
  const blob = encodeRenderSnapshot({
    fileName: "house.glb", fileBytes: glb.buffer, viewSession
  });
  const truncated = new File([await blob.slice(0, blob.size - 1).arrayBuffer()], "bad.dvrender");
  await assert.rejects(decodeRenderSnapshot(truncated), /Truncated render snapshot/);
});
