/*
   NAVIGATION MODES

   ORBIT   the viewer's normal OrbitControls navigation
   WALK    OrbitControls plus horizontal keyboard movement; camera and target move together
   FPS     Three.js PointerLockControls; click the canvas to capture the pointer, Escape releases it
*/

import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { State } from "../core/state.js";
import { renderer } from "../core/scene.js";

const modeButtons = document.querySelectorAll("[data-navigation-mode]");
const pressedKeys = new Set();
const direction = new THREE.Vector3();
const right = new THREE.Vector3();
const movement = new THREE.Vector3();
const worldUp = new THREE.Vector3(0, 1, 0);

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
  return ["KeyW", "KeyA", "KeyS", "KeyD", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code);
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
  pointerLookDistance = Math.max(State.camera.position.distanceTo(State.controls.target), .01);
  return pointerControls;
}

function syncOrbitTargetToCamera() {
  State.camera.getWorldDirection(direction);
  State.controls.target.copy(State.camera.position).addScaledVector(direction, pointerLookDistance);
}

function leavePointerMode() {
  if (!pointerControls) return;
  syncOrbitTargetToCamera();
  if (pointerControls.isLocked) pointerControls.unlock();
}

function setMode(mode) {
  if (mode === State.navigationMode) return;

  if (State.navigationMode === "pointer") leavePointerMode();

  pressedKeys.clear();
  State.navigationMode = mode;
  State.controls.enabled = mode !== "pointer";

  if (mode === "pointer") {
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
  if (State.navigationMode !== "pointer" || !State.model) return;
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
  return { forward, sideways };
}

function updateWalk(delta, forward, sideways) {
  State.camera.getWorldDirection(direction);
  direction.y = 0;
  if (direction.lengthSq() < 1e-8) direction.set(0, 0, -1);
  else direction.normalize();

  right.crossVectors(direction, worldUp).normalize();
  movement.copy(direction).multiplyScalar(forward).addScaledVector(right, sideways);
  if (movement.lengthSq() > 1) movement.normalize();
  movement.multiplyScalar(Math.max(State.maxModelSize, 1) * .35 * delta);

  State.camera.position.add(movement);
  State.controls.target.add(movement);
}

function updatePointer(delta, forward, sideways) {
  const controls = ensurePointerControls();
  State.controls.enabled = false;

  if (controls.isLocked) {
    const distance = Math.max(State.maxModelSize, 1) * .35 * delta;
    if (forward) controls.moveForward(forward * distance);
    if (sideways) controls.moveRight(sideways * distance);
  }

  syncOrbitTargetToCamera();
}

export function updateNavigation(time) {
  const delta = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, .05);
  previousTime = time;

  // Camera projection changes replace OrbitControls. Reapply the selected mode immediately.
  State.controls.enabled = State.navigationMode !== "pointer";

  if (State.navigationMode === "orbit" || !State.model) return;

  const { forward, sideways } = keyboardAxes();
  if (State.navigationMode === "walk") updateWalk(delta, forward, sideways);
  else updatePointer(delta, forward, sideways);
}
