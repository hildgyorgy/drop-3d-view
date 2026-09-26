/* Safari fallback for labels above the WebGL canvas.
   WebKit does not reliably mix-blend them with WebGL, so sample the rendered
   pixels under each visible label and choose solid dark or white ink. */

import { renderer } from "../core/scene.js";

const root = document.documentElement;
const viewerUI = document.querySelector("#viewerUI");
const startScreen = document.querySelector("#startScreen");
const enabled = root.classList.contains("safari-contrast-fallback");
const labelSelector = [
  "#openAgain:not(:hover)",
  ".navigation-mode button:not(.active, :hover)",
  "#performanceStats",
  ".tool-button:not(.active, :hover)",
  ".photo-button:not(.active, :hover)",
  ".view-menu button:not(.active, :hover)",
  ".axis-buttons button:not(.active, :hover, #sectionFlip)",
  ".menu-toggle:not(:hover)",
  ".adaptive-text"
].join(", ");

const SAMPLE_INTERVAL_MS = 500;
let pixels = new Uint8Array(0);
let lastSampleTime = -Infinity;

function sampleLuminance(gl, canvasRect, rect) {
  const canvas = renderer.domElement;
  const scaleX = canvas.width / canvasRect.width;
  const scaleY = canvas.height / canvasRect.height;
  const x = Math.max(0, Math.floor((rect.left + rect.width * 0.1 - canvasRect.left) * scaleX));
  const right = Math.min(
    canvas.width,
    Math.ceil((rect.right - rect.width * 0.1 - canvasRect.left) * scaleX)
  );
  const width = right - x;
  const y = Math.floor((canvasRect.bottom - rect.top - rect.height / 2) * scaleY);

  if (width <= 0 || y < 0 || y >= canvas.height) return null;

  if (pixels.length < width * 4) pixels = new Uint8Array(width * 4);
  gl.readPixels(x, y, width, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

  let luminance = 0;
  let samples = 0;
  for (let i = 0; i < 5; i += 1) {
    const offset = Math.floor((i * (width - 1)) / 4) * 4;
    if (pixels[offset + 3] === 0) continue;
    luminance +=
      0.2126 * pixels[offset] +
      0.7152 * pixels[offset + 1] +
      0.0722 * pixels[offset + 2];
    samples += 1;
  }
  return samples ? luminance / samples : null;
}

export function updateAdaptiveContrast(time) {
  if (!enabled || !startScreen.classList.contains("hidden")) return;
  if (time - lastSampleTime < SAMPLE_INTERVAL_MS) return;
  lastSampleTime = time;

  const gl = renderer.getContext();
  if (gl.isContextLost() || gl.getParameter(gl.FRAMEBUFFER_BINDING) !== null) return;

  const canvasRect = renderer.domElement.getBoundingClientRect();
  if (!canvasRect.width || !canvasRect.height) return;

  for (const label of viewerUI.querySelectorAll(labelSelector)) {
    const rect = label.getBoundingClientRect();
    if (!rect.width || !rect.height) continue;

    const luminance = sampleLuminance(gl, canvasRect, rect);
    if (luminance === null) continue;

    // Hysteresis keeps labels from flickering at the threshold as samples refine.
    const wasDark = label.style.getPropertyValue("--safari-contrast-ink") === "#202020";
    const dark = luminance >= (wasDark ? 135 : 160);
    label.style.setProperty("--safari-contrast-ink", dark ? "#202020" : "#fff");
  }
}
