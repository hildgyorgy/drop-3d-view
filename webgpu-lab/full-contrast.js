// Safari's blend-mode fallback for labels over the WebGPU canvas. Sample a
// downscaled copy periodically; WebGL's synchronous readPixels is unavailable.
import { renderer } from "../js/core/scene.js";

const root = document.documentElement;
const startScreen = document.querySelector("#startScreen");
const viewerUI = document.querySelector("#viewerUI");
const enabled = root.classList.contains("safari-contrast-fallback");
const labels = [
  "#openAgain:not(:hover)",
  ".navigation-mode button:not(.active, :hover)",
  "#performanceStats",
  ".tool-button:not(.active, :hover)",
  ".photo-button:not(.active, :hover)",
  ".glass-light-button:not(.active, :hover)",
  ".black-back-button:not(.active, :hover)",
  ".view-menu button:not(.active, :hover)",
  ".axis-buttons button:not(.active, :hover, #sectionFlip)",
  ".menu-toggle:not(:hover)",
  ".adaptive-text"
].join(", ");
const sampleCanvas = document.createElement("canvas");
const context = sampleCanvas.getContext("2d", { willReadFrequently: true });
let sampling = false;
let lastSample = -Infinity;

export function updateAdaptiveContrast(time) {
  if (!enabled || !context || !startScreen.classList.contains("hidden")) return;
  if (sampling || time - lastSample < 800) return;
  lastSample = time;
  sampling = true;
  const canvas = renderer.domElement;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) { sampling = false; return; }

  createImageBitmap(canvas).then(bitmap => {
    const width = Math.min(512, Math.max(1, Math.round(rect.width)));
    const height = Math.max(1, Math.round(width * rect.height / rect.width));
    sampleCanvas.width = width;
    sampleCanvas.height = height;
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    const pixels = context.getImageData(0, 0, width, height).data;

    for (const label of viewerUI.querySelectorAll(labels)) {
      const box = label.getBoundingClientRect();
      if (!box.width || !box.height) continue;
      let lightness = 0;
      let samples = 0;
      for (let index = 0; index < 5; index++) {
        const screenX = box.left + box.width * (0.1 + index * 0.2);
        const screenY = box.top + box.height / 2;
        const x = Math.floor((screenX - rect.left) * width / rect.width);
        const y = Math.floor((screenY - rect.top) * height / rect.height);
        if (x < 0 || x >= width || y < 0 || y >= height) continue;
        const offset = (y * width + x) * 4;
        lightness += 0.2126 * pixels[offset] + 0.7152 * pixels[offset + 1] + 0.0722 * pixels[offset + 2];
        samples++;
      }
      if (!samples) continue;
      const wasDark = label.style.getPropertyValue("--safari-contrast-ink") === "#202020";
      const dark = lightness / samples >= (wasDark ? 135 : 160);
      label.style.setProperty("--safari-contrast-ink", dark ? "#202020" : "#fff");
    }
  }).catch(() => {
    // Some WebGPU implementations disallow canvas snapshots.
  }).finally(() => { sampling = false; });
}
