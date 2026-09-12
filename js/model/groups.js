/*
   MODEL GROUPS

   The exporter contract is intentionally generic: every direct child of the
   active glTF scene is one switchable group. Its name is only a UI label;
   object identity is kept through the Three.js object reference and UUID.
*/

export function createModelGroups(model) {
  const objects = Array.from(model?.children || []);
  const occurrences = new Map();

  return objects
    .map((object, index) => {
      const label = getModelGroupLabel(object, index);
      const occurrence = (occurrences.get(label) || 0) + 1;
      occurrences.set(label, occurrence);
      object.visible = true;

      return {
        id: object.uuid,
        label,
        displayLabel: occurrence > 1 ? `${label} (${occurrence})` : label,
        object,
        visible: true
      };
    })
    .sort((a, b) =>
      a.displayLabel.localeCompare(b.displayLabel, undefined, { sensitivity: "base" })
    );
}

export function getModelGroupLabel(object, index) {
  return (
    object.userData?.groupLabel?.trim() || object.name?.trim() || `Group ${index + 1}`
  );
}

export function setModelGroupVisible(group, visible) {
  group.visible = visible;
  group.object.visible = visible;
}

export function isObjectVisibleInHierarchy(object, root) {
  let current = object;

  while (current) {
    if (!current.visible) return false;
    if (current === root) return true;
    current = current.parent;
  }

  return true;
}
