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
import { getPhoto1Stats, renderPhoto1, resizePhoto1, deactivatePhoto1 } from "./view/photo1.js";
import { openFile } from "./model/load.js";
import { resolveComparisonModelUrl } from "./model/file-format.js";
import { captureCurrentViewSession, restoreCurrentViewSession } from "./core/session-runtime.js";
import { assertValidViewSession } from "./core/view-session.js";
import { restoreBackendHandoff } from "./core/backend-restore.js";
import { getSafeViewportSize } from "./view/viewport-size.js";
import { resizeSectionRenderer } from "./section/section-resize.js";
import { readEmbedConfiguration } from "./core/embed-bridge.js";
import { shouldLoadMaterialWorkbench, getMaterialWorkbenchAccess } from "./model/material-workbench-policy.js";
import { encodeRenderSnapshot, decodeRenderSnapshot, assertRenderSnapshotView } from "./core/render-snapshot.js";
import { renderCompatibilityWarnings, RENDER_PRODUCER } from "./core/render-compatibility.js";
import { setStatus } from "./ui/status.js";
import { applyImportedRenderFrame, clearImportedRenderFrame,
  resizeImportedRenderFrame } from "./view/render-frame.js";
import { makeRenderJob, setRenderJob } from "./core/render-job.js";
import { renderWorkerMode } from "./core/render-worker-mode.js";
import { bindRenderStation } from "./ui/render-station.js";
import { startRenderWorker } from "./view/render-worker.js";
import { captureRenderEnvironment, environmentIdentity, getPackagedEnvironment,
  validateRenderEnvironment } from "./core/environment-source.js";

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

  if (resizeImportedRenderFrame()) return;

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
  const glbButton = document.querySelector("#exportGlb");
  const glbHint = document.querySelector("#exportGlbHint");
  const glbStatus = document.querySelector("#exportGlbStatus");
  const exportButton = document.querySelector("#renderSnapshotExport");
  const exportHint = document.querySelector("#renderSnapshotHint");
  const exportStatus = document.querySelector("#renderSnapshotStatus");
  const reportExport = message => {
    exportStatus.textContent = message;
    setStatus(message);
  };
  const jobControls = document.querySelector("#renderJobControls");
  const targetSamples = document.querySelector("#renderTargetSamples");
  exportButton.hidden = false;
  jobControls.hidden = false;
  let exporting = false;
  const update = () => {
    const access = getMaterialWorkbenchAccess({ policy: State.materialWorkbenchPolicy,
      sourceKind: State.currentFileSourceKind });
    glbButton.disabled = exporting || !materialWorkbench.canSaveWorkbenchGlb();
    glbHint.hidden = !State.currentFile || access.canEdit;
    document.querySelector("#exportModelName").textContent = State.currentFile?.name ?? "—";
    exportButton.disabled = exporting || materialWorkbench.isWorkbenchBusy() || !State.currentFile || State.sectionEnabled;
    exportHint.hidden = !State.sectionEnabled;
    exportButton.title = State.sectionEnabled
      ? "Turn off SECTION before exporting a render package."
      : "";
  };
  new MutationObserver(update).observe(document.querySelector("#sectionButton"), {
    attributes: true, attributeFilter: ["aria-pressed"]
  });
  window.addEventListener("dropview:workbench-changed", update);
  window.addEventListener("dropview:model-loaded", () => {
    glbStatus.textContent = exportStatus.textContent = "";
    update();
  });
  update();
  glbButton.addEventListener("click", async () => {
    if (exporting || !materialWorkbench.canSaveWorkbenchGlb()) return;
    exporting = true;
    glbStatus.textContent = "";
    glbButton.textContent = "SAVING…";
    update();
    try {
      await materialWorkbench.saveWorkbenchGlb();
    } catch (error) {
      glbStatus.textContent = `GLB SAVE FAILED: ${error.message}`;
    } finally {
      exporting = false;
      glbButton.textContent = "SAVE GLB";
      update();
    }
  });
  bindRenderStation({ openPackage: async file => {
    exporting = true;
    update();
    try {
      const result = await restoreRenderSnapshot(file);
      targetSamples.value = String(result.targetSamples);
      exportStatus.textContent = "";
      return result;
    } finally {
      exporting = false;
      update();
    }
  } });
  exportButton.addEventListener("click", async () => {
    const file = State.currentFile;
    if (!file) return;
    if (State.sectionEnabled) {
      setStatus("Turn off SECTION before exporting a render package.");
      return;
    }
    if (!targetSamples.reportValidity()) return;
    exporting = true;
    update();
    exportStatus.textContent = "";
    exportButton.textContent = "SAVING…";
    try {
      const viewSession = captureCurrentViewSession();
      assertRenderSnapshotView(viewSession);
      const renderSize = {
        width: renderer.domElement.width,
        height: renderer.domElement.height
      };
      const renderJob = makeRenderJob(Number(targetSamples.value));
      const workbench = await materialWorkbench.captureWorkbenchHandoff();
      const environment = await captureRenderEnvironment();
      const producer = { ...RENDER_PRODUCER, hdriId: await environmentIdentity(environment) };
      const fileBytes = await file.arrayBuffer();
      if (State.currentFile !== file) throw new Error("Model changed during export");
      const snapshot = encodeRenderSnapshot({
        fileName: file.name, fileBytes, viewSession, workbench, renderSize,
        renderJob, environment, producer
      });
      const url = URL.createObjectURL(snapshot);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name.replace(/\.glb$/i, "") + ".dvrender";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      exportStatus.textContent = "";
    } catch (error) {
      console.error("Render snapshot export failed", error);
      reportExport(`PACKAGE SAVE FAILED: ${error.message}`);
    } finally {
      exporting = false;
      exportButton.textContent = "SAVE PACKAGE";
      update();
    }
  });
}

async function restoreRenderSnapshot(packageFile, { worker = false } = {}) {
  const snapshot = await decodeRenderSnapshot(packageFile);
  await validateRenderEnvironment(snapshot.environment, snapshot.producer);
  if (!await openFile(snapshot.file, { sourceKind: "user", environment: snapshot.environment }))
    throw new Error("Could not open the packaged GLB");
  if (snapshot.workbench)
    await materialWorkbench.restoreWorkbenchHandoff(snapshot.workbench);
  restoreCurrentViewSession(snapshot.viewSession);
  applyImportedRenderFrame(snapshot.renderSize ?? (worker ? { width: 1920, height: 1080 } : null));
  const job = snapshot.renderJob ?? makeRenderJob(500);
  setRenderJob(job);
  return { width: renderer.domElement.width, height: renderer.domElement.height,
    targetSamples: job.samples,
    warnings: renderCompatibilityWarnings(snapshot.producer, RENDER_PRODUCER,
      { embeddedEnvironment: Boolean(snapshot.environment) }) };
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
    if (!renderWorkerMode) bindRenderSnapshotControls();
  }
  if (renderWorkerMode) {
    // A timer keeps the offscreen document independent of display refresh.
    let timer;
    let stopped = false;
    const tick = () => {
      animate(performance.now());
      timer = setTimeout(tick, 16);
    };
    const stop = () => {
      if (stopped) return;
      stopped = true;
      clearTimeout(timer);
      deactivatePhoto1({ restoreStatus: false });
      renderer.dispose();
      renderer.forceContextLoss();
    };
    window.addEventListener("pagehide", stop, { once: true });
    tick();
    startRenderWorker(restoreRenderSnapshot, stop);
    return;
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
        environment: getPackagedEnvironment(),
        sourceKind: State.currentFileSourceKind }
    : null;
}

export async function openBackendHandoff(file, { viewSession, workbench, sourceKind, environment = null } = {}) {
  await validateRenderEnvironment(environment);
  return restoreBackendHandoff(file, { viewSession, workbench, sourceKind }, {
    openFile: (file, options) => openFile(file, { ...options, environment }),
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
