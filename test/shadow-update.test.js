import test from "node:test";
import assert from "node:assert/strict";

import { invalidateShadow } from "../js/core/shadow-update.js";

test("directional shadows become on-demand and dirty after a scene change", () => {
  const shadow = { autoUpdate: true, needsUpdate: false };
  invalidateShadow(shadow);
  assert.equal(shadow.autoUpdate, false);
  assert.equal(shadow.needsUpdate, true);
});

test("shadow invalidation tolerates a missing shadow object", () => {
  assert.doesNotThrow(() => invalidateShadow(null));
});
