// The production UI and interaction modules, driven by a WebGPU renderer.
import { State } from "../js/core/state.js";
import { scene, renderer, perspectiveCamera } from "../js/core/scene.js";
import { updateOrthoFrustum } from "../js/view/camera.js";
import { updatePerformanceStats } from "../js/ui/performance.js";
import { updateAdaptiveContrast } from "../js/ui/adaptive-contrast.js";
import { updateNavigation } from "../js/view/navigation.js";
import { getPhoto1Stats, renderPhoto1, resizePhoto1 } from "../js/view/photo1.js";
import { openFile } from "../js/model/load.js";
import "../js/section/section-plane.js";
import "../js/view/view-modes.js";
import "../js/view/ground-sun.js";
import "../js/view/focus.js";
import "../js/view/show-all.js";
import "../js/ui/group-filter.js";
import "../js/ui/panel.js";

const message = document.querySelector("#startMessageText");
const originalMessage = message?.textContent;

window.addEventListener("resize", () => {
  perspectiveCamera.aspect = innerWidth / innerHeight;
  perspectiveCamera.updateProjectionMatrix();
  updateOrthoFrustum();
  renderer.setSize(innerWidth, innerHeight);
  resizePhoto1();
});

async function boot() {
  if (!navigator.gpu) throw new Error("This browser does not support WebGPU.");
  if (message) message.textContent = "INITIALIZING WEBGPU…";
  await renderer.init();
  if (renderer.backend?.isWebGLBackend) {
    throw new Error("The WebGPU backend is unavailable in this browser.");
  }
  if (message) message.textContent = originalMessage;
  renderer.setAnimationLoop(time => {
    updateNavigation(time);
    if (!State.pathTracerActive) State.controls.update();
    if (!renderPhoto1()) renderer.render(scene, State.camera);
    updatePerformanceStats(time, getPhoto1Stats());
    updateAdaptiveContrast(time);
  });

  const fixture = new URLSearchParams(location.search).get("model");
  if (fixture) {
    const response = await fetch(fixture);
    if (!response.ok) throw new Error(`Comparison model request failed (${response.status}).`);
    await openFile(new File([await response.blob()], "comparison.glb", {
      type: "model/gltf-binary"
    }));
  }
}

boot().catch(error => {
  console.error("WebGPU full viewer could not start", error);
  if (message) message.textContent = `WEBGPU COULD NOT START: ${error.message}`;
  document.querySelector("#startMessage")?.classList.add("error");
});
