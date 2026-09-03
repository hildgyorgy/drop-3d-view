/*
   SECTION / SECTION PLANE / APPLY CLIPPING

   A metszés be/kikapcsolása, a metszősík tengelyének és
   pozíciójának kezelése (csúszka + tükrözés), valamint a
   vágás rávetítése a modell anyagaira.
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import {
  sectionButton,
  sectionSlider,
  sectionFlip,
  sectionDebug,
  sectionFill,
  sectionColorButtons
} from "../core/dom.js";
import { scheduleSectionCapRebuild } from "./section-cap.js";
import { sectionCapMaterial, sectionEdgeMaterial } from "../model/materials.js";


/* ======================================================
   SECTION
====================================================== */

sectionButton.addEventListener(
  "click",
  () => {

    State.sectionEnabled =
      !State.sectionEnabled;


    sectionButton.classList.toggle(
      "active",
      State.sectionEnabled
    );
    sectionButton.setAttribute("aria-pressed", String(State.sectionEnabled));


    /*
       Bekapcsoláskor a csúszka aktuális értékéből azonnal
       állítsuk elő a síkot. Enélkül az első kattintás még a
       State-ben lévő (kezdetben alsó) síkot használja.
    */
    if (State.sectionEnabled)
      updateSectionPlane();
    else
      applyClipping();

  }
);


document
  .querySelectorAll(
    "[data-axis]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          State.sectionAxis =
            button.dataset.axis;


          document
            .querySelectorAll(
              "[data-axis]"
            )
            .forEach(
              b => {

                b.classList.toggle(
                  "active",
                  b === button
                );
                b.setAttribute("aria-pressed", String(b === button));

              }
            );


          updateSectionPlane();

        }
      );

    }
  );


sectionSlider.addEventListener(
  "input",
  updateSectionPlane
);


sectionFlip.addEventListener(
  "change",
  updateSectionPlane
);


sectionDebug.addEventListener(
  "change",
  () => {

    scheduleSectionCapRebuild();

  }
);

sectionFill.addEventListener(
  "change",
  () => {
    scheduleSectionCapRebuild();
  }
);

sectionColorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.dataset.sectionColor;

    sectionCapMaterial.color.set(color);
    sectionEdgeMaterial.color.set(color);
    sectionCapMaterial.needsUpdate = true;
    sectionEdgeMaterial.needsUpdate = true;

    sectionColorButtons.forEach(swatch => {
      swatch.classList.toggle("active", swatch === button);
    });

    scheduleSectionCapRebuild();
  });
});



/* ======================================================
   SECTION PLANE
====================================================== */

export function updateSectionPlane() {

  if (!State.modelBounds)
    return;


  const fraction =
    Number(
      sectionSlider.value
    ) /
    1000;


  let min;
  let max;


  const normal =
    new THREE.Vector3();


  if (
    State.sectionAxis === "x"
  ) {

    min =
      State.modelBounds.min.x;

    max =
      State.modelBounds.max.x;

    normal.set(
      -1,
      0,
      0
    );

  }


  if (
    State.sectionAxis === "y"
  ) {

    min =
      State.modelBounds.min.y;

    max =
      State.modelBounds.max.y;

    normal.set(
      0,
      -1,
      0
    );

  }


  if (
    State.sectionAxis === "z"
  ) {

    min =
      State.modelBounds.min.z;

    max =
      State.modelBounds.max.z;

    normal.set(
      0,
      0,
      -1
    );

  }


  if (
    sectionFlip.checked
  ) {

    normal.multiplyScalar(
      -1
    );

  }


  const position =
    THREE.MathUtils.lerp(
      min,
      max,
      fraction
    );


  const point =
    new THREE.Vector3();


  if (
    State.sectionAxis === "x"
  )
    point.x =
      position;


  if (
    State.sectionAxis === "y"
  )
    point.y =
      position;


  if (
    State.sectionAxis === "z"
  )
    point.z =
      position;


  State.sectionPlane
    .setFromNormalAndCoplanarPoint(
      normal,
      point
    );


  applyClipping();

}



/* ======================================================
   APPLY CLIPPING
====================================================== */

export function applyClipping() {

  if (!State.model)
    return;


  State.model.traverse(
    node => {

      if (!node.isMesh)
        return;


      const materials =
        Array.isArray(
          node.material
        )
        ? node.material
        : [node.material];


      materials.forEach(
        material => {

          material.clippingPlanes =
            State.sectionEnabled
            ? [State.sectionPlane]
            : [];


          material.clipShadows =
            true;


          material.needsUpdate =
            true;

        }
      );

    }
  );


  if (State.edgeGroup) {

    State.edgeGroup.traverse(
      node => {

        if (!node.material)
          return;


        node.material.clippingPlanes =
          State.sectionEnabled
          ? [State.sectionPlane]
          : [];


        node.material.needsUpdate =
          true;

      }
    );

  }


  scheduleSectionCapRebuild();

}
