// Subtle HDRI fill and reflections for the normal WebGL viewer. The background
// stays a solid color, and the path tracer temporarily installs its own HDRI.
import * as THREE from "three";
import { scene, renderer } from "../core/scene.js";
import { State } from "../core/state.js";
import { getSunDirectionFromControls } from "./ground-sun.js";
import { getEnvironmentSource } from "../core/environment-source.js";
import { loadEnvironmentTexture } from "../core/environment-texture.js";

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
let environmentGeneration = 0;

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
  const generation = environmentGeneration;
  const request = loadEnvironmentTexture(source)
    .then(({ texture, sunDirection }) => {
      if (generation !== environmentGeneration ||
          getEnvironmentSource().url !== source.url) {
        texture.dispose();
        return;
      }
      if (sunDirection) sourceSun.copy(sunDirection);
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
      if (generation !== environmentGeneration ||
          getEnvironmentSource().url !== source.url) return;
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

export async function rebuildPreviewEnvironment() {
  environmentGeneration += 1;
  loading = null;
  loadingUrl = null;
  if (scene.environment === environment) scene.environment = null;
  // The old render target belongs to the lost WebGL context. Disposing it
  // after restoration would ask the new context to delete foreign objects.
  // Its GPU allocation vanished with the old context, so only drop references.
  environmentTarget = null;
  environment = null;
  loadedUrl = null;
  if (toggle.checked) await loadEnvironment();
  else applyEnvironment();
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
