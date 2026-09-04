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


cameraFov?.addEventListener(
  "input",
  () => {

    perspectiveCamera.fov =
      Number(cameraFov.value);

    perspectiveCamera.updateProjectionMatrix();

  }
);


export function centreModel() {

  let box =
    new THREE.Box3()
      .setFromObject(State.model);


  const centre =
    box.getCenter(
      new THREE.Vector3()
    );


  State.model.position.x -=
    centre.x;

  State.model.position.z -=
    centre.z;

  State.model.position.y -=
    box.min.y;


  State.model.updateMatrixWorld(
    true
  );


  box =
    new THREE.Box3()
      .setFromObject(State.model);


  State.modelBounds =
    box;


  State.modelSize =
    box.getSize(
      new THREE.Vector3()
    );


  State.modelCenter =
    box.getCenter(
      new THREE.Vector3()
    );


  State.maxModelSize =
    Math.max(
      State.modelSize.x,
      State.modelSize.y,
      State.modelSize.z
    );

}



/* ======================================================
   CAMERA FIT
====================================================== */

export function fitCamera() {

  const distance =
    State.maxModelSize * 1.55;


  perspectiveCamera.near =
    Math.max(
      State.maxModelSize / 10000,
      .01
    );


  perspectiveCamera.far =
    State.maxModelSize * 100;


  perspectiveCamera.position.set(
    distance,
    distance * .72,
    distance
  );


  perspectiveCamera
    .updateProjectionMatrix();


  updateOrthoFrustum();


  orthoCamera.position.copy(
    perspectiveCamera.position
  );


  State.controls.target.copy(
    State.modelCenter
  );


  State.controls.update();
  setProjection(projection, true);

}



/* ======================================================
   ORTHOGRAPHIC FRUSTUM
====================================================== */

export function updateOrthoFrustum() {

  const aspect =
    window.innerWidth /
    window.innerHeight;


  const half =
    State.maxModelSize * .72;


  if (aspect >= 1) {

    orthoCamera.left =
      -half * aspect;

    orthoCamera.right =
      half * aspect;

    orthoCamera.top =
      half;

    orthoCamera.bottom =
      -half;

  }

  else {

    orthoCamera.left =
      -half;

    orthoCamera.right =
      half;

    orthoCamera.top =
      half / aspect;

    orthoCamera.bottom =
      -half / aspect;

  }


  orthoCamera.near =
    Math.max(
      State.maxModelSize / 10000,
      .01
    );


  orthoCamera.far =
    State.maxModelSize * 100;


  orthoCamera
    .updateProjectionMatrix();

}



/* ======================================================
   CAMERA MODE
====================================================== */

// AXON orbits freely; ORTHO elevations orbit horizontally, TOP stays fixed.
let projection = "perspective";
let preset = "front";
const orbitDirection = new THREE.Vector3(1, .72, 1).normalize();
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
    const active = projection === "ortho" &&
      currentViewDirection.dot(presetDirections[button.dataset.view]) > 1 - 1e-8;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

perspectiveButton.addEventListener("click", () => setProjection("perspective"));
axonButton.addEventListener("click", () => setProjection("axon"));
orthoButton.addEventListener("click", () => {
  if (projection !== "ortho") setProjection("ortho");
});
document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => {
    preset = button.dataset.view;
    setProjection("ortho");
  });
});

function setProjection(next, refit = false) {
  const target = State.controls.target.clone();
  let distance = Math.max(State.camera.position.distanceTo(target), .01);
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

  [[perspectiveButton, "perspective"], [axonButton, "axon"], [orthoButton, "ortho"]]
    .forEach(([button, value]) => {
      button.classList.toggle("active", value === next);
      button.setAttribute("aria-pressed", String(value === next));
    });
  updateOrthoSelection();
  cameraFov.disabled = next !== "perspective";
}

export function toggleCamera() {
  setProjection(projection === "perspective" ? "axon" : "perspective");
}
