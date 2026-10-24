// The installed WebGL path tracer samples only geometry.uv. For materials whose
// uploaded maps use glTF TEXCOORD_1, give its scene snapshot a temporary UV0
// alias. The regular viewer and source geometry keep both original UV sets.
const MAP_KEYS = [
  "map", "normalMap", "roughnessMap", "metalnessMap", "alphaMap",
  "emissiveMap", "transmissionMap", "clearcoatMap", "clearcoatNormalMap",
  "clearcoatRoughnessMap"
];

export function usesSecondUv(material) {
  const materials = Array.isArray(material) ? material : [material];
  return materials.some(item => MAP_KEYS.some(key => item?.[key]?.channel === 1));
}

export function photoMeterGeometry(geometry, material, cache) {
  if (!geometry || !usesSecondUv(material)) return geometry;
  const secondUv = geometry.getAttribute("uv1");
  if (!secondUv) return geometry;
  let projected = cache.get(geometry);
  if (!projected) {
    projected = geometry.clone();
    projected.setAttribute("uv", secondUv);
    // Source tangents may have been computed for UV0. The scene generator
    // derives fresh tangents from this UV set for normal mapping.
    projected.deleteAttribute("tangent");
    cache.set(geometry, projected);
  }
  return projected;
}
