import * as THREE from "three/webgpu";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { WebGPUPathTracer } from "three-gpu-pathtracer/src/webgpu/WebGPUPathTracer.js";
import {
  readDropViewMetadata,
  readWindowLightEmitters
} from "../js/model/drop-view-metadata.js";
import {
  environmentSunDirectionFromPixel,
  normalizeImportedSunDirection
} from "../js/model/sun-metadata.js";

const ui = Object.fromEntries(
  ["canvasHost", "hint", "status", "demo", "file", "trace", "pause", "fit", "lights", "resolution"]
    .map(id => [id, document.getElementById(id)])
);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xefefed);
scene.environmentIntensity = 0.8;

const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.01, 100000);
camera.position.set(10, 8, 10);
const sun = new THREE.DirectionalLight(0xffffff, 3.3);
scene.add(sun, sun.target);

let renderer;
let controls;
let tracer;
let model;
let bounds;
let modelTranslation = new THREE.Vector3();
let emitters = [];
let sourceSunDirection = null;
let sampleTimer = 0;
let sampleRequestPending = false;
let startedAt = 0;
let currentLoad = 0;

function status(message, error = false) {
  ui.status.textContent = message;
  ui.status.classList.toggle("error", error);
}

function findHdrSunDirection(texture) {
  const { data, width, height } = texture.image ?? {};
  if (!(data instanceof Float32Array) || !width || !height) return null;

  let brightestPixel = 0;
  let brightestLuminance = -Infinity;
  const stride = Math.floor(data.length / (width * height));
  for (let pixel = 0; pixel < width * height; pixel++) {
    const offset = pixel * stride;
    const luminance = 0.2126 * data[offset] + 0.7152 * data[offset + 1] + 0.0722 * data[offset + 2];
    if (luminance > brightestLuminance) {
      brightestLuminance = luminance;
      brightestPixel = pixel;
    }
  }

  return new THREE.Vector3(
    ...environmentSunDirectionFromPixel(
      brightestPixel % width,
      Math.floor(brightestPixel / width),
      width,
      height
    )
  ).normalize();
}

function setImportedSun(metadata) {
  const imported = normalizeImportedSunDirection(metadata.sun);
  const direction = imported
    ? new THREE.Vector3(...imported)
    : new THREE.Vector3(0.6, 0.65, 0.45).normalize();
  const target = bounds.getCenter(new THREE.Vector3());
  const distance = bounds.getSize(new THREE.Vector3()).length() * 3;
  sun.position.copy(target).addScaledVector(direction, distance);
  sun.target.position.copy(target);
  sun.target.updateMatrixWorld();

  if (sourceSunDirection && imported) {
    scene.environmentRotation.setFromQuaternion(
      new THREE.Quaternion().setFromUnitVectors(sourceSunDirection, direction)
    );
  } else {
    scene.environmentRotation.set(0, 0, 0);
  }
}

function fitCamera(metadata = null) {
  if (!bounds) return;
  const target = bounds.getCenter(new THREE.Vector3());
  const initial = metadata?.initialView;
  const direction = initial?.position?.length === 3 && initial?.target?.length === 3
    ? new THREE.Vector3(...initial.position).sub(new THREE.Vector3(...initial.target))
    : new THREE.Vector3(1, 0.7, 1);
  if (!direction.lengthSq()) direction.set(1, 0.7, 1);
  direction.normalize();

  // The glTF camera is authoritative for perspective FOV; the lab fits the
  // entire model while retaining its exported viewing direction.
  const cameraDef = metadata?.cameraDef;
  if (cameraDef?.type === "perspective" && Number.isFinite(cameraDef.perspective?.yfov)) {
    camera.fov = THREE.MathUtils.radToDeg(cameraDef.perspective.yfov);
  } else {
    camera.fov = 42;
  }
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();

  const radius = bounds.getSize(new THREE.Vector3()).length() / 2;
  const halfY = THREE.MathUtils.degToRad(camera.fov) / 2;
  const halfX = Math.atan(Math.tan(halfY) * camera.aspect);
  const distance = radius / Math.sin(Math.min(halfX, halfY)) * 1.25;
  camera.position.copy(target).addScaledVector(direction, distance);
  camera.near = Math.max(0.01, distance / 10000);
  camera.far = Math.max(1000, distance + radius * 20);
  camera.updateProjectionMatrix();
  controls.target.copy(target);
  controls.update();
}

function clearEmitters() {
  for (const light of emitters) scene.remove(light);
  emitters = [];
}

function setTraceLightsActive(active) {
  for (const light of emitters) light.visible = active && ui.lights.checked;
}

function configureEmitters(gltf) {
  clearEmitters();
  for (const emitter of readWindowLightEmitters(gltf)) {
    const position = new THREE.Vector3(...emitter.center).add(modelTranslation);
    const light = new THREE.RectAreaLight(
      new THREE.Color().setRGB(...emitter.color),
      1.25,
      emitter.width,
      emitter.height
    );
    light.position.copy(position);
    light.up.set(...emitter.heightAxis);
    light.lookAt(position.clone().add(new THREE.Vector3(...emitter.normal)));
    light.visible = false;
    scene.add(light);
    emitters.push(light);
  }
  ui.lights.checked = false;
  ui.lights.disabled = emitters.length === 0;
}

function stopTrace() {
  if (!tracer) return;
  tracer.dispose();
  tracer = null;
  // WebGPU's raster preview needs LTC textures for RectAreaLight, while the
  // path tracer supports the exported window emitters directly.
  setTraceLightsActive(false);
  sun.visible = true;
  controls.enabled = true;
  ui.trace.textContent = "START PATH TRACER";
  ui.pause.disabled = true;
  ui.pause.textContent = "PAUSE";
  ui.fit.disabled = false;
  status("WebGPU preview · drag to orbit, scroll to zoom. Start tracing when ready.");
}

async function loadModel(url, label) {
  const loadId = ++currentLoad;
  stopTrace();
  ui.demo.disabled = true;
  ui.trace.disabled = true;
  status(`Opening ${label}…`);
  try {
    const gltf = await new GLTFLoader().loadAsync(url);
    if (loadId !== currentLoad) return;

    if (model) scene.remove(model);
    clearEmitters();
    model = gltf.scene;
    scene.add(model);

    const box = new THREE.Box3().setFromObject(model);
    const centre = box.getCenter(new THREE.Vector3());
    modelTranslation = new THREE.Vector3(-centre.x, -box.min.y, -centre.z);
    model.position.add(modelTranslation);
    model.updateMatrixWorld(true);
    bounds = new THREE.Box3().setFromObject(model);

    const metadata = readDropViewMetadata(gltf);
    const sceneIndex = gltf.parser.json.scene ?? 0;
    const cameraIndex = metadata.initialView?.camera;
    metadata.cameraDef = gltf.parser.json.cameras?.[cameraIndex];
    fitCamera(metadata);
    setImportedSun(metadata);
    configureEmitters(gltf);

    ui.hint.hidden = true;
    ui.trace.disabled = false;
    ui.fit.disabled = false;
    status(`${label} · WebGPU preview ready · ${emitters.length} usable window light(s).`);
  } catch (error) {
    console.error(error);
    status(`Could not open ${label}: ${error.message}`, true);
  } finally {
    if (loadId === currentLoad) ui.demo.disabled = false;
  }
}

function startTrace() {
  if (!model || tracer) return;
  controls.enabled = false;
  sun.visible = false; // The HDRI already contains a sun.
  setTraceLightsActive(true);
  status("Building WebGPU path-tracing scene…");
  try {
    tracer = new WebGPUPathTracer(renderer);
    tracer.maxBounces = 6;
    tracer.maxTransparentBounces = 10;
    tracer.filterGlossyFactor = 0.35;
    tracer.multipleImportanceSampling = true;
    tracer.renderDelay = 90;
    tracer.minSamples = 1;
    tracer.lowResScale = 0.25;
    tracer.renderScale = 1;
    tracer.setScene(scene, camera);
    startedAt = performance.now();
    ui.trace.textContent = "BACK TO PREVIEW";
    ui.pause.disabled = false;
    ui.fit.disabled = true;
    status("WebGPU path tracer · refining image…");
  } catch (error) {
    console.error(error);
    stopTrace();
    setTraceLightsActive(false);
    sun.visible = true;
    controls.enabled = true;
    status(`WebGPU path tracer failed: ${error.message}`, true);
  }
}

async function updateSamples() {
  if (!tracer || sampleRequestPending) return;
  sampleRequestPending = true;
  try {
    const counts = await tracer.getSampleCountsAsync();
    if (!tracer) return;
    const elapsed = ((performance.now() - startedAt) / 1000).toFixed(1);
    status(`WebGPU path tracer · ${counts.avg.toFixed(1)} avg samples/pixel · ${elapsed}s · ${tracer.pause ? "paused" : "refining"}`);
  } catch (error) {
    console.warn("Sample measurement failed", error);
  } finally {
    sampleRequestPending = false;
  }
}

async function boot() {
  if (!navigator.gpu) {
    status("This browser does not expose WebGPU. Try a recent Safari or Chrome.", true);
    ui.demo.disabled = true;
    return;
  }

  try {
    renderer = new THREE.WebGPURenderer({ antialias: true });
    renderer.setPixelRatio(1);
    renderer.setSize(innerWidth, innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    await renderer.init();
    if (renderer.backend?.isWebGLBackend) {
      throw new Error("WebGPU backend unavailable; refusing the WebGL fallback for this test.");
    }

    ui.canvasHost.appendChild(renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.addEventListener("change", () => {
      if (tracer) tracer.updateCamera();
    });

    try {
      const environment = await new HDRLoader()
        .setDataType(THREE.FloatType)
        .loadAsync("/assets/hdri/backdrop.hdr");
      const data = environment.image?.data;
      if (data instanceof Float32Array) {
        for (let i = 0; i < data.length; i++) data[i] = Math.min(65504, Math.max(-65504, data[i]));
        environment.needsUpdate = true;
      }
      sourceSunDirection = findHdrSunDirection(environment);
      environment.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = environment;
    } catch (error) {
      console.warn("HDRI could not be loaded", error);
      status("WebGPU ready, but HDRI lighting could not be loaded.", true);
    }

    renderer.setAnimationLoop(time => {
      if (!tracer) {
        controls.update();
        renderer.render(scene, camera);
      } else {
        tracer.renderSample();
        if (time - sampleTimer > 1200) {
          sampleTimer = time;
          updateSamples();
        }
      }
    });
    status("WebGPU backend ready · load a GLB or try the demo.");
  } catch (error) {
    console.error(error);
    status(`WebGPU initialization failed: ${error.message}`, true);
    ui.demo.disabled = true;
  }
}

ui.demo.addEventListener("click", () => loadModel("/demo/demo_house.glb", "Demo house"));
ui.file.addEventListener("change", async () => {
  const file = ui.file.files?.[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  try {
    await loadModel(url, file.name);
  } finally {
    URL.revokeObjectURL(url);
    ui.file.value = "";
  }
});
ui.trace.addEventListener("click", () => tracer ? stopTrace() : startTrace());
ui.pause.addEventListener("click", () => {
  if (!tracer) return;
  tracer.pause = !tracer.pause;
  ui.pause.textContent = tracer.pause ? "RESUME" : "PAUSE";
  updateSamples();
});
ui.fit.addEventListener("click", () => fitCamera());
ui.lights.addEventListener("change", () => {
  setTraceLightsActive(Boolean(tracer));
  tracer?.updateLights();
});
ui.resolution.addEventListener("change", () => {
  if (!renderer) return;
  renderer.setPixelRatio(Number(ui.resolution.value));
  renderer.setSize(innerWidth, innerHeight);
  tracer?.reset();
});
window.addEventListener("resize", () => {
  if (!renderer) return;
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  tracer?.updateCamera();
});

boot().then(() => {
  // A local fixture URL makes one exact GLB repeatable during comparison.
  // Ordinary users can still choose a file with OPEN GLB.
  const fixture = new URLSearchParams(location.search).get("model");
  if (fixture && controls) loadModel(fixture, "Comparison GLB");
});
