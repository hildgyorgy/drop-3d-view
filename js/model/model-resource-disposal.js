function addMaterial(materials, material) {
  if (Array.isArray(material)) {
    material.forEach(item => addMaterial(materials, item));
  } else if (material) {
    materials.add(material);
  }
}

// Dispose an object hierarchy plus resources that are no longer attached to
// it (for example original materials while WIRE is active). Sets prevent
// shared geometries, materials, textures and ImageBitmaps from being released
// repeatedly.
export function disposeModelResources(
  model,
  { materials: additionalMaterials = [], geometries: additionalGeometries = [],
    excludedMaterials = [], excludeMaterial = () => false } = {}
) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  const excluded = new Set(excludedMaterials);
  const isExcluded = material => excluded.has(material) || excludeMaterial(material);

  model?.traverse(object => {
    if (object.geometry) geometries.add(object.geometry);
    addMaterial(materials, object.material);
  });
  additionalGeometries.forEach(geometry => {
    if (geometry) geometries.add(geometry);
  });
  additionalMaterials.forEach(material => addMaterial(materials, material));

  for (const material of materials) {
    if (isExcluded(material)) continue;
    for (const value of Object.values(material)) {
      if (value?.isTexture) textures.add(value);
    }
  }

  const images = new Set();
  for (const texture of textures) {
    const image = texture.image;
    if (image && typeof image.close === "function") images.add(image);
  }

  textures.forEach(texture => texture.dispose());
  materials.forEach(material => {
    if (!isExcluded(material)) material.dispose();
  });
  geometries.forEach(geometry => geometry.dispose());
  images.forEach(image => image.close());
}

export function disposeDetachedModel(model) {
  disposeModelResources(model);
}
