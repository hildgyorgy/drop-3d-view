export const rendererModes = ["auto", "webgpu", "webgl"];

export function normalizeRendererMode(value) {
  return rendererModes.includes(value) ? value : "auto";
}

export function activeRendererMode(debugEnabled, storedMode) {
  if (!debugEnabled) return "auto";
  return rendererModes.includes(storedMode) ? storedMode : "webgpu";
}

export function chooseRendererBackend(mode, webgpuAvailable) {
  if (mode === "auto" || mode === "webgl") return "webgl";
  if (mode === "webgpu") return webgpuAvailable ? "webgpu" : null;
  return "webgl";
}
