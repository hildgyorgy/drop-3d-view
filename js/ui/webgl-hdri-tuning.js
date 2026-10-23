// Debug-only WebGL preview experiment. Keep the public WebGL lighting intact;
// the WebGL path tracer owns a separate HDRI and must never inherit this one.
import * as THREE from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { scene } from "../core/scene.js";
import { getSunDirectionFromControls } from "../view/ground-sun.js";
import { environmentSunDirectionFromPixel } from "../model/sun-metadata.js";

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("../../css/webgl-hdri-tuning.css", import.meta.url).href;
document.head.append(stylesheet);

const panel = document.createElement("details");
panel.id = "webglHdriTuning";
panel.innerHTML = `<summary>WEBGL HDRI TUNING</summary>
  <div class="hdri-body">
    <p>Preview only. HDRI reflections and visible backdrop are independent; neither casts shadows.</p>
    <label><input type="checkbox" data-hdri="lighting">HDRI LIGHT + REFLECTIONS</label>
    <label class="hdri-strength"><span>HDRI STRENGTH <output>0.20</output></span>
      <input type="range" data-hdri="strength" min="0" max="1" step="0.01" value="0.2"></label>
    <label><input type="checkbox" data-hdri="background">SHOW HDRI BACKGROUND</label>
    <button type="button" data-hdri="reset">RESET</button>
    <output role="status" aria-live="polite"></output>
  </div>`;
document.body.append(panel);

const lighting = panel.querySelector('[data-hdri="lighting"]');
const background = panel.querySelector('[data-hdri="background"]');
const strength = panel.querySelector('[data-hdri="strength"]');
const strengthValue = panel.querySelector(".hdri-strength output");
const status = panel.querySelector('.hdri-body > output');
const pathTracerButton = document.querySelector("#photo1Button");
const neutralBackground = new THREE.Color(0xefefed);
const blackBackground = new THREE.Color(0x000000);
const sourceSun = new THREE.Vector3();
let hdri = null;
let loading = null;
let loadFailed = false;

function pathTracing() {
  return pathTracerButton?.getAttribute("aria-pressed") === "true";
}

function alignWithSun() {
  if (!hdri || sourceSun.lengthSq() < 1e-8) return;
  const rotation = new THREE.Quaternion().setFromUnitVectors(
    sourceSun, getSunDirectionFromControls()
  );
  scene.environmentRotation.setFromQuaternion(rotation);
  scene.backgroundRotation.copy(scene.environmentRotation);
}

function apply() {
  const tracing = pathTracing();
  const enabled = Boolean(hdri) && !tracing;
  scene.environment = enabled && lighting.checked ? hdri : null;
  scene.environmentIntensity = scene.environment ? Number(strength.value) : 1;
  scene.background = enabled && background.checked &&
    !document.documentElement.classList.contains("black-back-active")
    ? hdri
    : document.documentElement.classList.contains("black-back-active")
      ? blackBackground : neutralBackground;
  if (enabled) alignWithSun();
  panel.setAttribute("aria-disabled", String(tracing));
  panel.querySelectorAll("input, button").forEach(control => { control.disabled = tracing; });
  if (tracing) status.textContent = "PATH TRACER uses its own HDRI; preview settings are paused.";
  else if (loading) status.textContent = "LOADING HDRI…";
  else if (loadFailed) status.textContent = "HDRI COULD NOT BE LOADED.";
  else status.textContent = "";
}

async function ensureHdri() {
  if (hdri) return;
  if (loading) return loading;
  loadFailed = false;
  loading = new HDRLoader().setDataType(THREE.FloatType)
    .loadAsync(new URL("../../assets/hdri/backdrop.hdr", import.meta.url).href)
    .then(texture => {
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
      }
      texture.mapping = THREE.EquirectangularReflectionMapping;
      hdri = texture;
      alignWithSun();
      apply();
    })
    .catch(error => {
      console.warn("WebGL preview HDRI unavailable", error);
      lighting.checked = false;
      background.checked = false;
      loadFailed = true;
    })
    .finally(() => { loading = null; apply(); });
  apply();
  return loading;
}

for (const input of [lighting, background]) input.addEventListener("change", () => {
  if (input.checked) void ensureHdri();
  apply();
});
strength.addEventListener("input", () => {
  strengthValue.textContent = Number(strength.value).toFixed(2);
  apply();
});
panel.querySelector('[data-hdri="reset"]').addEventListener("click", () => {
  lighting.checked = false;
  background.checked = false;
  strength.value = "0.2";
  strengthValue.textContent = "0.20";
  apply();
});
for (const control of ["#sunAngle", "#sunHeight"])
  document.querySelector(control)?.addEventListener("input", alignWithSun);
window.addEventListener("dropview:model-loaded", alignWithSun);
window.addEventListener("dropview:base-background-changed", apply);
if (pathTracerButton) new MutationObserver(apply).observe(pathTracerButton, {
  attributes: true, attributeFilter: ["aria-pressed"]
});
apply();
