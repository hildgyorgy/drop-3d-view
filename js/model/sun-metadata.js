export function normalizeImportedSunDirection(sun) {
  const value = sun?.directionToSun;
  if (!Array.isArray(value) || value.length !== 3 || !value.every(Number.isFinite))
    return null;

  const length = Math.hypot(...value);
  if (!Number.isFinite(length) || length < 1e-6) return null;

  const direction = value.map(component => component / length);
  // In glTF's Y-up space the sun must be above the horizon. Do not silently
  // reverse an invalid exporter vector: that could flip every shadow.
  return direction[1] > 0 ? direction : null;
}

export function sunControlAngles(direction) {
  return {
    azimuth: ((Math.atan2(direction[2], direction[0]) * 180) / Math.PI + 360) % 360,
    height: (Math.asin(Math.min(1, Math.max(-1, direction[1]))) * 180) / Math.PI
  };
}

export function environmentSunDirectionFromPixel(x, y, width, height) {
  const azimuth = ((x + 0.5) / width - 0.5) * Math.PI * 2;
  const elevation = Math.PI / 2 - ((y + 0.5) / height) * Math.PI;
  const horizontal = Math.cos(elevation);
  return [
    Math.cos(azimuth) * horizontal,
    Math.sin(elevation),
    Math.sin(azimuth) * horizontal
  ];
}
