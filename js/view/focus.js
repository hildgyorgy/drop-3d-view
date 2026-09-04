/*
   DOUBLE CLICK FOCUS / SMOOTH TARGET

   Dupla kattintásra a kamera fókuszpontja szépen, animálva
   átúszik arra a pontra, ahova kattintottunk a modellen.
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { renderer } from "../core/scene.js";


/* ======================================================
   DOUBLE CLICK FOCUS
====================================================== */

export const raycaster =
  new THREE.Raycaster();


export const pointer =
  new THREE.Vector2();


renderer.domElement.addEventListener(
  "dblclick",
  event => {

    if (!State.model)
      return;


    const rect =
      renderer.domElement
        .getBoundingClientRect();


    pointer.x =
      (
        (
          event.clientX -
          rect.left
        ) /
        rect.width
      ) * 2 - 1;


    pointer.y =
      -(
        (
          event.clientY -
          rect.top
        ) /
        rect.height
      ) * 2 + 1;


    raycaster.setFromCamera(
      pointer,
      State.camera
    );


    const hits =
      raycaster.intersectObject(
        State.model,
        true
      );


    if (
      hits.length
    ) {

      animateTarget(
        hits[0].point
      );

    }

  }
);



/* ======================================================
   SMOOTH TARGET
====================================================== */

let focusAnimation = 0;

export function animateTarget(
  destination
) {

  const animation = ++focusAnimation;
  const camera = State.camera;
  const controls = State.controls;
  // ORTHO focus preserves both preset and horizontally rotated elevations.
  const keepDirection = State.cameraProjection === "ortho";
  const cameraOffset = camera.position.clone().sub(controls.target);

  const start =
    controls.target.clone();


  const startTime =
    performance.now();


  const duration =
    350;


  function step(now) {

    // A newer focus or a projection change supersedes this animation.
    if (animation !== focusAnimation || State.controls !== controls || State.camera !== camera)
      return;

    let t =
      (
        now -
        startTime
      ) /
      duration;


    t =
      Math.min(
        1,
        t
      );


    t =
      1 -
      Math.pow(
        1 - t,
        3
      );


    controls.target
      .lerpVectors(
        start,
        destination,
        t
      );

    if (keepDirection)
      camera.position.copy(controls.target).add(cameraOffset);


    if (
      t < 1
    ) {

      requestAnimationFrame(
        step
      );

    }

  }


  requestAnimationFrame(
    step
  );

}
