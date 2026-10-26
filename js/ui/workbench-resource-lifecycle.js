import { disposeOwnedResources } from "../model/model-resource-disposal.js";

export function disposeUnusedWorkbenchEdit(
  edit,
  activeEdits,
  undoEdit,
  dispose = disposeOwnedResources
) {
  const resources = edit?.resources;
  if (!resources || undoEdit?.resources === resources ||
      [...activeEdits].some(candidate => candidate.resources === resources)) return false;
  dispose(resources);
  return true;
}
