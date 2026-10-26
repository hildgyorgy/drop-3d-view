const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

export function detectSupportedImageMime(bytes) {
  const data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || 0);
  if (
    data.length >= PNG_SIGNATURE.length &&
    PNG_SIGNATURE.every((value, index) => data[index] === value)
  ) return "image/png";
  if (data.length >= 3 && data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff)
    return "image/jpeg";
  return null;
}

export async function detectSupportedImageFileMime(file) {
  const header = file.slice ? file.slice(0, PNG_SIGNATURE.length) : file;
  return detectSupportedImageMime(await header.arrayBuffer());
}

export async function readSupportedImage(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const mimeType = detectSupportedImageMime(bytes);
  if (!mimeType) throw new Error("Texture images must be genuine JPEG or PNG files.");
  return { bytes, mimeType };
}
