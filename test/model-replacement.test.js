import test from "node:test";
import assert from "node:assert/strict";
import { stageModelReplacement } from "../js/model/model-replacement.js";

test("a failed candidate leaves the active model untouched", async () => {
  let active = "current model";
  let disposed = 0;
  await assert.rejects(() => stageModelReplacement({
    stage: async () => { throw new Error("invalid GLB"); },
    isCurrent: () => true,
    disposeStale: () => { disposed++; },
    commit: candidate => { active = candidate; }
  }), /invalid GLB/);
  assert.equal(active, "current model");
  assert.equal(disposed, 0);
});

test("a stale candidate is disposed without replacing the active model", async () => {
  const candidate = { name: "older model" };
  let active = "current model";
  let disposed = null;
  assert.equal(await stageModelReplacement({
    stage: async () => candidate,
    isCurrent: () => false,
    disposeStale: value => { disposed = value; },
    commit: value => { active = value; }
  }), false);
  assert.equal(active, "current model");
  assert.equal(disposed, candidate);
});

test("only a successful current candidate replaces the active model", async () => {
  const candidate = { name: "new model" };
  let active = "current model";
  assert.equal(await stageModelReplacement({
    stage: async () => candidate,
    isCurrent: () => true,
    disposeStale: () => assert.fail("current candidate must not be disposed"),
    commit: value => { active = value; }
  }), true);
  assert.equal(active, candidate);
});
