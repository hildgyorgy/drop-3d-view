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

// Call only after the destination backend has selected the saved projection
// and created its camera/controls. UI, groups and section are restored by their
// owning modules; this function deliberately touches only the camera pose.
export function restoreCameraPose(snapshot, camera, controls) {
  const saved = snapshot.camera;
  camera.position.fromArray(saved.position);
  camera.quaternion.fromArray(saved.quaternion);
  camera.up.fromArray(saved.up);
  camera.zoom = saved.zoom;
  if (camera.isPerspectiveCamera && saved.fov !== null) camera.fov = saved.fov;
  camera.updateProjectionMatrix();
  controls.target.fromArray(saved.target);
  controls.update();
}
