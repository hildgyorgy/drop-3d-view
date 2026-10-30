import test from "node:test";
import assert from "node:assert/strict";
import { RenderQueue, renderQueueOutputName } from "../js/ui/render-queue.js";
const file = name => new File(["package"], name);

test("multiple dropped packages retain order and unrelated files are ignored", () => {
  const queue = new RenderQueue();
  const added = queue.add([file("front.dvrender"), file("bad.glb"), file("back.DVRENDER")]);
  assert.equal(added.length, 2);
  assert.deepEqual(queue.items.map(item => item.name), ["front.dvrender", "back.DVRENDER"]);
  assert.equal(queue.selected, added[0]);
  assert.equal(queue.next, added[0]);
  added[0].state = "done";
  assert.equal(queue.next, added[1]);
  added[1].state = "error";
  assert.equal(queue.next, undefined);
});

test("queue reorders and removes waiting jobs without disturbing the active renderer", () => {
  const queue = new RenderQueue();
  const [a,b,c] = queue.add([file("a.dvrender"),file("b.dvrender"),file("c.dvrender")]);
  a.state = "rendering";
  assert.equal(queue.move(a.id, 1), false);
  assert.equal(queue.remove(a.id), false);
  assert.equal(queue.move(b.id, -1), false);
  assert.equal(queue.move(c.id, -1), true);
  assert.deepEqual(queue.items.map(item => item.name), [a.name,c.name,b.name]);
  assert.deepEqual(queue.items.map(item => item.order), [0,1,2]);
  queue.selectedId = c.id;
  assert.equal(queue.remove(c.id), true);
  assert.equal(queue.selectedId, a.id);
  assert.equal(queue.next, b);
});

test("reload preserves completed PNGs and restarts interrupted jobs as pending", () => {
  const queue = new RenderQueue();
  const jobs = queue.add([file("done.dvrender"),file("render.dvrender"),file("paused.dvrender"),file("failed.dvrender")]);
  jobs[0].state = "done"; jobs[0].output = new Blob(["PNG"]);
  jobs[1].state = "rendering"; jobs[1].samples = 25;
  jobs[2].state = "paused"; jobs[2].samples = 12;
  jobs[3].state = "error";
  const restored = new RenderQueue(jobs);
  assert.deepEqual(restored.items.map(item => item.state), ["done","queued","queued","error"]);
  assert.equal(restored.items[1].samples, 0);
  assert.equal(restored.items[0].output, jobs[0].output);
  assert.equal(restored.next.id, jobs[1].id);
});

test("output names distinguish different views of the same source model", () => {
  assert.equal(renderQueueOutputName("Front view.dvrender", "house_5120x2880_500s.png"),
    "Front-view_5120x2880_500s.png");
  assert.notEqual(renderQueueOutputName("front.dvrender", "house_1920x1080_500s.png"),
    renderQueueOutputName("back.dvrender", "house_1920x1080_500s.png"));
});
