/*
   PHOTO

   Optional progressive path-traced rendering. The dependency is loaded only
   when the user asks for PHOTO, so the normal viewer keeps its original
   startup cost and behaviour.
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { scene, renderer, sun } from "../core/scene.js";
import {
  photo1Button,
  shadowToggle,
  transparency
} from "../core/dom.js";
import { isTranslucentMaterial } from "../model/materials.js";
import { setStatus } from "../ui/status.js";

const environmentButton = document.getElementById("environmentToggle");
const aoButton = document.getElementById("aoToggle");
const photoEnvironmentUrl = new URL(
  "../../assets/hdri/sunny_rose_garden_2k.hdr",
  import.meta.url
).href;

let active = false;
let preparing = false;
let activation = 0;
let pathTracer = null;
let photoEnvironment = null;
let photoGroundMaterial = null;
let convertedMaterials = [];
let convertedGlassMaterials = [];
let convertedMaterialCache = new WeakMap();
let cameraSignature = "";
let lightSignature = "";
let sceneDirty = false;

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

function getLightSignature() {
  sun.updateMatrixWorld();
  sun.target.updateMatrixWorld();
  return [
    matrixSignature(sun.matrixWorld),
    matrixSignature(sun.target.matrixWorld),
    sun.color.getHexString(),
    sun.intensity,
    sun.visible
  ].join("|");
}

function createFallbackEnvironment(GradientEquirectTexture) {
  const environment = new GradientEquirectTexture(512);
  environment.topColor.set(0xb9d5f5);
  environment.bottomColor.set(0x8b8175);
  environment.exponent = 1.65;
  environment.update();
  return environment;
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
    clampEnvironmentForHalfFloat(environment);
    environment.mapping = THREE.EquirectangularReflectionMapping;
    return environment;
  } catch (error) {
    console.warn("PHOTO HDRI could not be loaded; using gradient lighting", error);
    return createFallbackEnvironment(GradientEquirectTexture);
  }
}

function getFallbackGlassTransmission() {
  const minimum = Number(transparency?.min ?? 30);
  const maximum = Number(transparency?.max ?? 85);
  const value = Number(transparency?.value ?? 68);
  const range = Math.max(1, maximum - minimum);
  const normalized = THREE.MathUtils.clamp((value - minimum) / range, 0, 1);

  // The regular viewer's percentage controls alpha coverage. Physical glass
  // needs to stay mostly transmissive so its reflections do not disappear.
  return THREE.MathUtils.lerp(0.86, 0.98, normalized);
}

function isPhotoGlassCandidate(material) {
  const namedAsGlass =
    /(?:glass|glazing|window|crystal|verre|vitre|üveg)/i.test(material.name || "");
  const textureBackedTransparency =
    material.transparent && material.map && !namedAsGlass;

  return (
    (namedAsGlass || isTranslucentMaterial(material)) &&
    !material.alphaMap &&
    !(material.alphaTest > 0) &&
    !textureBackedTransparency
  );
}

function createPhotoGlassMaterial(material) {
  const authoredTransmission = Number(material.transmission);
  const hasAuthoredTransmission =
    Number.isFinite(authoredTransmission) && authoredTransmission > 0;
  const roughness = hasAuthoredTransmission
    ? THREE.MathUtils.clamp(Number(material.roughness ?? 0.08), 0, 1)
    : 0.08;

  const converted = new THREE.MeshPhysicalMaterial({
    color: material.color?.clone() ?? new THREE.Color(0xf7fbff),
    map: material.map ?? null,
    normalMap: material.normalMap ?? null,
    normalScale: material.normalScale?.clone() ?? new THREE.Vector2(1, 1),
    bumpMap: material.bumpMap ?? null,
    bumpScale: material.bumpScale ?? 1,
    roughness,
    metalness: 0,
    transmission: hasAuthoredTransmission
      ? authoredTransmission
      : getFallbackGlassTransmission(),
    ior: Number(material.ior) || 1.5,
    thickness: hasAuthoredTransmission ? Number(material.thickness) || 0 : 0,
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
  converted.userData.photoFallbackGlass = !hasAuthoredTransmission;
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

  const cached = convertedMaterialCache.get(material);
  if (cached) return cached;

  if (isPhotoGlassCandidate(material)) {
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

  const previousEnvironment = scene.environment;
  const previousIntensity = scene.environmentIntensity;
  const previousSunVisibility = sun.visible;
  scene.environment = photoEnvironment;
  scene.environmentIntensity = 0.8;
  // The HDRI already contains a real sun, so avoid adding a second one.
  sun.visible = false;

  try {
    return callback();
  } finally {
    scene.environment = previousEnvironment;
    scene.environmentIntensity = previousIntensity;
    sun.visible = previousSunVisibility;
    swaps.forEach(([object, material]) => {
      object.material = material;
    });
  }
}

function prepareScene() {
  if (!pathTracer || !State.model) return;

  preparing = true;
  setStatus("PHOTO · preparing path-traced scene…");

  try {
    withPhotoMaterials(() => pathTracer.setScene(scene, State.camera));
    cameraSignature = getCameraSignature();
    lightSignature = getLightSignature();
    sceneDirty = false;
    setStatus("PHOTO · move to compose · pause to refine");
  } finally {
    preparing = false;
  }
}

function updateControlAvailability() {
  const locked = active;
  if (environmentButton) environmentButton.disabled = locked;
  if (aoButton) aoButton.disabled = locked;
  if (shadowToggle) shadowToggle.disabled = locked;
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
}

async function activatePhoto1() {
  if (active || !State.model || State.sectionEnabled) return;

  if (State.currentMode !== "original") {
    document.querySelector('[data-mode="original"]')?.click();
  }

  active = true;
  preparing = true;
  const currentActivation = ++activation;
  photo1Button.classList.add("active");
  photo1Button.setAttribute("aria-pressed", "true");
  photo1Button.setAttribute("aria-busy", "true");
  updateControlAvailability();
  setStatus("PHOTO · loading renderer…");

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

    setStatus("PHOTO · loading HDRI lighting…");
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
    console.error("PHOTO could not start", error);
    deactivatePhoto1({ restoreStatus: false });
    setStatus("PHOTO IS NOT AVAILABLE ON THIS DEVICE.");
  } finally {
    if (currentActivation === activation) {
      preparing = false;
      photo1Button.removeAttribute("aria-busy");
    }
  }
}

photo1Button?.addEventListener("click", () => {
  if (active) deactivatePhoto1();
  else activatePhoto1();
});

transparency?.addEventListener("input", () => {
  // The regular material appearance listener runs in the same event turn.
  queueMicrotask(() => {
    if (active && pathTracer) {
      updatePhotoGlassTransmission();
      pathTracer.updateMaterials();
    }
  });
});

export function deactivatePhoto1({ restoreStatus = true } = {}) {
  if (!active && !pathTracer) return;

  active = false;
  preparing = false;
  ++activation;
  photo1Button?.classList.remove("active");
  photo1Button?.setAttribute("aria-pressed", "false");
  photo1Button?.removeAttribute("aria-busy");
  disposePhotoResources();
  updateControlAvailability();
  updatePhoto1Availability();
  if (restoreStatus) restoreViewerStatus();
}

export function invalidatePhoto1Scene() {
  if (active) sceneDirty = true;
}

export function updatePhoto1Availability() {
  if (!photo1Button) return;

  const webgl2 =
    typeof WebGL2RenderingContext !== "undefined" &&
    renderer.getContext() instanceof WebGL2RenderingContext;
  const available = Boolean(State.model) && !State.sectionEnabled && webgl2;
  photo1Button.disabled = !available;

  if (!webgl2) photo1Button.title = "PHOTO requires WebGL 2";
  else if (State.sectionEnabled)
    photo1Button.title = "Turn off SECTION before using PHOTO";
  else photo1Button.title = "Progressive high-quality path-traced rendering";
}

export function resizePhoto1() {
  if (active && pathTracer) pathTracer.reset();
}

export function getPhoto1Stats() {
  if (!active) return null;
  return {
    preparing,
    compiling: Boolean(pathTracer?.isCompiling),
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

  const nextLightSignature = getLightSignature();
  if (nextLightSignature !== lightSignature) {
    pathTracer.updateLights();
    lightSignature = nextLightSignature;
  }

  pathTracer.renderSample();
  return true;
}

updatePhoto1Availability();
