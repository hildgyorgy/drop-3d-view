import { getRenderJob } from "../core/render-job.js";
import { getPhoto1Stats, startPhotoRender, pausePhotoRender,
  capturePhotoImage } from "./photo1.js";

export function startRenderWorker(restoreSnapshot, stop) {
  const send = message => parent.postMessage({ channel: "dropview-render", ...message }, location.origin);
  let started = false;
  let finished = false;
  let reporting = false;
  let timer;
  const fail = error => {
    finished = true;
    clearInterval(timer);
    send({ type: "error", message: error.message });
    stop();
  };
  window.addEventListener("error", event => {
    if (started && !finished) fail(event.error ?? new Error(event.message));
  });
  window.addEventListener("message", async event => {
    if (event.source !== parent || event.origin !== location.origin ||
        event.data?.channel !== "dropview-render" || finished) return;
    const message = event.data;
    if (message.type === "pause") {
      pausePhotoRender(Boolean(message.paused));
      return;
    }
    if (message.type !== "start" || started || !(message.file instanceof File)) return;
    started = true;
    try {
      send({ type: "loading" });
      const size = await restoreSnapshot(message.file, { worker: true });
      const job = getRenderJob();
      timer = setInterval(async () => {
        if (reporting || finished) return;
        reporting = true;
        try {
          const stats = getPhoto1Stats();
          send({ type: "progress", ...stats, ...size, target: job.samples,
            bounces: job.bounces, transmissiveBounces: job.transmissiveBounces });
          if (stats && !stats.preparing && !stats.compiling && stats.samples >= job.samples) {
            finished = true;
            clearInterval(timer);
            const image = await capturePhotoImage();
            send({ type: "done", ...image });
            stop();
          }
        } catch (error) {
          fail(error);
        } finally {
          reporting = false;
        }
      }, 250);
      await startPhotoRender();
    } catch (error) {
      fail(error);
    }
  });
  send({ type: "ready" });
}
