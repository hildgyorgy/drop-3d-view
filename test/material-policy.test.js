import test from "node:test";
import assert from "node:assert/strict";

import {
  hasAuthoredPhysicalTransmission,
  isPhotoGlassFallbackCandidate,
  prepareWhitePhysicalGlassVariant,
  preserveAuthoredPhysicalTransmission,
  transmissionFromTransparencyControl
} from "../js/model/material-policy.js";

test("PHOTO preserves authored KHR physical glass instead of fallback conversion", () => {
  const material = {
    isMeshPhysicalMaterial: true,
    name: "üveg - átlátszó",
    transmission: 0.98,
    roughness: 0.03,
    ior: 1.5,
    thickness: 0,
    side: 2,
    opacity: 0.69,
    transparent: true,
    depthWrite: false,
    needsUpdate: false,
    userData: { archicad: { clearGlassOverride: true } }
  };
  const authored = { ...material };

  assert.equal(hasAuthoredPhysicalTransmission(material), true);
  assert.equal(isPhotoGlassFallbackCandidate(material), false);
  assert.equal(preserveAuthoredPhysicalTransmission(material), true);
  assert.equal(material.transmission, authored.transmission);
  assert.equal(material.roughness, authored.roughness);
  assert.equal(material.ior, authored.ior);
  assert.equal(material.thickness, authored.thickness);
  assert.equal(material.side, authored.side);
  assert.equal(material.opacity, 1);
  assert.equal(material.transparent, false);
  assert.equal(material.depthWrite, true);
  assert.equal(material.needsUpdate, true);
});

test("physical glass only changes transmission after an explicit slider input", () => {
  assert.equal(transmissionFromTransparencyControl(30), 0.86);
  assert.equal(transmissionFromTransparencyControl(85), 0.98);
  assert.ok(
    Math.abs(transmissionFromTransparencyControl(68) - 0.9429090909090909) < 1e-12
  );
});

test("WHITE/HIDDEN make only the physical glass clone alpha-transparent", () => {
  const original = {
    isMeshPhysicalMaterial: true,
    transmission: 0.98,
    roughness: 0.03,
    ior: 1.5,
    opacity: 1,
    transparent: false,
    depthWrite: true
  };
  const variant = { ...original };

  assert.equal(prepareWhitePhysicalGlassVariant(original, variant), true);
  assert.equal(variant.transmission, 0);
  assert.equal(variant.transparent, true);
  assert.ok(variant.opacity < 1);
  assert.equal(variant.depthWrite, false);
  assert.equal(original.transmission, 0.98);
  assert.equal(original.opacity, 1);
  assert.equal(original.transparent, false);
});

test("PHOTO fallback still accepts legacy alpha glass", () => {
  const material = {
    isMeshPhysicalMaterial: false,
    name: "Legacy Window Glass",
    opacity: 0.55,
    transparent: true,
    map: null,
    alphaMap: null,
    alphaTest: 0
  };

  assert.equal(hasAuthoredPhysicalTransmission(material), false);
  assert.equal(isPhotoGlassFallbackCandidate(material), true);
});

test("PHOTO fallback excludes alpha-cutout foliage", () => {
  const material = {
    isMeshPhysicalMaterial: false,
    name: "Leaves",
    opacity: 1,
    transparent: true,
    map: {},
    alphaMap: {},
    alphaTest: 0.5
  };

  assert.equal(isPhotoGlassFallbackCandidate(material), false);
});
