// Keep canvas-owned listeners on exactly one canvas during renderer replacement.
// Passing null detaches the listener when the renderer is disposed.
export function createCanvasEventBinding(type, listener, options) {
  let canvas = null;

  return nextCanvas => {
    if (nextCanvas === canvas) return;
    canvas?.removeEventListener(type, listener, options);
    canvas = nextCanvas;
    canvas?.addEventListener(type, listener, options);
  };
}
