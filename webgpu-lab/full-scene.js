// WebGPU implementation of the shared scene contract used by the full viewer.
import * as THREE from "three";
import { WebGPURenderer } from "three/webgpu";

export const backendKind = "webgpu";

export const scene = new THREE.Scene();
// WebGPU tone-maps the clear colour; WebGL displays the same #efefed value
// directly. Calibrate only the clear colour to recover the WebGL backdrop.
export const neutralBackground = new THREE.Color(0xefefed).multiplyScalar(1.8);
scene.background = neutralBackground.clone();

export const renderer = new WebGPURenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(2);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);

export const perspectiveCamera = new THREE.PerspectiveCamera(
  42,
  window.innerWidth / window.innerHeight,
  0.01,
  100000
);
perspectiveCamera.position.set(10, 8, 10);
export const orthoCamera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.01, 100000);

export const DEFAULT_HEMI_INTENSITY = 1.15;
export const hemi = new THREE.HemisphereLight(0xffffff, 0x888888, DEFAULT_HEMI_INTENSITY);
scene.add(hemi);

export const sun = new THREE.DirectionalLight(0xffffff, 3.3);
sun.castShadow = true;
sun.shadow.mapSize.set(8192, 8192);
sun.shadow.bias = -0.0001;
sun.shadow.normalBias = 0.02;
scene.add(sun, sun.target);
