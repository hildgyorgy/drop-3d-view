import test from "node:test";
import assert from "node:assert/strict";
import { updateLineMaterialResolution } from "../js/section/line-resolution.js";

test("section line resolution follows the current viewport", () => {
  const calls = [];
  const material = { resolution: { set: (width, height) => calls.push([width, height]) } };
  assert.equal(updateLineMaterialResolution(material, 1600, 900), true);
  assert.deepEqual(calls, [[1600, 900]]);
});

test("section line resolution uses the safe fallback and ignores basic line materials", () => {
  const calls = [];
  const material = { resolution: { set: (width, height) => calls.push([width, height]) } };
  assert.equal(updateLineMaterialResolution(material, 0, 0), true);
  assert.deepEqual(calls, [[1, 1]]);
  assert.equal(updateLineMaterialResolution({}, 800, 600), false);
});
