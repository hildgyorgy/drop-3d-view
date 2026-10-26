import test from "node:test";
import assert from "node:assert/strict";

import {
  isGlbFile,
  resolveComparisonModelUrl
} from "../js/model/file-format.js";

test("the viewer accepts only GLB filenames", () => {
  assert.equal(isGlbFile({ name: "house.glb" }), true);
  assert.equal(isGlbFile({ name: "house.GLB" }), true);
  assert.equal(isGlbFile({ name: "house.obj" }), false);
  assert.equal(isGlbFile({ name: "house.glb.txt" }), false);
  assert.equal(isGlbFile({ name: "house" }), false);
  assert.equal(isGlbFile(null), false);
});

test("comparison models must be same-origin HTTP GLB URLs", () => {
  const base = "https://viewer.example/app/index.html";
  assert.equal(
    resolveComparisonModelUrl("../demo/house.GLB?version=2", base),
    "https://viewer.example/demo/house.GLB?version=2"
  );
  for (const value of [
    "https://other.example/house.glb",
    "data:model/gltf-binary;base64,AAAA",
    "file:///tmp/house.glb",
    "/demo/house.obj",
    "https://user:secret@viewer.example/house.glb",
    ""
  ]) assert.equal(resolveComparisonModelUrl(value, base), null);
});
