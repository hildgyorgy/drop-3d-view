/*
   VIEW MODES

   A megjelenítési módok közötti váltás: eredeti, fehér,
   hidden line, drótváz, renesszánsz (fekete-fehér, napfényes).
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { hemi, DEFAULT_HEMI_INTENSITY } from "../core/scene.js";
import {
  whiteMaterial,
  wireMaterial,
  getRenaissanceMaterial,
  isEntirelyGlass
} from "../model/materials.js";
import { applyClipping } from "../section/section-plane.js";


/* ======================================================
   VIEW MODES
====================================================== */

document
  .querySelectorAll(
    "[data-mode]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          setViewMode(
            button.dataset.mode
          );

        }
      );

    }
  );


export function setViewMode(mode) {

  if (!State.model)
    return;


  State.currentMode =
    mode;


  document
    .querySelectorAll(
      "[data-mode]"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.mode === mode
        );

      }
    );


  State.edgeGroup.visible =
    false;



  /* ---------------------------------------------------
     LIGHTING MODE
  --------------------------------------------------- */


  if (
    mode ===
    "renaissance"
  ) {

    /*
       A kulcs:

       nincs ambient / hemisphere light.

       Csak a nap dönt.
    */

    hemi.intensity =
      0;


    /*
       A külön ShadowMaterial talajsíkon
       a vetett árnyék legyen tiszta fekete.
    */

    if (State.ground)
      State.ground.material.opacity =
        1;

  }

  else {

    hemi.intensity =
      DEFAULT_HEMI_INTENSITY;


    if (State.ground)
      State.ground.material.opacity =
        .18;

  }



  State.model.traverse(
    node => {

      if (!node.isMesh)
        return;


      const original =
        State.originalMaterials.get(
          node.uuid
        );


      switch(mode) {


        /* ----------------------------------------------
           ORIGINAL
        ---------------------------------------------- */

        case "original":

          node.material =
            original;

  node.castShadow =
    true;

          node.visible =
            true;

          break;



        /* ----------------------------------------------
           WHITE
        ---------------------------------------------- */

        case "white":

          node.material =
            whiteMaterial;


  node.castShadow =
    true;

          node.visible =
            true;

          break;



        /* ----------------------------------------------
           HIDDEN LINE
        ---------------------------------------------- */

        case "hidden":

          node.material =
            whiteMaterial;

  node.castShadow =
    true;

          node.visible =
            true;

          State.edgeGroup.visible =
            true;

          break;



        /* ----------------------------------------------
           WIREFRAME
        ---------------------------------------------- */

        case "wireframe":

          node.material =
            wireMaterial;


  node.castShadow =
    true;

          node.visible =
            true;

          break;



        /* ----------------------------------------------
           RENAISSANCE
        ---------------------------------------------- */

        case "renaissance": {

  const original =
    State.originalMaterials.get(
      node.uuid
    );


  node.material =
    getRenaissanceMaterial(
      original
    );


  /*
     A teljesen üveg mesh ne vessen
     fekete, tömör árnyékot.
  */

  node.castShadow =
    !isEntirelyGlass(
      original
    );


  node.visible =
    true;

  break;

}

      }

    }
  );


  applyClipping();

}
