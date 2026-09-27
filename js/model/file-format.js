export function isGlbFile(file) {
  return typeof file?.name === "string" && /\.glb$/i.test(file.name);
}
