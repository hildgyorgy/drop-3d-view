export function readDropViewMetadata(gltf) {
  const json = gltf?.parser?.json;
  const sceneIndex = json?.scene ?? 0;
  const sceneExtras = json?.scenes?.[sceneIndex]?.extras?.dropView;
  const initialView = gltf?.scene?.userData?.dropView?.initialView ??
    sceneExtras?.initialView ?? null;
  const sun = gltf?.scene?.userData?.dropView?.sun ?? sceneExtras?.sun ?? null;
  const rawCredits = json?.asset?.extras?.dropView?.designCredits;

  return {
    initialView,
    sun,
    designCredits: typeof rawCredits === "string" ? rawCredits.trim() : ""
  };
}

export function readWindowLightEmitters(gltf) {
  const json = gltf?.parser?.json;
  const sceneIndex = json?.scene ?? 0;
  const lights = json?.scenes?.[sceneIndex]?.extras?.dropView?.windowLights;
  if (!Array.isArray(lights)) return [];

  return lights.slice(0, 32).flatMap(light => {
    const emitter = light?.rectangularEmitter;
    if (light?.source !== "archicad-window-light" || light.enabled !== true ||
        emitter?.coordinateFrame !== "gltfWorld" ||
        !isFiniteVector3(emitter.center) || !isFiniteVector3(emitter.normal) ||
        !isFiniteVector3(emitter.widthAxis) || !isFiniteVector3(emitter.heightAxis) ||
        !Number.isFinite(emitter.width) || !Number.isFinite(emitter.height) ||
        emitter.width <= 0 || emitter.height <= 0 ||
        emitter.width > 1000 || emitter.height > 1000) return [];

    const length = vector => Math.hypot(...vector);
    const dot = (a, b) => a.reduce((sum, value, index) => sum + value * b[index], 0);
    const axes = [emitter.normal, emitter.widthAxis, emitter.heightAxis];
    if (axes.some(axis => Math.abs(length(axis) - 1) > 0.01) ||
        Math.abs(dot(axes[0], axes[1])) > 0.01 ||
        Math.abs(dot(axes[0], axes[2])) > 0.01 ||
        Math.abs(dot(axes[1], axes[2])) > 0.01) return [];

    return [{
      center: emitter.center,
      normal: emitter.normal,
      heightAxis: emitter.heightAxis,
      width: emitter.width,
      height: emitter.height,
      color: isFiniteVector3(light.color) ? light.color : [1, 1, 1]
    }];
  });
}

export function findInitialCameraNode(gltf, cameraIndex) {
  if (!Number.isInteger(cameraIndex) || cameraIndex < 0) return null;

  const nodes = gltf?.parser?.json?.nodes;
  const associations = gltf?.parser?.associations;
  if (!Array.isArray(nodes) || !associations || !gltf?.scene?.traverse) return null;

  const matchingNodes = new Set();
  nodes.forEach((node, index) => {
    if (node.camera === cameraIndex) matchingNodes.add(index);
  });
  if (!matchingNodes.size) return null;

  let cameraNode = null;
  gltf.scene.traverse(object => {
    if (
      cameraNode === null &&
      object.isCamera &&
      matchingNodes.has(associations.get(object)?.nodes)
    ) cameraNode = object;
  });
  return cameraNode;
}

export function isFiniteVector3(value) {
  return Array.isArray(value) && value.length === 3 && value.every(Number.isFinite);
}
