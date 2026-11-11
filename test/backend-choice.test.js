import test from "node:test";
import assert from "node:assert/strict";
import { activeRendererMode, chooseRendererBackend, normalizeRendererMode } from "../js/core/backend-choice.js";

test("AUTO always uses WebGL", () => {
  assert.equal(chooseRendererBackend("auto", true), "webgl");
  assert.equal(chooseRendererBackend("auto", false), "webgl");
});

test("manual modes honor the requested backend", () => {
  assert.equal(chooseRendererBackend("webgl", true), "webgl");
  assert.equal(chooseRendererBackend("webgpu", true), "webgpu");
  assert.equal(chooseRendererBackend("webgpu", false), null);
  assert.equal(normalizeRendererMode("unexpected"), "auto");
});

test("a saved WebGPU selection applies only in debug mode", () => {
  assert.equal(activeRendererMode(false, "webgpu"), "auto");
  assert.equal(activeRendererMode(true, "webgpu"), "webgpu");
});

test("debug defaults to WebGPU while respecting every saved manual choice", () => {
  assert.equal(activeRendererMode(true, null), "webgpu");
  assert.equal(activeRendererMode(true, "unexpected"), "webgpu");
  assert.equal(activeRendererMode(true, "webgl"), "webgl");
  assert.equal(activeRendererMode(true, "auto"), "auto");
  assert.equal(activeRendererMode(false, null), "auto");
  assert.equal(activeRendererMode(false, "webgl"), "auto");
});
