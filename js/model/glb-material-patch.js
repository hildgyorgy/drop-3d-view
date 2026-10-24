// Patch material/image records and optionally append meter-projected TEXCOORD_1.
// The source geometry and its original TEXCOORD_0 bytes remain untouched.
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const JSON_CHUNK = 0x4e4f534a;
const BIN_CHUNK = 0x004e4942;
const pad4 = length => (length + 3) & ~3;

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
  let texture = cache.get(imageRecord);
  if (texture === undefined) {
    const { bytes, mimeType } = imageRecord;
    const byteOffset = binaryParts.reduce((length, part) => length + part.length, 0);
    const bufferView = json.bufferViews.length;
    json.bufferViews.push({ buffer: 0, byteOffset, byteLength: bytes.length });
    binaryParts.push(bytes, new Uint8Array(pad4(bytes.length) - bytes.length));
    const image = json.images.length;
    json.images.push({ bufferView, mimeType });
    texture = json.textures.length;
    json.textures.push({ source: image, sampler: ensureRepeatSampler(json) });
    cache.set(imageRecord, texture);
  }
  const info = { index: texture };
  if (texCoord) info.texCoord = texCoord;
  if (transform && (transform.scale !== 1 || transform.rotation !== 0 || transform.offsetX || transform.offsetY)) {
    info.extensions = {
      KHR_texture_transform: {
        scale: [transform.scale, transform.scale],
        rotation: transform.rotation,
        offset: [transform.offsetX || 0, transform.offsetY || 0]
      }
    };
    json.extensionsUsed ??= [];
    if (!json.extensionsUsed.includes("KHR_texture_transform"))
      json.extensionsUsed.push("KHR_texture_transform");
  }
  return info;
}

function appendMeterUvs(json, binaryParts, records, seen) {
  for (const { meshIndex, primitiveIndex, coordinates } of records) {
    const primitive = json.meshes?.[meshIndex]?.primitives?.[primitiveIndex];
    const count = json.accessors?.[primitive?.attributes?.POSITION]?.count;
    if (!primitive || primitive.mode !== undefined && primitive.mode !== 4 ||
        primitive.attributes.TEXCOORD_1 !== undefined ||
        !(coordinates instanceof Float32Array) || coordinates.length !== count * 2 ||
        coordinates.some(value => !Number.isFinite(value)))
      throw new Error("Meter UVs do not match a triangle mesh primitive.");
    const key = `${meshIndex}:${primitiveIndex}`;
    if (seen.has(key)) {
      const previous = seen.get(key);
      if (previous.length !== coordinates.length || previous.some((value, i) => value !== coordinates[i]))
        throw new Error("One shared mesh has different meter UVs in separate instances.");
      continue;
    }
    seen.set(key, coordinates);
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

function ensureRepeatSampler(json) {
  json.samplers ??= [];
  const index = json.samplers.findIndex(s => s.wrapS === 10497 && s.wrapT === 10497);
  if (index >= 0) return index;
  return json.samplers.push({ wrapS: 10497, wrapT: 10497 }) - 1;
}

export function patchGlbMaterials(source, edits) {
  const { json, binary } = readGlb(source);
  json.bufferViews ??= [];
  json.images ??= [];
  json.textures ??= [];
  const binaryParts = [binary.slice()];
  const textureCache = new WeakMap();
  const uvPrimitives = new Map();
  const meterMaterials = new Set();
  for (const edit of edits) {
    const material = json.materials?.[edit.materialIndex];
    if (!material) throw new Error(`Material ${edit.materialIndex} is missing.`);
    if (edit.meterUvs?.length) appendMeterUvs(json, binaryParts, edit.meterUvs, uvPrimitives);
    if (edit.texCoord === 1 && Object.values(edit.images || {}).some(Boolean))
      meterMaterials.add(edit.materialIndex);
    if (edit.glassTransmission !== undefined) {
      const authoredTransmission = Number(material.extensions?.KHR_materials_transmission?.transmissionFactor);
      if (material.extras?.archicad?.clearGlassOverride !== true ||
          !Number.isFinite(authoredTransmission) || authoredTransmission <= 0)
        throw new Error(`Material ${edit.materialIndex} is not exporter-selected clear glass.`);
      if (!Number.isFinite(edit.glassTransmission) || edit.glassTransmission < 0 || edit.glassTransmission > 1)
        throw new Error("Glass transparency must be between 0 and 1.");
      const pbr = material.pbrMetallicRoughness ??= {};
      pbr.baseColorFactor = [...(edit.color ?? [1, 1, 1]), 1];
      pbr.roughnessFactor = edit.roughness;
      material.extensions.KHR_materials_transmission.transmissionFactor = edit.glassTransmission;
      continue;
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
    pbr.baseColorFactor = [...(edit.color ?? [1, 1, 1]), pbr.baseColorFactor?.[3] ?? 1];
    for (const [field, target] of [
      ["color", "baseColorTexture"],
      ["roughness", "metallicRoughnessTexture"],
      ["normal", "normalTexture"]
    ]) {
      const image = edit.images[field];
      if (!image || edit.ignoreMaps) continue;
      const info = textureInfo(json, binaryParts, image, edit.transform, edit.texCoord || 0, textureCache);
      if (target === "normalTexture") material.normalTexture = info;
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
  const binaryLength = binaryParts.reduce((length, part) => length + part.length, 0);
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
  for (const part of binaryParts) {
    binOut.set(part, position);
    position += part.length;
  }
  return output;
}
