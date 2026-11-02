import { WebGPURenderer, PMREMGenerator } from "three/webgpu";

export async function createWorkbenchPreviewRenderer(canvas) {
  const renderer = new WebGPURenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  await renderer.init();
  if (renderer.backend?.isWebGLBackend) {
    renderer.dispose();
    throw new Error("WebGPU material preview is unavailable");
  }
  const handleDeviceLost = renderer.onDeviceLost.bind(renderer);
  renderer.onDeviceLost = info => {
    handleDeviceLost(info);
    window.dispatchEvent(new CustomEvent("dropview:gpu-device-lost", {
      detail: { ...info, scope: "material-preview" }
    }));
  };
  return { renderer, PMREMGenerator };
}
