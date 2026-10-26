import test from "node:test";
import assert from "node:assert/strict";
import {
  assertUsableModelBounds,
  InvalidModelBoundsError
} from "../js/model/model-bounds.js";

const bounds = (min, max) => ({
  min: { x: min[0], y: min[1], z: min[2] },
  max: { x: max[0], y: max[1], z: max[2] }
});

test("finite model bounds with spatial extent are accepted", () => {
  const flatModel = bounds([-2, 0, -3], [2, 0, 3]);
  assert.equal(assertUsableModelBounds(flatModel), flatModel);
});

test("empty, non-finite and zero-size model bounds are rejected", () => {
  for (const invalid of [
    bounds([Infinity, Infinity, Infinity], [-Infinity, -Infinity, -Infinity]),
    bounds([0, 0, 0], [NaN, 1, 1]),
    bounds([0, 0, 0], [Infinity, 1, 1]),
    bounds([1, 0, 0], [0, 1, 1]),
    bounds([4, 4, 4], [4, 4, 4])
  ]) assert.throws(() => assertUsableModelBounds(invalid), InvalidModelBoundsError);
});
