/*
   NAVIGATION MODES

   ORBIT   the viewer's normal OrbitControls navigation
   FLY     Three.js PointerLockControls with free 3D flight; E/Q also move vertically
*/

import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { State } from "../core/state.js";
import { renderer } from "../core/scene.js";

const modeButtons = document.querySelectorAll("[data-navigation-mode]");
const pressedKeys = new Set();
const direction = new THREE.Vector3();
const movement = new THREE.Vector3();

let pointerControls = null;
let pointerCamera = null;
let pointerLookDistance = 1;
let previousTime = null;

function editableTarget(target) {
  return target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target?.isContentEditable;
}

function navigationKey(event) {
  return [
    "KeyW", "KeyA", "KeyS", "KeyD", "KeyE", "KeyQ",
    "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
  ].includes(event.code);
}

function ensurePointerControls() {
  if (pointerCamera === State.camera && pointerControls) return pointerControls;

  if (pointerControls) {
    if (pointerControls.isLocked) pointerControls.unlock();
    pointerControls.dispose();
  }

  pointerCamera = State.camera;
  pointerControls = new PointerLockControls(State.camera, renderer.domElement);
  pointerControls.pointerSpeed = .7;
  pointerControls.minPolarAngle = .01;
  pointerControls.maxPolarAngle = Math.PI - .01;
  pointerLookDistance = Math.max(State.camera.position.distanceTo(State.controls.target), .01);
  return pointerControls;
}

function syncOrbitTargetToCamera() {
  State.camera.getWorldDirection(direction);
  State.controls.target.copy(State.camera.position).addScaledVector(direction, pointerLookDistance);
}

function leaveFlyMode() {
  if (!pointerControls) return;
  syncOrbitTargetToCamera();
  if (pointerControls.isLocked) pointerControls.unlock();
}

function setMode(mode) {
  if (mode === State.navigationMode) return;

  if (State.navigationMode === "fly") leaveFlyMode();

  pressedKeys.clear();
  State.navigationMode = mode;
  State.controls.enabled = mode !== "fly";

  if (mode === "fly") {
    ensurePointerControls();
    State.controls.enabled = false;
  } else {
    State.controls.update();
  }

  modeButtons.forEach(button => {
    const active = button.dataset.navigationMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

modeButtons.forEach(button => {
  button.addEventListener("click", () => setMode(button.dataset.navigationMode));
});

renderer.domElement.addEventListener("click", () => {
  if (State.navigationMode !== "fly" || !State.model) return;
  ensurePointerControls().lock();
});

window.addEventListener("keydown", event => {
  if (State.navigationMode === "orbit" || editableTarget(event.target) || !navigationKey(event)) return;
  pressedKeys.add(event.code);
  event.preventDefault();
});

window.addEventListener("keyup", event => {
  pressedKeys.delete(event.code);
});

window.addEventListener("blur", () => pressedKeys.clear());

function keyboardAxes() {
  const forward = Number(pressedKeys.has("KeyW") || pressedKeys.has("ArrowUp")) -
    Number(pressedKeys.has("KeyS") || pressedKeys.has("ArrowDown"));
  const sideways = Number(pressedKeys.has("KeyD") || pressedKeys.has("ArrowRight")) -
    Number(pressedKeys.has("KeyA") || pressedKeys.has("ArrowLeft"));
  const vertical = Number(pressedKeys.has("KeyE")) - Number(pressedKeys.has("KeyQ"));
  return { forward, sideways, vertical };
}

function updateFly(delta, forward, sideways, vertical) {
  const controls = ensurePointerControls();
  State.controls.enabled = false;

  if (controls.isLocked) {
    const distance = Math.max(State.maxModelSize, 1) * .35 * delta;
    movement.set(sideways, vertical, -forward);
    if (movement.lengthSq() > 1) movement.normalize();

    // Camera-local X/Z makes W/S follow the full viewing direction,
    // including its vertical component. E/Q remains world-vertical.
    if (movement.x) State.camera.translateX(movement.x * distance);
    if (movement.z) State.camera.translateZ(movement.z * distance);
    if (movement.y) State.camera.position.y += movement.y * distance;
  }

  syncOrbitTargetToCamera();
}

export function updateNavigation(time) {
  const delta = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, .05);
  previousTime = time;

  // Camera projection changes replace OrbitControls. Reapply the selected mode immediately.
  State.controls.enabled = State.navigationMode !== "fly";

  if (State.navigationMode === "orbit" || !State.model) return;

  const { forward, sideways, vertical } = keyboardAxes();
  updateFly(delta, forward, sideways, vertical);
}
