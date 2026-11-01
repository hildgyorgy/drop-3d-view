/* Portable, versioned scene package. All lengths are checked before slicing. */
import { assertValidViewSession } from "./view-session.js";
import { assertRenderSize } from "./render-size.js";
import { assertRenderJob } from "./render-job.js";
import { RENDER_PRODUCER, assertRenderProducer } from "./render-compatibility.js";
import { assertRenderEnvironment } from "./render-environment.js";
import { assertRenderThumbnail } from "./render-thumbnail.js";

export const MAX_RENDER_RESOURCES = 2;

function assertResourceCount(count) {
  if (count < 1 || count > MAX_RENDER_RESOURCES)
    throw new Error(`Render packages support at most ${MAX_RENDER_RESOURCES} resources (including the GLB and HDRI)`);
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
  renderSize = null, renderJob = null, environment = null, thumbnail = null,
  producer = RENDER_PRODUCER }) {
  if (!validName(fileName) || !/\.glb$/i.test(fileName))
    throw new Error("Snapshot needs a named GLB file");
  assertRenderSnapshotView(viewSession);
  assertRenderProducer(producer);
  if (renderSize !== null) assertRenderSize(renderSize);
  if (renderJob !== null) assertRenderJob(renderJob);
  if (thumbnail !== null) assertRenderThumbnail(thumbnail);
  const model = bytesOf(fileBytes);
  if (model.byteLength < 12 || decoder.decode(model.subarray(0, 4)) !== "glTF")
    throw new Error("Snapshot model is not a GLB");
  const resources = [model];
  let savedEnvironment = null;
  if (environment) {
    assertRenderEnvironment(environment);
    assertResourceCount(resources.length + 1);
    savedEnvironment = { name: environment.name,
      resource: resources.push(bytesOf(environment.bytes)) - 1 };
  }
  const manifest = encoder.encode(JSON.stringify({
    version: 1, fileName, viewSession,
    renderSize, renderJob, producer, environment: savedEnvironment,
    ...(thumbnail ? { thumbnail } : {}),
    lengths: resources.map(resource => resource.byteLength)
  }));
  if (manifest.byteLength > maxManifestBytes) throw new Error("Snapshot metadata is too large");
  const total = 12 + manifest.byteLength + resources.reduce((sum, resource) => sum + resource.byteLength, 0);
  if (total > maxPackageBytes) throw new Error("Snapshot exceeds the 2 GB limit");
  const manifestLength = new Uint8Array(4);
  new DataView(manifestLength.buffer).setUint32(0, manifest.byteLength, true);
  // Blob accepts independent parts, so a large package no longer needs a
  // second, package-sized Uint8Array just to concatenate its resources.
  return new Blob([magic, manifestLength, manifest, ...resources], {
    type: "application/octet-stream"
  });
}

export async function decodeRenderSnapshot(file) {
  if (file.size > maxPackageBytes || file.size < 24)
    throw new Error("Invalid render snapshot size");
  const header = await file.slice(0, 12).arrayBuffer();
  const headerBytes = new Uint8Array(header);
  if (!magic.every((value, index) => headerBytes[index] === value))
    throw new Error("Not a Drop & View render snapshot");
  const manifestLength = new DataView(header).getUint32(8, true);
  if (!manifestLength || manifestLength > maxManifestBytes || 12 + manifestLength > file.size)
    throw new Error("Invalid render snapshot manifest");
  const manifestBytes = await file.slice(12, 12 + manifestLength).arrayBuffer();
  const manifest = JSON.parse(decoder.decode(manifestBytes));
  if (manifest.version !== 1 || !validName(manifest.fileName) ||
      !/\.glb$/i.test(manifest.fileName) ||
      !Array.isArray(manifest.lengths) || !manifest.lengths.length ||
      manifest.lengths.some(length => !Number.isSafeInteger(length) || length < 0))
    throw new Error("Unsupported or invalid render snapshot");
  if (Object.hasOwn(manifest, "workbench") || Object.hasOwn(manifest, "resolvedModel"))
    throw new Error("Unsupported legacy render snapshot");
  assertResourceCount(manifest.lengths.length);
  assertValidViewSession(manifest.viewSession);
  if (!manifest.producer) throw new Error("Render snapshot producer is required");
  assertRenderProducer(manifest.producer);
  if (manifest.renderSize !== undefined && manifest.renderSize !== null)
    assertRenderSize(manifest.renderSize);
  if (manifest.renderJob !== undefined && manifest.renderJob !== null)
    assertRenderJob(manifest.renderJob);
  let offset = 12 + manifestLength;
  const ranges = manifest.lengths.map(length => {
    const start = offset;
    offset += length;
    if (!Number.isSafeInteger(offset) || offset > file.size)
      throw new Error("Truncated render snapshot");
    return [start, offset];
  });
  if (offset !== file.size) throw new Error("Invalid render snapshot model");
  // Read only the declared resources. This avoids retaining the whole package
  // plus copied slices at the same time.
  const resources = await Promise.all(
    ranges.map(([start, end]) => file.slice(start, end).arrayBuffer())
  );
  if (resources[0].byteLength < 12 ||
      decoder.decode(new Uint8Array(resources[0], 0, 4)) !== "glTF")
    throw new Error("Invalid render snapshot model");
  let environment = null;
  if (manifest.environment !== undefined && manifest.environment !== null) {
    const saved = manifest.environment;
    if (!saved || !Number.isSafeInteger(saved.resource) || saved.resource < 1 ||
        saved.resource >= resources.length)
      throw new Error("Invalid packaged HDRI resource");
    environment = assertRenderEnvironment({ name: saved.name, bytes: resources[saved.resource] });
  }
  let thumbnail = null;
  if (manifest.thumbnail != null) {
    try { thumbnail = assertRenderThumbnail(manifest.thumbnail); }
    catch { /* A damaged optional preview must not prevent opening the scene. */ }
  }
  return { file: new File([resources[0]], manifest.fileName,
    { type: "model/gltf-binary" }), viewSession: manifest.viewSession,
    renderSize: manifest.renderSize ?? null,
    renderJob: manifest.renderJob ?? null, producer: manifest.producer, environment, thumbnail };
}
