// Portable Radiance HDR resource, shared by the package codec and runtime.
const MAX_HDR_BYTES = 256 * 1024 * 1024;
const MAX_HDR_PIXELS = 32 * 1024 * 1024;

export function assertRenderEnvironment(environment) {
  if (!environment || typeof environment.name !== "string" ||
      environment.name.length > 255 ||
      !/^[^\\/\x00-\x1f]{1,255}\.hdr$/i.test(environment.name) ||
      !(environment.bytes instanceof ArrayBuffer) ||
      environment.bytes.byteLength > MAX_HDR_BYTES)
    throw new Error("Invalid packaged HDRI");
  const header = new TextDecoder().decode(environment.bytes.slice(0, 32768));
  const size = /\n-Y\s+(\d+)\s+\+X\s+(\d+)\s*\n/.exec(header);
  if (!/^#\?(RADIANCE|RGBE)\r?\n/.test(header) ||
      !/\nFORMAT=32-bit_rle_rgbe\s*\n/.test(header) || !size)
    throw new Error("Invalid packaged HDRI header");
  const height = Number(size[1]), width = Number(size[2]);
  if (!Number.isSafeInteger(width) || !Number.isSafeInteger(height) ||
      width < 1 || height < 1 || width > 16384 || height > 16384 ||
      width * height > MAX_HDR_PIXELS ||
      environment.bytes.byteLength < size.index + size[0].length + 4)
    throw new Error("Invalid packaged HDRI dimensions or data");
  return environment;
}
