// Same thin physical-glass preset as the Archicad GLB exporter.
export const CLEAR_GLASS = Object.freeze({ transmission: 0.98, roughness: 0.03, ior: 1.5 });

export function glassProfileExtras(extras = {}, enabled = true) {
  const result = { ...extras };
  if (enabled) {
    // Also consumed by the Cycles thin-glass adapter and the viewer.
    result.archicad = { ...extras.archicad, clearGlassOverride: true };
  } else if (extras.archicad) {
    result.archicad = { ...extras.archicad, clearGlassOverride: false };
  }
  return result;
}
