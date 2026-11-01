// Shared by WebGL and WebGPU: keep a stable directional-light shadow map
// until a scene or lighting change explicitly invalidates it.
export function invalidateShadow(shadow) {
  if (!shadow) return;
  shadow.autoUpdate = false;
  shadow.needsUpdate = true;
}
