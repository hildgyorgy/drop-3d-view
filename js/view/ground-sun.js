/*
   GROUND / SUN / SHADOW TOGGLE

   A talajsík (ami az árnyékot fogadja), a nap (irányfény,
   szög és magasság csúszkákkal állítható), valamint az
   árnyékok be/kikapcsolása.
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { scene, renderer, sun } from "../core/scene.js";
import { sunAngle, sunHeight, shadowToggle } from "../core/dom.js";
import { renaissanceMaterial } from "../model/materials.js";
import {
  normalizeImportedSunDirection,
  sunControlAngles
} from "../model/sun-metadata.js";

/* ======================================================
   GROUND
====================================================== */

export function createGround() {
  if (State.ground) scene.remove(State.ground);

  const geometry = new THREE.PlaneGeometry(
    State.maxModelSize * 10,
    State.maxModelSize * 10
  );

  const material = new THREE.ShadowMaterial({
    color: 0x000000,
    opacity: 0.18
  });

  State.ground = new THREE.Mesh(geometry, material);

  State.ground.rotation.x = -Math.PI / 2;

  State.ground.position.set(State.modelCenter.x, 0.001, State.modelCenter.z);

  State.ground.receiveShadow = true;

  scene.add(State.ground);
}

/* ======================================================
   SUN
====================================================== */

sunAngle.addEventListener("input", configureSun);

sunHeight.addEventListener("input", configureSun);

export function getSunDirectionFromControls() {
  const azimuth = THREE.MathUtils.degToRad(Number(sunAngle.value));
  const elevation = THREE.MathUtils.degToRad(Number(sunHeight.value));
  const horizontal = Math.cos(elevation);
  return new THREE.Vector3(
    Math.cos(azimuth) * horizontal,
    Math.sin(elevation),
    Math.sin(azimuth) * horizontal
  );
}

export function configureSun() {
  if (!State.model) return;

  const direction = getSunDirectionFromControls();
  const radius = State.maxModelSize * 3;
  sun.position.copy(State.modelCenter).addScaledVector(direction, radius);
  sun.target.position.copy(State.modelCenter);
  sun.target.updateMatrixWorld();
  sun.updateMatrixWorld();

  const extent = State.maxModelSize * 0.9;

  sun.shadow.camera.left = -extent;

  sun.shadow.camera.right = extent;

  sun.shadow.camera.top = extent;

  sun.shadow.camera.bottom = -extent;

  sun.shadow.camera.near = State.maxModelSize * 0.01;

  sun.shadow.camera.far = State.maxModelSize * 8;

  sun.shadow.camera.updateProjectionMatrix();
}

export function applyImportedSun(sunData) {
  State.exportedSun = sunData ?? null;
  State.hasImportedSun = false;

  const components = normalizeImportedSunDirection(sunData);
  if (!components || !State.model) return false;

  // The viewer currently only translates the scene. Transforming a direction
  // through its world matrix also covers a future whole-model rotation.
  const direction = new THREE.Vector3(...components).transformDirection(
    State.model.matrixWorld
  );
  if (![direction.x, direction.y, direction.z].every(Number.isFinite) || direction.y <= 0)
    return false;

  const { azimuth, height } = sunControlAngles(direction.toArray());
  sunAngle.value = String(azimuth);
  sunHeight.min = String(Math.min(5, Math.floor(height)));
  sunHeight.max = String(Math.max(85, Math.ceil(height)));
  sunHeight.value = String(height);
  State.hasImportedSun = true;
  configureSun();
  return true;
}

/* ======================================================
   SHADOW TOGGLE
====================================================== */

shadowToggle.addEventListener("change", () => {
  renderer.shadowMap.enabled = shadowToggle.checked;

  sun.castShadow = shadowToggle.checked;

  if (State.ground) State.ground.visible = shadowToggle.checked;

  /*
       Shadow define változhat,
       ezért kényszerítjük az újrafordítást.
    */

  renaissanceMaterial.needsUpdate = true;
});
