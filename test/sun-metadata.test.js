import test from "node:test";
import assert from "node:assert/strict";

import {
  normalizeImportedSunDirection,
  sunControlAngles,
  environmentSunDirectionFromPixel
} from "../js/model/sun-metadata.js";

test("maps the corrected exported sun vector to the viewer's controls", () => {
  const lightDirection = [0.409576, -0.573576, -0.709406];
  const direction = normalizeImportedSunDirection({
    directionToSun: [-0.409576, 0.573576, 0.709406]
  });
  assert.ok(direction);
  assert.ok(Math.abs(Math.hypot(...direction) - 1) < 1e-12);
  // The directional light is placed toward the sun, opposite the travel of
  // its rays; this catches an accidental shadow reversal.
  assert.ok(direction.every((component, i) => Math.abs(component + lightDirection[i]) < 1e-6));
  const controls = sunControlAngles(direction);
  assert.ok(Math.abs(controls.azimuth - 120) < 0.001);
  assert.ok(Math.abs(controls.height - 35) < 0.001);
});

test("rejects missing, non-finite, zero and below-horizon sun directions", () => {
  for (const value of [
    null,
    {},
    { directionToSun: [0, 1] },
    { directionToSun: [0, Infinity, 1] },
    { directionToSun: [0, 0, 0] },
    { directionToSun: [0, -1, 0] }
  ]) {
    assert.equal(normalizeImportedSunDirection(value), null);
  }
});

test("locates the HDRI sun in the same 3D coordinate system as the viewer", () => {
  const direction = environmentSunDirectionFromPixel(3.5, 0.5, 8, 4);
  assert.ok(Math.abs(direction[0] - Math.SQRT1_2) < 1e-12);
  assert.ok(Math.abs(direction[1] - Math.SQRT1_2) < 1e-12);
  assert.ok(Math.abs(direction[2]) < 1e-12);
});
