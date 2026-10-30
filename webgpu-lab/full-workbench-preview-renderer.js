import { WebGPURenderer, PMREMGenerator } from "three/webgpu";

export async function createWorkbenchPreviewRenderer(canvas) {
  const renderer = new WebGPURenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  await renderer.init();
  if (renderer.backend?.isWebGLBackend) {
    renderer.dispose();
    throw new Error("WebGPU material preview is unavailable");
  }
  return { renderer, PMREMGenerator };
}
