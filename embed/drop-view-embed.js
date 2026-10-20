/*
 * Drop & View host-page widget. Include this classic script where the preview
 * should appear and set data-model to a GLB on the host page's own origin.
 * The model is fetched by that page, never uploaded to Drop & View.
 */
(function () {
  "use strict";

  const script = document.currentScript;
  if (!script?.src) return;

  const model = new URL(script.dataset.model || "", document.baseURI);
  if (model.origin !== location.origin || !/\.glb$/i.test(model.pathname)) {
    console.error("Drop & View embed needs a same-origin .glb model URL.");
    return;
  }

  const viewer = new URL("../", script.src);
  const viewerOrigin = viewer.origin;
  const title = script.dataset.title || "3D modell megtekintése";
  const poster = script.dataset.poster
    ? new URL(script.dataset.poster, document.baseURI)
    : null;

  if (!document.getElementById("drop-view-embed-style")) {
    const style = document.createElement("style");
    style.id = "drop-view-embed-style";
    style.textContent = `
      .drop-view-preview { position: relative; display: block; width: 100%; min-height: 240px;
        aspect-ratio: 16 / 9; overflow: hidden; border: 0; cursor: pointer;
        background: #efefed; color: #222; font: 600 1rem/1.3 system-ui, sans-serif; }
      .drop-view-preview img { display: block; width: 100%; height: 100%; object-fit: cover; }
      .drop-view-preview-label { position: absolute; inset: auto 0 0; padding: 1.2rem;
        color: white; background: linear-gradient(transparent, #0009); text-align: left; }
      .drop-view-preview.no-poster { min-height: 84px; aspect-ratio: auto; }
      .drop-view-preview.no-poster .drop-view-preview-label { inset: 0; display: grid;
        place-items: center; color: #222; background: none; text-align: center; }
      .drop-view-overlay { position: fixed; inset: 0; z-index: 2147483647;
        background: #efefed; }
      .drop-view-frame { display: block; width: 100%; height: 100%; border: 0; }
      .drop-view-close { position: absolute; z-index: 2; top: max(14px, env(safe-area-inset-top));
        right: max(14px, env(safe-area-inset-right)); width: 42px; height: 42px;
        border: 0; border-radius: 50%; background: #222; color: white;
        cursor: pointer; font: 28px/1 system-ui, sans-serif; }
      .drop-view-status { position: absolute; z-index: 1; inset: 0; display: grid;
        place-items: center; padding: 2rem; background: #efefed; color: #222;
        text-align: center; font: 500 1rem/1.4 system-ui, sans-serif; }
      .drop-view-status[hidden] { display: none; }
    `;
    document.head.append(style);
  }

  const preview = document.createElement("button");
  preview.type = "button";
  preview.className = "drop-view-preview";
  preview.setAttribute("aria-label", title);
  if (poster) {
    const image = document.createElement("img");
    image.src = poster.href;
    image.alt = "";
    image.loading = "lazy";
    preview.append(image);
  } else {
    preview.classList.add("no-poster");
  }
  const label = document.createElement("span");
  label.className = "drop-view-preview-label";
  label.textContent = title;
  preview.append(label);
  script.after(preview);

  preview.addEventListener("click", async () => {
    if (document.querySelector(".drop-view-overlay")) return;

    const channel = Array.from(crypto.getRandomValues(new Uint8Array(16)), byte =>
      byte.toString(16).padStart(2, "0")
    ).join("");
    const frameUrl = new URL(viewer);
    frameUrl.searchParams.set("embed", "1");
    frameUrl.searchParams.set("channel", channel);
    frameUrl.searchParams.set("parentOrigin", location.origin);

    const overlay = document.createElement("div");
    overlay.className = "drop-view-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", title);

    const frame = document.createElement("iframe");
    frame.className = "drop-view-frame";
    frame.title = title;
    frame.allow = "fullscreen";
    frame.setAttribute("allowfullscreen", "");
    frame.src = frameUrl.href;

    const closeButton = document.createElement("button");
    closeButton.className = "drop-view-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "3D nézet bezárása");
    closeButton.textContent = "×";

    const status = document.createElement("div");
    status.className = "drop-view-status";
    status.setAttribute("role", "status");
    status.textContent = "3D modell betöltése…";
    overlay.append(frame, closeButton, status);

    const previousOverflow = document.body.style.overflow;
    let enteredFullscreen = false;
    const close = () => {
      window.removeEventListener("message", onMessage);
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      if (document.fullscreenElement === overlay)
        document.exitFullscreen().catch(() => {});
      overlay.remove();
      document.body.style.overflow = previousOverflow;
      preview.focus();
    };
    const onKeydown = event => {
      if (event.key === "Escape") close();
    };
    const onFullscreenChange = () => {
      if (enteredFullscreen && !document.fullscreenElement) close();
    };
    let modelBlob = null;
    let viewerReady = false;
    let sent = false;
    const sendModel = () => {
      if (!overlay.isConnected || !viewerReady || !modelBlob || sent) return;
      sent = true;
      frame.contentWindow.postMessage(
        {
          type: "drop-view-embed",
          channel,
          event: "open",
          name: model.pathname.split("/").at(-1),
          blob: modelBlob
        },
        viewerOrigin
      );
    };
    const onMessage = message => {
      if (message.source !== frame.contentWindow || message.origin !== viewerOrigin)
        return;
      const data = message.data;
      if (data?.type !== "drop-view-embed" || data.channel !== channel) return;
      if (data.event === "ready") {
        viewerReady = true;
        sendModel();
      } else if (data.event === "opened") {
        status.hidden = true;
      } else if (data.event === "error") {
        status.textContent = "A 3D modell nem nyitható meg.";
      }
    };

    window.addEventListener("message", onMessage);
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    closeButton.addEventListener("click", close);
    document.body.append(overlay);
    document.body.style.overflow = "hidden";
    closeButton.focus();

    // Native fullscreen where available; the fixed overlay is the fallback.
    const fullscreen = overlay.requestFullscreen?.();
    fullscreen
      ?.then(() => {
        enteredFullscreen = true;
      })
      .catch(() => {});

    try {
      const response = await fetch(model.href, { credentials: "same-origin" });
      if (!response.ok) throw new Error(`Model request failed (${response.status})`);
      modelBlob = await response.blob();
      sendModel();
    } catch (error) {
      console.error("Drop & View embed could not fetch the model", error);
      if (overlay.isConnected) status.textContent = "A 3D modell jelenleg nem érhető el.";
    }
  });
})();
