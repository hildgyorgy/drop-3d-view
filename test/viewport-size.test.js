import test from "node:test";
import assert from "node:assert/strict";
import { getSafeViewportSize } from "../js/view/viewport-size.js";

test("positive viewport dimensions preserve their real aspect", () => {
  assert.deepEqual(getSafeViewportSize(1920, 1080), {
    width: 1920,
    height: 1080,
    aspect: 16 / 9
  });
});

test("zero, negative and non-finite viewports use a finite 1x1 fallback", () => {
  for (const [width, height] of [
    [0, 0], [100, 0], [0, 100], [-1, 100], [NaN, 100], [100, Infinity]
  ]) assert.deepEqual(getSafeViewportSize(width, height), {
    width: 1, height: 1, aspect: 1
  });
});
