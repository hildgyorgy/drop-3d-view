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
  for (const name of ["Connect", "Disconnect", "Render", "Cancel", "Reveal", "Status", "Job", "Jobs", "Abort"])
    elements.set(`#renderBridge${name}`, new Element());
  for (const name of ["Denoise", "Adaptive", "QualityHint"])
    elements.set(`#render${name}`, new Element());
  elements.get("#renderDenoise").checked = false;
  elements.get("#renderAdaptive").checked = false;
  const page = new EventTarget();
  page.hidden = true;
  page.querySelector = selector => elements.get(selector) ?? null;
  page.createElement = () => new Element();
  const windowTarget = new EventTarget();
  windowTarget.location = { origin: "http://127.0.0.1:4173" };
  const originals = Object.fromEntries(["document", "window", "fetch", "setInterval"].map(key => [key, globalThis[key]]));
  let poll;
  let state = "rendering";
  let jobReads = 0;
  let rejectSubmission = false;
  const submissionKeys = [];
  const jobID = crypto.randomUUID();
  try {
    globalThis.document = page;
    globalThis.window = windowTarget;
    globalThis.setInterval = callback => { poll = callback; };
    globalThis.fetch = () => assert.fail("The web page must never fetch the native HTTP bridge");
    windowTarget.postMessage = ({ message }, origin) => {
      let data;
      if (message.operation === "discover") data = { transport: "chromium-native-messaging", capabilities: ["chunked-upload", "jobs", "quality-controls"] };
      else if (message.operation === "pair") data = { token: "a".repeat(72), protocolVersion: 1 };
      else if (message.operation === "status") data = { app: "Drop & View Render", protocolVersion: 1, blenderAvailable: true, capabilities: ["jobs", "quality-controls"] };
      else if (message.operation === "uploadBegin") {
        assert.equal(message.denoise, false, "Quality settings freeze before asynchronous scene capture");
        assert.equal(message.adaptive, false);
        submissionKeys.push(message.key);
        data = { uploadID: jobID, offset: 0, chunkBytes: 65536 };
      }
      else if (message.operation === "uploadChunk") data = { uploadID: jobID, offset: message.offset + atob(message.base64).length };
      else if (message.operation === "uploadFinish") data = { id: jobID };
      else if (message.operation === "job") { jobReads++; data = { id: jobID, state, elapsed: 7, outputName: "demo.png" }; }
      else throw new Error(`Unexpected request: ${message.operation}`);
      queueMicrotask(() => {
        const event = new Event("message");
        Object.assign(event, { source: windowTarget, origin, data: {
          channel: "drop-view-render:safari:response",
          message: rejectSubmission && message.operation === "uploadFinish"
            ? { protocolVersion: 1, id: message.id, ok: false, error: "native_storage_failed", status: 500 }
            : { protocolVersion: 1, id: message.id, ok: true, transport: "chromium-native-messaging", data }
        } });
        windowTarget.dispatchEvent(event);
      });
    };
    const settle = () => new Promise(resolve => setImmediate(resolve));
    bindRenderBridgeControls({ captureSnapshot: async () => {
      elements.get("#renderDenoise").checked = true;
      elements.get("#renderAdaptive").checked = true;
      return { snapshot: new Blob(["test scene with 24 bytes!"]) };
    }, canCapture: () => true });
    elements.get("#renderBridgeConnect").click();
    await settle();
    elements.get("#renderBridgeRender").click();
    for (let attempt = 0; attempt < 100 && !/RENDERING/.test(elements.get("#renderBridgeJob").textContent); attempt++) await settle();
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
    rejectSubmission = true;
    elements.get("#renderDenoise").checked = false;
    elements.get("#renderAdaptive").checked = false;
    elements.get("#renderBridgeRender").click();
    for (let attempt = 0; attempt < 100 && !/native_storage_failed/.test(elements.get("#renderBridgeStatus").textContent); attempt++) await settle();
    const failure = elements.get("#renderBridgeStatus").textContent;
    assert.match(failure, /native_storage_failed \(500\)/);
    poll();
    await settle();
    assert.equal(elements.get("#renderBridgeStatus").textContent, failure,
      "a healthy connection must not hide the submission failure");
    rejectSubmission = false;
    elements.get("#renderBridgeRender").click();
    for (let attempt = 0; attempt < 100 && elements.get("#renderBridgeRender").textContent === "RETRY SEND"; attempt++) await settle();
    poll();
    await settle();
    assert.match(elements.get("#renderBridgeStatus").textContent, /CONNECTED · READY/);
    assert.equal(submissionKeys.at(-1), submissionKeys.at(-2), "retry reuses the failed scene's submission ID");
  } finally {
    for (const [key, value] of Object.entries(originals)) {
      if (value === undefined) delete globalThis[key];
      else globalThis[key] = value;
    }
  }
});
