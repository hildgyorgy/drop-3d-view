/*
   CENTRE MODEL / CAMERA FIT / ORTHOGRAPHIC FRUSTUM / CAMERA MODE

   Kamerával kapcsolatos minden logika: a modell középre
   igazítása, a kamera ráállítása a modellre, valamint a
   perspektív <-> axonometrikus váltás.
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { perspectiveCamera, orthoCamera } from "../core/scene.js";
import { createControls } from "../core/controls.js";
import { perspectiveButton, axonButton, orthoButton, cameraFov } from "../core/dom.js";
import {
  findInitialCameraNode,
  isFiniteVector3
} from "../model/drop-view-metadata.js";

const defaultPerspectiveFov = perspectiveCamera.fov;
let exportedPerspectiveFovApplied = false;

cameraFov?.addEventListener("input", () => {
  if (State.pathTracerActive) return;

  perspectiveCamera.fov = Number(cameraFov.value);

  perspectiveCamera.updateProjectionMatrix();
});

export function centreModel() {
  let box = new THREE.Box3().setFromObject(State.model);

  const centre = box.getCenter(new THREE.Vector3());

  const translation = new THREE.Vector3(-centre.x, -box.min.y, -centre.z);

  State.model.position.x += translation.x;

  State.model.position.z += translation.z;

  State.model.position.y += translation.y;

  State.model.updateMatrixWorld(true);

  box = new THREE.Box3().setFromObject(State.model);

  State.modelBounds = box;

  State.modelSize = box.getSize(new THREE.Vector3());

  State.modelCenter = box.getCenter(new THREE.Vector3());

  State.maxModelSize = Math.max(State.modelSize.x, State.modelSize.y, State.modelSize.z);

  return translation;
}

/* ======================================================
   CAMERA FIT
====================================================== */

export function fitCamera() {
  initialOrthoHalfHeight = null;
  if (exportedPerspectiveFovApplied) {
    perspectiveCamera.fov = defaultPerspectiveFov;
    cameraFov.min = "35";
    cameraFov.max = "60";
    cameraFov.value = String(defaultPerspectiveFov);
    exportedPerspectiveFovApplied = false;
  }
  const distance = State.maxModelSize * 1.55;

  perspectiveCamera.near = Math.max(State.maxModelSize / 200, 0.01);

  perspectiveCamera.far = State.maxModelSize * 10;

  perspectiveCamera.position.set(distance, distance * 0.72, distance);

  perspectiveCamera.updateProjectionMatrix();

  updateOrthoFrustum();

  orthoCamera.position.copy(perspectiveCamera.position);

  State.controls.target.copy(State.modelCenter);

  State.controls.update();
  setProjection(projection, true);
}

/* ======================================================
   ORTHOGRAPHIC FRUSTUM
====================================================== */

export function updateOrthoFrustum() {
  const aspect = window.innerWidth / window.innerHeight;

  const half = initialOrthoHalfHeight ?? State.maxModelSize * 0.72;

  if (initialOrthoHalfHeight !== null) {
    orthoCamera.left = -half * aspect;
    orthoCamera.right = half * aspect;
    orthoCamera.top = half;
    orthoCamera.bottom = -half;
    orthoCamera.updateProjectionMatrix();
    return;
  }

  if (aspect >= 1) {
    orthoCamera.left = -half * aspect;

    orthoCamera.right = half * aspect;

    orthoCamera.top = half;

    orthoCamera.bottom = -half;
  } else {
    orthoCamera.left = -half;

    orthoCamera.right = half;

    orthoCamera.top = half / aspect;

    orthoCamera.bottom = -half / aspect;
  }

  orthoCamera.near = Math.max(State.maxModelSize / 200, 0.01);

  orthoCamera.far = State.maxModelSize * 10;

  orthoCamera.updateProjectionMatrix();
}

/* ======================================================
   CAMERA MODE
====================================================== */

// AXON orbits freely; ORTHO elevations orbit horizontally, TOP stays fixed.
let projection = "perspective";
let preset = "front";
let initialOrthoHalfHeight = null;
const orbitDirection = new THREE.Vector3(1, 0.72, 1).normalize();
const presetDirections = {
  top: new THREE.Vector3(0, 1, 0),
  front: new THREE.Vector3(0, 0, 1),
  left: new THREE.Vector3(-1, 0, 0),
  right: new THREE.Vector3(1, 0, 0),
  back: new THREE.Vector3(0, 0, -1)
};

const currentViewDirection = new THREE.Vector3();

function updateOrthoSelection() {
  currentViewDirection.copy(State.camera.position).sub(State.controls.target).normalize();
  document.querySelectorAll("[data-view]").forEach(button => {
    const active =
      projection === "ortho" &&
      currentViewDirection.dot(presetDirections[button.dataset.view]) > 1 - 1e-8;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

perspectiveButton.addEventListener("click", () => {
  if (!State.pathTracerActive) setProjection("perspective");
});
axonButton.addEventListener("click", () => {
  if (!State.pathTracerActive) setProjection("axon");
});
orthoButton.addEventListener("click", () => {
  if (State.pathTracerActive) return;
  if (projection !== "ortho") setProjection("ortho");
});
document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => {
    if (State.pathTracerActive) return;
    preset = button.dataset.view;
    setProjection("ortho");
  });
});

function setProjection(next, refit = false) {
  const target = State.controls.target.clone();
  let distance = Math.max(State.camera.position.distanceTo(target), 0.01);
  const oldCamera = State.camera;
  if (projection !== "ortho")
    orbitDirection.copy(oldCamera.position).sub(target).normalize();

  // Match the visible vertical span when switching between projections.
  const span = oldCamera.isPerspectiveCamera
    ? 2 * distance * Math.tan(THREE.MathUtils.degToRad(oldCamera.fov / 2))
    : (oldCamera.top - oldCamera.bottom) / oldCamera.zoom;

  State.controls.dispose();
  State.camera = next === "perspective" ? perspectiveCamera : orthoCamera;
  State.cameraMode = next === "perspective" ? "perspective" : "orthographic";
  State.cameraProjection = next;
  projection = next;
  if (next === "perspective") {
    distance = span / (2 * Math.tan(THREE.MathUtils.degToRad(perspectiveCamera.fov / 2)));
  } else {
    updateOrthoFrustum();
    orthoCamera.zoom = refit ? 1 : (orthoCamera.top - orthoCamera.bottom) / span;
    orthoCamera.updateProjectionMatrix();
  }

  const direction = next === "ortho" ? presetDirections[preset] : orbitDirection;
  State.camera.up.set(0, 1, 0);
  if (next === "ortho" && preset === "top") State.camera.up.set(0, 0, -1);
  State.camera.position.copy(target).addScaledVector(direction, distance);
  State.camera.lookAt(target);
  State.controls = createControls(State.camera);
  State.controls.target.copy(target);
  if (next === "ortho") {
    const topView = preset === "top";
    State.controls.enableRotate = !topView;
    State.controls.minPolarAngle = topView ? 0 : Math.PI / 2;
    State.controls.maxPolarAngle = topView ? Math.PI : Math.PI / 2;
    State.controls.addEventListener("change", updateOrthoSelection);
  }
  State.controls.update();

  [
    [perspectiveButton, "perspective"],
    [axonButton, "axon"],
    [orthoButton, "ortho"]
  ].forEach(([button, value]) => {
    button.classList.toggle("active", value === next);
    button.setAttribute("aria-pressed", String(value === next));
  });
  updateOrthoSelection();
  cameraFov.disabled = next !== "perspective";
}

export function applyExportedInitialView(gltf, initialView, modelTranslation) {
  if (!initialView || !isFiniteVector3(initialView.target)) return false;

  const cameraNode = findInitialCameraNode(gltf, initialView.camera);
  const source = cameraNode ?? gltf?.cameras?.[initialView.camera];
  const perspective = initialView.projection === "perspective";
  const orthographic = initialView.projection === "orthographic";
  if (
    !source ||
    (!(perspective && source.isPerspectiveCamera) &&
      !(orthographic && source.isOrthographicCamera))
  ) return false;

  if (
    !cameraNode &&
    (!isFiniteVector3(initialView.position) || !isFiniteVector3(initialView.up))
  ) return false;

  const verticalSpan = source.top - source.bottom;
  if (
    (perspective &&
      (!Number.isFinite(source.fov) || source.fov <= 0 || source.fov >= 180)) ||
    (orthographic &&
      (!Number.isFinite(verticalSpan) || verticalSpan <= 0 ||
        !Number.isFinite(source.zoom) || source.zoom <= 0))
  ) return false;

  const target = new THREE.Vector3(...initialView.target).add(modelTranslation);
  const position = cameraNode
    ? cameraNode.getWorldPosition(new THREE.Vector3())
    : new THREE.Vector3(...initialView.position).add(modelTranslation);
  const up = cameraNode
    ? cameraNode.up.clone().applyQuaternion(
        cameraNode.getWorldQuaternion(new THREE.Quaternion())
      ).normalize()
    : new THREE.Vector3(...initialView.up).normalize();
  if (
    !position.toArray().every(Number.isFinite) ||
    position.distanceToSquared(target) < 1e-10 ||
    !up.toArray().every(Number.isFinite) ||
    up.lengthSq() < 0.9
  ) return false;

  setProjection(perspective ? "perspective" : "axon", true);
  const camera = State.camera;
  if (perspective) {
    camera.fov = source.fov;
    exportedPerspectiveFovApplied = true;
    camera.aspect = window.innerWidth / window.innerHeight;
    if (cameraFov) {
      cameraFov.min = String(Math.min(35, Math.floor(source.fov)));
      cameraFov.max = String(Math.max(60, Math.ceil(source.fov)));
      cameraFov.value = String(source.fov);
    }
  } else {
    initialOrthoHalfHeight = verticalSpan / (2 * source.zoom);
    updateOrthoFrustum();
    camera.zoom = 1;
  }
  if (Number.isFinite(source.near) && source.near > 0) camera.near = source.near;
  if (Number.isFinite(source.far) && source.far > camera.near)
    camera.far = source.far;
  camera.up.copy(up);
  camera.position.copy(position);
  camera.lookAt(target);
  camera.updateProjectionMatrix();
  State.controls.target.copy(target);
  State.controls.maxDistance = camera.far * 0.8;
  State.controls.update();
  return true;
}

export function toggleCamera() {
  setProjection(projection === "perspective" ? "axon" : "perspective");
}
