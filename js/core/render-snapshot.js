/* Portable, versioned scene package. All lengths are checked before slicing. */
import { assertValidViewSession } from "./view-session.js";
import { assertRenderSize } from "./render-size.js";
import { assertRenderJob } from "./render-job.js";
import { RENDER_PRODUCER, assertRenderProducer } from "./render-compatibility.js";
import { assertRenderEnvironment } from "./render-environment.js";

export const MAX_RENDER_RESOURCES = 1024;
export const MAX_RENDER_MATERIAL_EDITS = 1024;

function assertResourceCount(count) {
  if (count < 1 || count > MAX_RENDER_RESOURCES)
    throw new Error(`Render packages support at most ${MAX_RENDER_RESOURCES} resources (including the GLB and HDRI)`);
}

function assertMaterialEdits(workbench) {
  if (workbench.version !== 1 || !Array.isArray(workbench.edits))
    throw new Error("Invalid material edits");
  if (workbench.edits.length > MAX_RENDER_MATERIAL_EDITS)
    throw new Error(`Render packages support at most ${MAX_RENDER_MATERIAL_EDITS} material edits`);
  for (const edit of workbench.edits) {
    if (!edit || !Number.isSafeInteger(edit.index) || edit.index < 0 ||
        !edit.inputs || typeof edit.inputs !== "object" || Array.isArray(edit.inputs) ||
        !Array.isArray(edit.images))
      throw new Error("Invalid material edit");
  }
}

export function assertRenderSnapshotView(viewSession) {
  assertValidViewSession(viewSession);
  if (viewSession.section.enabled)
    throw new Error("Turn off SECTION before exporting a render package.");
}

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
  workbench = null, renderSize = null, renderJob = null, environment = null,
  producer = RENDER_PRODUCER }) {
  if (!validName(fileName) || !/\.glb$/i.test(fileName))
    throw new Error("Snapshot needs a named GLB file");
  assertRenderSnapshotView(viewSession);
  assertRenderProducer(producer);
  if (renderSize !== null) assertRenderSize(renderSize);
  if (renderJob !== null) assertRenderJob(renderJob);
  const model = bytesOf(fileBytes);
  if (model.byteLength < 12 || decoder.decode(model.subarray(0, 4)) !== "glTF")
    throw new Error("Snapshot model is not a GLB");
  const resources = [model];
  let savedWorkbench = null;
  if (workbench) {
    assertMaterialEdits(workbench);
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
          assertResourceCount(resources.length + 1);
          const resource = resources.push(bytes) - 1;
          return { kind: image.kind, name: image.name, type: image.type, resource };
        })
      }))
    };
  }
  let savedEnvironment = null;
  if (environment) {
    assertRenderEnvironment(environment);
    assertResourceCount(resources.length + 1);
    savedEnvironment = { name: environment.name,
      resource: resources.push(bytesOf(environment.bytes)) - 1 };
  }
  const manifest = encoder.encode(JSON.stringify({
    version: 1, fileName, viewSession, workbench: savedWorkbench,
    renderSize, renderJob, producer, environment: savedEnvironment,
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
      manifest.lengths.some(length => !Number.isSafeInteger(length) || length < 0))
    throw new Error("Unsupported or invalid render snapshot");
  assertResourceCount(manifest.lengths.length);
  assertValidViewSession(manifest.viewSession);
  assertRenderProducer(manifest.producer ?? null);
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
    assertMaterialEdits(saved);
    workbench = { version: 1, selectedIndex: saved.selectedIndex,
      edits: saved.edits.map(edit => {
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
  let environment = null;
  if (manifest.environment !== undefined && manifest.environment !== null) {
    const saved = manifest.environment;
    if (!saved || !Number.isSafeInteger(saved.resource) || saved.resource < 1 ||
        saved.resource >= resources.length)
      throw new Error("Invalid packaged HDRI resource");
    environment = assertRenderEnvironment({ name: saved.name, bytes: resources[saved.resource] });
  }
  return { file: new File([resources[0]], manifest.fileName,
    { type: "model/gltf-binary" }), viewSession: manifest.viewSession,
    workbench, renderSize: manifest.renderSize ?? null,
    renderJob: manifest.renderJob ?? null, producer: manifest.producer ?? null, environment };
}
