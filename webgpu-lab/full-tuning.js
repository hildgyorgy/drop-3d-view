// WebGPU preview defaults. The debug panel can override them locally.
export const DEFAULT_WEBGPU_TUNING = Object.freeze({
  exposure: 1.12,
  brightness: 1,
  contrast: 1,
  saturation: 1,
  whiteSurface: 0.9,
  whiteGlassTransparency: 85,
  bwGlassTransparency: 96,
  skyFill: 1,
  groundBounce: 0.9,
  sunStrength: 3.3,
  backdrop: 2
});

// Start this calibration from its baked defaults, even in browsers that saved
// values during the previous experiment.
const STORAGE_KEY = "drop-view-webgpu-tuning-v2";
const controls = [
  ["exposure", "EXPOSURE", 0.4, 2, 0.01],
  ["brightness", "SCREEN BRIGHTNESS", 0.6, 1.5, 0.01],
  ["contrast", "SCREEN CONTRAST", 0.6, 1.6, 0.01],
  ["saturation", "SATURATION", 0, 1.8, 0.01],
  ["whiteSurface", "WHITE SURFACE", 0.4, 1.8, 0.01],
  ["whiteGlassTransparency", "WHITE GLASS TRANSPARENCY", 0, 100, 1],
  ["bwGlassTransparency", "B&W GLASS TRANSPARENCY", 0, 100, 1],
  ["skyFill", "SKY FILL", 0, 2.5, 0.01],
  ["groundBounce", "GROUND BOUNCE", 0, 2, 0.01],
  ["sunStrength", "SUN STRENGTH", 0, 6, 0.01],
  ["backdrop", "BACKDROP", 1, 2.5, 0.01]
];
let syncActiveControl = null;

const displayValue = (key, value) => key.endsWith("GlassTransparency")
  ? `${Math.round(value)}%` : Number(value).toFixed(2);

export function syncWebGpuTuningControl(key, value) {
  syncActiveControl?.(key, value);
}

function boundedSettings(candidate) {
  const settings = { ...DEFAULT_WEBGPU_TUNING };
  for (const [key, , min, max] of controls) {
    const value = Number(candidate?.[key]);
    if (Number.isFinite(value) && value >= min && value <= max)
      settings[key] = value;
  }
  return settings;
}

function savedSettings() {
  try { return boundedSettings(JSON.parse(localStorage.getItem(STORAGE_KEY))); }
  catch { return { ...DEFAULT_WEBGPU_TUNING }; }
}

export function initWebGpuTuning(onChange) {
  if (!new URLSearchParams(location.search).has("rendererDebug")) {
    const settings = { ...DEFAULT_WEBGPU_TUNING };
    onChange(settings);
    return settings;
  }

  const settings = savedSettings();
  const panel = document.createElement("details");
  panel.className = "webgpu-tuning";
  panel.innerHTML = `<summary>WEBGPU TUNING</summary>
    <div class="webgpu-tuning-body">
      <p>Live preview settings. The two glass controls affect WHITE/HIDDEN and B&W separately.</p>
      <div class="webgpu-tuning-controls"></div>
      <div class="webgpu-tuning-actions">
        <button type="button" data-action="save">SAVE</button>
        <button type="button" data-action="copy">COPY JSON</button>
        <button type="button" data-action="reset">RESET</button>
      </div>
      <output aria-live="polite"></output>
    </div>`;
  const style = document.createElement("style");
  style.textContent = `
    .webgpu-tuning { position:fixed; z-index:1000; top:112px; right:18px;
      width:min(285px,calc(100vw - 36px)); max-height:calc(100vh - 130px);
      overflow:auto; background:rgba(248,248,246,.97); color:#222;
      border:1px solid #aaa; box-shadow:0 5px 20px #0003;
      font:11px/1.4 ui-monospace,SFMono-Regular,monospace; letter-spacing:.05em; }
    .webgpu-tuning summary { cursor:pointer; padding:9px 11px; font-weight:700; }
    .webgpu-tuning-body { padding:0 11px 11px; }
    .webgpu-tuning p { margin:2px 0 10px; color:#555; letter-spacing:0; }
    .webgpu-tuning label { display:block; margin:8px 0; }
    .webgpu-tuning label span { display:flex; justify-content:space-between; }
    .webgpu-tuning input { width:100%; margin:4px 0 0; accent-color:#f23b2f; }
    .webgpu-tuning-actions { display:flex; gap:5px; flex-wrap:wrap; margin-top:10px; }
    .webgpu-tuning button { font:inherit; padding:5px 7px; border:1px solid #aaa;
      background:white; color:#222; cursor:pointer; }
    .webgpu-tuning output { display:block; min-height:1.4em; margin-top:8px;
      color:#555; letter-spacing:0; }
    .webgpu-tuning[aria-disabled="true"] .webgpu-tuning-body { opacity:.5; }
  `;
  document.head.appendChild(style);
  document.body.appendChild(panel);

  const inputs = new Map();
  const container = panel.querySelector(".webgpu-tuning-controls");
  for (const [key, name, min, max, step] of controls) {
    const label = document.createElement("label");
    const caption = document.createElement("span");
    caption.textContent = name;
    const value = document.createElement("output");
    caption.appendChild(value);
    const input = document.createElement("input");
    Object.assign(input, { type: "range", min, max, step });
    input.value = settings[key];
    value.textContent = displayValue(key, settings[key]);
    input.addEventListener("input", () => {
      settings[key] = Number(input.value);
      value.textContent = displayValue(key, settings[key]);
      onChange(settings);
    });
    label.append(caption, input);
    container.appendChild(label);
    inputs.set(key, { input, value });
  }
  syncActiveControl = (key, value) => {
    const control = inputs.get(key);
    if (!control || !Number.isFinite(value)) return;
    settings[key] = value;
    control.input.value = value;
    control.value.textContent = displayValue(key, value);
  };

  const status = panel.querySelector(".webgpu-tuning-body > output");
  const jsonFallback = document.createElement("textarea");
  Object.assign(jsonFallback, { readOnly: true, hidden: true, rows: 12 });
  jsonFallback.style.width = "100%";
  panel.querySelector(".webgpu-tuning-body").appendChild(jsonFallback);
  const snapshot = () => JSON.stringify({ version: 1, ...settings }, null, 2);
  panel.querySelector('[data-action="save"]').addEventListener("click", () => {
    try {
      localStorage.setItem(STORAGE_KEY, snapshot());
      status.textContent = "Saved in this browser. Use COPY JSON to share the values.";
    } catch { status.textContent = "Browser storage unavailable. Use COPY JSON."; }
  });
  panel.querySelector('[data-action="copy"]').addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(snapshot());
      jsonFallback.hidden = true;
      status.textContent = "JSON copied to clipboard.";
    } catch {
      jsonFallback.value = snapshot();
      jsonFallback.hidden = false;
      jsonFallback.select();
      status.textContent = "Clipboard unavailable. Select and copy the JSON below.";
    }
  });
  panel.querySelector('[data-action="reset"]').addEventListener("click", () => {
    Object.assign(settings, DEFAULT_WEBGPU_TUNING);
    for (const [key, { input, value }] of inputs) {
      input.value = settings[key];
      value.textContent = displayValue(key, settings[key]);
    }
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* The live reset still works. */ }
    jsonFallback.hidden = true;
    onChange(settings);
    status.textContent = "Default values restored.";
  });

  const traceButton = document.querySelector("#photo1Button");
  if (traceButton) {
    const updateAvailability = () => {
      const tracing = traceButton.getAttribute("aria-pressed") === "true";
      panel.setAttribute("aria-disabled", String(tracing));
      panel.querySelectorAll("input,button").forEach(control => { control.disabled = tracing; });
      if (tracing) status.textContent = "Return to preview to tune the image.";
    };
    new MutationObserver(updateAvailability).observe(traceButton, {
      attributes: true, attributeFilter: ["aria-pressed"]
    });
    updateAvailability();
  }
  onChange(settings);
  return settings;
}
