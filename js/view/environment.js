import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { scene, renderer } from "../core/scene.js";
import { State } from "../core/state.js";

const button = document.getElementById("environmentToggle");
let enabled = false;
let environmentTarget = null;

// Generate once on demand; toggling reuses the same small lighting texture.
function getEnvironment() {
  if (!environmentTarget) {
    const room = new RoomEnvironment();
    const generator = new THREE.PMREMGenerator(renderer);
    try {
      environmentTarget = generator.fromScene(room, 0.04);
    } finally {
      room.dispose();
      generator.dispose();
    }
  }
  return environmentTarget.texture;
}

export function updateEnvironment() {
  const original = State.currentMode === "original";
  scene.environment = enabled && original ? getEnvironment() : null;
  scene.environmentIntensity = 0.1625;
  button.disabled = !original;
  button.textContent = enabled ? "ENV ON" : "ENV OFF";
  button.setAttribute("aria-pressed", String(enabled));
}

button.addEventListener("click", () => {
  enabled = !enabled;
  updateEnvironment();
});

updateEnvironment();
