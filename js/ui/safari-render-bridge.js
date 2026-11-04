import { ExtensionRenderBridgeClient } from "../core/extension-render-bridge.js";

export function bindSafariRenderBridgeControls() {
  const button = document.querySelector("#safariRenderBridgeTest");
  const output = document.querySelector("#safariRenderBridgeStatus");
  if (!button || !output) return;
  const client = new ExtensionRenderBridgeClient(globalThis.window, 10000);
  button.addEventListener("click", async () => {
    button.disabled = true;
    output.textContent = "Waiting for the extension and native app…";
    try {
      const result = await client.ping();
      output.textContent = `PONG · ${result.roundTripMs} ms · Native PID ${result.nativeProcessID} · ${result.id}`;
    } catch (error) {
      output.textContent = error.message;
    } finally { button.disabled = false; }
  });
}
