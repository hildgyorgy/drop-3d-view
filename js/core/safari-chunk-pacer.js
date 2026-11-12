// Native Messaging can reject rapid bursts even when every chunk waits for an
// ACK. A shared page-level cadence leaves room for status and cancel requests.
const pacers = new WeakMap();

export function createSafariChunkPacer({
  now = () => performance.now(),
  sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds))
} = {}) {
  let next = 0;
  return async () => {
    const time = now();
    const start = Math.max(next, time);
    const delay = start - time;
    next = start + 80;
    if (delay > 0) await sleep(delay);
  };
}

export function paceSafariChunk(target) {
  if (!pacers.has(target)) pacers.set(target, createSafariChunkPacer());
  return pacers.get(target)();
}
