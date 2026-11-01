// WebGPU implementation of the shared scene contract used by the full viewer.
import * as THREE from "three";
import { WebGPURenderer } from "three/webgpu";
import { DEFAULT_WEBGPU_TUNING } from "./full-tuning.js";
import { getSafeViewportSize } from "../js/view/viewport-size.js";

import { getEnvironmentSource } from "../js/core/environment-source.js";
import { loadEnvironmentTexture } from "../js/core/environment-texture.js";

export const backendKind = "webgpu";

export const scene = new THREE.Scene();
// WebGPU tone-maps the clear colour; WebGL displays the same #efefed value
// directly. Calibrate only the clear colour to recover the WebGL backdrop.
export const neutralBackground = new THREE.Color(0xefefed).multiplyScalar(DEFAULT_WEBGPU_TUNING.backdrop);
scene.background = neutralBackground.clone();

export const renderer = new WebGPURenderer({ antialias: true });
const initialViewport = getSafeViewportSize(window.innerWidth, window.innerHeight);
renderer.setSize(initialViewport.width, initialViewport.height);
renderer.setPixelRatio(2);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = DEFAULT_WEBGPU_TUNING.exposure;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);

export const perspectiveCamera = new THREE.PerspectiveCamera(
  42,
  initialViewport.aspect,
  0.01,
  100000
);
perspectiveCamera.position.set(10, 8, 10);
export const orthoCamera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.01, 100000);

export const DEFAULT_HEMI_INTENSITY = DEFAULT_WEBGPU_TUNING.skyFill;
export const hemi = new THREE.HemisphereLight(0xffffff, 0x888888, DEFAULT_HEMI_INTENSITY);
scene.add(hemi);

export const sun = new THREE.DirectionalLight(0xffffff, DEFAULT_WEBGPU_TUNING.sunStrength);
sun.castShadow = true;
sun.shadow.mapSize.set(8192, 8192);
sun.shadow.bias = -0.0001;
sun.shadow.normalBias = 0.02;
scene.add(sun, sun.target);

// The manually selected WebGPU backend uses restrained HDRI fill. Both
// backends share the same demo models and keep a neutral backdrop.
let previewHdriSun = null;
let previewHdriLoaded = false;
let previewHdriTexture = null;
export function getWebGpuPreviewEnvironment() {
  return previewHdriTexture;
}
export function syncWebGpuEnvironmentToSun(direction) {
  if (!previewHdriLoaded || !previewHdriSun || direction.lengthSq() < 1e-8) return;
  scene.environmentRotation.setFromQuaternion(
    new THREE.Quaternion().setFromUnitVectors(previewHdriSun, direction.clone().normalize())
  );
}

let previewEnvironmentReady = null;
let previewEnvironmentUrl = null;
export function preparePreviewEnvironment() {
  const source = getEnvironmentSource();
  if (previewEnvironmentReady && previewEnvironmentUrl === source.url)
    return previewEnvironmentReady;
  previewEnvironmentUrl = source.url;
  previewEnvironmentReady = loadEnvironmentTexture(source)
  .then(({ texture, sunDirection }) => {
      if (getEnvironmentSource().url !== source.url) { texture.dispose(); return; }
      const previous = previewHdriTexture;
      previewHdriSun = sunDirection;
      previewHdriTexture = texture;
      previewHdriLoaded = true;
      // A path-tracer activation may have replaced the environment while the
      // HDRI was loading. Do not overwrite that renderer's active lighting.
      if (scene.environment === null || scene.environment === previous) {
        scene.environment = texture;
        // Restrained fill and reflections; the existing sun remains the key light.
        scene.environmentIntensity = 0.2;
        syncWebGpuEnvironmentToSun(sun.position.clone().sub(sun.target.position));
      }
      previous?.dispose();
    })
    .catch(error => {
      if (getEnvironmentSource().url !== source.url) return;
      const previous = previewHdriTexture;
      if (scene.environment === previous) scene.environment = null;
      previewHdriTexture = null;
      previewHdriLoaded = false;
      previous?.dispose();
      previewEnvironmentReady = null;
      if (source.embedded) throw error;
      console.warn("WebGPU preview HDRI unavailable", error);
    });
  return previewEnvironmentReady;
}
