import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import {
  RENDER_PRODUCER,
  renderCompatibilityWarnings
} from "../js/core/render-compatibility.js";
import { APP_VERSION } from "../js/core/version.js";

test("render producer identity matches the app and the bundled HDRI bytes", async () => {
  const hdri = await readFile(new URL("../assets/hdri/backdrop.hdr", import.meta.url));
  assert.equal(RENDER_PRODUCER.appVersion, APP_VERSION);
  assert.equal(
    RENDER_PRODUCER.hdriId,
    `sha256:${createHash("sha256").update(hdri).digest("hex")}`
  );
});

test("matching packages are quiet; mismatches and legacy packages warn without blocking", () => {
  assert.deepEqual(renderCompatibilityWarnings({ ...RENDER_PRODUCER }), []);
  const old = {
    ...RENDER_PRODUCER,
    appVersion: "1.5",
    hdriId: "previous-hdri",
    rendererRevision: "previous-renderer"
  };
  const warnings = renderCompatibilityWarnings(old);
  assert.equal(warnings.length, 3);
  assert.match(warnings[0], /App version differs/);
  assert.match(warnings[1], /rendering revision differs/);
  assert.match(warnings[2], /HDRI differs/);
  assert.match(renderCompatibilityWarnings(null)[0], /cannot be verified/);
});

test("an embedded HDRI overrides only the HDRI compatibility mismatch", () => {
  const producer = { ...RENDER_PRODUCER, hdriId: "another-environment" };
  assert.deepEqual(renderCompatibilityWarnings(producer, RENDER_PRODUCER,
    { embeddedEnvironment: true }), []);
  assert.equal(renderCompatibilityWarnings({ ...producer, appVersion: "older" },
    RENDER_PRODUCER, { embeddedEnvironment: true }).length, 1);
});
