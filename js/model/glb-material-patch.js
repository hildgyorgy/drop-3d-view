// Edit only glTF material/image records. Geometry, metadata and binary payload
// from the source GLB are copied byte-for-byte into the downloaded copy.
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

function textureInfo(json, binaryParts, imageRecord, transform, cache) {
  if (!imageRecord) return null;
  if (cache.has(imageRecord)) return cache.get(imageRecord);
  const { bytes, mimeType } = imageRecord;
  const byteOffset = binaryParts.reduce((length, part) => length + part.length, 0);
  const bufferView = json.bufferViews.length;
  json.bufferViews.push({ buffer: 0, byteOffset, byteLength: bytes.length });
  binaryParts.push(bytes, new Uint8Array(pad4(bytes.length) - bytes.length));
  const image = json.images.length;
  json.images.push({ bufferView, mimeType });
  const texture = json.textures.length;
  json.textures.push({ source: image, sampler: ensureRepeatSampler(json) });
  const info = { index: texture };
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
  cache.set(imageRecord, info);
  return info;
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
  for (const edit of edits) {
    const material = json.materials?.[edit.materialIndex];
    if (!material) throw new Error(`Material ${edit.materialIndex} is missing.`);
    const pbr = material.pbrMetallicRoughness ??= {};
    pbr.roughnessFactor = edit.roughness;
    pbr.metallicFactor = edit.metalness;
    for (const [field, target] of [
      ["color", "baseColorTexture"],
      ["roughness", "metallicRoughnessTexture"],
      ["normal", "normalTexture"]
    ]) {
      const image = edit.images[field];
      if (!image) continue;
      const info = textureInfo(json, binaryParts, image, edit.transform, textureCache);
      if (target === "normalTexture") material.normalTexture = info;
      else pbr[target] = info;
      if (target === "baseColorTexture")
        pbr.baseColorFactor = [1, 1, 1, pbr.baseColorFactor?.[3] ?? 1];
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
