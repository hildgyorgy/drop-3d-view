import test from "node:test";
import assert from "node:assert/strict";
import { chooseRendererBackend, normalizeRendererMode } from "../js/core/backend-choice.js";

test("AUTO prefers WebGPU and falls back to WebGL", () => {
  assert.equal(chooseRendererBackend("auto", true), "webgpu");
  assert.equal(chooseRendererBackend("auto", false), "webgl");
  assert.equal(chooseRendererBackend("auto", true, true), "webgl");
});

test("manual modes honor the requested backend", () => {
  assert.equal(chooseRendererBackend("webgl", true), "webgl");
  assert.equal(chooseRendererBackend("webgpu", true), "webgpu");
  assert.equal(chooseRendererBackend("webgpu", false), null);
  assert.equal(normalizeRendererMode("unexpected"), "auto");
});
