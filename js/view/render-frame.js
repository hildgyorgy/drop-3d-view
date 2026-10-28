/* Keep a received render's camera frame independent of the remote display. */
import { renderer, perspectiveCamera } from "../core/scene.js";
import { updateOrthoFrustum } from "./camera.js";
import { assertRenderSize } from "../core/render-size.js";

let importedSize = null;
let originalPixelRatio = null;

function fitFrame() {
  if (!importedSize) return;
  const canvas = renderer.domElement;
  const scale = Math.min(window.innerWidth / importedSize.width,
    window.innerHeight / importedSize.height);
  const width = importedSize.width * scale;
  const height = importedSize.height * scale;
  canvas.style.position = "absolute";
  canvas.style.left = `${(window.innerWidth - width) / 2}px`;
  canvas.style.top = `${(window.innerHeight - height) / 2}px`;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}

export function resizeImportedRenderFrame() {
  if (!importedSize) return false;
  fitFrame();
  return true;
}

export function clearImportedRenderFrame() {
  if (!importedSize) return;
  importedSize = null;
  const canvas = renderer.domElement;
  canvas.style.position = "";
  canvas.style.left = "";
  canvas.style.top = "";
  renderer.setPixelRatio(originalPixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  originalPixelRatio = null;
  perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
  perspectiveCamera.updateProjectionMatrix();
  updateOrthoFrustum();
}

export function applyImportedRenderFrame(size) {
  clearImportedRenderFrame();
  if (!size) return; // Older snapshot packages had no fixed image frame.
  assertRenderSize(size);
  const context = renderer.getContext();
  const limit = Math.min(renderer.capabilities.maxTextureSize,
    context.getParameter(context.MAX_RENDERBUFFER_SIZE));
  if (size.width > limit || size.height > limit)
    throw new Error(`This GPU supports at most ${limit} pixels per side`);
  importedSize = { width: size.width, height: size.height };
  originalPixelRatio = renderer.getPixelRatio();
  renderer.setPixelRatio(1);
  renderer.setSize(size.width, size.height, false);
  perspectiveCamera.aspect = size.width / size.height;
  perspectiveCamera.updateProjectionMatrix();
  updateOrthoFrustum(size.width / size.height);
  fitFrame();
}
