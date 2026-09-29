// A private, one-shot browser handoff. GLBs remain on the user's device.
const databaseName = "drop-view-renderer-handoff";
const storeName = "handoff";

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function transact(mode, action) {
  const database = await openDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(storeName, mode);
      const request = action(transaction.objectStore(storeName));
      let result;
      request.onsuccess = () => { result = request.result; };
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } finally {
    database.close();
  }
}

export function saveBackendHandoff(file, viewSession) {
  return transact("readwrite", store => store.put({ file, fileName: file.name, viewSession }, "current"));
}

export async function readBackendHandoff() {
  return (await transact("readonly", store => store.get("current"))) ?? null;
}

export function clearBackendHandoff() {
  return transact("readwrite", store => store.delete("current"));
}
