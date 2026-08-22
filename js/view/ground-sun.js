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


/* ======================================================
   GROUND
====================================================== */

export function createGround() {

  if (State.ground)
    scene.remove(
      State.ground
    );


  const geometry =
    new THREE.PlaneGeometry(
      State.maxModelSize * 10,
      State.maxModelSize * 10
    );


  const material =
    new THREE.ShadowMaterial({
      color: 0x000000,
      opacity: .18
    });


  State.ground =
    new THREE.Mesh(
      geometry,
      material
    );


  State.ground.rotation.x =
    -Math.PI / 2;


  State.ground.position.set(
    State.modelCenter.x,
    .001,
    State.modelCenter.z
  );


  State.ground.receiveShadow =
    true;


  scene.add(
    State.ground
  );

}



/* ======================================================
   SUN
====================================================== */

sunAngle.addEventListener(
  "input",
  configureSun
);


sunHeight.addEventListener(
  "input",
  configureSun
);


export function configureSun() {

  if (!State.model)
    return;


  const azimuth =
    THREE.MathUtils.degToRad(
      Number(
        sunAngle.value
      )
    );


  const elevation =
    THREE.MathUtils.degToRad(
      Number(
        sunHeight.value
      )
    );


  const radius =
    State.maxModelSize * 3;


  const horizontal =
    Math.cos(
      elevation
    ) * radius;


  sun.position.set(

    State.modelCenter.x +
    Math.cos(
      azimuth
    ) *
    horizontal,

    State.modelCenter.y +
    Math.sin(
      elevation
    ) *
    radius,

    State.modelCenter.z +
    Math.sin(
      azimuth
    ) *
    horizontal

  );


  sun.target.position.copy(
    State.modelCenter
  );


  const extent =
    State.maxModelSize * .9;


  sun.shadow.camera.left =
    -extent;

  sun.shadow.camera.right =
    extent;

  sun.shadow.camera.top =
    extent;

  sun.shadow.camera.bottom =
    -extent;


  sun.shadow.camera.near =
    State.maxModelSize * .01;


  sun.shadow.camera.far =
    State.maxModelSize * 8;


  sun.shadow.camera
    .updateProjectionMatrix();

}



/* ======================================================
   SHADOW TOGGLE
====================================================== */

shadowToggle.addEventListener(
  "change",
  () => {

    renderer.shadowMap.enabled =
      shadowToggle.checked;


    sun.castShadow =
      shadowToggle.checked;


    if (State.ground)
      State.ground.visible =
        shadowToggle.checked;


    /*
       Shadow define változhat,
       ezért kényszerítjük az újrafordítást.
    */

    renaissanceMaterial.needsUpdate =
      true;

  }
);
