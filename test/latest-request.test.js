import test from "node:test";
import assert from "node:assert/strict";
import { createLatestRequestGate } from "../js/core/latest-request.js";

test("only the newest asynchronous request may commit shared state", async () => {
  const gate = createLatestRequestGate();
  const committed = [];
  const discarded = [];
  let finishFirst;
  let finishSecond;
  const firstResult = new Promise(resolve => { finishFirst = resolve; });
  const secondResult = new Promise(resolve => { finishSecond = resolve; });

  const run = async (resultPromise, name) => {
    const request = gate.begin();
    const result = await resultPromise;
    if (!request.isCurrent()) {
      discarded.push(result);
      return false;
    }
    committed.push(name);
    return true;
  };

  const first = run(firstResult, "first");
  const second = run(secondResult, "second");
  finishSecond("second model");
  assert.equal(await second, true);
  finishFirst("first model");
  assert.equal(await first, false);
  assert.deepEqual(committed, ["second"]);
  assert.deepEqual(discarded, ["first model"]);
});

test("a stale failure cannot act as the current request", () => {
  const gate = createLatestRequestGate();
  const first = gate.begin();
  const second = gate.begin();

  assert.equal(first.isCurrent(), false);
  assert.equal(second.isCurrent(), true);
});
