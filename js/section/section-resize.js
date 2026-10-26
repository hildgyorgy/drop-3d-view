import { sectionEdgeMaterial } from "../model/materials.js";
import { updateLineMaterialResolution } from "./line-resolution.js";

export function resizeSectionRenderer(width, height) {
  return updateLineMaterialResolution(sectionEdgeMaterial, width, height);
}
