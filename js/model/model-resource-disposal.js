function addMaterial(materials, material) {
  if (Array.isArray(material)) {
    material.forEach(item => addMaterial(materials, item));
  } else if (material) {
    materials.add(material);
  }
}

export function disposeTextureResources(textureValues) {
  const textures = new Set([...textureValues].filter(value => value?.isTexture));
  const images = new Set();
  for (const texture of textures) {
    const image = texture.image;
    if (image && typeof image.close === "function") images.add(image);
  }
  textures.forEach(texture => texture.dispose());
  images.forEach(image => image.close());
}

// Workbench previews own only the resources they create. Dispose that explicit
// set without walking cloned materials, which may still reference source-model
// textures owned by the GLTFLoader result.
export function disposeOwnedResources({ textures = [], materials = [], geometries = [] } = {}) {
  disposeTextureResources(textures);
  const uniqueMaterials = new Set();
  materials.forEach(material => addMaterial(uniqueMaterials, material));
  uniqueMaterials.forEach(material => material.dispose());
  new Set(geometries).forEach(geometry => geometry?.dispose());
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

  disposeTextureResources(textures);
  materials.forEach(material => {
    if (!isExcluded(material)) material.dispose();
  });
  geometries.forEach(geometry => geometry.dispose());
}

export function disposeDetachedModel(model) {
  disposeModelResources(model);
}
