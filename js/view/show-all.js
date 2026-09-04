import * as THREE from "three";
import { State } from "../core/state.js";
import { showAllButton } from "../core/dom.js";

// A bounding sphere fits from every direction, including narrow portrait views.
export function getModelFrame(camera, bounds) {
  const sphere = bounds.getBoundingSphere(new THREE.Sphere());
  const radius = Math.max(sphere.radius, .001);
  const paddedRadius = radius * 1.12;
  if (camera.isPerspectiveCamera) {
    const vertical = THREE.MathUtils.degToRad(camera.getEffectiveFOV()) / 2;
    const horizontal = Math.atan(Math.tan(vertical) * camera.aspect);
    return { target: sphere.center, radius, distance: paddedRadius / Math.sin(Math.min(vertical, horizontal)), zoom: camera.zoom };
  }
  return {
    target: sphere.center, radius, distance: paddedRadius * 2,
    zoom: Math.min(camera.right - camera.left, camera.top - camera.bottom) / (2 * paddedRadius)
  };
}

showAllButton.addEventListener("click", showAll);

export function showAll() {
  if (!State.model || !State.modelBounds || State.modelBounds.isEmpty()) return;

  const camera = State.camera;
  const controls = State.controls;
  const model = State.model;
  const animation = ++State.cameraAnimation;

  // Consume residual orbit/pan damping before taking the starting direction.
  const damping = controls.enableDamping;
  controls.enableDamping = false;
  controls.update();
  controls.enableDamping = damping;

  const frame = getModelFrame(camera, State.modelBounds);
  const direction = camera.position.clone().sub(controls.target).normalize();
  if (direction.lengthSq() === 0) camera.getWorldDirection(direction).negate();
  const startTarget = controls.target.clone();
  const startPosition = camera.position.clone();
  const endPosition = frame.target.clone().addScaledVector(direction, frame.distance);
  const startZoom = camera.zoom;
  const started = performance.now();
  const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350;
  let interrupted = false;
  const interrupt = () => { interrupted = true; };
  controls.addEventListener("start", interrupt);

  function step(now) {
    if (interrupted || State.cameraAnimation !== animation || State.controls !== controls || State.model !== model) {
      controls.removeEventListener("start", interrupt);
      return;
    }
    const progress = duration ? Math.min(1, (now - started) / duration) : 1;
    const t = 1 - Math.pow(1 - progress, 3);
    controls.target.lerpVectors(startTarget, frame.target, t);
    camera.position.lerpVectors(startPosition, endPosition, t);
    camera.zoom = THREE.MathUtils.lerp(startZoom, frame.zoom, t);
    const distance = camera.position.distanceTo(controls.target);
    camera.near = Math.max(frame.radius / 10000, .0001);
    camera.far = Math.max(distance + frame.radius * 4, frame.radius * 10);
    camera.updateProjectionMatrix();
    controls.update();
    if (progress < 1) requestAnimationFrame(step);
    else controls.removeEventListener("start", interrupt);
  }
  requestAnimationFrame(step);
}
