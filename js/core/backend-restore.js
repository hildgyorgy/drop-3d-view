// Restore the independent parts of a renderer handoff without allowing an
// optional workbench failure to block the camera/view session.
export async function restoreBackendHandoff(
  file,
  { viewSession = null, workbench = null } = {},
  { openFile, restoreWorkbench = null, restoreView = null, onError = () => {} }
) {
  if (!await openFile(file)) return false;

  if (workbench && restoreWorkbench) {
    try {
      await restoreWorkbench(workbench);
    } catch (error) {
      onError("workbench", error);
    }
  }

  if (viewSession && restoreView) {
    try {
      restoreView(viewSession);
    } catch (error) {
      onError("view", error);
    }
  }

  return true;
}
