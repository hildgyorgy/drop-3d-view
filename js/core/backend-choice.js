export const rendererModes = ["auto", "webgpu", "webgl"];

export function normalizeRendererMode(value) {
  return rendererModes.includes(value) ? value : "auto";
}

export function activeRendererMode(debugEnabled, storedMode) {
  return debugEnabled ? normalizeRendererMode(storedMode) : "auto";
}

export function chooseRendererBackend(mode, webgpuAvailable) {
  if (mode === "auto" || mode === "webgl") return "webgl";
  if (mode === "webgpu") return webgpuAvailable ? "webgpu" : null;
  return "webgl";
}
