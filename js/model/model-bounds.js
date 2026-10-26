export class InvalidModelBoundsError extends Error {
  constructor() {
    super("The model has no finite, non-zero geometry bounds.");
    this.name = "InvalidModelBoundsError";
  }
}

export function assertUsableModelBounds(bounds) {
  const values = [
    bounds?.min?.x, bounds?.min?.y, bounds?.min?.z,
    bounds?.max?.x, bounds?.max?.y, bounds?.max?.z
  ];
  if (values.some(value => !Number.isFinite(value)))
    throw new InvalidModelBoundsError();

  const sizeX = bounds.max.x - bounds.min.x;
  const sizeY = bounds.max.y - bounds.min.y;
  const sizeZ = bounds.max.z - bounds.min.z;
  if (![sizeX, sizeY, sizeZ].every(size => Number.isFinite(size) && size >= 0) ||
      Math.max(sizeX, sizeY, sizeZ) <= 0)
    throw new InvalidModelBoundsError();
  return bounds;
}
