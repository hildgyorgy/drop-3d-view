// Diagnostic-only transport. The HTTP RenderBridgeClient remains the render path.
const requestChannel = "drop-view-render:safari:request";
const responseChannel = "drop-view-render:safari:response";

export class SafariRenderBridgeClient {
  constructor(target = globalThis.window, timeout = 10000) {
    this.target = target;
    this.timeout = timeout;
    this.busy = false;
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
