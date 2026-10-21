/* Apply an authored glTF material variant before the viewer snapshots materials. */

export async function applyMaterialVariant(gltf, variantName) {
  const parser = gltf?.parser;
  const json = parser?.json;
  const variants = json?.extensions?.KHR_materials_variants?.variants;
  const variantIndex = variants?.findIndex(variant => variant.name === variantName) ?? -1;
  if (variantIndex < 0) return 0;

  const matches = [];
  gltf.scene.traverse(object => {
    if (!object.isMesh) return;

    const association = parser.associations.get(object);
    const primitive =
      json.meshes?.[association?.meshes]?.primitives?.[association?.primitives];
    const mappings = primitive?.extensions?.KHR_materials_variants?.mappings;
    const mapping = mappings?.find(item => item.variants?.includes(variantIndex));
    if (Number.isInteger(mapping?.material)) {
      matches.push({ object, materialIndex: mapping.material });
    }
  });

  let applied = 0;
  await Promise.all(
    matches.map(async ({ object, materialIndex }) => {
      const defaultMaterial = object.material;
      try {
        object.material = await parser.getDependency("material", materialIndex);
        // GLTFLoader adjusts materials for per-primitive geometry properties
        // (for example tangent-space normals and vertex colours).
        parser.assignFinalMaterial(object);
        applied++;
      } catch (error) {
        object.material = defaultMaterial;
        console.warn(
          `Could not apply ${variantName} material ${materialIndex}; keeping the GLB default.`,
          error
        );
      }
    })
  );

  return applied;
}
