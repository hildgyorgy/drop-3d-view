export class AbortableBvhWorker {
  constructor(WorkerClass) {
    this.worker = new WorkerClass();
    this.pendingReject = null;
    this.disposed = false;
  }

  generate(...args) {
    if (this.disposed) throw new Error("BVH worker has been disposed");
    if (this.pendingReject) throw new Error("BVH worker is already running");

    const task = this.worker.generate(...args);
    return new Promise((resolve, reject) => {
      this.pendingReject = reject;
      task.then(result => {
        if (this.pendingReject === reject) this.pendingReject = null;
        if (!this.disposed) resolve(result);
      }, error => {
        if (this.pendingReject === reject) this.pendingReject = null;
        if (!this.disposed) reject(error);
      });
    });
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.worker.dispose();
    const reject = this.pendingReject;
    this.pendingReject = null;
    reject?.(new DOMException("BVH build was cancelled", "AbortError"));
  }
}
