export function isGlbFile(file) {
  return typeof file?.name === "string" && /\.glb$/i.test(file.name);
}

export function resolveComparisonModelUrl(value, baseUrl) {
  if (typeof value !== "string" || !value) return null;
  try {
    const base = new URL(baseUrl);
    const url = new URL(value, base);
    if (!/^https?:$/.test(url.protocol) || url.origin !== base.origin ||
        !/\.glb$/i.test(url.pathname) || url.username || url.password)
      return null;
    return url.href;
  } catch {
    return null;
  }
}
