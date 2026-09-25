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
