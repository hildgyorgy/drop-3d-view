/* Portable, versioned scene package. All lengths are checked before slicing. */
import { assertValidViewSession } from "./view-session.js";
import { assertRenderSize } from "./render-size.js";
import { assertRenderJob } from "./render-job.js";

const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8", { fatal: true });
const magic = encoder.encode("DVRENDER");
const maxManifestBytes = 4 * 1024 * 1024;
const maxPackageBytes = 2 * 1024 * 1024 * 1024;

function validName(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 255 &&
    !/[\\/\x00-\x1f]/.test(value) && value !== "." && value !== "..";
}

function bytesOf(value) {
  if (!(value instanceof ArrayBuffer)) throw new Error("Invalid snapshot resource");
  return new Uint8Array(value);
}

export function encodeRenderSnapshot({ fileName, fileBytes, viewSession,
  workbench = null, renderSize = null, renderJob = null }) {
  if (!validName(fileName) || !/\.glb$/i.test(fileName))
    throw new Error("Snapshot needs a named GLB file");
  assertValidViewSession(viewSession);
  if (renderSize !== null) assertRenderSize(renderSize);
  if (renderJob !== null) assertRenderJob(renderJob);
  const model = bytesOf(fileBytes);
  if (model.byteLength < 12 || decoder.decode(model.subarray(0, 4)) !== "glTF")
    throw new Error("Snapshot model is not a GLB");
  const resources = [model];
  let savedWorkbench = null;
  if (workbench) {
    if (workbench.version !== 1 || !Array.isArray(workbench.edits))
      throw new Error("Unsupported material edits");
    savedWorkbench = {
      version: 1,
      selectedIndex: workbench.selectedIndex,
      edits: workbench.edits.map(edit => ({
        index: edit.index,
        inputs: edit.inputs,
        images: edit.images.map(image => {
          if (!validName(image.name) || typeof image.kind !== "string")
            throw new Error("Invalid material image");
          const bytes = bytesOf(image.bytes);
          const resource = resources.push(bytes) - 1;
          return { kind: image.kind, name: image.name, type: image.type, resource };
        })
      }))
    };
  }
  const manifest = encoder.encode(JSON.stringify({
    version: 1, fileName, viewSession, workbench: savedWorkbench,
    renderSize, renderJob,
    lengths: resources.map(resource => resource.byteLength)
  }));
  if (manifest.byteLength > maxManifestBytes) throw new Error("Snapshot metadata is too large");
  const total = 12 + manifest.byteLength + resources.reduce((sum, resource) => sum + resource.byteLength, 0);
  if (total > maxPackageBytes) throw new Error("Snapshot exceeds the 2 GB limit");
  const output = new Uint8Array(total);
  output.set(magic);
  new DataView(output.buffer).setUint32(8, manifest.byteLength, true);
  output.set(manifest, 12);
  let offset = 12 + manifest.byteLength;
  for (const resource of resources) {
    output.set(resource, offset);
    offset += resource.byteLength;
  }
  return new Blob([output], { type: "application/octet-stream" });
}

export async function decodeRenderSnapshot(file) {
  if (file.size > maxPackageBytes || file.size < 24)
    throw new Error("Invalid render snapshot size");
  const buffer = await file.arrayBuffer();
  const data = new Uint8Array(buffer);
  if (!magic.every((value, index) => data[index] === value))
    throw new Error("Not a Drop & View render snapshot");
  const manifestLength = new DataView(buffer).getUint32(8, true);
  if (!manifestLength || manifestLength > maxManifestBytes || 12 + manifestLength > data.length)
    throw new Error("Invalid render snapshot manifest");
  const manifest = JSON.parse(decoder.decode(data.subarray(12, 12 + manifestLength)));
  if (manifest.version !== 1 || !validName(manifest.fileName) ||
      !/\.glb$/i.test(manifest.fileName) ||
      !Array.isArray(manifest.lengths) || !manifest.lengths.length ||
      manifest.lengths.length > 256 ||
      manifest.lengths.some(length => !Number.isSafeInteger(length) || length < 0))
    throw new Error("Unsupported or invalid render snapshot");
  assertValidViewSession(manifest.viewSession);
  if (manifest.renderSize !== undefined && manifest.renderSize !== null)
    assertRenderSize(manifest.renderSize);
  if (manifest.renderJob !== undefined && manifest.renderJob !== null)
    assertRenderJob(manifest.renderJob);
  let offset = 12 + manifestLength;
  const resources = manifest.lengths.map(length => {
    if (offset + length > data.length) throw new Error("Truncated render snapshot");
    const resource = buffer.slice(offset, offset + length);
    offset += length;
    return resource;
  });
  if (offset !== data.length || resources[0].byteLength < 12 ||
      decoder.decode(new Uint8Array(resources[0], 0, 4)) !== "glTF")
    throw new Error("Invalid render snapshot model");
  let workbench = null;
  if (manifest.workbench) {
    const saved = manifest.workbench;
    if (saved.version !== 1 || !Array.isArray(saved.edits) || saved.edits.length > 255)
      throw new Error("Invalid material edits");
    workbench = { version: 1, selectedIndex: saved.selectedIndex,
      edits: saved.edits.map(edit => {
        if (!Number.isSafeInteger(edit.index) || edit.index < 0 ||
            !edit.inputs || typeof edit.inputs !== "object" || !Array.isArray(edit.images))
          throw new Error("Invalid material edit");
        return { index: edit.index, inputs: edit.inputs,
          images: edit.images.map(image => {
            if (!validName(image.name) || typeof image.kind !== "string" ||
                !Number.isSafeInteger(image.resource) || image.resource < 1 ||
                image.resource >= resources.length)
              throw new Error("Invalid material image");
            return { kind: image.kind, name: image.name, type: image.type,
              bytes: resources[image.resource] };
          }) };
      }) };
  }
  return { file: new File([resources[0]], manifest.fileName,
    { type: "model/gltf-binary" }), viewSession: manifest.viewSession,
    workbench, renderSize: manifest.renderSize ?? null,
    renderJob: manifest.renderJob ?? null };
}
