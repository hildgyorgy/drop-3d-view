/*
   Renderer-independent view state for a future WebGL/WebGPU restart.

   The loaded model stays in memory; this snapshot contains only the small
   state needed to reconstruct the same view around that model. Renderer,
   materials, GPU resources and path-tracer accumulation never belong here.
*/

export function captureViewSession(
  state,
  { groups = [], selectedIds = [], settings = {}, cameraPreset = null } = {}
) {
  const camera = state.camera;
  const section = state.sectionPlane;

  return {
    version: 1,
    camera: {
      projection: state.cameraProjection,
      preset: cameraPreset,
      position: camera.position.toArray(),
      quaternion: camera.quaternion.toArray(),
      up: camera.up.toArray(),
      target: state.controls.target.toArray(),
      zoom: camera.zoom,
      fov: camera.isPerspectiveCamera ? camera.fov : null
    },
    displayMode: state.currentMode,
    navigationMode: state.navigationMode,
    groups: groups.map(group => ({ sessionKey: group.sessionKey, visible: group.visible })),
    selectedIds: [...selectedIds],
    section: {
      enabled: state.sectionEnabled,
      axis: state.sectionAxis,
      normal: section.normal.toArray(),
      constant: section.constant
    },
    settings: structuredClone(settings)
  };
}

const projections = new Set(["perspective", "axon", "ortho"]);
const presets = new Set(["front", "left", "right", "back", "top"]);
const displayModes = new Set(["original", "white", "hidden", "wireframe", "renaissance"]);
const numericSettings = new Set([
  "sunAngle", "sunHeight", "cameraFov", "transparency", "flySpeed",
  "windowLightsIntensity", "sectionSlider", "renderWidth", "renderHeight",
  "renderSamples"
]);
const booleanSettings = new Set([
  "windowLights", "shadow", "blackBack", "sectionFlip"
]);

function finiteArray(value, length) {
  return Array.isArray(value) && value.length === length && value.every(Number.isFinite);
}

function plainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function assertValidCameraSnapshot(camera) {
  if (!plainObject(camera) || !projections.has(camera.projection) ||
      camera.preset !== null && camera.preset !== undefined && !presets.has(camera.preset) ||
      !finiteArray(camera.position, 3) || !finiteArray(camera.quaternion, 4) ||
      !finiteArray(camera.up, 3) || !finiteArray(camera.target, 3) ||
      !Number.isFinite(camera.zoom) || camera.zoom <= 0 ||
      camera.fov !== null &&
        (!Number.isFinite(camera.fov) || camera.fov <= 0 || camera.fov >= 180))
    throw new Error("Invalid view session camera");

  const quaternionLength = Math.hypot(...camera.quaternion);
  const upLength = Math.hypot(...camera.up);
  if (!Number.isFinite(quaternionLength) || quaternionLength < 1e-6 ||
      !Number.isFinite(upLength) || upLength < 1e-6)
    throw new Error("Invalid view session camera orientation");
  return camera;
}

export function assertValidViewSession(snapshot) {
  if (!plainObject(snapshot) || snapshot.version !== 1)
    throw new Error("Unsupported view session");
  assertValidCameraSnapshot(snapshot.camera);
  if (!displayModes.has(snapshot.displayMode) ||
      !["orbit", "fly"].includes(snapshot.navigationMode) ||
      !Array.isArray(snapshot.groups) || snapshot.groups.some(group =>
        !plainObject(group) || typeof group.sessionKey !== "string" ||
        typeof group.visible !== "boolean") ||
      !Array.isArray(snapshot.selectedIds) ||
      snapshot.selectedIds.some(id => typeof id !== "string"))
    throw new Error("Invalid view session state");

  const section = snapshot.section;
  if (!plainObject(section) || typeof section.enabled !== "boolean" ||
      !["x", "y", "z"].includes(section.axis) ||
      !finiteArray(section.normal, 3) || Math.hypot(...section.normal) < 1e-6 ||
      !Number.isFinite(section.constant))
    throw new Error("Invalid view session section");

  const settings = snapshot.settings;
  if (!plainObject(settings)) throw new Error("Invalid view session settings");
  for (const [key, value] of Object.entries(settings)) {
    if (numericSettings.has(key) && value !== undefined && value !== null &&
        !Number.isFinite(Number(value)))
      throw new Error(`Invalid view session setting: ${key}`);
    if (booleanSettings.has(key) && value !== undefined && value !== null &&
        typeof value !== "boolean")
      throw new Error(`Invalid view session setting: ${key}`);
    if (key === "sectionColor" && value !== undefined && typeof value !== "string")
      throw new Error("Invalid view session setting: sectionColor");
  }
  return snapshot;
}

// Call only after the destination backend has selected the saved projection
// and created its camera/controls. UI, groups and section are restored by their
// owning modules; this function deliberately touches only the camera pose.
export function restoreCameraPose(snapshot, camera, controls) {
  const saved = assertValidCameraSnapshot(snapshot.camera);
  camera.position.fromArray(saved.position);
  camera.quaternion.fromArray(saved.quaternion);
  camera.up.fromArray(saved.up);
  camera.zoom = saved.zoom;
  if (camera.isPerspectiveCamera && saved.fov !== null) camera.fov = saved.fov;
  camera.updateProjectionMatrix();
  controls.target.fromArray(saved.target);
  controls.update();
}
