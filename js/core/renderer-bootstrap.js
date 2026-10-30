/* One document/UI, with renderer-specific module graphs selected at startup. */
import { activeRendererMode, chooseRendererBackend } from "./backend-choice.js";
import { saveBackendHandoff, takeBackendHandoff } from "./backend-handoff.js?v=embedded-hdri-1";
import { renderWorkerMode } from "./render-worker-mode.js";
import {
  enableEmbedBridge,
  readEmbedConfiguration,
  sendEmbedEvent
} from "./embed-bridge.js";

const localComparison = location.hostname === "127.0.0.1" && location.port === "8001";
const packagedRenderers = window.__DROP_VIEW_RENDERER_PACKAGES__ || null;
const comparison = Boolean(packagedRenderers) || localComparison;
const showPicker = !renderWorkerMode && comparison && new URLSearchParams(location.search).has("rendererDebug");
const modeKey = "drop-view-renderer-mode";
let mode = activeRendererMode(showPicker, showPicker ? localStorage.getItem(modeKey) : null);
const backend = chooseRendererBackend(mode, Boolean(navigator.gpu));
const embedConfig = readEmbedConfiguration();

async function start() {
  const picker = document.querySelector("#rendererPicker");
  if (picker) picker.hidden = !showPicker;
  document.querySelector("#aboutMenu")?.classList.toggle("has-renderer-picker", showPicker);

  let app = null;
  let enablePicker = () => {};
  if (showPicker && picker) {
    const buttons = [...picker.querySelectorAll("[data-renderer-mode]")];
    buttons.forEach(button => { button.disabled = true; });
    enablePicker = () => buttons.forEach(button => { button.disabled = false; });
    let switching = false;
    const updatePicker = () => buttons.forEach(button => {
      const selected = button.dataset.rendererMode === mode;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    updatePicker();

    buttons.forEach(button => {
      button.addEventListener("click", async () => {
        const nextMode = button.dataset.rendererMode;
        if (switching || nextMode === mode) return;
        switching = true;
        buttons.forEach(item => { item.disabled = true; });
        let restartRequested = false;
        try {
          // Different choices can resolve to the same backend (currently AUTO
          // and WEBGL). Avoid a restart and another large GLB write in that case.
          if (chooseRendererBackend(nextMode, Boolean(navigator.gpu)) === backend) {
            localStorage.setItem(modeKey, nextMode);
            mode = nextMode;
            updatePicker();
            return;
          }
          const current = await app?.getBackendHandoff();
          if (current?.file)
            await saveBackendHandoff(
              current.file,
              current.viewSession,
              current.workbench,
              current.sourceKind,
              current.environment
            );
          localStorage.setItem(modeKey, nextMode);
          restartRequested = true;
          location.reload();
        } catch (error) {
          restartRequested = false;
          console.error("Renderer handoff could not be saved", error);
          const reason = error?.name || "UNKNOWN ERROR";
          window.alert(`THE MODEL COULD NOT BE KEPT FOR RENDERER SWITCHING. (${reason})`);
        } finally {
          if (!restartRequested) {
            switching = false;
            buttons.forEach(item => { item.disabled = false; });
          }
        }
      });
    });
  }

  try {
    if (!backend) {
      document.querySelector("#startMessageText").textContent =
        "WEBGPU IS NOT AVAILABLE IN THIS BROWSER. CHOOSE AUTO OR WEBGL.";
      sendEmbedEvent(embedConfig, "startup-error");
      return;
    }

    if (packagedRenderers) {
      const moduleUrl = new URL(packagedRenderers[backend], document.baseURI).href;
      app = await import(/* @vite-ignore */ moduleUrl);
    } else {
      // The development preview still uses two Vite servers; packaged builds
      // load both renderer graphs from this document's own origin instead.
      app = backend === "webgl" && localComparison
        ? await import(/* @vite-ignore */ "http://127.0.0.1:8002/js/main.js?v=renderer-ab")
        : await import("../main.js?v=renderer-ab");
    }
    await app.bootPromise;
    enableEmbedBridge(app, embedConfig);

    const handoff = showPicker ? await takeBackendHandoff() : null;
    if (handoff?.fileBytes || handoff?.file) {
      const file = new File([handoff.fileBytes ?? handoff.file], handoff.fileName,
        { type: "model/gltf-binary" });
      await app.openBackendHandoff(file, handoff);
    }
  } finally {
    enablePicker();
  }
}

start().catch(error => {
  console.error("Renderer startup failed", error);
  const message = document.querySelector("#startMessageText");
  if (message) message.textContent = `RENDERER COULD NOT START: ${error.message}`;
  document.querySelector("#startMessage")?.classList.add("error");
  sendEmbedEvent(embedConfig, "startup-error");
});
