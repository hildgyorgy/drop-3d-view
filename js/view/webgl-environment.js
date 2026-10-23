// Subtle HDRI fill and reflections for the normal WebGL viewer. The background
// stays a solid color, and the path tracer temporarily installs its own HDRI.
import * as THREE from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { scene } from "../core/scene.js";
import { State } from "../core/state.js";
import { getSunDirectionFromControls } from "./ground-sun.js";
import { environmentSunDirectionFromPixel } from "../model/sun-metadata.js";

const ENVIRONMENT_INTENSITY = 0.2;
const sourceSun = new THREE.Vector3();
let environment = null;
let loading = null;

function alignWithSun() {
  if (!environment || sourceSun.lengthSq() < 1e-8) return;
  const rotation = new THREE.Quaternion().setFromUnitVectors(
    sourceSun, getSunDirectionFromControls()
  );
  scene.environmentRotation.setFromQuaternion(rotation);
}

async function loadEnvironment() {
  if (environment || loading) return loading;
  loading = new HDRLoader().setDataType(THREE.FloatType)
    .loadAsync(new URL("assets/hdri/backdrop.hdr", document.baseURI).href)
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
      environment = texture;
      scene.environment = texture;
      scene.environmentIntensity = ENVIRONMENT_INTENSITY;
      alignWithSun();
    })
    .catch(error => console.warn("WebGL HDRI could not be loaded; using the original lighting", error))
    .finally(() => { loading = null; });
  return loading;
}

window.addEventListener("dropview:model-loaded", () => {
  if (environment) alignWithSun();
  else if (State.model) void loadEnvironment();
});
for (const selector of ["#sunAngle", "#sunHeight"])
  document.querySelector(selector)?.addEventListener("input", alignWithSun);
