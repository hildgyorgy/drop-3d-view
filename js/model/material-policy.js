export function hasAuthoredPhysicalTransmission(material) {
  const transmission = Number(material?.transmission);
  return Boolean(
    material?.isMeshPhysicalMaterial &&
      Number.isFinite(transmission) &&
      transmission > 0
  );
}

export function preserveAuthoredPhysicalTransmission(material) {
  if (!hasAuthoredPhysicalTransmission(material)) return false;

  // KHR_materials_transmission uses physical transmission rather than alpha
  // blending. Keep every authored optical value and only undo legacy viewer
  // flags that would make the same material render like conventional alpha
  // glass before PHOTO receives it.
  material.opacity = 1;
  material.transparent = false;
  material.depthWrite = true;
  material.needsUpdate = true;
  return true;
}

export function transmissionFromTransparencyControl(value, minimum = 30, maximum = 85) {
  const range = Math.max(1, maximum - minimum);
  const normalized = Math.min(1, Math.max(0, (Number(value) - minimum) / range));
  return 0.86 + (0.98 - 0.86) * normalized;
}

export function isPhotoGlassFallbackCandidate(material) {
  if (!material || hasAuthoredPhysicalTransmission(material)) return false;

  const namedAsGlass =
    /(?:glass|glazing|window|crystal|verre|vitre|üveg)/i.test(material.name || "");
  const opacity = Number(material.opacity);
  const transmission = Number(material.transmission);
  const translucent =
    (Number.isFinite(opacity) && opacity < 0.999) ||
    (Number.isFinite(transmission) && transmission > 0);
  const textureBackedTransparency =
    material.transparent && material.map && !namedAsGlass;

  return (
    (namedAsGlass || translucent) &&
    !material.alphaMap &&
    !(material.alphaTest > 0) &&
    !textureBackedTransparency
  );
}
