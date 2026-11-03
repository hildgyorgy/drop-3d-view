import { SafariRenderBridgeClient } from "../core/safari-render-bridge.js";

export function bindSafariRenderBridgeControls() {
  const button = document.querySelector("#safariRenderBridgeTest");
  const output = document.querySelector("#safariRenderBridgeStatus");
  if (!button || !output) return;
  const client = new SafariRenderBridgeClient();
  button.addEventListener("click", async () => {
    button.disabled = true;
    output.textContent = "Waiting for Safari and the native handler…";
    try {
      const result = await client.ping();
      output.textContent = `PONG · ${result.roundTripMs} ms · Native PID ${result.nativeProcessID} · ${result.id}`;
    } catch (error) {
      output.textContent = error.message;
    } finally { button.disabled = false; }
  });
}
