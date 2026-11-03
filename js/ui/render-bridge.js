import { RenderBridgeClient } from "../core/render-bridge.js";

export function bindRenderBridgeControls({ captureSnapshot, canCapture }) {
  const connect = document.querySelector("#renderBridgeConnect");
  const disconnect = document.querySelector("#renderBridgeDisconnect");
  const render = document.querySelector("#renderBridgeRender");
  const cancel = document.querySelector("#renderBridgeCancel");
  const reveal = document.querySelector("#renderBridgeReveal");
  const output = document.querySelector("#renderBridgeStatus");
  const jobOutput = document.querySelector("#renderBridgeJob");
  const jobSelect = document.querySelector("#renderBridgeJobs");
  const jobs = new Map();
  const client = new RenderBridgeClient();
  let busy = false;
  let polling = false;
  let status = null;
  let job = null;
  let pending = null;

  function update() {
    const active = job && ["queued", "rendering"].includes(job.state);
    render.disabled =
      busy ||
      !client.token ||
      !status?.blenderAvailable ||
      !status?.capabilities?.includes("jobs") ||
      (!pending && !canCapture());
    render.textContent = pending ? "RETRY SEND" : "RENDER";
    cancel.hidden = !active || !client.token;
    cancel.disabled = busy;
    reveal.hidden = job?.state !== "finished" || !client.token;
    reveal.disabled = busy;
    connect.disabled = busy;
    connect.textContent = client.token ? "CHECK CONNECTION" : "CONNECT";
    disconnect.hidden = !client.token;
    disconnect.disabled = busy;
  }

  function showStatus(value) {
    status = value;
    output.textContent = !value.capabilities?.includes("jobs")
      ? "CONNECTED · Update Drop & View Render to send renders."
      : !value.blenderAvailable
        ? "CONNECTED · Choose Blender in Drop & View Render."
        : value.rendering
          ? "CONNECTED · RENDERING"
          : "CONNECTED · READY";
    update();
    if (!value.capabilities?.includes("jobs")) render.disabled = true;
  }

  function showJob(value, select = true) {
    jobs.set(value.id, value);
    if (select) job = value;
    jobSelect.replaceChildren(
      ...Array.from(jobs.values(), (item, index) => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = `${index + 1} · ${item.outputName ?? "Render"} · ${item.state.toUpperCase()}`;
        return option;
      })
    );
    jobSelect.hidden = jobs.size < 2;
    jobSelect.value = job?.id ?? "";
    if (!select && value.id !== job?.id) return;
    job = value;
    const seconds = Math.floor(value.elapsed ?? 0);
    const time = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    const progress = Number.isFinite(value.progress)
      ? ` · ${Math.round(value.progress * 100)}%`
      : "";
    jobOutput.textContent =
      value.state === "finished"
        ? `FINISHED · ${time} · ${value.outputName}`
        : value.state === "failed"
          ? `FAILED · ${value.error ?? "See the native app for details."}`
          : value.state === "cancelled"
            ? `CANCELLED · ${time}`
            : value.state === "queued"
              ? `QUEUED${value.queuePosition ? ` · ${value.queuePosition}` : ""}`
              : `RENDERING${progress} · ${time}`;
    update();
  }

  function showError(error) {
    const messages = {
      pairing_denied: "Connection declined in Drop & View Render.",
      pairing_busy: "A connection request is already pending. Try again shortly.",
      pairing_required: "Connection expired. Connect again and approve in the app.",
      renderer_busy: "The renderer is busy. Try again after it finishes.",
      blender_unavailable: "Choose Blender in Drop & View Render first.",
      upload_busy: "Another scene is uploading. Try again shortly.",
      session_storage_full:
        "This app session has reached its upload limit. Restart after rendering.",
      session_job_limit:
        "This app session has reached its job limit. Restart after rendering.",
      job_removed: "This job was removed in the native app.",
      idempotency_conflict: "This submission ID was already used for another scene."
    };
    output.textContent =
      messages[error.code || error.message] ??
      (error.status
        ? error.message
        : "Local connection unavailable or blocked by the browser. Open Drop & View Render and allow local network access. If HTTPS access is blocked, try Edge or use SAVE PACKAGE.");
    update();
  }

  async function refresh() {
    if (polling || busy || !client.token || document.hidden) return;
    polling = true;
    const token = client.token;
    const jobID = job?.id;
    try {
      const nextStatus = await client.status();
      if (busy || token !== client.token || jobID !== job?.id) return;
      showStatus(nextStatus);
      const ids = Array.from(jobs.values())
        .filter(item => item.id === jobID || ["queued", "rendering"].includes(item.state))
        .map(item => item.id);
      for (const id of ids) {
        try {
          const nextJob = await client.job(id);
          if (busy || token !== client.token) return;
          showJob(nextJob, false);
        } catch (error) {
          if (error.status === 410 || error.status === 404) {
            jobs.delete(id);
            if (job?.id === id) {
              job = null;
              jobOutput.textContent = "Job no longer available in the native app.";
            }
          }
          throw error;
        }
      }
    } catch (error) {
      showError(error);
    } finally {
      polling = false;
      update();
    }
  }

  connect.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    output.textContent = client.token
      ? "Checking…"
      : "Approve the connection in Drop & View Render…";
    update();
    try {
      showStatus(await client.connect());
    } catch (error) {
      showError(error);
    } finally {
      busy = false;
      update();
      void refresh();
    }
  });

  jobSelect.addEventListener("change", () => {
    const selected = jobs.get(jobSelect.value);
    if (selected) showJob(selected);
    void refresh();
  });

  disconnect.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    update();
    try {
      await client.disconnect();
    } catch {
      /* Forget credentials even if the app has quit. Accepted renders continue. */
    } finally {
      busy = false;
      status = null;
      output.textContent = "";
      update();
    }
  });

  render.addEventListener("click", async () => {
    if (render.disabled) return;
    busy = true;
    update();
    let accepted = false;
    try {
      if (!pending) {
        jobOutput.textContent = "PREPARING SCENE…";
        const { snapshot } = await captureSnapshot();
        pending = { snapshot, key: crypto.randomUUID() };
      }
      jobOutput.textContent = "SENDING SCENE…";
      const result = await client.submit(pending.snapshot, pending.key);
      // Keep the same immutable scene and ID after an ambiguous network failure.
      // Only an accepted response changes the UI to rendering.
      pending = null;
      accepted = true;
      showJob({ id: result.id, state: "queued", elapsed: 0 });
      showJob(await client.job(result.id));
    } catch (error) {
      if (pending)
        jobOutput.textContent =
          "Send not confirmed. RETRY SEND resends the same scene safely.";
      else if (accepted) jobOutput.textContent = "Render accepted. Waiting for status…";
      else jobOutput.textContent = "Could not prepare the scene.";
      showError(error);
    } finally {
      busy = false;
      update();
    }
  });

  cancel.addEventListener("click", async () => {
    if (!job || busy) return;
    busy = true;
    update();
    try {
      await client.cancel(job.id);
      jobOutput.textContent = "CANCELLING…";
    } catch (error) {
      showError(error);
    } finally {
      busy = false;
      update();
    }
  });

  reveal.addEventListener("click", async () => {
    if (!job || busy) return;
    busy = true;
    update();
    try {
      await client.reveal(job.id);
    } catch (error) {
      showError(error);
    } finally {
      busy = false;
      update();
    }
  });

  setInterval(() => void refresh(), 2000);
  update();
  return { update };
}
