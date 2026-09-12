/* Shared traversal helpers for loaded model hierarchies. */

export function forEachMesh(model, callback) {
  if (!model) return;

  model.traverse(object => {
    if (object.isMesh) callback(object);
  });
}
