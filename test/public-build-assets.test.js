import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";

const root = new URL("../", import.meta.url);

test("both published renderers use the same two demo GLBs", async () => {
  for (const backend of ["webgl", "webgpu"]) {
    const bundle = await readFile(new URL(`renderers/${backend}/main.js`, root), "utf8");
    assert.match(bundle, /demo\/demo_house\.glb/);
    assert.match(bundle, /demo\/demo_house_2\.glb/);
    assert.doesNotMatch(bundle, /demo_house_pbr\.glb/);
  }
});

test("the published renderer packages reuse the root HDRI", async () => {
  await stat(new URL("assets/hdri/backdrop.hdr", root));
  for (const backend of ["webgl", "webgpu"]) {
    const assets = await readdir(new URL(`renderers/${backend}/assets/`, root));
    assert.equal(assets.some(name => name.endsWith(".hdr")), false);
  }
});

test("Draco support uses the pinned CDN decoder without bundled copies", async () => {
  for (const backend of ["webgl", "webgpu"]) {
    const bundle = await readFile(new URL(`renderers/${backend}/main.js`, root), "utf8");
    const assets = await readdir(new URL(`renderers/${backend}/assets/`, root));
    assert.match(bundle, /https:\/\/cdn\.jsdelivr\.net\/npm\/three@0\.186\.0\/examples\/jsm\/libs\/draco\/draco_decoder\.wasm/);
    assert.match(bundle, /setDecoderPath/);
    assert.equal(assets.some(name => /draco|\.wasm$/.test(name)), false);
  }
});
