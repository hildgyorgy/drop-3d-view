import test from "node:test";
import assert from "node:assert/strict";
import { bindRenderBridgeControls } from "../js/ui/render-bridge.js";

// Reproduce a render that finishes while the native app has hidden the page.
test("manual checks and returning to the page refresh accepted jobs", async () => {
  class Element extends EventTarget {
    value = "";
    textContent = "";
    replaceChildren() {}
    click() { this.dispatchEvent(new Event("click")); }
  }
  const elements = new Map();
  for (const name of ["Connect", "Disconnect", "Render", "Cancel", "Reveal", "Status", "Job", "Jobs", "Transport", "Abort"])
    elements.set(`#renderBridge${name}`, new Element());
  const page = new EventTarget();
  page.hidden = true;
  page.querySelector = selector => elements.get(selector) ?? null;
  page.createElement = () => new Element();
  const windowTarget = new EventTarget();
  const originals = Object.fromEntries(["document", "window", "fetch", "setInterval"].map(key => [key, globalThis[key]]));
  let poll;
  let state = "rendering";
  let jobReads = 0;
  const jobID = "job-one";
  try {
    globalThis.document = page;
    globalThis.window = windowTarget;
    globalThis.setInterval = callback => { poll = callback; };
    globalThis.fetch = async (url, options) => {
      let data;
      if (url.endsWith("/pair")) data = { token: "a".repeat(72), protocolVersion: 1 };
      else if (url.endsWith("/status")) data = { app: "Drop & View Render", protocolVersion: 1, blenderAvailable: true, capabilities: ["jobs"] };
      else if (url.endsWith("/jobs") && options.method === "POST") data = { id: jobID };
      else if (url.endsWith(`/jobs/${jobID}`)) { jobReads++; data = { id: jobID, state, elapsed: 7, outputName: "demo.png" }; }
      else throw new Error(`Unexpected request: ${url}`);
      return { ok: true, json: async () => data };
    };
    const settle = () => new Promise(resolve => setImmediate(resolve));
    bindRenderBridgeControls({ captureSnapshot: async () => ({ snapshot: new Blob(["scene"]) }), canCapture: () => true });
    elements.get("#renderBridgeConnect").click();
    await settle();
    elements.get("#renderBridgeRender").click();
    await settle();
    assert.match(elements.get("#renderBridgeJob").textContent, /RENDERING/);
    state = "finished";
    const before = jobReads;
    poll();
    await settle();
    assert.equal(jobReads, before, "background polling is paused");
    elements.get("#renderBridgeConnect").click();
    await settle();
    assert.match(elements.get("#renderBridgeJob").textContent, /FINISHED · 0:07 · demo.png/);
    assert.equal(elements.get("#renderBridgeReveal").hidden, false);
    page.hidden = false;
    page.dispatchEvent(new Event("visibilitychange"));
    await settle();
    assert.ok(jobReads > before + 1, "visibility return refreshes immediately");
    const visibleReads = jobReads;
    windowTarget.dispatchEvent(new Event("focus"));
    await settle();
    assert.ok(jobReads > visibleReads, "window focus refreshes immediately");
  } finally {
    for (const [key, value] of Object.entries(originals)) {
      if (value === undefined) delete globalThis[key];
      else globalThis[key] = value;
    }
  }
});
