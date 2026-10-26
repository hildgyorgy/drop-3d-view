// Stage a model without touching active application state. Only the newest,
// successfully staged candidate may enter the synchronous replacement step.
export async function stageModelReplacement({ stage, isCurrent, disposeStale, commit }) {
  const candidate = await stage();
  if (!isCurrent()) {
    disposeStale(candidate);
    return false;
  }
  commit(candidate);
  return true;
}
