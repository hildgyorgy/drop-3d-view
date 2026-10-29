// A selected package can be opened for editing or rendered in an isolated worker.
import { pausePhotoRender } from "../view/photo1.js";

export function bindRenderStation({ openPackage }) {
  const entry = document.querySelector("#renderStationEntry");
  const dialog = document.querySelector("#renderStation");
  const choose = dialog.querySelector("[data-choose]");
  const open = dialog.querySelector("[data-open-package]");
  const render = dialog.querySelector("[data-render-package]");
  const input = dialog.querySelector('input[type="file"]');
  const status = dialog.querySelector("[data-render-status]");
  const details = dialog.querySelector("[data-details]");
  const compatibility = dialog.querySelector("[data-compatibility]");
  const progress = dialog.querySelector("progress");
  const pause = dialog.querySelector("[data-pause]");
  const cancel = dialog.querySelector("[data-cancel]");
  const download = dialog.querySelector("[data-download]");
  let frame = null;
  let readyTimeout = null;
  let imageUrl = null;
  let paused = false;
  let readyToPause = false;
  let currentFile = null;
  let selectedFile = null;
  let opening = false;

  function updateActions() {
    const busy = Boolean(frame) || opening;
    choose.disabled = input.disabled = busy;
    open.disabled = render.disabled = busy || !selectedFile;
  }
  function showCompatibility(warnings = []) {
    const messages = warnings.filter(item => typeof item === "string");
    compatibility.hidden = messages.length === 0;
    compatibility.textContent = messages.length
      ? `${messages.join(" ")} This viewer uses its own renderer and HDRI; the image may differ.` : "";
  }
  function selectPackage(file) {
    if (!file || frame || opening) return;
    if (!/\.dvrender$/i.test(file.name)) {
      status.textContent = "Choose a .dvrender package.";
      return;
    }
    selectedFile = file;
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    imageUrl = null;
    download.removeAttribute("href");
    dialog.querySelector("[data-filename]").textContent = file.name;
    status.textContent = "";
    details.textContent = "";
    showCompatibility();
    progress.hidden = true;
    download.hidden = true;
    updateActions();
  }

  const send = message => frame?.contentWindow?.postMessage({
    channel: "dropview-render", ...message
  }, location.origin);
  function releaseWorker() {
    clearTimeout(readyTimeout);
    frame?.remove();
    frame = null;
    currentFile = null;
    pause.disabled = false;
    updateActions();
    pause.hidden = cancel.hidden = true;
    entry.textContent = "RENDER STATION";
  }
  function fail(message) {
    releaseWorker();
    progress.hidden = true;
    status.textContent = `Render failed: ${message}`;
  }
  function start(file) {
    if (!file || frame || opening) return;
    if (!/\.dvrender$/i.test(file.name)) {
      status.textContent = "Choose a .dvrender package.";
      return;
    }
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    imageUrl = null;
    download.hidden = true;
    download.removeAttribute("href");
    paused = readyToPause = false;
    currentFile = file;
    dialog.querySelector("[data-filename]").textContent = file.name;
    details.textContent = "";
    compatibility.textContent = "";
    compatibility.hidden = true;
    status.textContent = "Starting renderer…";
    progress.hidden = false;
    progress.removeAttribute("value");
    cancel.hidden = false;
    pause.hidden = true;
    pause.textContent = "PAUSE";
    entry.textContent = "RENDER STATION · ACTIVE";
    pausePhotoRender(true);
    frame = document.createElement("iframe");
    frame.className = "render-worker-frame";
    frame.title = "Background render";
    frame.setAttribute("aria-hidden", "true");
    frame.tabIndex = -1;
    const url = new URL(location.pathname, location.origin);
    url.search = "?rendererDebug=1&renderWorker=1&build=render-station-7";
    frame.src = url.href;
    document.body.append(frame);
    updateActions();
    readyTimeout = setTimeout(() => fail("The renderer did not start. Try reopening the page."), 60_000);
  }
  entry.hidden = false;
  entry.addEventListener("click", () => { if (!dialog.open) dialog.show(); });
  dialog.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    event.stopPropagation();
    dialog.close();
  });
  dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  choose.addEventListener("click", () => { input.value = ""; input.click(); });
  input.addEventListener("change", () => selectPackage(input.files?.[0]));
  render.addEventListener("click", () => start(selectedFile));
  open.addEventListener("click", async () => {
    if (!selectedFile || frame || opening) return;
    opening = true;
    updateActions();
    status.textContent = "Opening package in the viewer…";
    try {
      const result = await openPackage(selectedFile);
      showCompatibility(result.warnings);
      details.textContent = `${result.width} × ${result.height} px · ${result.targetSamples} target samples`;
      status.textContent = "Opened in viewer.";
      dialog.close();
    } catch (error) {
      status.textContent = `Could not open package: ${error.message}`;
    } finally {
      opening = false;
      updateActions();
    }
  });
  updateActions();
  dialog.addEventListener("dragover", event => {
    event.preventDefault();
    event.stopPropagation();
  });
  dialog.addEventListener("drop", event => {
    event.preventDefault();
    event.stopPropagation();
    selectPackage(event.dataTransfer.files?.[0]);
  });
  pause.addEventListener("click", () => {
    if (!readyToPause) return;
    paused = !paused;
    send({ type: "pause", paused });
    pause.textContent = paused ? "RESUME" : "PAUSE";
  });
  cancel.addEventListener("click", () => {
    releaseWorker();
    status.textContent = "Render cancelled.";
    progress.hidden = true;
  });
  window.addEventListener("message", event => {
    if (!frame || event.source !== frame.contentWindow || event.origin !== location.origin ||
        event.data?.channel !== "dropview-render") return;
    const message = event.data;
    if (message.type === "ready") {
      clearTimeout(readyTimeout);
      send({ type: "start", file: currentFile });
    } else if (message.type === "loading") {
      status.textContent = "Opening package and restoring materials…";
    } else if (message.type === "compatibility") {
      showCompatibility(Array.isArray(message.warnings) ? message.warnings : []);
    } else if (message.type === "progress") {
      readyToPause = !message.preparing && !message.compiling && message.samples >= 1;
      pause.hidden = !readyToPause;
      const samples = Math.floor(message.samples || 0);
      status.textContent = message.preparing ? "Preparing scene…"
        : message.compiling ? "Preparing renderer…"
        : `${message.paused ? "Paused" : "Rendering"} · ${samples} / ${message.target} samples`;
      details.textContent = `${message.width} × ${message.height} px · Bounces ${message.bounces} · Glass ${message.transmissiveBounces}`;
      progress.max = message.target;
      progress.value = samples;
    } else if (message.type === "done" && message.blob instanceof Blob) {
      imageUrl = URL.createObjectURL(message.blob);
      download.href = imageUrl;
      download.download = message.name;
      download.hidden = false;
      status.textContent = `PNG ready · ${progress.max} samples`;
      progress.value = progress.max;
      releaseWorker();
    } else if (message.type === "error") {
      fail(message.message);
    }
  });
}
