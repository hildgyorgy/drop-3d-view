// Adapter for the full viewer's PATH TRACER control on the WebGPU branch.
import * as THREE from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { WebGPUPathTracer } from "three-gpu-pathtracer/src/webgpu/WebGPUPathTracer.js";
import { State } from "../js/core/state.js";
import { scene, renderer, hemi, sun } from "../js/core/scene.js";
import { photo1Button, perspectiveButton, axonButton, orthoButton,
  cameraFov, showAllButton, sunAngle, sunHeight, transparency } from "../js/core/dom.js";
import { environmentSunDirectionFromPixel } from "../js/model/sun-metadata.js";
import { getSunDirectionFromControls } from "../js/view/ground-sun.js";
import { setStatus } from "../js/ui/status.js";

const environmentUrl = new URL("../assets/hdri/backdrop.hdr", import.meta.url).href;
let tracer = null;
let environment = null;
let sourceSun = null;
let preparing = false;
let paused = false;
let dirty = false;
let samples = 0;
let lastCount = 0;
let countPending = false;
let groundMaterial = null;
let activation = 0;
const disabledBeforeTrace = new Map();
const cameraButtons = () => [
  ...document.querySelectorAll("[data-navigation-mode], [data-view]"),
  perspectiveButton, axonButton, orthoButton, cameraFov, showAllButton
].filter(Boolean);

function setButton() {
  photo1Button.textContent = !State.pathTracerActive ? "PATH TRACER" : paused ? "RESUME" : "PAUSE";
  photo1Button.classList.toggle("active", State.pathTracerActive);
  photo1Button.setAttribute("aria-pressed", String(State.pathTracerActive));
}

function lockCamera(locked) {
  if (locked && State.navigationMode === "fly") {
    document.querySelector('[data-navigation-mode="orbit"]')?.click();
  }
  State.pathTracerActive = locked;
  State.controls.enabled = !locked && State.navigationMode !== "fly";
  for (const button of cameraButtons()) {
    if (locked) {
      disabledBeforeTrace.set(button, button.disabled);
      button.disabled = true;
    } else {
      button.disabled = disabledBeforeTrace.get(button) ?? false;
    }
  }
  if (!locked) disabledBeforeTrace.clear();
}

function findHdrSun(texture) {
  const { data, width, height } = texture.image ?? {};
  if (!(data instanceof Float32Array) || !width || !height) return null;
  let brightest = 0;
  let max = -Infinity;
  const stride = Math.floor(data.length / (width * height));
  for (let i = 0; i < width * height; i++) {
    const p = i * stride;
    const luminance = 0.2126 * data[p] + 0.7152 * data[p + 1] + 0.0722 * data[p + 2];
    if (luminance > max) { max = luminance; brightest = i; }
  }
  return new THREE.Vector3(...environmentSunDirectionFromPixel(
    brightest % width, Math.floor(brightest / width), width, height
  )).normalize();
}

async function getEnvironment() {
  if (environment) return environment;
  const texture = await new HDRLoader().setDataType(THREE.FloatType).loadAsync(environmentUrl);
  sourceSun = findHdrSun(texture);
  const data = texture.image?.data;
  if (data instanceof Float32Array) {
    for (let i = 0; i < data.length; i++) data[i] = Math.min(65504, Math.max(-65504, data[i]));
    texture.needsUpdate = true;
  }
  texture.mapping = THREE.EquirectangularReflectionMapping;
  environment = texture;
  return texture;
}

function rotateEnvironment() {
  if (!sourceSun) return;
  scene.environmentRotation.setFromQuaternion(
    new THREE.Quaternion().setFromUnitVectors(sourceSun, getSunDirectionFromControls())
  );
  tracer?.updateEnvironment();
}

function restorePreview() {
  scene.environment = null;
  scene.environmentRotation.set(0, 0, 0);
  hemi.visible = true;
  sun.visible = true;
  if (State.ground && groundMaterial) {
    State.ground.material.dispose();
    State.ground.material = groundMaterial;
    groundMaterial = null;
  }
}

async function activate() {
  if (State.pathTracerActive || !State.model || State.sectionEnabled) return;
  if (State.currentMode !== "original") document.querySelector('[data-mode="original"]')?.click();
  preparing = true;
  paused = false;
  const token = ++activation;
  lockCamera(true);
  photo1Button.setAttribute("aria-busy", "true");
  setButton();
  setStatus("PATH TRACER · loading HDRI…");
  try {
    scene.environment = await getEnvironment();
    if (token !== activation || !State.model) return;
    rotateEnvironment();
    hemi.visible = false;
    sun.visible = false;
    if (State.ground) {
      groundMaterial = State.ground.material;
      State.ground.material = new THREE.MeshStandardMaterial({
        color: scene.background, roughness: 0.94, metalness: 0, side: THREE.DoubleSide
      });
    }
    const next = new WebGPUPathTracer(renderer);
    next.maxBounces = 6;
    next.maxTransparentBounces = 10;
    next.filterGlossyFactor = 0.35;
    next.multipleImportanceSampling = true;
    next.renderDelay = 90;
    next.minSamples = 1;
    next.lowResScale = 0.25;
    next.renderScale = 1;
    setStatus("PATH TRACER · preparing scene…");
    await new Promise(resolve => requestAnimationFrame(resolve));
    if (token !== activation) { next.dispose(); return; }
    next.setScene(scene, State.camera);
    tracer = next;
    samples = 0;
    dirty = false;
    setStatus("PATH TRACER · refining image…");
  } catch (error) {
    console.error("WebGPU path tracer failed", error);
    deactivatePhoto1({ restoreStatus: false });
    setStatus(`PATH TRACER COULD NOT START: ${error.message}`);
  } finally {
    if (token === activation) {
      preparing = false;
      photo1Button.removeAttribute("aria-busy");
    }
  }
}

photo1Button?.addEventListener("click", () => {
  if (!State.pathTracerActive) activate();
  else if (tracer && !preparing) {
    paused = !paused;
    tracer.pause = paused;
    setButton();
    setStatus(paused ? `PATH TRACER · paused at ${Math.floor(samples)} samples` : "PATH TRACER · refining image…");
  }
});

export function deactivatePhoto1({ restoreStatus = true } = {}) {
  if (!State.pathTracerActive && !tracer) return;
  ++activation;
  tracer?.dispose();
  tracer = null;
  preparing = false;
  paused = false;
  samples = 0;
  restorePreview();
  lockCamera(false);
  setButton();
  updatePhoto1Availability();
  if (restoreStatus) setStatus("WebGPU preview");
}

export function invalidatePhoto1Scene() {
  if (tracer) { dirty = true; paused = false; tracer.pause = false; setButton(); }
}
export function updatePhoto1Lights() {
  if (tracer) { tracer.updateLights(); paused = false; tracer.pause = false; setButton(); }
}
export function updatePhoto1Availability() {
  if (!photo1Button) return;
  photo1Button.disabled = !State.model || State.sectionEnabled || !navigator.gpu;
  photo1Button.title = State.sectionEnabled
    ? "Turn off SECTION before using PATH TRACER"
    : "Progressive WebGPU path tracing";
}
export function resizePhoto1() { tracer?.updateCamera(); }
export function getPhoto1Stats() {
  return State.pathTracerActive ? { preparing, compiling: false, paused, samples } : null;
}
export function renderPhoto1() {
  if (!State.pathTracerActive) return false;
  // Keep the last preview frame while the raster lights are being exchanged
  // for the HDRI. Rendering that half-prepared scene can leave WebGPU's
  // directional ShadowNode without a depth texture for one frame.
  if (!tracer || preparing) return true;
  if (dirty) { tracer.setScene(scene, State.camera); dirty = false; samples = 0; }
  if (!paused) tracer.renderSample();
  const now = performance.now();
  if (!countPending && now - lastCount > 1200) {
    lastCount = now;
    countPending = true;
    const measuredTracer = tracer;
    measuredTracer.getSampleCountsAsync().then(counts => {
      if (tracer === measuredTracer) samples = counts.avg;
    }).catch(error => console.warn("Sample count unavailable", error))
      .finally(() => { countPending = false; });
  }
  return true;
}

sunAngle?.addEventListener("input", () => { if (tracer) rotateEnvironment(); });
sunHeight?.addEventListener("input", () => { if (tracer) rotateEnvironment(); });
transparency?.addEventListener("input", () => {
  if (tracer) queueMicrotask(() => tracer?.updateMaterials());
});
updatePhoto1Availability();
setButton();
