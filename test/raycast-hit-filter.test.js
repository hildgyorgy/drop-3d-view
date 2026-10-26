import test from "node:test";
import assert from "node:assert/strict";
import {
  firstVisibleRaycastHit,
  isVisibleRaycastHit
} from "../js/view/raycast-hit-filter.js";

function object(parent = null, visible = true) {
  return { parent, visible };
}

test("raycast hits behind a hidden model group are ignored", () => {
  const model = object();
  const hiddenGroup = object(model, false);
  const hiddenMesh = object(hiddenGroup);
  const visibleMesh = object(model);
  const hiddenHit = { object: hiddenMesh, point: { side: 1 } };
  const visibleHit = { object: visibleMesh, point: { side: 1 } };

  assert.equal(isVisibleRaycastHit(hiddenHit, { model }), false);
  assert.equal(firstVisibleRaycastHit([hiddenHit, visibleHit], { model }), visibleHit);
});

test("active section clipping ignores hits on the negative side of the plane", () => {
  const model = object();
  const mesh = object(model);
  const clipped = { object: mesh, point: { distance: -0.01 } };
  const boundary = { object: mesh, point: { distance: 0 } };
  const visible = { object: mesh, point: { distance: 0.01 } };
  const sectionPlane = { distanceToPoint: point => point.distance };
  const options = { model, sectionEnabled: true, sectionPlane };

  assert.equal(isVisibleRaycastHit(clipped, options), false);
  assert.equal(isVisibleRaycastHit(boundary, options), true);
  assert.equal(firstVisibleRaycastHit([clipped, visible], options), visible);
  assert.equal(isVisibleRaycastHit(clipped, { ...options, sectionEnabled: false }), true);
});
