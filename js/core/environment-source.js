import { assertRenderEnvironment } from "./render-environment.js";

let packagedEnvironment = null;
let packagedUrl = null;

export function getEnvironmentSource() {
  return { url: packagedUrl ?? new URL("assets/hdri/backdrop.hdr", document.baseURI).href,
    embedded: Boolean(packagedEnvironment) };
}

export function getPackagedEnvironment() {
  return packagedEnvironment ? { name: packagedEnvironment.name,
    bytes: packagedEnvironment.bytes.slice(0) } : null;
}

export function setEnvironmentSource(environment) {
  if (environment) assertRenderEnvironment(environment);
  const next = environment ? { name: environment.name, bytes: environment.bytes.slice(0) } : null;
  const nextUrl = next ? URL.createObjectURL(new Blob([next.bytes], { type: "image/vnd.radiance" })) : null;
  const previous = packagedUrl;
  packagedEnvironment = next;
  packagedUrl = nextUrl;
  if (previous) URL.revokeObjectURL(previous);
}

export async function captureRenderEnvironment() {
  const source = getEnvironmentSource();
  let environment = getPackagedEnvironment();
  if (!environment) {
    const response = await fetch(source.url);
    if (!response.ok) throw new Error(`HDRI could not be packaged (${response.status})`);
    environment = { name: "backdrop.hdr", bytes: await response.arrayBuffer() };
  }
  assertRenderEnvironment(environment);
  if (getEnvironmentSource().url !== source.url)
    throw new Error("The scene environment changed during export");
  return environment;
}

export async function environmentIdentity(environment) {
  const hash = await crypto.subtle.digest("SHA-256", environment.bytes);
  return `sha256:${[...new Uint8Array(hash)].map(value => value.toString(16).padStart(2, "0")).join("")}`;
}

export async function validateRenderEnvironment(environment, producer) {
  if (!environment) return;
  assertRenderEnvironment(environment);
  if (producer?.hdriId?.startsWith("sha256:") &&
      await environmentIdentity(environment) !== producer.hdriId)
    throw new Error("The packaged HDRI does not match its recorded identity");
  const { HDRLoader } = await import("three/addons/loaders/HDRLoader.js");
  // Validation needs a complete decode but not Float32 precision. The loader's
  // half-float default halves this temporary allocation for large packages.
  const texture = new HDRLoader().createDataTexture(environment.bytes);
  try {
    const { data, width, height } = texture.image ?? {};
    if (!data?.length || data.length !== width * height * 4)
      throw new Error("The packaged HDRI has incomplete pixel data");
  } finally {
    texture.dispose();
  }
}
