const output =
  document.getElementById("performanceStats");

const UPDATE_INTERVAL = 500;
const MAX_FRAME_GAP = 1000;

let intervalStart = null;
let frameCount = 0;


export function updatePerformanceStats(time) {

  if (!output || !Number.isFinite(time))
    return;

  if (intervalStart === null) {
    intervalStart = time;
    return;
  }

  const elapsed =
    time - intervalStart;

  if (elapsed > MAX_FRAME_GAP) {
    intervalStart = time;
    frameCount = 0;
    return;
  }

  frameCount += 1;

  if (elapsed < UPDATE_INTERVAL)
    return;

  const frameTime =
    elapsed / frameCount;

  const fps =
    1000 / frameTime;

  output.textContent =
    `${Math.round(fps)} FPS • ${frameTime.toFixed(1)} ms`;

  intervalStart = time;
  frameCount = 0;

}
