/*
   NAVIGATION MODES

   ORBIT   the viewer's normal OrbitControls navigation
   FLY     Three.js PointerLockControls with free 3D flight; E/Q also move vertically
*/

import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { State } from "../core/state.js";
import { backendKind, renderer } from "../core/scene.js";
import { createCanvasEventBinding } from "../core/canvas-binding.js";

const modeButtons = document.querySelectorAll("[data-navigation-mode]");
const flyButton = document.querySelector('[data-navigation-mode="fly"]');
const flySpeed = document.getElementById("flySpeed");
const pressedKeys = new Set();
const direction = new THREE.Vector3();
const movement = new THREE.Vector3();

let pointerControls = null;
let pointerCamera = null;
let pointerCanvas = null;
let navigationCanvas = null;
let pointerLookDistance = 1;
let previousTime = null;
let dragFallback = false;
let dragging = false;
let dragX = 0;
let dragY = 0;
const lookEuler = new THREE.Euler(0, 0, 0, "YXZ");
const normalFlyTitle = flyButton?.title;

const isTouchInterface =
  Boolean(window.matchMedia?.("(pointer: coarse)").matches) ||
  navigator.maxTouchPoints > 0;

if (isTouchInterface && flyButton) {
  flyButton.disabled = true;
  flyButton.setAttribute("aria-disabled", "true");
  flyButton.title = "FLY navigation is unavailable on touch devices";
}

function editableTarget(target) {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target?.isContentEditable
  );
}

function navigationKey(event) {
  return [
    "KeyW",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyE",
    "KeyQ",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ShiftLeft",
    "ShiftRight"
  ].includes(event.code);
}

function ensurePointerControls() {
  const canvas = navigationCanvas ?? renderer.domElement;
  if (pointerCamera === State.camera && pointerCanvas === canvas && pointerControls)
    return pointerControls;

  if (pointerControls) {
    if (pointerControls.isLocked) pointerControls.unlock();
    pointerControls.dispose();
  }

  pointerCamera = State.camera;
  pointerCanvas = canvas;
  pointerControls = new PointerLockControls(State.camera, canvas);
  pointerControls.pointerSpeed = 0.7;
  pointerControls.minPolarAngle = 0.01;
  pointerControls.maxPolarAngle = Math.PI - 0.01;
  pointerLookDistance = Math.max(
    State.camera.position.distanceTo(State.controls.target),
    0.01
  );
  return pointerControls;
}

function syncOrbitTargetToCamera() {
  State.camera.getWorldDirection(direction);
  State.controls.target
    .copy(State.camera.position)
    .addScaledVector(direction, pointerLookDistance);
}

function leaveFlyMode() {
  syncOrbitTargetToCamera();
  if (pointerControls?.isLocked) pointerControls.unlock();
  dragFallback = false;
  dragging = false;
  if (flyButton) flyButton.title = normalFlyTitle;
}

// Some WebGPU browsers reject pointer lock. Keep the same FLY movement and
// use a left-button drag for looking around in that case.
function enableDragFallback() {
  if (backendKind !== "webgpu" || State.navigationMode !== "fly") return;
  dragFallback = true;
  if (flyButton)
    flyButton.title = "FLY: drag to look; WASD/arrows move, E/Q change height, Shift speeds up";
}

function requestFlyLock() {
  const controls = ensurePointerControls();
  if (backendKind === "webgl") {
    controls.lock();
    return;
  }
  if (dragFallback) return;
  try {
    const canvas = navigationCanvas ?? renderer.domElement;
    const request = canvas.requestPointerLock?.();
    if (!request) {
      // Older browsers return void on success and have no Promise to await.
      if (!canvas.requestPointerLock) enableDragFallback();
      return;
    }
    Promise.resolve(request).catch(enableDragFallback);
  } catch {
    enableDragFallback();
  }
}

document.addEventListener("pointerlockerror", enableDragFallback);

function onCanvasPointerDown(event) {
  if (State.navigationMode !== "fly" || !dragFallback || event.button !== 0) return;
  dragging = true;
  dragX = event.clientX;
  dragY = event.clientY;
}

const bindPointerDown = createCanvasEventBinding("pointerdown", onCanvasPointerDown);

window.addEventListener("pointermove", event => {
  if (!dragging || !dragFallback || State.navigationMode !== "fly") return;
  const dx = event.clientX - dragX;
  const dy = event.clientY - dragY;
  dragX = event.clientX;
  dragY = event.clientY;
  lookEuler.setFromQuaternion(State.camera.quaternion);
  lookEuler.y -= dx * 0.0014;
  lookEuler.x = THREE.MathUtils.clamp(
    lookEuler.x - dy * 0.0014,
    -Math.PI / 2 + 0.01,
    Math.PI / 2 - 0.01
  );
  State.camera.quaternion.setFromEuler(lookEuler);
  syncOrbitTargetToCamera();
});

window.addEventListener("pointerup", () => {
  dragging = false;
});

export function setNavigationMode(mode) {
  if (mode === "fly" && isTouchInterface) return;
  if (mode === State.navigationMode) return;

  if (State.navigationMode === "fly") leaveFlyMode();

  pressedKeys.clear();
  State.navigationMode = mode;
  State.controls.enabled = mode !== "fly";
  if (flySpeed) flySpeed.disabled = mode !== "fly";

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
  button.addEventListener("click", () => {
    const mode = button.dataset.navigationMode;
    setNavigationMode(mode);
    if (mode === "fly" && State.model) requestFlyLock();
  });
});

flySpeed?.addEventListener("input", () => {
  State.flySpeed = Number(flySpeed.value) / 200;
});

function onCanvasClick() {
  if (State.navigationMode !== "fly" || !State.model) return;
  if (dragFallback) return;
  const controls = ensurePointerControls();
  if (controls.isLocked) {
    // A click pauses FLY and gives the pointer back without changing mode.
    controls.unlock();
  } else {
    // Clicking the canvas again resumes FLY.
    requestFlyLock();
  }
}

const bindClick = createCanvasEventBinding("click", onCanvasClick);

export function bindNavigationCanvas(canvas) {
  if (navigationCanvas === canvas) return;
  pressedKeys.clear();
  previousTime = null;
  dragging = false;
  dragFallback = false;
  if (flyButton) flyButton.title = normalFlyTitle;
  if (pointerControls) {
    if (pointerControls.isLocked) pointerControls.unlock();
    pointerControls.dispose();
    pointerControls = null;
    pointerCamera = null;
    pointerCanvas = null;
  }
  navigationCanvas = canvas;
  bindPointerDown(canvas);
  bindClick(canvas);
}

window.addEventListener("keydown", event => {
  if (
    State.navigationMode === "orbit" ||
    editableTarget(event.target) ||
    !navigationKey(event)
  )
    return;
  pressedKeys.add(event.code);
  event.preventDefault();
});

window.addEventListener("keyup", event => {
  pressedKeys.delete(event.code);
});

window.addEventListener("blur", () => pressedKeys.clear());

function keyboardAxes() {
  const forward =
    Number(pressedKeys.has("KeyW") || pressedKeys.has("ArrowUp")) -
    Number(pressedKeys.has("KeyS") || pressedKeys.has("ArrowDown"));
  const sideways =
    Number(pressedKeys.has("KeyD") || pressedKeys.has("ArrowRight")) -
    Number(pressedKeys.has("KeyA") || pressedKeys.has("ArrowLeft"));
  const vertical = Number(pressedKeys.has("KeyE")) - Number(pressedKeys.has("KeyQ"));
  return { forward, sideways, vertical };
}

function updateFly(delta, forward, sideways, vertical) {
  const controls = ensurePointerControls();
  State.controls.enabled = false;

  if (controls.isLocked || dragFallback) {
    const speedMultiplier =
      pressedKeys.has("ShiftLeft") || pressedKeys.has("ShiftRight") ? 2 : 1;
    const distance =
      Math.max(State.maxModelSize, 1) * State.flySpeed * speedMultiplier * delta;
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
  const delta = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
  previousTime = time;

  if (State.pathTracerActive) {
    pressedKeys.clear();
    State.controls.enabled = false;
    return;
  }

  // Camera projection changes replace OrbitControls. Reapply the selected mode immediately.
  State.controls.enabled = State.navigationMode !== "fly";

  if (State.navigationMode === "orbit" || !State.model) return;

  const { forward, sideways, vertical } = keyboardAxes();
  updateFly(delta, forward, sideways, vertical);
}
