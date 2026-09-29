/* Restore a saved view after the same GLB has been prepared by either backend. */

import { State } from "./state.js";
import {
  cameraFov,
  sectionButton,
  sectionFlip,
  sectionSlider,
  shadowToggle,
  sunAngle,
  sunHeight,
  transparency,
  windowLightsIntensity,
  windowLightsToggle
} from "./dom.js";
import { captureViewSession } from "./view-session.js";
import { getCameraPreset, restoreCameraView } from "../view/camera.js";
import {
  getGroupVisibilitySnapshot,
  restoreGroupVisibilitySnapshot
} from "../ui/group-filter.js";
import { setViewMode } from "../view/view-modes.js";
import { setNavigationMode } from "../view/navigation.js";
import { applyClipping, updateSectionPlane } from "../section/section-plane.js";
import { deactivatePhoto1, updatePhoto1Availability } from "../view/photo1.js";

const flySpeed = document.querySelector("#flySpeed");
const blackBackButton = document.querySelector("#blackBackButton");

function setInput(control, value, eventType = "input") {
  if (!control || value === undefined || value === null) return;
  control.value = String(value);
  control.dispatchEvent(new Event(eventType));
}

function captureSettings() {
  return {
    sunAngle: sunAngle.value,
    sunHeight: sunHeight.value,
    cameraFov: cameraFov.value,
    transparency: transparency.value,
    flySpeed: flySpeed?.value,
    windowLights: windowLightsToggle?.checked,
    windowLightsIntensity: windowLightsIntensity?.value,
    shadow: shadowToggle.checked,
    blackBack: blackBackButton?.getAttribute("aria-pressed") === "true",
    sectionSlider: sectionSlider.value,
    sectionFlip: sectionFlip.getAttribute("aria-pressed") === "true",
    sectionColor: document.querySelector("[data-section-color].active")?.dataset.sectionColor
  };
}

export function captureCurrentViewSession() {
  if (!State.model) return null;
  return captureViewSession(State, {
    groups: getGroupVisibilitySnapshot(),
    settings: captureSettings(),
    cameraPreset: getCameraPreset()
  });
}

function restoreSettings(settings = {}) {
  setInput(sunAngle, settings.sunAngle);
  setInput(sunHeight, settings.sunHeight);
  setInput(transparency, settings.transparency);
  setInput(flySpeed, settings.flySpeed);
  if (typeof settings.shadow === "boolean") {
    shadowToggle.checked = settings.shadow;
    shadowToggle.dispatchEvent(new Event("change"));
  }
  if (windowLightsToggle && !windowLightsToggle.disabled &&
      typeof settings.windowLights === "boolean") {
    windowLightsToggle.checked = settings.windowLights;
    windowLightsToggle.dispatchEvent(new Event("change"));
  }
  setInput(windowLightsIntensity, settings.windowLightsIntensity);
  if (blackBackButton && typeof settings.blackBack === "boolean" &&
      (blackBackButton.getAttribute("aria-pressed") === "true") !== settings.blackBack)
    blackBackButton.click();
}

function restoreSection(section, settings = {}) {
  if (!section || !["x", "y", "z"].includes(section.axis)) return;
  const axisButton = document.querySelector(`[data-axis="${section.axis}"]`);
  axisButton?.click();
  if (typeof settings.sectionFlip === "boolean") {
    sectionFlip.setAttribute("aria-pressed", String(settings.sectionFlip));
  }
  if (settings.sectionSlider !== undefined)
    sectionSlider.value = String(settings.sectionSlider);
  State.sectionEnabled = Boolean(section.enabled);
  sectionButton.classList.toggle("active", State.sectionEnabled);
  sectionButton.setAttribute("aria-pressed", String(State.sectionEnabled));
  updateSectionPlane();
  if (Array.isArray(section.normal) && Number.isFinite(section.constant)) {
    State.sectionPlane.normal.fromArray(section.normal);
    State.sectionPlane.constant = section.constant;
    applyClipping();
  }
  if (settings.sectionColor) {
    const colorButton = [...document.querySelectorAll("[data-section-color]")]
      .find(button => button.dataset.sectionColor === settings.sectionColor);
    colorButton?.click();
  }
  updatePhoto1Availability();
}

export function restoreCurrentViewSession(snapshot) {
  if (!State.model || snapshot?.version !== 1)
    throw new Error("No model or unsupported view session");
  deactivatePhoto1(); // The accumulated image cannot survive a renderer restart.
  if (["original", "white", "hidden", "wireframe", "renaissance"].includes(snapshot.displayMode))
    setViewMode(snapshot.displayMode);
  restoreSettings(snapshot.settings);
  restoreGroupVisibilitySnapshot(snapshot.groups ?? []);
  restoreCameraView(snapshot);
  restoreSection(snapshot.section, snapshot.settings);
  setNavigationMode(snapshot.navigationMode === "fly" ? "fly" : "orbit");
}
