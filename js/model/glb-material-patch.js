// Patch material/image records and optionally append meter-projected TEXCOORD_1.
// The source geometry and its original TEXCOORD_0 bytes remain untouched.
import { detectSupportedImageMime } from "./image-format.js";
import { deduplicateMeterUvs } from "./meter-uv.js";
import { CLEAR_GLASS, glassProfileExtras } from "./clear-glass-profile.js";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const JSON_CHUNK = 0x4e4f534a;
const BIN_CHUNK = 0x004e4942;
const pad4 = length => (length + 3) & ~3;
const SAFE_RESOURCE_EXTENSIONS = new Set([
  "KHR_animation_pointer",
  "KHR_draco_mesh_compression",
  "KHR_lights_punctual",
  "KHR_mesh_quantization",
  "KHR_node_hoverability",
  "KHR_node_selectability",
  "KHR_node_visibility",
  "KHR_texture_basisu",
  "KHR_texture_transform",
  "KHR_xmp_json_ld",
  "EXT_instance_features",
  "EXT_mesh_features",
  "EXT_mesh_gpu_instancing",
  "EXT_meshopt_compression",
  "EXT_texture_avif",
  "EXT_texture_filter_anisotropic",
  "EXT_texture_webp",
  "CESIUM_primitive_outline"
]);

function hasOnlyUnderstoodResourceExtensions(json) {
  return (json.extensionsUsed || []).every(name =>
    name.startsWith("KHR_materials_") || SAFE_RESOURCE_EXTENSIONS.has(name)
  );
}

function walkJson(value, visit) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach(item => walkJson(item, visit));
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    visit(value, key, child);
    walkJson(child, visit);
  }
}

function compactRecords(records, used, label) {
  const remap = new Map();
  const compacted = [];
  records.forEach((record, index) => {
    if (!used.has(index)) return;
    remap.set(index, compacted.length);
    compacted.push(record);
  });
  for (const index of used) if (!remap.has(index))
    throw new Error(`GLB ${label} ${index} is missing.`);
  return { records: compacted, remap };
}

function remapIndex(remap, index, label) {
  const mapped = remap.get(index);
  if (mapped === undefined) throw new Error(`GLB ${label} ${index} is missing.`);
  return mapped;
}

function textureInfoReferences(json) {
  const references = [];
  walkJson(json, (parent, key, value) => {
    if (/texture$/i.test(key) && value && typeof value === "object" &&
        Number.isInteger(value.index)) references.push(value);
  });
  return references;
}

function textureImageReferences(texture) {
  const references = [];
  if (Number.isInteger(texture?.source))
    references.push({ parent: texture, key: "source", index: texture.source });
  for (const extension of Object.values(texture?.extensions || {}))
    if (Number.isInteger(extension?.source))
      references.push({ parent: extension, key: "source", index: extension.source });
  return references;
}

function binaryRange(parts, byteOffset, byteLength) {
  const result = [];
  let position = 0;
  let remaining = byteLength;
  let offset = byteOffset;
  for (const part of parts) {
    const end = position + part.length;
    if (remaining > 0 && offset < end) {
      const startInPart = Math.max(0, offset - position);
      const count = Math.min(remaining, part.length - startInPart);
      result.push(part.subarray(startInPart, startInPart + count));
      remaining -= count;
      offset += count;
    }
    position = end;
  }
  if (remaining !== 0) throw new Error("GLB bufferView exceeds the binary buffer.");
  return result;
}

function compactImageBufferViews(json, binaryParts, candidates) {
  if (!candidates.size || json.buffers?.length !== 1 ||
      json.bufferViews?.some(view => (view.buffer ?? 0) !== 0) ||
      json.extensionsUsed?.includes("EXT_meshopt_compression"))
    return binaryParts;

  const referenced = new Set();
  walkJson(json, (_parent, key, value) => {
    if (key === "bufferView" && Number.isInteger(value)) referenced.add(value);
  });
  const removable = new Set([...candidates].filter(index => !referenced.has(index)));
  if (!removable.size) return binaryParts;

  const kept = new Set(json.bufferViews.map((_view, index) => index)
    .filter(index => !removable.has(index)));
  const { records, remap } = compactRecords(json.bufferViews, kept, "bufferView");
  const compactedParts = [];
  let binaryLength = 0;
  for (const view of records) {
    const padding = pad4(binaryLength) - binaryLength;
    if (padding) {
      compactedParts.push(new Uint8Array(padding));
      binaryLength += padding;
    }
    const oldOffset = view.byteOffset ?? 0;
    view.byteOffset = binaryLength;
    const slices = binaryRange(binaryParts, oldOffset, view.byteLength);
    compactedParts.push(...slices);
    binaryLength += view.byteLength;
  }
  const finalPadding = pad4(binaryLength) - binaryLength;
  if (finalPadding) compactedParts.push(new Uint8Array(finalPadding));
  json.bufferViews = records;
  walkJson(json, (parent, key, value) => {
    if (key === "bufferView" && Number.isInteger(value))
      parent[key] = remapIndex(remap, value, "bufferView");
  });
  return compactedParts;
}

export function pruneGlbResources(json, binaryParts) {
  // Unknown extensions may hide texture or bufferView indices under custom
  // property names. Keep everything rather than risk corrupting such a model.
  if (!hasOnlyUnderstoodResourceExtensions(json)) return binaryParts;

  const textureReferences = textureInfoReferences(json);
  const usedTextures = new Set(textureReferences.map(info => info.index));
  const textureResult = compactRecords(json.textures || [], usedTextures, "texture");
  json.textures = textureResult.records;
  textureReferences.forEach(info => {
    info.index = remapIndex(textureResult.remap, info.index, "texture");
  });

  const imageReferences = json.textures.flatMap(textureImageReferences);
  const usedImages = new Set(imageReferences.map(reference => reference.index));
  const removedImageViews = new Set((json.images || [])
    .filter((_image, index) => !usedImages.has(index))
    .map(image => image.bufferView).filter(Number.isInteger));
  const imageResult = compactRecords(json.images || [], usedImages, "image");
  json.images = imageResult.records;
  imageReferences.forEach(reference => {
    reference.parent[reference.key] = remapIndex(imageResult.remap, reference.index, "image");
  });

  const usedSamplers = new Set(json.textures.map(texture => texture.sampler)
    .filter(Number.isInteger));
  const samplerResult = compactRecords(json.samplers || [], usedSamplers, "sampler");
  json.samplers = samplerResult.records;
  json.textures.forEach(texture => {
    if (Number.isInteger(texture.sampler))
      texture.sampler = remapIndex(samplerResult.remap, texture.sampler, "sampler");
  });

  return compactImageBufferViews(json, binaryParts, removedImageViews);
}

export function readGlb(buffer) {
  const view = new DataView(buffer);
  if (view.getUint32(0, true) !== 0x46546c67 || view.getUint32(4, true) !== 2)
    throw new Error("Only GLB 2.0 files can be edited.");
  if (view.getUint32(8, true) !== buffer.byteLength)
    throw new Error("The GLB length is invalid.");
  let json = null;
  let binary = new Uint8Array();
  let offset = 12;
  while (offset < buffer.byteLength) {
    const length = view.getUint32(offset, true);
    const type = view.getUint32(offset + 4, true);
    const bytes = new Uint8Array(buffer, offset + 8, length);
    if (type === JSON_CHUNK) json = JSON.parse(decoder.decode(bytes));
    if (type === BIN_CHUNK) binary = bytes;
    offset += 8 + length;
  }
  if (!json || !json.buffers?.length) throw new Error("The GLB has no JSON or binary buffer.");
  return { json, binary };
}

function textureInfo(json, binaryParts, imageRecord, transform, texCoord, cache) {
  if (!imageRecord) return null;
  let cached = cache.get(imageRecord);
  if (!cached) {
    const { bytes, mimeType } = imageRecord;
    if (detectSupportedImageMime(bytes) !== mimeType)
      throw new Error("Texture image bytes and JPEG/PNG MIME type do not match.");
    const byteOffset = binaryParts.reduce((length, part) => length + part.length, 0);
    const bufferView = json.bufferViews.length;
    json.bufferViews.push({ buffer: 0, byteOffset, byteLength: bytes.length });
    binaryParts.push(bytes, new Uint8Array(pad4(bytes.length) - bytes.length));
    const image = json.images.length;
    json.images.push({ bufferView, mimeType });
    cached = { image, textures: new Map() };
    cache.set(imageRecord, cached);
  }
  const sampler = ensureRepeatSampler(json, transform);
  let texture = cached.textures.get(sampler);
  if (texture === undefined) {
    texture = json.textures.length;
    json.textures.push({ source: cached.image, sampler });
    cached.textures.set(sampler, texture);
  }
  const info = { index: texture };
  if (texCoord) info.texCoord = texCoord;
  const scaleX = transform?.scaleX ?? transform?.scale ?? 1;
  const scaleY = transform?.scaleY ?? transform?.scale ?? 1;
  if (transform && (scaleX !== 1 || scaleY !== 1 || transform.rotation || transform.offsetX || transform.offsetY)) {
    info.extensions = {
      KHR_texture_transform: {
        scale: [scaleX, scaleY],
        rotation: transform.rotation || 0,
        offset: [transform.offsetX || 0, transform.offsetY || 0]
      }
    };
    json.extensionsUsed ??= [];
    if (!json.extensionsUsed.includes("KHR_texture_transform"))
      json.extensionsUsed.push("KHR_texture_transform");
  }
  return info;
}

function appendMeterUvs(json, binaryParts, records) {
  for (const { meshIndex, primitiveIndex, coordinates } of records) {
    const primitive = json.meshes?.[meshIndex]?.primitives?.[primitiveIndex];
    const count = json.accessors?.[primitive?.attributes?.POSITION]?.count;
    if (!primitive || primitive.mode !== undefined && primitive.mode !== 4 ||
        primitive.attributes.TEXCOORD_1 !== undefined ||
        !(coordinates instanceof Float32Array) || coordinates.length !== count * 2 ||
        coordinates.some(value => !Number.isFinite(value)))
      throw new Error("Meter UVs do not match a triangle mesh primitive.");
    const byteOffset = binaryParts.reduce((length, part) => length + part.length, 0);
    if (byteOffset % 4 !== 0) throw new Error("GLB buffer is not aligned for meter UVs.");
    const bytes = new Uint8Array(coordinates.buffer, coordinates.byteOffset, coordinates.byteLength);
    const bufferView = json.bufferViews.length;
    json.bufferViews.push({ buffer: 0, byteOffset, byteLength: bytes.length, target: 34962 });
    binaryParts.push(bytes);
    const accessor = json.accessors.length;
    json.accessors.push({ bufferView, componentType: 5126, count, type: "VEC2" });
    primitive.attributes.TEXCOORD_1 = accessor;
  }
}

function ensureRepeatSampler(json, transform) {
  const wrapS = transform?.wrapS ?? 10497;
  const wrapT = transform?.wrapT ?? 10497;
  json.samplers ??= [];
  const sampler = { wrapS, wrapT,
    ...(transform?.minFilter !== undefined ? { minFilter: transform.minFilter } : {}),
    ...(transform?.magFilter !== undefined ? { magFilter: transform.magFilter } : {})
  };
  const index = json.samplers.findIndex(s => s.wrapS === wrapS && s.wrapT === wrapT &&
    s.minFilter === sampler.minFilter && s.magFilter === sampler.magFilter);
  if (index >= 0) return index;
  return json.samplers.push(sampler) - 1;
}

export function patchGlbMaterials(source, edits) {
  const { json, binary } = readGlb(source);
  json.bufferViews ??= [];
  json.images ??= [];
  json.textures ??= [];
  // The source BIN chunk is read-only and is copied once into the final GLB.
  // Keeping its view avoids a second full-size buffer during large-file saves.
  const binaryParts = [binary];
  const textureCache = new WeakMap();
  const meterMaterials = new Set();
  appendMeterUvs(json, binaryParts, deduplicateMeterUvs(
    edits.flatMap(edit => edit.meterUvs || [])
  ));
  for (const edit of edits) {
    const material = json.materials?.[edit.materialIndex];
    if (!material) throw new Error(`Material ${edit.materialIndex} is missing.`);
    if (edit.texCoord === 1 && Object.values(edit.images || {}).some(Boolean))
      meterMaterials.add(edit.materialIndex);
    if (edit.glassTransmission !== undefined) {
      if (!Number.isFinite(edit.glassTransmission) || edit.glassTransmission < 0 || edit.glassTransmission > 1)
        throw new Error("Glass transparency must be between 0 and 1.");
      json.materials[edit.materialIndex] = {
        ...(material.name !== undefined ? { name: material.name } : {}),
        extras: glassProfileExtras(material.extras),
        pbrMetallicRoughness: {
          baseColorFactor: [...(edit.color ?? [1, 1, 1]), 1],
          roughnessFactor: edit.roughness ?? CLEAR_GLASS.roughness,
          metallicFactor: 0
        },
        doubleSided: true,
        extensions: {
          KHR_materials_transmission: { transmissionFactor: edit.glassTransmission },
          KHR_materials_ior: { ior: CLEAR_GLASS.ior }
        }
      };
      json.extensionsUsed ??= [];
      for (const name of ["KHR_materials_transmission", "KHR_materials_ior"])
        if (!json.extensionsUsed.includes(name)) json.extensionsUsed.push(name);
      continue;
    }
    // A surface edit must also work on imported physical glass. Remove its
    // transmission/volume optics and calibration marker before applying maps.
    const wasGlass = Number(material.extensions?.KHR_materials_transmission?.transmissionFactor) > 0;
    // Workbench creates lit PBR materials, including when the source was unlit.
    if (material.extensions) delete material.extensions.KHR_materials_unlit;
    for (const name of ["KHR_materials_transmission", "KHR_materials_volume", "KHR_materials_ior", "KHR_materials_dispersion"])
      if (material.extensions) delete material.extensions[name];
    if (material.extras) material.extras = glassProfileExtras(material.extras, false);
    if (wasGlass) {
      material.alphaMode = "OPAQUE";
      delete material.alphaCutoff;
    }
    const pbr = material.pbrMetallicRoughness ??= {};
    pbr.roughnessFactor = edit.roughness;
    pbr.metallicFactor = edit.metalness;
    // The new package replaces the source surface maps as a set. Otherwise
    // leftover UV0 roughness/normal maps would conflict with meter UV1 maps.
    // With a base map, this color factor tints it; white is neutral.
    delete pbr.baseColorTexture;
    delete pbr.metallicRoughnessTexture;
    delete material.normalTexture;
    delete material.occlusionTexture;
    delete material.emissiveTexture;
    pbr.baseColorFactor = [...(edit.color ?? [1, 1, 1]), wasGlass ? 1 : pbr.baseColorFactor?.[3] ?? 1];
    for (const [field, target] of [
      ["color", "baseColorTexture"],
      ["roughness", "metallicRoughnessTexture"],
      ["normal", "normalTexture"],
      ["occlusion", "occlusionTexture"],
      ["emissive", "emissiveTexture"]
    ]) {
      const image = edit.images[field];
      if (!image || edit.ignoreMaps) continue;
      const settings = edit.mapSettings?.[field];
      const info = textureInfo(json, binaryParts, image, settings || edit.transform, settings?.texCoord ?? edit.texCoord ?? 0, textureCache);
      if (target === "normalTexture" || target === "occlusionTexture" || target === "emissiveTexture") {
        if (field === "normal" && edit.normalScale !== undefined) info.scale = edit.normalScale;
        if (field === "occlusion" && edit.occlusionStrength !== undefined) info.strength = edit.occlusionStrength;
        material[target] = info;
      }
      else pbr[target] = info;
    }
    if (edit.clearcoat > 0) {
      material.extensions ??= {};
      material.extensions.KHR_materials_clearcoat = {
        clearcoatFactor: edit.clearcoat,
        clearcoatRoughnessFactor: edit.clearcoatRoughness
      };
      json.extensionsUsed ??= [];
      if (!json.extensionsUsed.includes("KHR_materials_clearcoat"))
        json.extensionsUsed.push("KHR_materials_clearcoat");
    } else if (material.extensions) {
      delete material.extensions.KHR_materials_clearcoat;
    }
  }
  for (const mesh of json.meshes || []) for (const primitive of mesh.primitives || []) {
    const materials = [primitive.material, ...(primitive.extensions?.KHR_materials_variants?.mappings || [])
      .map(mapping => mapping.material)];
    if (materials.some(index => meterMaterials.has(index)) && primitive.attributes?.TEXCOORD_1 === undefined)
      throw new Error("A material using meter UVs has a mesh part without TEXCOORD_1.");
  }
  const outputParts = pruneGlbResources(json, binaryParts);
  const binaryLength = outputParts.reduce((length, part) => length + part.length, 0);
  json.buffers[0].byteLength = binaryLength;
  const jsonBytes = encoder.encode(JSON.stringify(json));
  const jsonLength = pad4(jsonBytes.length);
  const total = 12 + 8 + jsonLength + 8 + binaryLength;
  const output = new ArrayBuffer(total);
  const view = new DataView(output);
  view.setUint32(0, 0x46546c67, true);
  view.setUint32(4, 2, true);
  view.setUint32(8, total, true);
  view.setUint32(12, jsonLength, true);
  view.setUint32(16, JSON_CHUNK, true);
  const jsonOut = new Uint8Array(output, 20, jsonLength);
  jsonOut.fill(0x20);
  jsonOut.set(jsonBytes);
  const binHeader = 20 + jsonLength;
  view.setUint32(binHeader, binaryLength, true);
  view.setUint32(binHeader + 4, BIN_CHUNK, true);
  const binOut = new Uint8Array(output, binHeader + 8, binaryLength);
  let position = 0;
  for (const part of outputParts) {
    binOut.set(part, position);
    position += part.length;
  }
  return output;
}
