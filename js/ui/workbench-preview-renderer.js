import { WebGLRenderer, PMREMGenerator } from "three";

export async function createWorkbenchPreviewRenderer(canvas) {
  return {
    renderer: new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" }),
    PMREMGenerator
  };
}
