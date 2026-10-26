import test from "node:test";
import assert from "node:assert/strict";
import { measurementScale, formatMeasurement } from "../js/ui/measurement-scale.js";

test("measurement subdivisions adapt to real distance and screen density", () => {
  assert.deepEqual(measurementScale(6.7, 670), { step: 0.1, count: 67 });
  assert.deepEqual(measurementScale(6.7, 100), { step: 1, count: 6 });
  assert.deepEqual(measurementScale(0.067, 670), { step: 0.001, count: 67 });
  assert.equal(measurementScale(0, 100), null);
  assert.equal(measurementScale(10, 0), null);
  assert.equal(formatMeasurement(6.7), "6.70 m");
});
