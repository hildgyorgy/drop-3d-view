import { getSafeViewportSize } from "../view/viewport-size.js";

export function updateLineMaterialResolution(material, width, height) {
  if (typeof material?.resolution?.set !== "function") return false;
  const viewport = getSafeViewportSize(width, height);
  material.resolution.set(viewport.width, viewport.height);
  return true;
}
