export const rendererModes = ["auto", "webgpu", "webgl"];

export function normalizeRendererMode(value) {
  return rendererModes.includes(value) ? value : "auto";
}

export function chooseRendererBackend(mode, webgpuAvailable, autoFallback = false) {
  if (mode === "webgl" || (mode === "auto" && autoFallback)) return "webgl";
  if (mode === "webgpu") return webgpuAvailable ? "webgpu" : null;
  return webgpuAvailable ? "webgpu" : "webgl";
}
