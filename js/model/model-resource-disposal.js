import { forEachMesh } from "../core/model-utils.js";

// Dispose a loaded model that never became the active scene. Sets prevent
// shared geometries, materials and textures from being disposed repeatedly.
export function disposeDetachedModel(model) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();

  forEachMesh(model, object => {
    if (object.geometry) geometries.add(object.geometry);
    const objectMaterials = Array.isArray(object.material)
      ? object.material
      : [object.material];
    for (const material of objectMaterials) {
      if (!material || materials.has(material)) continue;
      materials.add(material);
      for (const value of Object.values(material)) {
        if (value?.isTexture) textures.add(value);
      }
    }
  });

  textures.forEach(texture => texture.dispose());
  materials.forEach(material => material.dispose());
  geometries.forEach(geometry => geometry.dispose());
}
