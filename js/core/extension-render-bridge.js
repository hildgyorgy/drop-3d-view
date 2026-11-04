import { SafariRenderBridgeClient } from "./safari-render-bridge.js";

// Both browser families share chunking, authentication, queue and retry rules.
// Discovery is local to the extension; it does not pair or start a native host.
export class ExtensionRenderBridgeClient extends SafariRenderBridgeClient {
  constructor(target = globalThis.window, timeout = 1500) {
    super(target, timeout, null);
  }

  async ping(text) {
    if (!this.transport) await this.discover();
    return super.ping(text);
  }

  async discover() {
    let result;
    try { result = await this.request("discover", {}, this.timeout); }
    catch (cause) {
      const error = new Error("Install or enable the Drop & View Render extension for this website, then reload. SAVE PACKAGE is also available.");
      error.code = "extension_not_found";
      error.cause = cause;
      throw error;
    }
    if (!["safari-native-messaging", "chromium-native-messaging"].includes(result.transport) ||
        !result.capabilities?.includes("chunked-upload") || !result.capabilities.includes("jobs"))
      throw new Error("Update the Drop & View Render browser extension.");
    this.transport = result.transport;
    return result;
  }
}
