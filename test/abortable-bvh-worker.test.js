import test from "node:test";
import assert from "node:assert/strict";
import { AbortableBvhWorker } from "../js/view/abortable-bvh-worker.js";

class FakeWorker {
  constructor() {
    this.disposed = false;
    this.resolve = null;
  }

  generate() {
    return new Promise(resolve => { this.resolve = resolve; });
  }

  dispose() {
    this.disposed = true;
  }
}

test("BVH worker forwards a completed build", async () => {
  const worker = new AbortableBvhWorker(FakeWorker);
  const result = worker.generate();
  worker.worker.resolve("tree");
  assert.equal(await result, "tree");
  worker.dispose();
  assert.equal(worker.worker.disposed, true);
});

test("disposing a running BVH worker rejects the public task", async () => {
  const worker = new AbortableBvhWorker(FakeWorker);
  const result = worker.generate();
  worker.dispose();
  await assert.rejects(result, error => error.name === "AbortError");
  assert.throws(() => worker.generate(), /disposed/);
});
