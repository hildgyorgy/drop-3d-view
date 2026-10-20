/*
 * Embedded viewer handoff. The host page fetches its own GLB and sends a Blob
 * to this iframe, so the model stays on the host's server without requiring
 * cross-origin fetch permissions or a Drop & View upload service.
 */

const MESSAGE_TYPE = "drop-view-embed";

export function readEmbedConfiguration(url = location.href) {
  const page = new URL(url);
  if (page.searchParams.get("embed") !== "1") return null;

  const channel = page.searchParams.get("channel");
  const parentOrigin = page.searchParams.get("parentOrigin");
  if (!channel || !parentOrigin || window.parent === window) return null;

  try {
    const origin = new URL(parentOrigin);
    if (origin.origin !== parentOrigin || !/^https?:$/.test(origin.protocol)) return null;
    return { channel, parentOrigin };
  } catch {
    return null;
  }
}

export function enableEmbedBridge(app, config = readEmbedConfiguration()) {
  if (!config) return;

  const send = (event, details = {}) => {
    window.parent.postMessage(
      { type: MESSAGE_TYPE, channel: config.channel, event, ...details },
      config.parentOrigin
    );
  };

  let opening = false;
  window.addEventListener("message", async message => {
    if (message.source !== window.parent || message.origin !== config.parentOrigin)
      return;
    const data = message.data;
    if (
      data?.type !== MESSAGE_TYPE ||
      data.channel !== config.channel ||
      data.event !== "open"
    )
      return;
    if (opening || !(data.blob instanceof Blob)) return;

    opening = true;
    try {
      const name =
        typeof data.name === "string" ? data.name.split(/[\\/]/).at(-1) : "model.glb";
      const file = new File([data.blob], name || "model.glb", {
        type: "model/gltf-binary"
      });
      const opened = await app.openFile(file);
      send(opened ? "opened" : "error");
    } catch (error) {
      console.error("Embedded model could not be opened", error);
      send("error");
    } finally {
      opening = false;
    }
  });

  send("ready");
}
