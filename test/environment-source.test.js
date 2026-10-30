import test from "node:test";
import assert from "node:assert/strict";
import { captureRenderEnvironment, environmentIdentity, getEnvironmentSource,
  getPackagedEnvironment, setEnvironmentSource,
  validateRenderEnvironment } from "../js/core/environment-source.js";

const bytes = new Uint8Array([
  ...new TextEncoder().encode("#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y 1 +X 1\n"),
  128, 64, 32, 129
]).buffer;

test("a packaged HDRI overrides the session and re-exports independently of the default asset", async () => {
  globalThis.document = { baseURI: "https://example.test/view/" };
  try {
    setEnvironmentSource({ name: "custom.hdr", bytes });
    const first = getEnvironmentSource();
    assert.equal(first.embedded, true);
    assert.match(first.url, /^blob:/);
    const captured = await captureRenderEnvironment();
    assert.equal(captured.name, "custom.hdr");
    assert.deepEqual(new Uint8Array(captured.bytes), new Uint8Array(bytes));
    new Uint8Array(captured.bytes)[0] = 0;
    assert.equal(new Uint8Array(getPackagedEnvironment().bytes)[0], 35);
    assert.match(await environmentIdentity({ bytes }), /^sha256:[a-f0-9]{64}$/);
    setEnvironmentSource(null);
    assert.equal(getEnvironmentSource().embedded, false);
    assert.equal(getEnvironmentSource().url, "https://example.test/view/assets/hdri/backdrop.hdr");
    assert.equal(getPackagedEnvironment(), null);
  } finally {
    setEnvironmentSource(null);
    delete globalThis.document;
  }
});

test("a changed HDRI is rejected before it can replace a scene", async () => {
  await assert.rejects(validateRenderEnvironment({ name: "custom.hdr", bytes },
    { hdriId: `sha256:${"0".repeat(64)}` }), /does not match its recorded identity/);
});
