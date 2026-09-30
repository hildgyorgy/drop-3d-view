/* One document/UI, with renderer-specific module graphs selected at startup. */
import { activeRendererMode, chooseRendererBackend } from "./backend-choice.js";
import { saveBackendHandoff, readBackendHandoff, clearBackendHandoff } from "./backend-handoff.js";

const localComparison = location.hostname === "127.0.0.1" && location.port === "8001";
const packagedRenderers = window.__DROP_VIEW_RENDERER_PACKAGES__ || null;
const comparison = Boolean(packagedRenderers) || localComparison;
const showPicker = comparison && new URLSearchParams(location.search).has("rendererDebug");
const modeKey = "drop-view-renderer-mode";
const mode = activeRendererMode(showPicker, showPicker ? localStorage.getItem(modeKey) : null);
const backend = chooseRendererBackend(mode, Boolean(navigator.gpu));

async function start() {
  const picker = document.querySelector("#rendererPicker");
  if (picker) picker.hidden = !showPicker;
  document.querySelector("#aboutMenu")?.classList.toggle("has-renderer-picker", showPicker);

  let app = null;
  if (showPicker && picker) {
    picker.querySelectorAll("[data-renderer-mode]").forEach(button => {
      const selected = button.dataset.rendererMode === mode;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
      button.addEventListener("click", async () => {
        const nextMode = button.dataset.rendererMode;
        if (nextMode === mode) return;
        button.disabled = true;
        try {
          const current = app?.getBackendHandoff();
          if (current?.file) await saveBackendHandoff(current.file, current.viewSession);
          localStorage.setItem(modeKey, nextMode);
          location.reload();
        } catch (error) {
          button.disabled = false;
          console.error("Renderer handoff could not be saved", error);
          window.alert("THE MODEL COULD NOT BE KEPT FOR RENDERER SWITCHING.");
        }
      });
    });
  }

  if (!backend) {
    document.querySelector("#startMessageText").textContent =
      "WEBGPU IS NOT AVAILABLE IN THIS BROWSER. CHOOSE AUTO OR WEBGL.";
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

  const handoff = comparison ? await readBackendHandoff() : null;
  if (handoff?.file) {
    const file = new File([handoff.file], handoff.fileName, { type: "model/gltf-binary" });
    if (await app.openFile(file, { viewSession: handoff.viewSession }))
      await clearBackendHandoff();
  }
}

start().catch(error => {
  console.error("Renderer startup failed", error);
  const message = document.querySelector("#startMessageText");
  if (message) message.textContent = `RENDERER COULD NOT START: ${error.message}`;
  document.querySelector("#startMessage")?.classList.add("error");
});
