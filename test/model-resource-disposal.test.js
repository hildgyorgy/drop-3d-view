import test from "node:test";
import assert from "node:assert/strict";
import { disposeDetachedModel } from "../js/model/model-resource-disposal.js";

test("a stale loaded model releases each shared GPU resource once", () => {
  const calls = { geometry: 0, material: 0, texture: 0 };
  const texture = { isTexture: true, dispose: () => { calls.texture++; } };
  const material = {
    map: texture,
    normalMap: texture,
    dispose: () => { calls.material++; }
  };
  const geometry = { dispose: () => { calls.geometry++; } };
  const meshes = [
    { isMesh: true, geometry, material },
    { isMesh: true, geometry, material: [material] }
  ];
  const model = { traverse: callback => meshes.forEach(callback) };

  disposeDetachedModel(model);

  assert.deepEqual(calls, { geometry: 1, material: 1, texture: 1 });
});
