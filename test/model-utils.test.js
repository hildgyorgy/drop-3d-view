import test from "node:test";
import assert from "node:assert/strict";

import { forEachMesh } from "../js/core/model-utils.js";

test("forEachMesh visits meshes and skips other scene objects", () => {
  const objects = [
    { isMesh: false, name: "group" },
    { isMesh: true, name: "wall" },
    { isMesh: true, name: "roof" }
  ];
  const model = {
    traverse(callback) {
      objects.forEach(callback);
    }
  };
  const visited = [];

  forEachMesh(model, object => visited.push(object.name));

  assert.deepEqual(visited, ["wall", "roof"]);
});

test("forEachMesh safely accepts an empty model", () => {
  assert.doesNotThrow(() => forEachMesh(null, () => {}));
});
