// Only an embedded document explicitly opened by the debug render station.
export const renderWorkerMode = window.parent !== window &&
  new URLSearchParams(location.search).get("rendererDebug") === "1" &&
  new URLSearchParams(location.search).get("renderWorker") === "1";
