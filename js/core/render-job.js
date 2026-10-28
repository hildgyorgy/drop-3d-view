export const PHOTO_BOUNCES = 6;
export const PHOTO_TRANSMISSIVE_BOUNCES = 10;

let renderJob = null;

export function assertRenderJob(job) {
  if (!job || !Number.isSafeInteger(job.samples) ||
      !Number.isSafeInteger(job.bounces) ||
      !Number.isSafeInteger(job.transmissiveBounces) ||
      job.samples < 1 || job.samples > 100000 ||
      job.bounces < 1 || job.bounces > 64 ||
      job.transmissiveBounces < 1 || job.transmissiveBounces > 64)
    throw new Error("Invalid path tracing job settings");
  return job;
}

export function makeRenderJob(samples) {
  return assertRenderJob({
    samples,
    bounces: PHOTO_BOUNCES,
    transmissiveBounces: PHOTO_TRANSMISSIVE_BOUNCES
  });
}

export function setRenderJob(job) {
  renderJob = job ? { ...assertRenderJob(job) } : null;
}

export function getRenderJob() {
  return renderJob;
}
