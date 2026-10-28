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
import { backendKind, scene, renderer, perspectiveCamera, preparePreviewEnvironment } from "./core/scene.js";
import { updateOrthoFrustum } from "./view/camera.js";
import { updatePerformanceStats } from "./ui/performance.js?v=samples-label";
import { updateAdaptiveContrast } from "./ui/adaptive-contrast.js?v=glass-light-test";
import { bindNavigationCanvas, updateNavigation } from "./view/navigation.js";
import { bindFocusCanvas } from "./view/focus.js";
import { getPhoto1Stats, renderPhoto1, resizePhoto1 } from "./view/photo1.js";
import { openFile } from "./model/load.js";
import { resolveComparisonModelUrl } from "./model/file-format.js";
import { captureCurrentViewSession, restoreCurrentViewSession } from "./core/session-runtime.js";
import { assertValidViewSession } from "./core/view-session.js";
import { restoreBackendHandoff } from "./core/backend-restore.js";
import { getSafeViewportSize } from "./view/viewport-size.js";
import { resizeSectionRenderer } from "./section/section-resize.js";
import { readEmbedConfiguration } from "./core/embed-bridge.js";
import { shouldLoadMaterialWorkbench } from "./model/material-workbench-policy.js";
import { encodeRenderSnapshot, decodeRenderSnapshot } from "./core/render-snapshot.js";
import { setStatus } from "./ui/status.js";
import { applyImportedRenderFrame, clearImportedRenderFrame,
  resizeImportedRenderFrame } from "./view/render-frame.js";
import { makeRenderJob, setRenderJob } from "./core/render-job.js";

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

function resizeViewport() {
  const { width, height, aspect } = getSafeViewportSize(
    window.innerWidth,
    window.innerHeight
  );

  if (backendKind === "webgl" && resizeImportedRenderFrame()) return;

  perspectiveCamera.aspect = aspect;

  perspectiveCamera.updateProjectionMatrix();

  updateOrthoFrustum();

  renderer.setSize(width, height);
  resizeSectionRenderer(width, height);
  resizePhoto1();
}

window.addEventListener("resize", resizeViewport);
const viewportObserver = globalThis.ResizeObserver
  ? new globalThis.ResizeObserver(resizeViewport)
  : null;
viewportObserver?.observe(document.documentElement);

function animate(time) {
  updateNavigation(time);

  // OrbitControls damping changes the camera for several frames after the
  // pointer stops. A progressive render needs a perfectly fixed camera.
  if (!State.pathTracerActive && !measurements?.isMeasurementDragging())
    State.controls.update();

  if (!renderPhoto1()) renderer.render(scene, State.camera);

  updatePerformanceStats(time, getPhoto1Stats());
  updateAdaptiveContrast(time);
  measurements?.updateMeasurements();
}

let materialWorkbench = null;
let measurements = null;

function bindRenderSnapshotControls() {
  if (backendKind !== "webgl" ||
      new URLSearchParams(location.search).get("rendererDebug") !== "1") return;
  const exportButton = document.querySelector("#renderSnapshotExport");
  const importButton = document.querySelector("#renderSnapshotImport");
  const input = document.querySelector("#renderSnapshotFile");
  const jobControls = document.querySelector("#renderJobControls");
  const targetSamples = document.querySelector("#renderTargetSamples");
  exportButton.hidden = importButton.hidden = false;
  jobControls.hidden = false;
  const update = () => { exportButton.disabled = !State.currentFile; };
  window.addEventListener("dropview:model-loaded", update);
  update();
  exportButton.addEventListener("click", async () => {
    const file = State.currentFile;
    if (!file) return;
    if (!targetSamples.reportValidity()) return;
    exportButton.disabled = true;
    setStatus("Preparing render snapshot…");
    try {
      const viewSession = captureCurrentViewSession();
      const renderSize = {
        width: renderer.domElement.width,
        height: renderer.domElement.height
      };
      const renderJob = makeRenderJob(Number(targetSamples.value));
      const workbench = await materialWorkbench.captureWorkbenchHandoff();
      const fileBytes = await file.arrayBuffer();
      if (State.currentFile !== file) throw new Error("Model changed during export");
      const snapshot = encodeRenderSnapshot({
        fileName: file.name, fileBytes, viewSession, workbench, renderSize,
        renderJob
      });
      const url = URL.createObjectURL(snapshot);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name.replace(/\.glb$/i, "") + ".dvrender";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      setStatus(`Render snapshot saved: ${link.download}`);
    } catch (error) {
      console.error("Render snapshot export failed", error);
      setStatus(`RENDER SNAPSHOT EXPORT FAILED: ${error.message}`);
    } finally {
      update();
    }
  });
  importButton.addEventListener("click", () => {
    input.value = "";
    input.click();
  });
  input.addEventListener("change", async () => {
    const packageFile = input.files?.[0];
    if (!packageFile) return;
    importButton.disabled = true;
    setStatus("Opening render snapshot…");
    try {
      const snapshot = await decodeRenderSnapshot(packageFile);
      if (!await openFile(snapshot.file, { sourceKind: "user" }))
        throw new Error("Could not open the packaged GLB");
      if (snapshot.workbench)
        await materialWorkbench.restoreWorkbenchHandoff(snapshot.workbench);
      restoreCurrentViewSession(snapshot.viewSession);
      applyImportedRenderFrame(snapshot.renderSize);
      setRenderJob(snapshot.renderJob);
      if (snapshot.renderJob)
        targetSamples.value = String(snapshot.renderJob.samples);
      setStatus(`Render snapshot restored: ${snapshot.file.name}`);
    } catch (error) {
      console.error("Render snapshot import failed", error);
      setStatus(`RENDER SNAPSHOT IMPORT FAILED: ${error.message}`);
    } finally {
      importButton.disabled = false;
    }
  });
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
  if (backendKind === "webgl")
    window.addEventListener("dropview:model-loaded", () => {
      clearImportedRenderFrame();
      setRenderJob(null);
    });
  // Start HDRI work while the UI and, later, the GLB load in parallel.
  void preparePreviewEnvironment().catch(error =>
    console.warn("Preview lighting unavailable; using direct lights", error)
  );
  if (shouldLoadMaterialWorkbench(readEmbedConfiguration())) {
    materialWorkbench = await import("./ui/material-workbench.js");
    measurements = await import("./ui/measurements.js");
    bindRenderSnapshotControls();
  }
  renderer.setAnimationLoop(animate);

  // Optional local comparison fixture; regular users still choose OPEN/DEMO.
  const fixtureValue = new URLSearchParams(location.search).get("model");
  const fixture = resolveComparisonModelUrl(fixtureValue, location.href);
  if (fixtureValue && !fixture)
    console.warn("Ignored unsafe comparison model URL");
  if (fixture) {
    const savedView = new URLSearchParams(location.search).get("viewSession");
    let viewSession = null;
    if (savedView) {
      try {
        viewSession = assertValidViewSession(JSON.parse(savedView));
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
      { viewSession, sourceKind: "comparison" }
    );
  }
}

export { openFile };

export async function getBackendHandoff() {
  return State.currentFile
    ? { file: State.currentFile, viewSession: captureCurrentViewSession(),
        workbench: await materialWorkbench?.captureWorkbenchHandoff(),
        sourceKind: State.currentFileSourceKind }
    : null;
}

export async function openBackendHandoff(file, { viewSession, workbench, sourceKind } = {}) {
  return restoreBackendHandoff(file, { viewSession, workbench, sourceKind }, {
    openFile,
    restoreWorkbench: materialWorkbench
      ? state => materialWorkbench.restoreWorkbenchHandoff(state)
      : null,
    restoreView: restoreCurrentViewSession,
    onError(stage, error) {
      if (stage === "workbench")
        console.warn("Material edits could not be restored after renderer switching", error);
      else
        console.warn("Saved view could not be restored; using the fitted view", error);
    }
  });
}

export const bootPromise = boot();
bootPromise.catch(error => {
  console.error(`${backendKind.toUpperCase()} viewer could not start`, error);
  const message = document.querySelector("#startMessageText");
  if (message)
    message.textContent = `${backendKind.toUpperCase()} COULD NOT START: ${error.message}`;
  document.querySelector("#startMessage")?.classList.add("error");
});
