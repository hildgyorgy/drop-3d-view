import test from "node:test";
import assert from "node:assert/strict";
import { photoMeterGeometry, usesSecondUv } from "../js/view/photo-meter-uv.js";

test("WebGL path tracer sees meter UVs without altering the source geometry", () => {
  const uv0 = { id: "original" };
  const uv1 = { id: "metres" };
  const tangent = { id: "source tangents" };
  const attributes = new Map([["uv", uv0], ["uv1", uv1], ["tangent", tangent]]);
  const geometry = {
    getAttribute: key => attributes.get(key),
    clone() {
      const projected = new Map(attributes);
      return {
        getAttribute: key => projected.get(key),
        setAttribute(key, value) { projected.set(key, value); },
        deleteAttribute: key => projected.delete(key)
      };
    }
  };
  const material = { map: { channel: 1 }, normalMap: { channel: 1 } };
  const cache = new WeakMap();

  assert.equal(usesSecondUv(material), true);
  assert.equal(photoMeterGeometry(geometry, { map: { channel: 0 } }, cache), geometry);
  const projected = photoMeterGeometry(geometry, material, cache);
  assert.notEqual(projected, geometry);
  assert.equal(projected.getAttribute("uv"), uv1);
  assert.equal(projected.getAttribute("uv1"), uv1);
  assert.equal(projected.getAttribute("tangent"), undefined);
  assert.equal(geometry.getAttribute("uv"), uv0);
  assert.equal(geometry.getAttribute("tangent"), tangent);
  assert.equal(photoMeterGeometry(geometry, material, cache), projected);
});
