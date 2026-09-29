/*
   VIEW MODES

   A megjelenítési módok közötti váltás: eredeti, fehér,
   hidden line, drótváz, renesszánsz (fekete-fehér, napfényes).
*/

import * as THREE from "three";
import { State } from "../js/core/state.js";
import { scene, hemi, DEFAULT_HEMI_INTENSITY, neutralBackground } from "../js/core/scene.js";
import { forEachMesh } from "../js/core/model-utils.js";
import {
  lightSection,
  sunAngle,
  sunHeight,
  shadowToggle,
  transparency
} from "../js/core/dom.js";
import {
  wireMaterial,
  getRenaissanceMaterial,
  hasRenaissanceCutout,
  getWhiteMaterial,
  isEntirelyTranslucent,
  isTranslucentMaterial,
  applyTranslucentAppearance
} from "../js/model/materials.js";
import { transmissionFromTransparencyControl } from "../js/model/material-policy.js";
import { applyClipping } from "../js/section/section-plane.js";
import { applyGroupVisibility } from "../js/ui/group-filter.js";
import { deactivatePhoto1 } from "../js/view/photo1.js";

let shadowSettingBeforeWireframe = null;
const blackBackButton = document.querySelector("#blackBackButton");

function updateTransparencyAppearance(event = null) {
  const transparencyEnabled = ["original", "white", "hidden"].includes(State.currentMode);

  if (!State.model || !transparencyEnabled) return;

  const opacity = 1 - Number(transparency.value) / 100;
  const physicalTransmission =
    event?.type === "input"
      ? transmissionFromTransparencyControl(
          transparency.value,
          Number(transparency.min),
          Number(transparency.max)
        )
      : null;

  State.originalMaterials.forEach(original => {
    const materials = Array.isArray(original) ? original : [original];

    const visibleMaterial =
      State.currentMode === "original" ? [] : getWhiteMaterial(original);

    const visibleMaterials = Array.isArray(visibleMaterial)
      ? visibleMaterial
      : [visibleMaterial];

    [...materials, ...visibleMaterials].forEach(material => {
      if (isTranslucentMaterial(material)) {
        applyTranslucentAppearance(material, opacity, physicalTransmission);
      }
    });
  });
}

transparency?.addEventListener("input", updateTransparencyAppearance);

// Reversible B/W black-background option. The scene's shadow catcher is
// transparent, so the background supplies both the sky and empty ground colour.
function updateBlackBackground() {
  const active =
    Boolean(State.model) &&
    State.currentMode === "renaissance" &&
    blackBackButton.getAttribute("aria-pressed") === "true";
  if (active) scene.background.set(0x000000);
  else scene.background.copy(neutralBackground);
  document.documentElement.classList.toggle("black-back-active", active);
}

blackBackButton.addEventListener("click", () => {
  const active = blackBackButton.getAttribute("aria-pressed") !== "true";
  blackBackButton.setAttribute("aria-pressed", String(active));
  blackBackButton.classList.toggle("active", active);
  updateBlackBackground();
});

/* ======================================================
   VIEW MODES
====================================================== */

document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => {
    setViewMode(button.dataset.mode);
  });
});

export function setViewMode(mode) {
  deactivatePhoto1();
  State.currentMode = mode;
  blackBackButton.hidden = mode !== "renaissance";
  blackBackButton.disabled = !State.model;
  updateBlackBackground();

  const wireframe = mode === "wireframe";
  const transparencyEnabled = ["original", "white", "hidden"].includes(mode);

  if (transparency) transparency.disabled = !transparencyEnabled;

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

  document.querySelectorAll("[data-mode]").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === mode);
    button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
  });

  if (!State.model) return;

  State.edgeGroup.visible = false;

  /* ---------------------------------------------------
     LIGHTING MODE
  --------------------------------------------------- */

  if (mode === "renaissance") {
    /*
       A kulcs:

       nincs ambient / hemisphere light.

       Csak a nap dönt.
    */

    hemi.intensity = 0;

    /*
       A külön ShadowMaterial talajsíkon
       a vetett árnyék legyen tiszta fekete.
    */

    if (State.ground) State.ground.material.opacity = 1;
  } else {
    hemi.intensity = DEFAULT_HEMI_INTENSITY;

    if (State.ground) State.ground.material.opacity = 0.18;
  }

  forEachMesh(State.model, node => {
    const original = State.originalMaterials.get(node.uuid);

    switch (mode) {
      /* ----------------------------------------------
           ORIGINAL
        ---------------------------------------------- */

      case "original":
        node.material = original;

        // Transparent glass must not cast an opaque shadow in Model mode.
        node.castShadow = !isEntirelyTranslucent(original);

        node.visible = true;

        break;

      /* ----------------------------------------------
           WHITE
        ---------------------------------------------- */

      case "white":
        node.material = getWhiteMaterial(original);

        node.castShadow = !isEntirelyTranslucent(original);

        node.visible = true;

        break;

      /* ----------------------------------------------
           HIDDEN LINE
        ---------------------------------------------- */

      case "hidden":
        node.material = getWhiteMaterial(original);

        node.castShadow = !isEntirelyTranslucent(original);

        node.visible = true;

        State.edgeGroup.visible = true;

        break;

      /* ----------------------------------------------
           WIREFRAME
        ---------------------------------------------- */

      case "wireframe":
        node.material = wireMaterial;

        node.castShadow = true;

        node.visible = true;

        break;

      /* ----------------------------------------------
           RENAISSANCE
        ---------------------------------------------- */

      case "renaissance": {
        const original = State.originalMaterials.get(node.uuid);

        node.material = getRenaissanceMaterial(original);

        /*
     A teljesen üveg mesh ne vessen
     fekete, tömör árnyékot.
  */

        node.castShadow = !isEntirelyTranslucent(original) || hasRenaissanceCutout(original);

        node.visible = true;

        break;
      }
    }
  });

  updateTransparencyAppearance();

  // Display modes may touch mesh visibility; restore the exported top-level
  // group switches afterwards, including direct top-level Mesh objects.
  applyGroupVisibility();

  applyClipping();
}
