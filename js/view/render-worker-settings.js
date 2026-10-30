// Bound each GPU dispatch independently of the requested output resolution.
// This changes scheduling and hidden presentation work, not render quality.
export function configureRenderWorkerTracer(tracer, { width, height }) {
  tracer.renderToCanvas = false;
  tracer.rasterizeScene = false;
  tracer.dynamicLowRes = false;
  tracer.lowResScale = Math.max(0.01, 1 / width, 1 / height);
  tracer.renderDelay = 0;
  tracer.minSamples = 1;
  tracer.fadeDuration = 0;
  tracer.tiles.set(Math.max(1, Math.ceil(width / 512)),
    Math.max(1, Math.ceil(height / 512)));
}
