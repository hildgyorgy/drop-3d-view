// The visible viewer never receives the packaged model or its canvas size.
import { pausePhotoRender } from "../view/photo1.js";

export function bindRenderStation() {
  const entry = document.querySelector("#renderStationEntry");
  const dialog = document.querySelector("#renderStation");
  const choose = dialog.querySelector("[data-choose]");
  const input = dialog.querySelector("input");
  const status = dialog.querySelector("[role=status]");
  const details = dialog.querySelector("[data-details]");
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

  const send = message => frame?.contentWindow?.postMessage({
    channel: "dropview-render", ...message
  }, location.origin);
  function releaseWorker() {
    clearTimeout(readyTimeout);
    frame?.remove();
    frame = null;
    currentFile = null;
    choose.disabled = input.disabled = pause.disabled = false;
    pause.hidden = cancel.hidden = true;
    entry.textContent = "RENDER STATION";
  }
  function fail(message) {
    releaseWorker();
    progress.hidden = true;
    status.textContent = `Render failed: ${message}`;
  }
  function start(file) {
    if (!file || frame) return;
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
    status.textContent = "Starting renderer…";
    progress.hidden = false;
    progress.removeAttribute("value");
    choose.disabled = input.disabled = true;
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
    url.search = "?rendererDebug=1&renderWorker=1&build=render-station-2";
    frame.src = url.href;
    document.body.append(frame);
    readyTimeout = setTimeout(() => fail("The renderer did not start. Try reopening the page."), 60_000);
  }
  entry.hidden = false;
  entry.addEventListener("click", () => dialog.showModal());
  dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  choose.addEventListener("click", () => { input.value = ""; input.click(); });
  input.addEventListener("change", () => start(input.files?.[0]));
  dialog.addEventListener("dragover", event => {
    event.preventDefault();
    event.stopPropagation();
  });
  dialog.addEventListener("drop", event => {
    event.preventDefault();
    event.stopPropagation();
    start(event.dataTransfer.files?.[0]);
  });
  pause.addEventListener("click", () => {
    if (!readyToPause) return;
    paused = !paused;
    send({ type: "pause", paused });
    pause.textContent = paused ? "RESUME" : "PAUSE";
  });
  cancel.addEventListener("click", () => {
    releaseWorker();
    status.textContent = "Render cancelled. Drop another package to start.";
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
      status.textContent = `Render complete · ${progress.max} samples. Your PNG is ready.`;
      progress.value = progress.max;
      releaseWorker();
    } else if (message.type === "error") {
      fail(message.message);
    }
  });
}
