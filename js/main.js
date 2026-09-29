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
import { backendKind, scene, renderer, perspectiveCamera } from "./core/scene.js";
import { updateOrthoFrustum } from "./view/camera.js";
import { updatePerformanceStats } from "./ui/performance.js?v=samples-label";
import { updateAdaptiveContrast } from "./ui/adaptive-contrast.js?v=glass-light-test";
import { bindNavigationCanvas, updateNavigation } from "./view/navigation.js";
import { bindFocusCanvas } from "./view/focus.js";
import { getPhoto1Stats, renderPhoto1, resizePhoto1 } from "./view/photo1.js";
import { openFile } from "./model/load.js";
import { captureCurrentViewSession } from "./core/session-runtime.js";

// mellékhatás-importok: ezek a modulok maguktól
// feliratkoznak a saját gombjaikra/eseményeikre
import "./section/section-plane.js";
import "./view/view-modes.js";
import "./view/ground-sun.js";
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
  resizePhoto1();
});

function animate(time) {
  updateNavigation(time);

  // OrbitControls damping changes the camera for several frames after the
  // pointer stops. A progressive render needs a perfectly fixed camera.
  if (!State.pathTracerActive) State.controls.update();

  if (!renderPhoto1()) renderer.render(scene, State.camera);

  updatePerformanceStats(time, getPhoto1Stats());
  updateAdaptiveContrast(time);
}

async function boot() {
  if (backendKind === "webgpu") {
    if (!navigator.gpu) throw new Error("This browser does not support WebGPU.");
    const message = document.querySelector("#startMessageText");
    const originalMessage = message?.textContent;
    if (message) message.textContent = "INITIALIZING WEBGPU…";
    await renderer.init();
    if (renderer.backend?.isWebGLBackend) {
      throw new Error("The WebGPU backend is unavailable in this browser.");
    }
    if (message) message.textContent = originalMessage;
  }

  bindNavigationCanvas(renderer.domElement);
  bindFocusCanvas(renderer.domElement);
  renderer.setAnimationLoop(animate);

  // Optional local comparison fixture; regular users still choose OPEN/DEMO.
  const fixture = new URLSearchParams(location.search).get("model");
  if (fixture) {
    const savedView = new URLSearchParams(location.search).get("viewSession");
    let viewSession = null;
    if (savedView) {
      try {
        viewSession = JSON.parse(savedView);
      } catch (error) {
        console.warn("Invalid comparison view session; using the fitted view", error);
      }
    }
    const response = await fetch(fixture);
    if (!response.ok)
      throw new Error(`Comparison model request failed (${response.status}).`);
    await openFile(
      new File([await response.blob()], "comparison.glb", {
        type: "model/gltf-binary"
      }),
      { viewSession }
    );
  }
}

export { openFile };

export function getBackendHandoff() {
  return State.currentFile
    ? { file: State.currentFile, viewSession: captureCurrentViewSession() }
    : null;
}

export const bootPromise = boot();
bootPromise.catch(error => {
  console.error(`${backendKind.toUpperCase()} viewer could not start`, error);
  const message = document.querySelector("#startMessageText");
  if (message)
    message.textContent = `${backendKind.toUpperCase()} COULD NOT START: ${error.message}`;
  document.querySelector("#startMessage")?.classList.add("error");
});
