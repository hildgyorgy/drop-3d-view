const output = document.getElementById("performanceStats");

const UPDATE_INTERVAL = 500;
const MAX_FRAME_GAP = 1000;

let intervalStart = null;
let frameCount = 0;

export function updatePerformanceStats(time, renderStats = null) {
  if (!output || !Number.isFinite(time)) return;

  if (renderStats) {
    if (renderStats.preparing) output.textContent = "PHOTO • PREPARING";
    else if (renderStats.compiling) output.textContent = "PHOTO • COMPILING";
    else output.textContent = `PHOTO • ${Math.floor(renderStats.samples)} SPP`;

    intervalStart = time;
    frameCount = 0;
    return;
  }

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
