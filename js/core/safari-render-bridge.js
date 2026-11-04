// Bounded Native Messaging transport. HTTP remains a separate selectable path.
const requestChannel = "drop-view-render:safari:request";
const responseChannel = "drop-view-render:safari:response";

export class SafariRenderBridgeClient {
  constructor(target = globalThis.window, timeout = 10000) {
    this.target = target;
    this.timeout = timeout;
    this.busy = false;
    this.token = null;
    this.transfer = null;
  }

  async request(operation, fields = {}, timeout = 17000) {
    const target = this.target;
    const id = crypto.randomUUID();
    const origin = target.location.origin;
    if (origin === "null") throw new Error("Open Drop & View over HTTP or HTTPS.");
    const response = await new Promise((resolve, reject) => {
      let timer;
      const cleanup = () => { clearTimeout(timer); target.removeEventListener("message", receive); };
      const receive = event => {
        if (event.source !== target || event.origin !== origin || event.data?.channel !== responseChannel ||
            event.data.message?.id !== id) return;
        cleanup();
        const result = event.data.message;
        if (result.protocolVersion !== 1 || typeof result.ok !== "boolean") {
          reject(new Error("Invalid Safari native response.")); return;
        }
        if (!result.ok) {
          if (result.status === 401) this.token = null;
          const error = new Error(result.error || "Native request failed.");
          error.code = result.error; error.status = result.status;
          reject(error); return;
        }
        if (result.transport !== "safari-native-messaging" || !result.data || typeof result.data !== "object") {
          reject(new Error("Invalid Safari native response.")); return;
        }
        resolve(result.data);
      };
      target.addEventListener("message", receive);
      timer = setTimeout(() => { cleanup(); reject(new Error("Safari Native Messaging timed out. Check the extension and open Drop & View Render.")); }, timeout);
      try {
        target.postMessage({ channel: requestChannel, message: {
          protocolVersion: 1, id, operation, ...fields,
          ...(this.token ? { token: this.token } : {})
        } }, origin);
      } catch (error) { cleanup(); reject(error); }
    });
    return response;
  }

  async connect() {
    if (!this.token) {
      const result = await this.request("pair", {}, 125000);
      if (result.protocolVersion !== 1 || !/^[A-Fa-f0-9-]{72}$/.test(result.token ?? ""))
        throw new Error("Incompatible Drop & View Render bridge.");
      this.token = result.token;
    }
    return this.status();
  }

  async status() {
    const result = await this.request("status");
    if (result.app !== "Drop & View Render" || result.protocolVersion !== 1)
      throw new Error("Incompatible Drop & View Render bridge.");
    return result;
  }

  async disconnect() {
    try { if (this.token) await this.request("disconnect"); }
    finally { this.token = null; }
  }

  job(jobID) { return this.request("job", { jobID }); }
  cancel(jobID) { return this.request("cancel", { jobID }); }
  reveal(jobID) { return this.request("reveal", { jobID }); }

  async abortUpload() {
    const transfer = this.transfer;
    if (!transfer || transfer.finishing) throw new Error("The transfer is already being submitted.");
    transfer.cancelled = true;
    await this.request("uploadAbort", { uploadID: transfer.id });
  }

  async submit(snapshot, key, { onProgress = () => {} } = {}) {
    if (!this.token) throw new Error("Connect to Drop & View Render first.");
    if (this.transfer || this.beginning) throw new Error("Another Safari transfer is active.");
    if (!Number.isSafeInteger(snapshot.size) || snapshot.size < 24 || snapshot.size > 2 ** 31)
      throw new Error("The render package must be between 24 bytes and 2 GiB.");
    let begin;
    this.beginning = true;
    try { begin = await this.request("uploadBegin", { key, totalBytes: snapshot.size }); }
    finally { this.beginning = false; }
    if (!/^[0-9a-f-]{36}$/i.test(begin.uploadID ?? "") || begin.offset !== 0 ||
        !Number.isInteger(begin.chunkBytes) || begin.chunkBytes < 1 || begin.chunkBytes > 65536)
      throw new Error("Invalid native upload response.");
    const transfer = { id: begin.uploadID, cancelled: false, finishing: false };
    this.transfer = transfer;
    try {
      for (let offset = 0; offset < snapshot.size;) {
        if (transfer.cancelled) throw new DOMException("Transfer cancelled.", "AbortError");
        // Only this slice is materialized. No whole-package arrayBuffer/base64.
        const bytes = new Uint8Array(await snapshot.slice(offset, offset + begin.chunkBytes).arrayBuffer());
        const digest = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)),
          value => value.toString(16).padStart(2, "0")).join("");
        let binary = "";
        for (let start = 0; start < bytes.length; start += 4096)
          binary += String.fromCharCode(...bytes.subarray(start, start + 4096));
        const fields = { uploadID: transfer.id, offset, base64: btoa(binary), digest };
        let ack;
        for (let attempt = 0; ; attempt++) {
          if (transfer.cancelled) throw new DOMException("Transfer cancelled.", "AbortError");
          try { ack = await this.request("uploadChunk", fields); break; }
          catch (error) {
            if (attempt >= 1 || error.status && error.status !== 429 && error.status < 500) throw error;
          }
        }
        if (ack.uploadID !== transfer.id || ack.offset !== offset + bytes.length)
          throw new Error("Invalid native chunk acknowledgement.");
        offset = ack.offset;
        onProgress({ sent: offset, total: snapshot.size, phase: "upload" });
      }
      if (transfer.cancelled) throw new DOMException("Transfer cancelled.", "AbortError");
      transfer.finishing = true;
      onProgress({ sent: snapshot.size, total: snapshot.size, phase: "submit" });
      const result = await this.request("uploadFinish", { uploadID: transfer.id }, 610000);
      if (!/^[0-9a-f-]{36}$/i.test(result.id ?? "")) throw new Error("Invalid native job response.");
      return result;
    } catch (error) {
      if (transfer.cancelled) throw new DOMException("Transfer cancelled.", "AbortError");
      throw error;
    } finally { this.transfer = null; }
  }

  async ping(text = "Hello from Drop & View") {
    if (this.busy) throw new Error("A Safari connection test is already running.");
    if (typeof text !== "string" || new TextEncoder().encode(text).length > 1024)
      throw new Error("The diagnostic message must be at most 1024 bytes.");
    const target = this.target;
    const id = crypto.randomUUID();
    const origin = target.location.origin;
    if (origin === "null") throw new Error("Open Drop & View over HTTP or HTTPS.");
    const started = performance.now();
    this.busy = true;
    try {
      const result = await new Promise((resolve, reject) => {
        let timer;
        const cleanup = () => {
          clearTimeout(timer);
          target.removeEventListener("message", receive);
        };
        const receive = event => {
          if (event.source !== target || event.origin !== origin ||
              event.data?.channel !== responseChannel || event.data.message?.id !== id) return;
          const response = event.data.message;
          cleanup();
          if (response.protocolVersion !== 1 || response.ok !== true ||
              response.operation !== "pong" || response.text !== text ||
              response.app !== "Drop & View Render" ||
              response.transport !== "safari-native-messaging" ||
              response.responder !== "SafariWebExtensionHandler" ||
              !Number.isInteger(response.nativeProcessID) || response.nativeProcessID <= 0 ||
              !Array.isArray(response.capabilities) || !response.capabilities.includes("ping")) {
            reject(new Error(response.ok === false
              ? `Safari connection test failed: ${response.error ?? "unknown_error"}`
              : "Invalid Safari native response."));
          } else resolve(response);
        };
        target.addEventListener("message", receive);
        timer = setTimeout(() => {
          cleanup();
          reject(new Error("No Safari extension response. Enable Drop & View Render in Safari Extensions, allow this website, then reload the page."));
        }, this.timeout);
        try {
          target.postMessage({ channel: requestChannel,
            message: { protocolVersion: 1, id, operation: "ping", text } }, origin);
        } catch (error) { cleanup(); reject(error); }
      });
      return { ...result, roundTripMs: Math.round(performance.now() - started) };
    } finally { this.busy = false; }
  }
}
