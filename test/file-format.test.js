import test from "node:test";
import assert from "node:assert/strict";

import { isGlbFile } from "../js/model/file-format.js";

test("the viewer accepts only GLB filenames", () => {
  assert.equal(isGlbFile({ name: "house.glb" }), true);
  assert.equal(isGlbFile({ name: "house.GLB" }), true);
  assert.equal(isGlbFile({ name: "house.obj" }), false);
  assert.equal(isGlbFile({ name: "house.glb.txt" }), false);
  assert.equal(isGlbFile({ name: "house" }), false);
  assert.equal(isGlbFile(null), false);
});
