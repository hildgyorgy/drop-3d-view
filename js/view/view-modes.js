/*
   VIEW MODES

   A megjelenítési módok közötti váltás: eredeti, fehér,
   hidden line, drótváz, renesszánsz (fekete-fehér, napfényes).
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { hemi, DEFAULT_HEMI_INTENSITY } from "../core/scene.js";
import { forEachMesh } from "../core/model-utils.js";
import { lightSection, sunAngle, sunHeight, shadowToggle, transparency } from "../core/dom.js";
import {
  wireMaterial,
  getRenaissanceMaterial,
  getWhiteMaterial,
  isEntirelyTranslucent,
  isTranslucentMaterial,
  applyTranslucentAppearance
} from "../model/materials.js";
import { applyClipping } from "../section/section-plane.js";
import { updateEnvironment } from "./environment.js";
import { updateAO } from "./ambient-occlusion.js";

let shadowSettingBeforeWireframe = null;


function updateTransparencyAppearance() {

  const transparencyEnabled =
    ["original", "white", "hidden"].includes(State.currentMode);

  if (!State.model || !transparencyEnabled)
    return;

  const opacity =
    1 - Number(transparency.value) / 100;

  State.originalMaterials.forEach(
    original => {

      const materials =
        Array.isArray(original)
          ? original
          : [original];

      const visibleMaterial =
        State.currentMode === "original"
          ? []
          : getWhiteMaterial(original);

      const visibleMaterials =
        Array.isArray(visibleMaterial)
          ? visibleMaterial
          : [visibleMaterial];

      [...materials, ...visibleMaterials].forEach(
        material => {
          if (isTranslucentMaterial(material))
            applyTranslucentAppearance(material, opacity);
        }
      );

    }
  );

}


transparency?.addEventListener(
  "input",
  updateTransparencyAppearance
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

  State.currentMode =
    mode;

  updateEnvironment();
  updateAO();

  const wireframe = mode === "wireframe";
  const transparencyEnabled =
    ["original", "white", "hidden"].includes(mode);

  if (transparency)
    transparency.disabled = !transparencyEnabled;

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

  [sunAngle, sunHeight, shadowToggle].forEach(control => {
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
        button.setAttribute("aria-pressed", String(button.dataset.mode === mode));

      }
    );


  if (!State.model) return;

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



  forEachMesh(
    State.model,
    node => {


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

          // Transparent glass must not cast an opaque shadow in Model mode.
          node.castShadow =
            !isEntirelyTranslucent(original);

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
            !isEntirelyTranslucent(original);

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
            !isEntirelyTranslucent(original);

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
    !isEntirelyTranslucent(
      original
    );


  node.visible =
    true;

  break;

}

      }

    }
  );

  updateTransparencyAppearance();


  applyClipping();

}
