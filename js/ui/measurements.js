import * as THREE from "three";
import { State } from "../core/state.js";
import { renderer } from "../core/scene.js";
import {
  firstVisibleRaycastHit,
  isVisibleRaycastHit
} from "../view/raycast-hit-filter.js";
import { measurementScale, formatMeasurement } from "./measurement-scale.js";

const entry = document.querySelector("#measurementsEntry");
const overlay = document.createElement("div");
overlay.id = "measurementOverlay";
overlay.hidden = true;
overlay.innerHTML = `<svg aria-hidden="true"><path class="measurement-line"/><path class="measurement-ticks"/><g class="measurement-labels"></g><text class="measurement-value" text-anchor="middle"></text></svg>
  <button class="measurement-handle" type="button" aria-label="Drag measurement start onto the model" title="Drag onto a model surface"></button>
  <button class="measurement-handle" type="button" aria-label="Drag measurement end onto the model" title="Drag onto a model surface"></button>
  <p class="measurement-help" role="status">DRAG BOTH DOTS ONTO THE MODEL</p>`;
document.body.append(overlay);
const svg = overlay.querySelector("svg");
const line = overlay.querySelector(".measurement-line");
const ticks = overlay.querySelector(".measurement-ticks");
const labels = overlay.querySelector(".measurement-labels");
const value = overlay.querySelector(".measurement-value");
const help = overlay.querySelector(".measurement-help");
const handles = [...overlay.querySelectorAll("button")];
const anchors = [null, null];
const seeds = [
  [0.39, 0.62],
  [0.61, 0.48]
];
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const projected = new THREE.Vector3();
let drag = null;
let missed = false;
let lastDrawing = "";

export function isMeasurementDragging() {
  return drag !== null;
}

function hitOptions() {
  return {
    model: State.model,
    sectionEnabled: State.sectionEnabled,
    sectionPlane: State.sectionPlane
  };
}

function endDrag() {
  if (!drag) return;
  const { controls, enabled, handle, pointerId } = drag;
  drag = null;
  if (State.controls === controls)
    controls.enabled =
      enabled && !State.pathTracerActive && State.navigationMode !== "fly";
  if (handle.hasPointerCapture(pointerId)) handle.releasePointerCapture(pointerId);
  overlay.classList.remove("measurement-dragging");
  missed = false;
}

function setEnabled(enabled) {
  endDrag();
  overlay.hidden = !enabled;
  entry.setAttribute("aria-pressed", String(enabled));
  if (enabled && State.navigationMode === "fly")
    document.querySelector('[data-navigation-mode="orbit"]')?.click();
  updateMeasurements();
}

entry.hidden = false;
entry.addEventListener("click", () => setEnabled(overlay.hidden));

function moveEndpoint(event) {
  if (!drag || event.pointerId !== drag.pointerId || !State.model) return;
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.set(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    (-(event.clientY - rect.top) / rect.height) * 2 + 1
  );
  State.camera.updateMatrixWorld();
  raycaster.setFromCamera(pointer, State.camera);
  const hit = firstVisibleRaycastHit(
    raycaster.intersectObject(State.model, true).filter(item => item.object.isMesh),
    hitOptions()
  );
  missed = !hit;
  if (hit) anchors[drag.index] = { object: hit.object, point: hit.point.clone() };
  updateMeasurements();
}

handles.forEach((handle, index) => {
  handle.addEventListener("pointerdown", event => {
    if (event.button !== 0 || drag || State.navigationMode === "fly") return;
    event.preventDefault();
    event.stopPropagation();
    const controls = State.controls;
    drag = {
      index,
      handle,
      pointerId: event.pointerId,
      controls,
      enabled: controls.enabled
    };
    controls.enabled = false;
    ++State.cameraAnimation;
    handle.setPointerCapture(event.pointerId);
    overlay.classList.add("measurement-dragging");
  });
  handle.addEventListener("pointermove", moveEndpoint);
  handle.addEventListener("pointerup", event => {
    if (event.pointerId !== drag?.pointerId) return;
    moveEndpoint(event);
    endDrag();
    updateMeasurements();
  });
  handle.addEventListener("pointercancel", endDrag);
  handle.addEventListener("lostpointercapture", endDrag);
  handle.addEventListener("click", event => event.stopPropagation());
  handle.addEventListener("dblclick", event => event.stopPropagation());
});
window.addEventListener("blur", endDrag);
window.addEventListener("keydown", event => {
  if (event.key === "Escape") endDrag();
});

function reset() {
  endDrag();
  anchors.fill(null);
  lastDrawing = "";
  updateMeasurements();
}
window.addEventListener("dropview:model-cleared", reset);
window.addEventListener("dropview:model-loaded", reset);

function screen(point, rect) {
  projected.copy(point).project(State.camera);
  if (projected.z < -1 || projected.z > 1) return null;
  return [
    ((projected.x + 1) * rect.width) / 2 + rect.left,
    ((1 - projected.y) * rect.height) / 2 + rect.top
  ];
}

export function updateMeasurements() {
  if (overlay.hidden) return;
  const rect = renderer.domElement.getBoundingClientRect();
  State.camera.updateMatrixWorld();
  const options = hitOptions();
  const visible = anchors.every(
    anchor => !anchor || isVisibleRaycastHit(anchor, options)
  );
  const points = anchors.map((anchor, i) =>
    anchor
      ? screen(anchor.point, rect)
      : [rect.left + rect.width * seeds[i][0], rect.top + rect.height * seeds[i][1]]
  );
  const drawable = visible && points.every(Boolean);
  svg.hidden = !drawable;
  svg.style.display = drawable ? "" : "none";
  handles.forEach((handle, i) => {
    handle.hidden = !drawable;
    handle.classList.toggle("measurement-unset", !anchors[i]);
    handle.classList.toggle("measurement-miss", missed && drag?.index === i);
    if (points[i]) {
      handle.style.left = `${points[i][0]}px`;
      handle.style.top = `${points[i][1]}px`;
    }
  });
  help.textContent = !State.model
    ? "OPEN A GLB OR TRY A DEMO TO MEASURE"
    : !drawable
      ? "MEASUREMENT POINT HIDDEN · RESTORE THE VIEW OR MODEL GROUP"
      : missed
        ? "NO SURFACE HERE · LAST POINT KEPT"
        : anchors.every(Boolean)
          ? "DRAG A DOT TO ADJUST · DISTANCE IN MODEL METRES"
          : "DRAG BOTH DOTS ONTO THE MODEL";
  if (!drawable) return;
  const [a, b] = points;
  const dx = b[0] - a[0],
    dy = b[1] - a[1];
  const pixels = Math.hypot(dx, dy);
  const nx = pixels > 0 ? -dy / pixels : 0;
  const ny = pixels > 0 ? dx / pixels : 1;
  const distance = anchors.every(Boolean)
    ? anchors[0].point.distanceTo(anchors[1].point)
    : null;
  const key = JSON.stringify([points, distance]);
  if (key === lastDrawing) return;
  lastDrawing = key;
  line.setAttribute("d", `M${a}L${b}`);
  line.classList.toggle("measurement-preview", distance === null);
  let path = "",
    text = "";
  const scale = measurementScale(distance, pixels);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const readable = angle > 90 || angle < -90 ? angle + 180 : angle;
  if (scale) {
    for (let i = 0; i <= scale.count; i++) {
      const metres = i * scale.step;
      const p = screen(
        anchors[0].point.clone().lerp(anchors[1].point, metres / distance),
        rect
      );
      if (!p) continue;
      const major = i % 10 === 0;
      const size = major ? 20 : i % 5 === 0 ? 13 : 8;
      path += `M${p}l${nx * size},${ny * size}`;
      if (major) {
        const x = p[0] + nx * 30,
          y = p[1] + ny * 30;
        text += `<text x="${x}" y="${y}" text-anchor="middle" transform="rotate(${readable},${x},${y})">${Number(metres.toPrecision(6))}</text>`;
      }
    }
  }
  ticks.setAttribute("d", path);
  labels.innerHTML = text;
  const x = (a[0] + b[0]) / 2 - nx * 13,
    y = (a[1] + b[1]) / 2 - ny * 13;
  value.setAttribute("x", x);
  value.setAttribute("y", y);
  value.setAttribute("transform", `rotate(${readable},${x},${y})`);
  value.textContent =
    distance === null ? "PLACE TWO POINTS" : formatMeasurement(distance);
}
