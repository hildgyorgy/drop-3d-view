/*
   PATH TRACER

   Optional progressive path-traced rendering. The dependency is loaded only
   when the user asks for PATH TRACER, so the normal viewer keeps its original
   startup cost and behaviour.
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { scene, renderer, sun } from "../core/scene.js";
import {
  photo1Button,
  perspectiveButton,
  axonButton,
  orthoButton,
  cameraFov,
  showAllButton,
  shadowToggle,
  sunAngle,
  sunHeight,
  transparency
} from "../core/dom.js";
import {
  hasAuthoredPhysicalTransmission,
  isPhotoGlassFallbackCandidate,
  transmissionFromTransparencyControl
} from "../model/material-policy.js";
import { setStatus } from "../ui/status.js";

const environmentButton = document.getElementById("environmentToggle");
const aoButton = document.getElementById("aoToggle");
const photoEnvironmentUrl = new URL(
  "../../assets/hdri/backdrop.hdr",
  import.meta.url
).href;

let active = false;
let preparing = false;
let paused = false;
let activation = 0;
let pathTracer = null;
let photoEnvironment = null;
let photoGroundMaterial = null;
let convertedMaterials = [];
let convertedGlassMaterials = [];
let convertedMaterialCache = new WeakMap();
let cameraSignature = "";
let photoEnvironmentSunAzimuth = 0;
let sceneDirty = false;
let environmentUpdateTimer = 0;
let materialUpdateTimer = 0;
const cameraControlDisabledState = new Map();

const navigationButtons = document.querySelectorAll("[data-navigation-mode]");
const orthoViewButtons = document.querySelectorAll("[data-view]");

function updatePhotoButtonState() {
  if (!photo1Button) return;

  photo1Button.textContent = !active ? "PATH TRACER" : paused ? "RESUME" : "PAUSE";
  photo1Button.title = !active
    ? "Progressive path tracing"
    : paused
      ? "Continue refining the path-traced image"
      : "Pause and keep the current path-traced image";
  photo1Button.setAttribute("aria-label", photo1Button.title);
}

function setPhotoPaused(nextPaused) {
  if (!active || paused === nextPaused) return;
  paused = nextPaused;
  updatePhotoButtonState();

  if (paused) {
    setStatus(`PATH TRACER · paused at ${Math.floor(pathTracer?.samples ?? 0)} samples`);
  } else {
    setStatus("PATH TRACER · refining image…");
  }
}

function setCameraInteractionLocked(locked) {
  if (locked) {
    // FLY owns the pointer, so return to the normal orbit state before locking.
    if (State.navigationMode === "fly") {
      document.querySelector('[data-navigation-mode="orbit"]')?.click();
    }

    // Finish and clear any residual OrbitControls damping exactly once. From
    // this point the main loop no longer calls controls.update().
    const damping = State.controls.enableDamping;
    State.controls.enableDamping = false;
    State.controls.update();
    State.controls.enableDamping = damping;
    ++State.cameraAnimation;
  }

  State.pathTracerActive = locked;
  State.controls.enabled = !locked && State.navigationMode !== "fly";

  const controls = [
    ...navigationButtons,
    perspectiveButton,
    axonButton,
    orthoButton,
    ...orthoViewButtons,
    cameraFov,
    showAllButton
  ].filter(Boolean);

  controls.forEach(control => {
    if (locked) {
      cameraControlDisabledState.set(control, control.disabled);
      control.disabled = true;
      control.setAttribute("aria-disabled", "true");
    } else {
      control.disabled = cameraControlDisabledState.get(control) ?? false;
      if (control.disabled) control.setAttribute("aria-disabled", "true");
      else control.removeAttribute("aria-disabled");
    }
  });

  if (!locked) cameraControlDisabledState.clear();
}

function matrixSignature(matrix) {
  return matrix.elements.map(value => value.toFixed(7)).join(",");
}

function getCameraSignature() {
  const camera = State.camera;
  camera.updateMatrixWorld();
  return `${camera.uuid}|${matrixSignature(camera.matrixWorld)}|${matrixSignature(
    camera.projectionMatrix
  )}`;
}

function createFallbackEnvironment(GradientEquirectTexture) {
  const environment = new GradientEquirectTexture(512);
  environment.topColor.set(0xb9d5f5);
  environment.bottomColor.set(0x8b8175);
  environment.exponent = 1.65;
  environment.update();
  return environment;
}

function findEnvironmentSunAzimuth(environment) {
  const { data, width, height } = environment.image ?? {};
  if (!(data instanceof Float32Array) || !width || !height) {
    return THREE.MathUtils.degToRad(Number(sunAngle?.value ?? 45));
  }

  const pixelCount = width * height;
  const stride = Math.max(3, Math.floor(data.length / pixelCount));
  let brightestPixel = 0;
  let brightestLuminance = -Infinity;

  for (let pixel = 0; pixel < pixelCount; pixel += 1) {
    const offset = pixel * stride;
    const luminance =
      0.2126 * data[offset] +
      0.7152 * data[offset + 1] +
      0.0722 * data[offset + 2];
    if (luminance > brightestLuminance) {
      brightestLuminance = luminance;
      brightestPixel = pixel;
    }
  }

  const x = brightestPixel % width;
  return ((x + 0.5) / width - 0.5) * Math.PI * 2;
}

function clampEnvironmentForHalfFloat(environment) {
  const data = environment.image?.data;
  if (!(data instanceof Float32Array)) return;

  // The path tracer stores its environment data as half floats internally.
  // Preserve the HDR range while clipping rare solar pixels to that format's
  // finite maximum so Three.js does not emit overflow warnings.
  for (let i = 0; i < data.length; i += 1) {
    data[i] = Math.min(65504, Math.max(-65504, data[i]));
  }
  environment.needsUpdate = true;
}

async function loadPhotoEnvironment(HDRLoader, GradientEquirectTexture) {
  try {
    const environment = await new HDRLoader()
      .setDataType(THREE.FloatType)
      .loadAsync(photoEnvironmentUrl);
    photoEnvironmentSunAzimuth = findEnvironmentSunAzimuth(environment);
    clampEnvironmentForHalfFloat(environment);
    environment.mapping = THREE.EquirectangularReflectionMapping;
    return environment;
  } catch (error) {
    console.warn("PATH TRACER HDRI could not be loaded; using gradient lighting", error);
    photoEnvironmentSunAzimuth = THREE.MathUtils.degToRad(
      Number(sunAngle?.value ?? 45)
    );
    return createFallbackEnvironment(GradientEquirectTexture);
  }
}

function getPhotoEnvironmentRotation() {
  const desiredSunAzimuth = THREE.MathUtils.degToRad(
    Number(sunAngle?.value ?? 45)
  );
  // THREE.RotationY uses the opposite positive direction to the viewer's
  // X/Z azimuth convention, so rotate source minus target here.
  return photoEnvironmentSunAzimuth - desiredSunAzimuth;
}

function withPhotoEnvironment(callback) {
  const previousEnvironment = scene.environment;
  const previousIntensity = scene.environmentIntensity;
  const previousRotation = scene.environmentRotation.clone();
  const previousSunVisibility = sun.visible;

  scene.environment = photoEnvironment;
  scene.environmentIntensity = 0.8;
  scene.environmentRotation.set(0, getPhotoEnvironmentRotation(), 0);
  // The HDRI already contains a real sun, so never add a second one.
  sun.visible = false;

  try {
    return callback();
  } finally {
    scene.environment = previousEnvironment;
    scene.environmentIntensity = previousIntensity;
    scene.environmentRotation.copy(previousRotation);
    sun.visible = previousSunVisibility;
  }
}

function updatePhotoEnvironmentDirection() {
  if (!active || !pathTracer || !photoEnvironment) return;
  withPhotoEnvironment(() => pathTracer.updateEnvironment());
}

function schedulePhotoEnvironmentUpdate() {
  if (!active || !pathTracer || !photoEnvironment) return;
  clearTimeout(environmentUpdateTimer);
  setStatus("PATH TRACER · updating light…");
  environmentUpdateTimer = window.setTimeout(() => {
    environmentUpdateTimer = 0;
    if (!active || !pathTracer || !photoEnvironment) return;
    updatePhotoEnvironmentDirection();
    setPhotoPaused(false);
    setStatus("PATH TRACER · refining image…");
  }, 180);
}

function getFallbackGlassTransmission() {
  const minimum = Number(transparency?.min ?? 30);
  const maximum = Number(transparency?.max ?? 85);
  const value = Number(transparency?.value ?? 68);
  return transmissionFromTransparencyControl(value, minimum, maximum);
}

function createPhotoGlassMaterial(material) {
  const converted = new THREE.MeshPhysicalMaterial({
    color: material.color?.clone() ?? new THREE.Color(0xf7fbff),
    map: material.map ?? null,
    normalMap: material.normalMap ?? null,
    normalScale: material.normalScale?.clone() ?? new THREE.Vector2(1, 1),
    bumpMap: material.bumpMap ?? null,
    bumpScale: material.bumpScale ?? 1,
    roughness: 0.08,
    metalness: 0,
    transmission: getFallbackGlassTransmission(),
    ior: Number(material.ior) || 1.5,
    thickness: 0,
    attenuationColor:
      material.attenuationColor?.clone() ?? new THREE.Color(0xffffff),
    attenuationDistance:
      Number.isFinite(material.attenuationDistance)
        ? material.attenuationDistance
        : Infinity,
    specularIntensity: Number(material.specularIntensity) || 1,
    opacity: 1,
    transparent: false,
    side: material.side ?? THREE.DoubleSide,
    vertexColors: material.vertexColors ?? false,
    depthWrite: true
  });

  converted.name = `${material.name || material.type} (PHOTO GLASS)`;
  converted.userData.photoFallbackGlass = true;
  convertedMaterialCache.set(material, converted);
  convertedMaterials.push(converted);
  convertedGlassMaterials.push(converted);
  return converted;
}

function updatePhotoGlassTransmission() {
  const transmission = getFallbackGlassTransmission();
  convertedGlassMaterials.forEach(material => {
    if (material.userData.photoFallbackGlass) {
      material.transmission = transmission;
    }
  });
}

function convertMaterial(material) {
  if (!material) return material;

  // GLTFLoader has already built the correct MeshPhysicalMaterial for
  // KHR_materials_transmission. Preserve that exact authored instance.
  if (hasAuthoredPhysicalTransmission(material)) return material;

  const cached = convertedMaterialCache.get(material);
  if (cached) return cached;

  if (isPhotoGlassFallbackCandidate(material)) {
    return createPhotoGlassMaterial(material);
  }

  if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) return material;

  const converted = new THREE.MeshStandardMaterial({
    color: material.color?.clone() ?? new THREE.Color(0xffffff),
    map: material.map ?? null,
    alphaMap: material.alphaMap ?? null,
    normalMap: material.normalMap ?? null,
    normalScale: material.normalScale?.clone() ?? new THREE.Vector2(1, 1),
    bumpMap: material.bumpMap ?? null,
    bumpScale: material.bumpScale ?? 1,
    emissive: material.emissive?.clone() ?? new THREE.Color(0x000000),
    emissiveMap: material.emissiveMap ?? null,
    emissiveIntensity: material.emissiveIntensity ?? 1,
    roughness: 0.72,
    metalness: 0,
    opacity: material.opacity ?? 1,
    transparent: material.transparent ?? false,
    alphaTest: material.alphaTest ?? 0,
    side: material.side ?? THREE.FrontSide,
    vertexColors: material.vertexColors ?? false
  });

  converted.name = `${material.name || material.type} (PHOTO)`;
  converted.depthWrite = material.depthWrite;
  convertedMaterialCache.set(material, converted);
  convertedMaterials.push(converted);
  return converted;
}

function withPhotoMaterials(callback) {
  const swaps = [];

  State.model?.traverse(object => {
    if (!object.isMesh || !object.material) return;
    swaps.push([object, object.material]);
    object.material = Array.isArray(object.material)
      ? object.material.map(convertMaterial)
      : convertMaterial(object.material);
  });

  if (State.ground) {
    swaps.push([State.ground, State.ground.material]);
    State.ground.material = photoGroundMaterial;
  }

  try {
    return withPhotoEnvironment(callback);
  } finally {
    swaps.forEach(([object, material]) => {
      object.material = material;
    });
  }
}

function prepareScene() {
  if (!pathTracer || !State.model) return;

  preparing = true;
  setStatus("PATH TRACER · preparing scene…");

  try {
    withPhotoMaterials(() => pathTracer.setScene(scene, State.camera));
    cameraSignature = getCameraSignature();
    sceneDirty = false;
    setStatus("PATH TRACER · refining image…");
  } finally {
    preparing = false;
  }
}

function updateControlAvailability() {
  const locked = active;
  if (environmentButton) environmentButton.disabled = locked;
  if (aoButton) aoButton.disabled = locked;
  if (shadowToggle) shadowToggle.disabled = locked;
  if (sunAngle) {
    sunAngle.disabled = false;
    sunAngle.title = "Shared sun direction for ORIGINAL and PATH TRACER";
  }
  if (sunHeight) {
    sunHeight.disabled = locked;
    if (locked)
      sunHeight.title = "Adjusts the ORIGINAL sun only; PATH TRACER HDRI height is fixed";
    else sunHeight.removeAttribute("title");
  }
}

function restoreViewerStatus() {
  if (!State.model) return;
  const name = State.currentFileName || "Model";
  setStatus(`${name} · drag to orbit · scroll/pinch to zoom`);
}

function disposePhotoResources() {
  pathTracer?.dispose();
  pathTracer = null;
  photoEnvironment?.dispose();
  photoEnvironment = null;
  photoGroundMaterial?.dispose();
  photoGroundMaterial = null;
  convertedMaterials.forEach(material => material.dispose());
  convertedMaterials = [];
  convertedGlassMaterials = [];
  convertedMaterialCache = new WeakMap();
  clearTimeout(environmentUpdateTimer);
  clearTimeout(materialUpdateTimer);
  environmentUpdateTimer = 0;
  materialUpdateTimer = 0;
}

async function activatePhoto1() {
  if (active || !State.model || State.sectionEnabled) return;

  if (State.currentMode !== "original") {
    document.querySelector('[data-mode="original"]')?.click();
  }

  active = true;
  preparing = true;
  paused = false;
  setCameraInteractionLocked(true);
  const currentActivation = ++activation;
  photo1Button.classList.add("active");
  photo1Button.setAttribute("aria-pressed", "true");
  photo1Button.setAttribute("aria-busy", "true");
  updatePhotoButtonState();
  updateControlAvailability();
  setStatus("PATH TRACER · loading renderer…");

  try {
    const [
      { WebGLPathTracer },
      { GradientEquirectTexture },
      { HDRLoader }
    ] = await Promise.all([
      import("three-gpu-pathtracer/src/core/WebGLPathTracer.js"),
      import("three-gpu-pathtracer/src/textures/GradientEquirectTexture.js"),
      import("three/addons/loaders/HDRLoader.js")
    ]);

    if (!active || currentActivation !== activation || !State.model) return;

    setStatus("PATH TRACER · loading HDRI lighting…");
    const loadedEnvironment = await loadPhotoEnvironment(
      HDRLoader,
      GradientEquirectTexture
    );
    if (!active || currentActivation !== activation || !State.model) {
      loadedEnvironment.dispose();
      return;
    }
    photoEnvironment = loadedEnvironment;

    photoGroundMaterial = new THREE.MeshStandardMaterial({
      color: scene.background,
      roughness: 0.94,
      metalness: 0,
      side: THREE.DoubleSide
    });

    pathTracer = new WebGLPathTracer(renderer);
    pathTracer.bounces = 6;
    pathTracer.transmissiveBounces = 10;
    pathTracer.multipleImportanceSampling = true;
    pathTracer.filterGlossyFactor = 0.35;
    pathTracer.stableNoise = true;
    pathTracer.dynamicLowRes = true;
    pathTracer.lowResScale = 0.25;
    pathTracer.renderScale = 1;
    pathTracer.renderDelay = 90;
    pathTracer.minSamples = 2;
    pathTracer.fadeDuration = 240;
    pathTracer.tiles.set(2, 2);

    // Let the loading message reach the screen before the synchronous BVH build.
    await new Promise(resolve => requestAnimationFrame(resolve));
    if (!active || currentActivation !== activation) return;
    prepareScene();
  } catch (error) {
    console.error("PATH TRACER could not start", error);
    deactivatePhoto1({ restoreStatus: false });
    setStatus("PATH TRACER IS NOT AVAILABLE ON THIS DEVICE.");
  } finally {
    if (currentActivation === activation) {
      preparing = false;
      photo1Button.removeAttribute("aria-busy");
    }
  }
}

photo1Button?.addEventListener("click", () => {
  if (!active) activatePhoto1();
  else if (pathTracer && !preparing) setPhotoPaused(!paused);
});

sunAngle?.addEventListener("input", () => {
  queueMicrotask(schedulePhotoEnvironmentUpdate);
});

transparency?.addEventListener("input", () => {
  // The regular material appearance listener runs in the same event turn.
  queueMicrotask(() => {
    if (!active || !pathTracer) return;
    clearTimeout(materialUpdateTimer);
    materialUpdateTimer = window.setTimeout(() => {
      materialUpdateTimer = 0;
      if (!active || !pathTracer) return;
      updatePhotoGlassTransmission();
      pathTracer.updateMaterials();
      setPhotoPaused(false);
    }, 180);
  });
});

export function deactivatePhoto1({ restoreStatus = true } = {}) {
  if (!active && !pathTracer) return;

  active = false;
  preparing = false;
  paused = false;
  ++activation;
  photo1Button?.classList.remove("active");
  photo1Button?.setAttribute("aria-pressed", "false");
  photo1Button?.removeAttribute("aria-busy");
  updatePhotoButtonState();
  disposePhotoResources();
  setCameraInteractionLocked(false);
  updateControlAvailability();
  updatePhoto1Availability();
  if (restoreStatus) restoreViewerStatus();
}

export function invalidatePhoto1Scene() {
  if (active) {
    sceneDirty = true;
    setPhotoPaused(false);
  }
}

export function updatePhoto1Availability() {
  if (!photo1Button) return;

  const webgl2 =
    typeof WebGL2RenderingContext !== "undefined" &&
    renderer.getContext() instanceof WebGL2RenderingContext;
  const available = Boolean(State.model) && !State.sectionEnabled && webgl2;
  photo1Button.disabled = !available;

  if (!webgl2) photo1Button.title = "PATH TRACER requires WebGL 2";
  else if (State.sectionEnabled)
    photo1Button.title = "Turn off SECTION before using PATH TRACER";
  else photo1Button.title = "Progressive path tracing";
}

export function resizePhoto1() {
  if (active && pathTracer) {
    pathTracer.reset();
    setPhotoPaused(false);
  }
}

export function getPhoto1Stats() {
  if (!active) return null;
  return {
    preparing,
    compiling: Boolean(pathTracer?.isCompiling),
    paused,
    samples: pathTracer?.samples ?? 0
  };
}

export function renderPhoto1() {
  if (!active) return false;

  if (!pathTracer || preparing) {
    renderer.render(scene, State.camera);
    return true;
  }

  if (sceneDirty) prepareScene();

  const nextCameraSignature = getCameraSignature();
  if (nextCameraSignature !== cameraSignature) {
    if (pathTracer.camera !== State.camera) pathTracer.setCamera(State.camera);
    else pathTracer.updateCamera();
    cameraSignature = nextCameraSignature;
  }

  if (paused) return true;

  pathTracer.renderSample();
  return true;
}

updatePhoto1Availability();
updatePhotoButtonState();
