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
import { renderViewer, resizeAO } from "./view/ambient-occlusion.js";
import { updatePerformanceStats } from "./ui/performance.js?v=samples-label";
import { updateNavigation } from "./view/navigation.js";
import {
  getPhoto1Stats,
  renderPhoto1,
  resizePhoto1
} from "./view/photo1.js";

// mellékhatás-importok: ezek a modulok maguktól
// feliratkoznak a saját gombjaikra/eseményeikre
import "./model/load.js";
import "./section/section-plane.js";
import "./view/view-modes.js";
import "./view/ground-sun.js";
import "./view/focus.js";
import "./view/show-all.js";
import "./ui/group-filter.js";
import "./ui/panel.js?v=about-sheet";

/* ======================================================
   RESIZE
====================================================== */

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  const height = window.innerHeight;

  perspectiveCamera.aspect = width / height;

  perspectiveCamera.updateProjectionMatrix();

  updateOrthoFrustum();

  renderer.setSize(width, height);
  resizeAO(width, height);
  resizePhoto1();
});

function animate(time) {
  updateNavigation(time);

  State.controls.update();

  if (!renderPhoto1()) renderViewer();

  updatePerformanceStats(time, getPhoto1Stats());
}

renderer.setAnimationLoop(animate);
