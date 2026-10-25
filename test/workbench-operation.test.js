import test from "node:test";
import assert from "node:assert/strict";
import {
  captureWorkbenchOperation,
  isWorkbenchOperationCurrent
} from "../js/ui/workbench-operation.js";

test("an async workbench operation keeps its original material index", () => {
  const gltf = {};
  const model = {};
  let selectedIndex = 3;
  const operation = captureWorkbenchOperation(selectedIndex, gltf, model);

  selectedIndex = 7;

  assert.equal(operation.materialIndex, 3);
  assert.equal(isWorkbenchOperationCurrent(operation, gltf, model), true);
});

test("a workbench operation becomes stale when its model is replaced", () => {
  const operation = captureWorkbenchOperation(3, {}, {});

  assert.equal(isWorkbenchOperationCurrent(operation, {}, {}), false);
});
