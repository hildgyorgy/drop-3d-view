import test from "node:test";
import assert from "node:assert/strict";
import { createCanvasEventBinding } from "../js/core/canvas-binding.js";

test("canvas listener moves to the replacement canvas exactly once", () => {
  const first = new EventTarget();
  const second = new EventTarget();
  const events = [];
  const bind = createCanvasEventBinding("click", () => events.push("click"));

  bind(first);
  bind(first);
  first.dispatchEvent(new Event("click"));
  assert.deepEqual(events, ["click"]);

  bind(second);
  first.dispatchEvent(new Event("click"));
  second.dispatchEvent(new Event("click"));
  assert.deepEqual(events, ["click", "click"]);

  bind(null);
  second.dispatchEvent(new Event("click"));
  assert.deepEqual(events, ["click", "click"]);
});
