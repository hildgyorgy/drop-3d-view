/*
   MAIN

   Ez a belépési pont: ezt tölti be az index.html.

   Két dolga van közvetlenül:
   1. Feliratkozik az ablak-átméretezésre (RESIZE).
   2. Elindítja a renderelési ciklust (RENDER LOOP).

   Emellett importálja az összes olyan modult, amelyiknek
   "magától" is van tennivalója induláskor - pl. gombokra
   való feliratkozás (dobd-ide, nézetmód gombok, panel
   gomb, stb.). Ezek a modulok a saját fájljukban maguktól
   beállítják a saját event listener-eiket, amint be
   vannak töltve - ezért elég csak importálni őket, nem
   kell semmit hívni bennük külön.
*/

import { State } from "./core/state.js";
import { scene, renderer, perspectiveCamera } from "./core/scene.js";
import { updateOrthoFrustum } from "./view/camera.js";

// mellékhatás-importok: ezek a modulok maguktól
// feliratkoznak a saját gombjaikra/eseményeikre
import "./model/load.js";
import "./section/section-plane.js";
import "./view/view-modes.js";
import "./view/ground-sun.js";
import "./view/focus.js";
import "./ui/panel.js";


/* ======================================================
   RESIZE
====================================================== */

window.addEventListener(
  "resize",
  () => {

    const width =
      window.innerWidth;

    const height =
      window.innerHeight;


    perspectiveCamera.aspect =
      width /
      height;


    perspectiveCamera
      .updateProjectionMatrix();


    updateOrthoFrustum();


    renderer.setSize(
      width,
      height
    );

  }
);





function animate() {

  State.controls.update();


  renderer.render(
    scene,
    State.camera
  );

}


renderer.setAnimationLoop(
  animate
);
