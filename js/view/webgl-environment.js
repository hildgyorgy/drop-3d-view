// Subtle HDRI fill and reflections for the normal WebGL viewer. The background
// stays a solid color, and the path tracer temporarily installs its own HDRI.
import * as THREE from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { scene, renderer } from "../core/scene.js";
import { State } from "../core/state.js";
import { getSunDirectionFromControls } from "./ground-sun.js";
import { environmentSunDirectionFromPixel } from "../model/sun-metadata.js";
import { getEnvironmentSource } from "../core/environment-source.js";

const ENVIRONMENT_INTENSITY = 0.2;
const toggle = document.querySelector("#previewHdriToggle");
const control = document.querySelector("#previewHdriControl");
const traceButton = document.querySelector("#photo1Button");
const sourceSun = new THREE.Vector3();
let environment = null;
let loading = null;
let loadedUrl = null;
let loadingUrl = null;
let environmentTarget = null;

// Production always uses the calibrated HDRI. Keep the comparison switch only
// in debug mode, starting enabled and without storing a browser preference.
control.hidden = !new URLSearchParams(location.search).has("rendererDebug");
toggle.checked = true;

function applyEnvironment() {
  // PHOTO owns a separate environment; never replace it from this switch.
  if (State.pathTracerActive) return;
  scene.environment = toggle.checked ? environment : null;
  scene.environmentIntensity = ENVIRONMENT_INTENSITY;
  if (scene.environment) alignWithSun();
}

function alignWithSun() {
  if (!environment || sourceSun.lengthSq() < 1e-8) return;
  const rotation = new THREE.Quaternion().setFromUnitVectors(
    sourceSun, getSunDirectionFromControls()
  );
  scene.environmentRotation.setFromQuaternion(rotation);
}

async function loadEnvironment() {
  const source = getEnvironmentSource();
  if (environment && loadedUrl === source.url) return;
  if (loading && loadingUrl === source.url) return loading;
  loadingUrl = source.url;
  const request = new HDRLoader().setDataType(THREE.FloatType)
    .loadAsync(source.url)
    .then(texture => {
      if (getEnvironmentSource().url !== source.url) { texture.dispose(); return; }
      const { data, width, height } = texture.image ?? {};
      if (data instanceof Float32Array && width && height) {
        let brightest = 0;
        let maximum = -Infinity;
        const stride = Math.floor(data.length / (width * height));
        for (let i = 0; i < width * height; i++) {
          const p = i * stride;
          const luminance = 0.2126 * data[p] + 0.7152 * data[p + 1] + 0.0722 * data[p + 2];
          if (luminance > maximum) { maximum = luminance; brightest = i; }
        }
        sourceSun.fromArray(environmentSunDirectionFromPixel(
          brightest % width, Math.floor(brightest / width), width, height
        )).normalize();
        // Match WebGPU and PHOTO: the preview's PMREM stores half floats.
        // Clip rare solar peaks before upload so they cannot become infinity.
        for (let i = 0; i < data.length; i++)
          data[i] = Math.min(65504, Math.max(-65504, data[i]));
        texture.needsUpdate = true;
      }
      texture.mapping = THREE.EquirectangularReflectionMapping;
      const generator = new THREE.PMREMGenerator(renderer);
      try {
        // Finish the GPU conversion before revealing the model. Assigning the
        // prefiltered texture also avoids another conversion on the first frame.
        const previous = environmentTarget;
        environmentTarget = generator.fromEquirectangular(texture);
        environment = environmentTarget.texture;
        loadedUrl = source.url;
        previous?.dispose();
      } finally {
        generator.dispose();
        texture.dispose();
      }
      applyEnvironment();
    })
    .catch(error => {
      if (getEnvironmentSource().url !== source.url) return;
      environmentTarget?.dispose();
      environmentTarget = environment = loadedUrl = null;
      applyEnvironment();
      if (source.embedded) throw error;
      console.warn("WebGL HDRI could not be loaded; using the original lighting", error);
    })
    .finally(() => { if (loading === request) loading = null; });
  loading = request;
  return request;
}

export function preparePreviewEnvironment() {
  return toggle.checked ? loadEnvironment() : Promise.resolve();
}

window.addEventListener("dropview:model-loaded", () => {
  // Model preparation has already awaited loading. Only align with its final
  // sun here; a failed download must not trigger a late lighting change.
  if (toggle.checked && environment) applyEnvironment();
});
toggle.addEventListener("change", () => {
  applyEnvironment();
  if (toggle.checked) void loadEnvironment();
});
const updateAvailability = () => {
  toggle.disabled = State.pathTracerActive;
  applyEnvironment();
};
new MutationObserver(updateAvailability).observe(traceButton, {
  attributes: true, attributeFilter: ["aria-pressed"]
});
updateAvailability();
for (const selector of ["#sunAngle", "#sunHeight"])
  document.querySelector(selector)?.addEventListener("input", alignWithSun);
