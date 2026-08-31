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
import { perspectiveButton, axonButton } from "../core/dom.js";


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

perspectiveButton.addEventListener(
  "click",
  () => {
    if (State.cameraMode !== "perspective")
      toggleCamera();
  }
);

axonButton.addEventListener(
  "click",
  () => {
    if (State.cameraMode !== "orthographic")
      toggleCamera();
  }
);


export function toggleCamera() {

  const direction =
    new THREE.Vector3();


  State.camera.getWorldDirection(
    direction
  );


  const distance =
    State.camera.position.distanceTo(
      State.controls.target
    );


  const oldTarget =
    State.controls.target.clone();


  State.controls.dispose();


  if (
    State.cameraMode ===
    "perspective"
  ) {

    State.cameraMode =
      "orthographic";


    State.camera =
      orthoCamera;


    updateOrthoFrustum();


    State.camera.position
      .copy(oldTarget)
      .addScaledVector(
        direction,
        -distance
      );


    State.camera.lookAt(
      oldTarget
    );


  }

  else {

    State.cameraMode =
      "perspective";


    State.camera =
      perspectiveCamera;


    State.camera.position
      .copy(oldTarget)
      .addScaledVector(
        direction,
        -distance
      );


    State.camera.lookAt(
      oldTarget
    );


  }

  perspectiveButton.classList.toggle(
    "active",
    State.cameraMode === "perspective"
  );

  axonButton.classList.toggle(
    "active",
    State.cameraMode === "orthographic"
  );


  State.controls =
    createControls(
      State.camera
    );


  State.controls.target.copy(
    oldTarget
  );


  State.controls.update();

}
