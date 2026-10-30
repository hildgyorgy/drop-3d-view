// Files and PNG Blobs stay in browser storage so a page reload does not lose
// completed work or the packages still waiting. A running job restarts from zero.
export function createRenderQueueStore() {
  let database;
  function open() {
    database ??= new Promise((resolve, reject) => {
      const request = indexedDB.open("dropview-render-queue", 1);
      request.onupgradeneeded = () => request.result.createObjectStore("jobs", { keyPath: "id" });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Queue storage is blocked by another tab."));
    });
    return database;
  }
  async function transaction(mode, action) {
    const db = await open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("jobs", mode);
      const request = action(tx.objectStore("jobs"));
      tx.oncomplete = () => resolve(request?.result);
      tx.onerror = tx.onabort = () => reject(tx.error || new Error("Queue storage failed."));
    });
  }
  return {
    async load() { return (await transaction("readonly", store => store.getAll())).sort((a,b) => a.order - b.order); },
    save(items) { return transaction("readwrite", store => { for (const item of items) store.put(item); }); },
    remove(id) { return transaction("readwrite", store => store.delete(id)); }
  };
}
