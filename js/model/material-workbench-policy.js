export const MATERIAL_WORKBENCH_ENABLED = "enabled";
export const MATERIAL_WORKBENCH_DISABLED = "disabled";

export function readMaterialWorkbenchPolicy(gltf) {
  const policy = gltf?.parser?.json?.asset?.extras?.dropView?.materialWorkbench?.policy;
  return policy === MATERIAL_WORKBENCH_DISABLED
    ? MATERIAL_WORKBENCH_DISABLED
    : MATERIAL_WORKBENCH_ENABLED;
}

export function getMaterialWorkbenchAccess({
  embedded = false,
  policy = MATERIAL_WORKBENCH_ENABLED,
  sourceKind = null
} = {}) {
  if (embedded) return { visible: false, canEdit: false, canSave: false };

  const canEdit = policy !== MATERIAL_WORKBENCH_DISABLED;
  return {
    visible: true,
    canEdit,
    canSave: canEdit && sourceKind === "user"
  };
}

export function shouldLoadMaterialWorkbench(embedConfiguration) {
  return embedConfiguration == null;
}
