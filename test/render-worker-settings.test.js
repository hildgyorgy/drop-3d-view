import test from "node:test";
import assert from "node:assert/strict";
import { configureRenderWorkerTracer } from "../js/view/render-worker-settings.js";

function tracer() {
  return { bounces: 6, transmissiveBounces: 10, renderScale: 1,
    tiles: { set(x, y) { this.x = x; this.y = y; } } };
}

test("5K background jobs use bounded GPU tiles and retain full resolution and bounce quality", () => {
  const value = tracer();
  configureRenderWorkerTracer(value, { width: 5120, height: 2880 });
  assert.equal(value.tiles.x, 10);
  assert.equal(value.tiles.y, 6);
  assert.equal(value.renderScale, 1);
  assert.equal(value.bounces, 6);
  assert.equal(value.transmissiveBounces, 10);
  assert.equal(value.renderToCanvas, false);
  assert.equal(value.rasterizeScene, false);
  assert.equal(value.dynamicLowRes, false);
});

test("small and non-divisible jobs never dispatch tiles exceeding 512 pixels per side", () => {
  for (const [width, height] of [[1,1], [320,180], [513,1025], [1920,1080], [16384,16384]]) {
    const value = tracer();
    configureRenderWorkerTracer(value, { width, height });
    assert.ok(value.tiles.x >= 1 && value.tiles.y >= 1);
    assert.ok(Math.ceil(width / value.tiles.x) <= 512);
    assert.ok(Math.ceil(height / value.tiles.y) <= 512);
  }
});
