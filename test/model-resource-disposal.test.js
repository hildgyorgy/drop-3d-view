import test from "node:test";
import assert from "node:assert/strict";
import {
  disposeDetachedModel,
  disposeModelResources,
  disposeOwnedResources
} from "../js/model/model-resource-disposal.js";

test("owned workbench resources are deduplicated without walking source textures", () => {
  const calls = { texture: 0, bitmap: 0, material: 0, geometry: 0, source: 0 };
  const bitmap = { close: () => { calls.bitmap++; } };
  const texture = { isTexture: true, image: bitmap, dispose: () => { calls.texture++; } };
  const sourceTexture = { isTexture: true, dispose: () => { calls.source++; } };
  const material = { map: sourceTexture, dispose: () => { calls.material++; } };
  const geometry = { dispose: () => { calls.geometry++; } };

  disposeOwnedResources({
    textures: [texture, texture],
    materials: [material, [material]],
    geometries: [geometry, geometry]
  });

  assert.deepEqual(calls, {
    texture: 1, bitmap: 1, material: 1, geometry: 1, source: 0
  });
});

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

test("active display material and original PBR resources are handled independently", () => {
  const calls = {
    activeMaterial: 0,
    originalMaterial: 0,
    activeGeometry: 0,
    originalGeometry: 0,
    normal: 0,
    roughness: 0,
    bitmap: 0
  };
  const bitmap = { close: () => { calls.bitmap++; } };
  const normalMap = {
    isTexture: true,
    image: bitmap,
    dispose: () => { calls.normal++; }
  };
  const roughnessMap = {
    isTexture: true,
    image: bitmap,
    dispose: () => { calls.roughness++; }
  };
  const activeMaterial = { dispose: () => { calls.activeMaterial++; } };
  const originalMaterial = {
    normalMap,
    roughnessMap,
    dispose: () => { calls.originalMaterial++; }
  };
  const activeGeometry = { dispose: () => { calls.activeGeometry++; } };
  const originalGeometry = { dispose: () => { calls.originalGeometry++; } };
  const model = {
    traverse: callback => callback({ geometry: activeGeometry, material: activeMaterial })
  };

  disposeModelResources(model, {
    materials: [originalMaterial],
    geometries: [originalGeometry],
    excludedMaterials: [activeMaterial]
  });

  assert.deepEqual(calls, {
    activeMaterial: 0,
    originalMaterial: 1,
    activeGeometry: 1,
    originalGeometry: 1,
    normal: 1,
    roughness: 1,
    bitmap: 1
  });
});
