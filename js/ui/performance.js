const output = document.getElementById("performanceStats");

const UPDATE_INTERVAL = 500;
const MAX_FRAME_GAP = 1000;
const SAMPLES_TOOLTIP = "Samples per pixel; more samples refine the image.";

let intervalStart = null;
let frameCount = 0;

export function updatePerformanceStats(time, renderStats = null) {
  if (!output || !Number.isFinite(time)) return;

  if (renderStats) {
    if (renderStats.preparing) output.textContent = "SAMPLES • PREPARING";
    else if (renderStats.compiling) output.textContent = "SAMPLES • COMPILING";
    else if (renderStats.paused)
      output.textContent = `SAMPLES • ${Math.floor(renderStats.samples)} • PAUSED`;
    else output.textContent = `SAMPLES • ${Math.floor(renderStats.samples)}`;
    if (output.title !== SAMPLES_TOOLTIP) output.title = SAMPLES_TOOLTIP;

    intervalStart = time;
    frameCount = 0;
    return;
  }

  if (output.hasAttribute("title")) output.removeAttribute("title");

  if (intervalStart === null) {
    intervalStart = time;
    return;
  }

  const elapsed = time - intervalStart;

  if (elapsed > MAX_FRAME_GAP) {
    intervalStart = time;
    frameCount = 0;
    return;
  }

  frameCount += 1;

  if (elapsed < UPDATE_INTERVAL) return;

  const frameTime = elapsed / frameCount;

  const fps = 1000 / frameTime;

  output.textContent = `${Math.round(fps)} FPS • ${frameTime.toFixed(1)} ms`;

  intervalStart = time;
  frameCount = 0;
}
