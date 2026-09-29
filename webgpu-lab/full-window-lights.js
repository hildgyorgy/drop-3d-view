/*
   WINDOW LIGHTS

   The exporter supplies a world-space rectangle for selected Archicad window
   lights. A RectAreaLight has no visible mesh: it illuminates the model without
   covering the glazing. These are viewer-side fill lights, not a physically
   calibrated reproduction of Archicad's renderer.
*/

import * as THREE from "three";
import { RectAreaLightNode } from "three/webgpu";
import { RectAreaLightTexturesLib } from "three/addons/lights/RectAreaLightTexturesLib.js";
import { scene } from "../js/core/scene.js";
import { windowLightsToggle, windowLightsIntensity } from "../js/core/dom.js";
import { updatePhoto1Lights } from "../js/view/photo1.js";

const lights = [];
let uniformsInitialized = false;

function applyWindowLightControls() {
  const enabled = Boolean(windowLightsToggle?.checked);
  // This is deliberately a viewer-relative brightness scale, not the
  // uncalibrated Archicad percentage stored in the GLB.
  const intensity = Number(windowLightsIntensity?.value ?? 5) * 0.25;
  for (const light of lights) {
    light.visible = enabled;
    light.intensity = intensity;
  }
  updatePhoto1Lights();
}

function updateAvailability() {
  const available = lights.length > 0;
  if (windowLightsToggle) windowLightsToggle.disabled = !available;
  if (windowLightsIntensity)
    windowLightsIntensity.disabled = !available || !windowLightsToggle?.checked;
}

export function clearWindowLights() {
  for (const light of lights) scene.remove(light);
  lights.length = 0;
  if (windowLightsToggle) windowLightsToggle.checked = false;
  if (windowLightsIntensity) windowLightsIntensity.value = "5";
  updateAvailability();
}

export function configureWindowLights(emitters, modelTranslation) {
  clearWindowLights();
  if (!emitters?.length) return;
  if (!uniformsInitialized) {
    RectAreaLightNode.setLTC(RectAreaLightTexturesLib.init());
    uniformsInitialized = true;
  }

  for (const emitter of emitters) {
    const position = new THREE.Vector3(...emitter.center).add(modelTranslation);
    const normal = new THREE.Vector3(...emitter.normal).normalize();
    const light = new THREE.RectAreaLight(
      new THREE.Color().setRGB(...emitter.color),
      0,
      emitter.width,
      emitter.height
    );
    light.position.copy(position);
    light.up.set(...emitter.heightAxis);
    light.lookAt(position.clone().add(normal));
    scene.add(light);
    lights.push(light);
  }

  updateAvailability();
  applyWindowLightControls();
}

windowLightsToggle?.addEventListener("change", () => {
  updateAvailability();
  applyWindowLightControls();
});
windowLightsIntensity?.addEventListener("input", applyWindowLightControls);

updateAvailability();
