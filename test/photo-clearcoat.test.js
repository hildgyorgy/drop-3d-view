import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  installPhotoClearcoatFix,
  stabilizePhotoClearcoat
} from "../js/view/photo-clearcoat.js";

test("clearcoat compatibility patch preserves every other BSDF lobe", async () => {
  // Read the published pinned dependency, so a changed upstream shader fails
  // this compatibility check instead of silently disabling the correction.
  const files = await import("node:fs/promises").then(fs =>
    fs.readdir(new URL("../renderers/webgl/assets/", import.meta.url))
  );
  const bundle = files.find(name => /^WebGLPathTracer-.*\.js$/.test(name));
  const source = await readFile(
    new URL(`../renderers/webgl/assets/${bundle}`, import.meta.url),
    "utf8"
  );
  const start = source.indexOf("float clearcoatEval(");
  const end = source.indexOf("vec3 clearcoatDirection(", start);
  assert.ok(start >= 0 && end > start);
  const patched = stabilizePhotoClearcoat(source);
  assert.ok(patched.startsWith(source.slice(0, start)));
  assert.ok(patched.endsWith(source.slice(end)));
  const material = { fragmentShader: source, needsUpdate: false };
  installPhotoClearcoatFix({ _pathTracer: { material } });
  assert.equal(material.fragmentShader, patched);
  assert.equal(material.needsUpdate, true);
});

test("unknown path tracer internals fail explicitly before shader compilation", () => {
  assert.throws(() => stabilizePhotoClearcoat("different shader"), /Unsupported/);
  assert.throws(() => installPhotoClearcoatFix({}), /Unsupported/);
});
