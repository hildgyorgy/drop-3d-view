// Sequential package queue. Only one isolated renderer exists at a time.
import { pausePhotoRender } from "../view/photo1.js";
import { RenderQueue, renderQueueOutputName } from "./render-queue.js";
import { createRenderQueueStore } from "./render-queue-store.js";

export function bindRenderStation({ openPackage }) {
  const entry = document.querySelector("#renderStationEntry");
  const dialog = document.querySelector("#renderStation");
  const $ = selector => dialog.querySelector(selector);
  const choose = $("[data-choose]");
  const list = $("[data-package-list]");
  const open = $("[data-open-package]");
  const render = $("[data-render-package]");
  const input = $('input[type="file"]');
  const status = $("[data-render-status]");
  const details = $("[data-details]");
  const compatibility = $("[data-compatibility]");
  const progress = $("progress");
  const pause = $("[data-pause]");
  const skip = $("[data-skip]");
  const cancel = $("[data-cancel]");
  const keepOpen = $("[data-keep-open]");
  const warning = $("[data-queue-warning]");
  const tabs = [...dialog.querySelectorAll("[role=tab]")];
  const panes = [...dialog.querySelectorAll("[role=tabpanel]")];
  const store = createRenderQueueStore();
  let queue = new RenderQueue();
  let frame = null, activeJob = null;
  let readyTimeout, nextTimer;
  let running = false, paused = false, readyToPause = false;
  let opening = false, restoring = true, adding = false, finishing = false;
  let writes = Promise.resolve();
  const imageUrls = new Map();

  function storageWarning() {
    warning.hidden = false;
    warning.textContent = "QUEUE STORAGE UNAVAILABLE · KEEP THIS TAB OPEN";
  }
  function persist(items = queue.items) {
    const records = items.map(item => ({ ...item }));
    writes = writes.then(() => store.save(records)).catch(storageWarning);
    return writes;
  }
  function urlFor(job) {
    if (!job?.output) return null;
    if (!imageUrls.has(job.id)) imageUrls.set(job.id, URL.createObjectURL(job.output));
    return imageUrls.get(job.id);
  }
  function revoke(id) {
    const url = imageUrls.get(id);
    if (url) URL.revokeObjectURL(url);
    imageUrls.delete(id);
  }
  function selectTab(name, focus = false) {
    for (const tab of tabs) {
      const selected = tab.dataset.tab === name;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    }
    for (const pane of panes) pane.hidden = pane.dataset.pane !== name;
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab.dataset.tab));
    tab.addEventListener("keydown", event => {
      let target;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") target = 1 - index;
      else if (event.key === "Home") target = 0;
      else if (event.key === "End") target = 1;
      else return;
      event.preventDefault(); event.stopPropagation();
      selectTab(tabs[target].dataset.tab, true);
    });
  });

  function showCompatibility(warnings = []) {
    const messages = warnings.filter(item => typeof item === "string");
    compatibility.hidden = messages.length === 0;
    compatibility.textContent = messages.length
      ? `${messages.join(" ")} This viewer uses its own renderer; the image may differ.` : "";
  }
  function updateActions() {
    choose.disabled = input.disabled = restoring || opening || adding;
    open.disabled = restoring || running || opening || !queue.selected;
    render.disabled = restoring || opening || adding || finishing || running || !queue.next;
    render.textContent = "START QUEUE";
    choose.textContent = queue.items.length ? "ADD PACKAGES" : "CHOOSE PACKAGES";
    pause.hidden = cancel.hidden = skip.hidden = !running;
    pause.disabled = Boolean(activeJob && !readyToPause) || finishing;
    skip.disabled = finishing || !activeJob;
    pause.textContent = paused ? "RESUME" : "PAUSE";
    keepOpen.hidden = !running;
    keepOpen.textContent = queue.items.length > 1
      ? "Keep this tab open · allow downloads for this site."
      : "Keep this tab open while rendering.";
    entry.textContent = running ? "EXPORT · RENDERING" : "EXPORT";
    $("#renderTab").textContent = running ? "RENDER · ACTIVE" : "RENDER";
  }
  function jobState(job) {
    if (job.state === "error") return "FAILED";
    if (job.state === "done") return "PNG READY";
    if (["rendering", "paused"].includes(job.state))
      return `${job.state === "paused" ? "PAUSED" : "RENDERING"} · ${Math.floor(job.samples || 0)} / ${job.target || "—"}`;
    return job.state.toUpperCase();
  }
  function paintList() {
    list.replaceChildren();
    queue.items.forEach((job, index) => {
      const li = document.createElement("li");
      li.dataset.job = job.id;
      const name = document.createElement("button");
      name.type = "button";
      name.dataset.selectJob = job.id;
      name.textContent = job.name;
      name.setAttribute("aria-pressed", String(queue.selectedId === job.id));
      name.addEventListener("click", () => {
        queue.selectedId = job.id;
        if (!running) {
          status.textContent = job.error ? `Render failed: ${job.error}` : "";
          details.textContent = job.details || "";
          showCompatibility(job.warnings || []);
          progress.hidden = true;
        }
        paintList();
      });
      const row = document.createElement("div");
      row.className = "render-queue-row";
      const state = document.createElement("span");
      state.className = "render-queue-state";
      state.textContent = jobState(job);
      const tools = document.createElement("div");
      tools.className = "render-queue-tools";
      const button = (label, aria, action, disabled = false) => {
        const node = document.createElement("button");
        node.type = "button"; node.textContent = label; node.disabled = disabled;
        node.setAttribute("aria-label", `${aria}: ${job.name}`);
        node.addEventListener("click", action); tools.append(node);
      };
      if (job.output) {
        const link = document.createElement("a");
        link.textContent = "PNG"; link.href = urlFor(job); link.download = job.outputName;
        link.setAttribute("aria-label", `Download PNG: ${job.name}`); tools.append(link);
      }
      if (["done", "error", "cancelled"].includes(job.state)) {
        button("↻", "Render again", () => {
          revoke(job.id);
          Object.assign(job, { state: "queued", samples: 0, output: null, outputName: null, error: null });
          void persist([job]); paintList();
          if (running && !activeJob) scheduleNext();
        });
      }
      const active = activeJob?.id === job.id;
      button("↑", "Move up", () => { if (queue.move(job.id, -1)) { void persist(); paintList(); } }, active || index === 0);
      button("↓", "Move down", () => { if (queue.move(job.id, 1)) { void persist(); paintList(); } }, active || index === queue.items.length - 1);
      button("×", "Remove package", () => {
        if (!queue.remove(job.id)) return;
        revoke(job.id);
        writes = writes.then(() => store.remove(job.id)).catch(storageWarning);
        void persist(); paintList();
      }, active);
      row.append(state, tools); li.append(name, row); list.append(li);
    });
    updateActions();
  }
  async function addPackages(files) {
    if (restoring || opening || adding) return;
    adding = true;
    const entries = [...(files || [])];
    const added = queue.add(entries);
    selectTab("render");
    if (added.length !== entries.length) status.textContent = "ONLY .DVRENDER PACKAGES ACCEPTED";
    else if (!running) status.textContent = "";
    paintList();
    await persist(added);
    adding = false;
    updateActions();
    if (running && !activeJob) scheduleNext();
  }
  const send = message => frame?.contentWindow?.postMessage({ channel: "dropview-render", ...message }, location.origin);
  function releaseWorker() {
    clearTimeout(readyTimeout);
    frame?.remove(); frame = null;
    activeJob = null; readyToPause = false; finishing = false;
    updateActions();
  }
  function scheduleNext() {
    clearTimeout(nextTimer);
    if (running && !paused) nextTimer = setTimeout(startNext, 500);
  }
  function fail(message) {
    if (activeJob) {
      activeJob.state = "error"; activeJob.error = String(message);
      void persist([activeJob]);
    }
    releaseWorker();
    progress.hidden = true;
    status.textContent = `Render failed: ${message}`;
    paintList(); scheduleNext();
  }
  function startNext() {
    if (!running || paused || frame || opening || adding) return;
    const job = queue.next;
    if (!job) {
      running = false;
      const done = queue.items.filter(item => item.state === "done").length;
      const failed = queue.items.filter(item => item.state === "error").length;
      status.textContent = `QUEUE COMPLETE · ${done} PNG${failed ? ` · ${failed} FAILED` : ""}`;
      updateActions(); return;
    }
    activeJob = job; queue.selectedId = job.id;
    job.state = "loading";
    void persist([job]);
    paused = readyToPause = finishing = false;
    details.textContent = ""; showCompatibility();
    status.textContent = "Starting renderer…";
    progress.hidden = false; progress.removeAttribute("value");
    pausePhotoRender(true);
    frame = document.createElement("iframe");
    frame.className = "render-worker-frame"; frame.title = "Background render";
    frame.setAttribute("aria-hidden", "true"); frame.tabIndex = -1;
    const url = new URL(location.pathname, location.origin);
    url.search = "?rendererDebug=1&renderWorker=1&build=three-r187-3";
    frame.src = url.href; document.body.append(frame);
    paintList();
    readyTimeout = setTimeout(() => fail("The renderer did not start. Try reopening the page."), 60_000);
  }
  entry.hidden = false;
  entry.addEventListener("click", () => {
    if (running) selectTab("render");
    if (!dialog.open) dialog.show();
  });
  dialog.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    event.stopPropagation(); dialog.close();
  });
  $("[data-close]").addEventListener("click", () => dialog.close());
  choose.addEventListener("click", () => { input.value = ""; input.click(); });
  input.addEventListener("change", () => void addPackages(input.files));
  render.addEventListener("click", () => {
    if (running || restoring || opening || adding || !queue.next) return;
    running = true; paused = false; startNext();
  });
  open.addEventListener("click", async () => {
    const job = queue.selected;
    if (!job || running || opening) return;
    opening = true; updateActions();
    status.textContent = "Opening package in the viewer…";
    try {
      const result = await openPackage(job.file);
      showCompatibility(result.warnings);
      details.textContent = `${result.width} × ${result.height} px · ${result.targetSamples} target samples`;
      status.textContent = ""; selectTab("export"); dialog.close();
    } catch (error) { status.textContent = `Could not open package: ${error.message}`; }
    finally { opening = false; updateActions(); }
  });
  dialog.addEventListener("dragover", event => { event.preventDefault(); event.stopPropagation(); });
  dialog.addEventListener("drop", event => {
    event.preventDefault(); event.stopPropagation(); void addPackages(event.dataTransfer.files);
  });
  pause.addEventListener("click", () => {
    if ((activeJob && !readyToPause) || finishing) return;
    paused = !paused;
    if (activeJob) activeJob.state = paused ? "paused" : "rendering";
    send({ type: "pause", paused }); paintList();
    if (!paused && !activeJob) scheduleNext();
  });
  function stopCurrent(continueQueue) {
    clearTimeout(nextTimer);
    if (activeJob) {
      activeJob.state = "cancelled"; void persist([activeJob]);
    }
    running = continueQueue; paused = false;
    releaseWorker(); progress.hidden = true;
    status.textContent = continueQueue ? "SKIPPED" : "QUEUE STOPPED";
    paintList(); scheduleNext();
  }
  skip.addEventListener("click", () => stopCurrent(true));
  cancel.addEventListener("click", () => stopCurrent(false));
  window.addEventListener("message", async event => {
    if (!frame || !activeJob || event.source !== frame.contentWindow || event.origin !== location.origin ||
        event.data?.channel !== "dropview-render") return;
    const message = event.data;
    if (message.type === "ready") {
      clearTimeout(readyTimeout); send({ type: "start", file: activeJob.file });
    } else if (message.type === "loading") {
      status.textContent = "Opening package and restoring materials…";
    } else if (message.type === "compatibility") {
      activeJob.warnings = Array.isArray(message.warnings) ? message.warnings : [];
      showCompatibility(activeJob.warnings);
    } else if (message.type === "progress" && !finishing) {
      readyToPause = !message.preparing && !message.compiling && message.samples >= 1;
      activeJob.samples = Math.floor(message.samples || 0); activeJob.target = message.target;
      activeJob.state = message.preparing || message.compiling ? "loading" : paused ? "paused" : "rendering";
      status.textContent = message.preparing ? "Preparing scene…" : message.compiling ? "Preparing renderer…"
        : `${paused ? "Paused" : "Rendering"} · ${activeJob.samples} / ${message.target} samples`;
      activeJob.details = `${message.width} × ${message.height} px · Bounces ${message.bounces} · Glass ${message.transmissiveBounces}`;
      details.textContent = activeJob.details;
      progress.max = message.target; progress.value = activeJob.samples;
      // Keep row controls stable while samples advance (and while users click).
      const label = list.querySelector(`[data-job="${activeJob.id}"] .render-queue-state`);
      if (label) label.textContent = jobState(activeJob);
      updateActions();
    } else if (message.type === "done" && message.blob instanceof Blob && !finishing) {
      finishing = true;
      const job = activeJob;
      job.state = "done"; job.output = message.blob;
      job.outputName = renderQueueOutputName(job.name, message.name);
      job.samples = job.target;
      progress.value = progress.max;
      status.textContent = "PNG READY";
      const anchor = document.createElement("a");
      anchor.href = urlFor(job); anchor.download = job.outputName;
      anchor.hidden = true; document.body.append(anchor); anchor.click(); anchor.remove();
      // Release GPU resources before waiting for disk storage or the next job.
      releaseWorker(); finishing = true;
      paintList();
      await persist([job]);
      finishing = false;
      updateActions();
      if (running) scheduleNext();
    } else if (message.type === "error" && !finishing) fail(message.message);
  });
  updateActions();
  void store.load().then(records => {
    queue = new RenderQueue(records);
    if (queue.next) status.textContent = "";
  }).catch(storageWarning).finally(() => {
    restoring = false; paintList();
  });
  window.addEventListener("pagehide", () => {
    clearTimeout(nextTimer); clearTimeout(readyTimeout);
    if (activeJob) activeJob.state = "queued";
    running = paused = false;
    releaseWorker();
    progress.hidden = true;
    status.textContent = "";
    for (const id of imageUrls.keys()) revoke(id);
  });
  window.addEventListener("pageshow", event => {
    if (event.persisted) paintList();
  });
}
