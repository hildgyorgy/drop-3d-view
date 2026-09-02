/*
   VIEW MODES

   A megjelenítési módok közötti váltás: eredeti, fehér,
   hidden line, drótváz, renesszánsz (fekete-fehér, napfényes).
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { hemi, DEFAULT_HEMI_INTENSITY } from "../core/scene.js";
import { lightSection, sunAngle, sunHeight, shadowToggle, cameraFov, glassOpacity } from "../core/dom.js";
import {
  wireMaterial,
  getRenaissanceMaterial,
  getWhiteMaterial,
  isEntirelyGlass,
  isGlassMaterial,
  applyGlassAppearance
} from "../model/materials.js";
import { applyClipping } from "../section/section-plane.js";

let shadowSettingBeforeWireframe = null;


function updateGlassAppearance() {

  if (!State.model || State.currentMode === "renaissance")
    return;

  const opacity =
    Number(glassOpacity.value) / 100;

  State.originalMaterials.forEach(
    original => {

      const materials =
        Array.isArray(original)
          ? original
          : [original];

      materials.forEach(
        material => {
          if (isGlassMaterial(material))
            applyGlassAppearance(material, opacity);
        }
      );

    }
  );

}


glassOpacity?.addEventListener(
  "input",
  updateGlassAppearance
);


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

  const wireframe = mode === "wireframe";

  if (wireframe && shadowSettingBeforeWireframe === null) {
    shadowSettingBeforeWireframe = shadowToggle.checked;
    shadowToggle.checked = false;
    shadowToggle.dispatchEvent(new Event("change"));
  }

  if (!wireframe && shadowSettingBeforeWireframe !== null) {
    shadowToggle.checked = shadowSettingBeforeWireframe;
    shadowToggle.dispatchEvent(new Event("change"));
    shadowSettingBeforeWireframe = null;
  }

  [sunAngle, sunHeight, shadowToggle, cameraFov].forEach(control => {
    control.disabled = wireframe;
  });
  lightSection?.classList.toggle("disabled", wireframe);


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
            getWhiteMaterial(original);


          node.castShadow =
            !isEntirelyGlass(original);

          node.visible =
            true;

          break;



        /* ----------------------------------------------
           HIDDEN LINE
        ---------------------------------------------- */

        case "hidden":

          node.material =
            getWhiteMaterial(original);

          node.castShadow =
            !isEntirelyGlass(original);

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

  updateGlassAppearance();


  applyClipping();

}
