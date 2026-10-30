import { detectSupportedImageMime } from "../model/image-format.js";

const slots = material => ({
  color: material.pbrMetallicRoughness?.baseColorTexture,
  arm: material.pbrMetallicRoughness?.metallicRoughnessTexture,
  normal: material.normalTexture,
  occlusion: material.occlusionTexture,
  emissive: material.emissiveTexture
});

// Extract original encoded bytes through GLTFLoader, without downloading the
// model again or changing textures owned by the main scene.
export async function readSourceMaterialMaps(parser, materialIndex) {
  const material = parser.json.materials?.[materialIndex];
  if (!material) throw new Error("Original material is unavailable.");
  const images = {};
  const settings = {
    metalness: material.pbrMetallicRoughness?.metallicFactor ?? 1,
    normalScale: material.normalTexture?.scale ?? 1,
    occlusionStrength: material.occlusionTexture?.strength ?? 1,
    emissive: material.emissiveFactor ?? [0, 0, 0]
  };
  await Promise.all(Object.entries(slots(material)).map(async ([kind, info]) => {
    if (!info) return;
    const texture = parser.json.textures?.[info.index];
    const imageIndex = texture?.extensions?.EXT_texture_webp?.source ?? texture?.source;
    const image = parser.json.images?.[imageIndex];
    if (!image) throw new Error(`The ${kind} map is unavailable.`);
    let bytes;
    if (Number.isInteger(image.bufferView)) {
      bytes = new Uint8Array(await parser.getDependency("bufferView", image.bufferView));
    } else if (image.uri?.startsWith("data:")) {
      const comma = image.uri.indexOf(",");
      const encoded = image.uri.slice(comma + 1);
      const decoded = image.uri.slice(0, comma).endsWith(";base64")
        ? atob(encoded) : decodeURIComponent(encoded);
      bytes = Uint8Array.from(decoded, character => character.charCodeAt(0));
    }
    let mimeType = bytes && detectSupportedImageMime(bytes);
    if (!mimeType) {
      // Decoded formats (e.g. WebP) can still enter the JPEG/PNG editing pipeline.
      const loaded = await parser.getDependency("texture", info.index);
      const bitmap = loaded?.image;
      if (!bitmap?.width || !bitmap?.height) throw new Error(`Cannot decode the ${kind} map.`);
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Texture canvas is unavailable.");
      context.drawImage(bitmap, 0, 0);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
      if (!blob) throw new Error(`Cannot read the ${kind} map.`);
      bytes = new Uint8Array(await blob.arrayBuffer());
      mimeType = "image/png";
    }
    const extension = mimeType === "image/png" ? "png" : "jpg";
    const name = image.name || (!image.uri?.startsWith("data:")
      ? image.uri?.split("/").pop()?.split("?")[0] : null);
    const fileName = (name || `${material.name || "material"}_${kind}.${extension}`)
      .replace(/[\\/\x00-\x1f]/g, "_").slice(-255);
    images[kind] = new File([bytes], fileName === "." || fileName === ".."
      ? `material_${kind}.${extension}` : fileName, { type: mimeType });
    const transform = info.extensions?.KHR_texture_transform;
    const sampler = parser.json.samplers?.[texture.sampler];
    settings[kind === "arm" ? "roughness" : kind] = {
      texCoord: transform?.texCoord ?? info.texCoord ?? 0,
      scaleX: transform?.scale?.[0] ?? 1,
      scaleY: transform?.scale?.[1] ?? 1,
      rotation: transform?.rotation ?? 0,
      offsetX: transform?.offset?.[0] ?? 0,
      offsetY: transform?.offset?.[1] ?? 0,
      wrapS: sampler?.wrapS ?? 10497,
      wrapT: sampler?.wrapT ?? 10497,
      ...(sampler?.minFilter !== undefined ? { minFilter: sampler.minFilter } : {}),
      ...(sampler?.magFilter !== undefined ? { magFilter: sampler.magFilter } : {})
    };
  }));
  return { images, settings: Object.keys(images).length ? settings : null };
}

export function sourceMapSettings(settings, kind, inputs) {
  const original = settings?.[kind] || {};
  const scale = 2 / Number(inputs.workbenchTileMetres || 2);
  return {
    texCoord: original.texCoord ?? 0,
    scaleX: (original.scaleX ?? 1) * scale,
    scaleY: (original.scaleY ?? 1) * scale,
    rotation: (original.rotation ?? 0) + Number(inputs.workbenchRotation || 0) * Math.PI / 180,
    offsetX: (original.offsetX ?? 0) + Number(inputs.workbenchOffsetX || 0),
    offsetY: (original.offsetY ?? 0) + Number(inputs.workbenchOffsetY || 0),
    wrapS: original.wrapS ?? 10497,
    wrapT: original.wrapT ?? 10497,
    ...(original.minFilter !== undefined ? { minFilter: original.minFilter } : {}),
    ...(original.magFilter !== undefined ? { magFilter: original.magFilter } : {})
  };
}
