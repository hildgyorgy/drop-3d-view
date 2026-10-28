export function assertRenderSize(size) {
  if (!size || !Number.isSafeInteger(size.width) ||
      !Number.isSafeInteger(size.height) ||
      size.width < 1 || size.height < 1 ||
      size.width > 16384 || size.height > 16384)
    throw new Error("Invalid render pixel size");
  return size;
}
