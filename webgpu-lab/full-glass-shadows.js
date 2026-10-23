// Debug-only WebGPU experiment: approximate daylight transmitted through
// exporter-selected clear glass in the *raster* shadow map. This is not
// refraction or path tracing, and must not affect the public WebGL renderer.
import { uniform, vec3, vec4 } from "three/tsl";
import { isExportSelectedClearGlass } from "../js/model/material-policy.js";

const debugEnabled = new URLSearchParams(location.search).has("rendererDebug");
const transmittedLight = uniform(0.9);
const clearGlassShadow = vec4(vec3(transmittedLight), 1);

export function enableDebugGlassShadows(renderer) {
  if (debugEnabled) renderer.shadowMap.transmitted = true;
}

export function setDebugGlassShadowLight(value) {
  transmittedLight.value = Math.min(1, Math.max(0, Number(value) || 0));
}

export function prepareDebugGlassShadow(original) {
  if (!debugEnabled) return false;
  let found = false;
  for (const material of Array.isArray(original) ? original : [original]) {
    if (!isExportSelectedClearGlass(material)) continue;
    if (material.castShadowNode !== clearGlassShadow) {
      material.castShadowNode = clearGlassShadow;
      material.needsUpdate = true;
    }
    found = true;
  }
  return found;
}
