export function getSafeViewportSize(width, height) {
  if (Number.isFinite(width) && width > 0 &&
      Number.isFinite(height) && height > 0)
    return { width, height, aspect: width / height };
  return { width: 1, height: 1, aspect: 1 };
}
