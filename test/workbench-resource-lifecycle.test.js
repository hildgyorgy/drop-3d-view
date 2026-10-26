import test from "node:test";
import assert from "node:assert/strict";
import { disposeUnusedWorkbenchEdit } from "../js/ui/workbench-resource-lifecycle.js";

test("APPLY history retains one undo edit and releases superseded resources", () => {
  const released = [];
  const dispose = resources => released.push(resources.name);
  const makeEdit = name => ({ resources: { name } });
  const edits = new Map();
  let undoEdit = null;

  const replace = next => {
    const previousUndo = undoEdit;
    undoEdit = edits.get(4) || null;
    edits.set(4, next);
    disposeUnusedWorkbenchEdit(previousUndo, edits.values(), undoEdit, dispose);
  };

  const first = makeEdit("first");
  const second = makeEdit("second");
  const third = makeEdit("third");
  replace(first);
  replace(second);
  assert.deepEqual(released, []);
  replace(third);
  assert.deepEqual(released, ["first"]);

  const discardedByUndo = edits.get(4);
  edits.set(4, undoEdit);
  undoEdit = null;
  disposeUnusedWorkbenchEdit(discardedByUndo, edits.values(), undoEdit, dispose);
  assert.deepEqual(released, ["first", "third"]);

  const discardedUndo = undoEdit;
  undoEdit = edits.get(4);
  edits.delete(4);
  disposeUnusedWorkbenchEdit(discardedUndo, edits.values(), undoEdit, dispose);
  assert.deepEqual(released, ["first", "third"]);

  edits.set(4, undoEdit);
  undoEdit = null;
  assert.equal(disposeUnusedWorkbenchEdit(edits.get(4), edits.values(), undoEdit, dispose), false);
  assert.deepEqual(released, ["first", "third"]);
});

test("RESET releases the superseded undo generation but retains the reset edit", () => {
  const released = [];
  const dispose = resources => released.push(resources.name);
  const first = { resources: { name: "first" } };
  const second = { resources: { name: "second" } };
  const edits = new Map([[7, second]]);
  let undoEdit = first;

  const discardedUndo = undoEdit;
  undoEdit = edits.get(7);
  edits.delete(7);
  assert.equal(disposeUnusedWorkbenchEdit(
    discardedUndo, edits.values(), undoEdit, dispose
  ), true);
  assert.deepEqual(released, ["first"]);
  assert.equal(disposeUnusedWorkbenchEdit(
    undoEdit, edits.values(), undoEdit, dispose
  ), false);
});
