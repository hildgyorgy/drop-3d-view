export function captureWorkbenchOperation(materialIndex, gltf, model) {
  return Object.freeze({ materialIndex, gltf, model });
}

export function isWorkbenchOperationCurrent(operation, gltf, model) {
  return operation.gltf === gltf && operation.model === model;
}
