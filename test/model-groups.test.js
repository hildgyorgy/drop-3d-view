import test from "node:test";
import assert from "node:assert/strict";

import {
  createModelGroups,
  getModelGroupLabel,
  isObjectVisibleInHierarchy,
  restoreModelGroupVisibility,
  setModelGroupVisible
} from "../js/model/groups.js";

function makeObject(name, uuid) {
  return { name, uuid, visible: true, parent: null };
}

test("createModelGroups uses direct children and disambiguates duplicate labels", () => {
  const first = makeObject("Walls", "a");
  const second = makeObject("Walls", "b");
  const unnamed = makeObject("", "c");
  const model = { children: [first, second, unnamed] };

  const groups = createModelGroups(model);

  assert.deepEqual(
    groups.map(group => group.displayLabel),
    ["Group 3", "Walls", "Walls (2)"]
  );
  assert.deepEqual(
    groups.map(group => group.object),
    [unnamed, first, second]
  );
});

test("createModelGroups omits a top-level exported camera", () => {
  const walls = makeObject("Walls", "walls");
  const camera = { ...makeObject("Archicad view", "camera"), isCamera: true };

  assert.deepEqual(
    createModelGroups({ children: [walls, camera] }).map(group => group.object),
    [walls]
  );
});

test("setModelGroupVisible keeps state and Three.js object visibility together", () => {
  const object = makeObject("Roof", "roof");
  const group = { object, visible: true };

  setModelGroupVisible(group, false);

  assert.equal(group.visible, false);
  assert.equal(object.visible, false);
});

test("group visibility restores after reloading the same GLB with new UUIDs", () => {
  const original = createModelGroups({
    children: [makeObject("Walls", "old-a"), makeObject("Walls", "old-b")]
  });
  setModelGroupVisible(original[1], false);
  const saved = original.map(group => ({
    sessionKey: group.sessionKey,
    visible: group.visible
  }));

  const reloaded = createModelGroups({
    children: [makeObject("Walls", "new-a"), makeObject("Walls", "new-b")]
  });
  assert.notEqual(original[1].id, reloaded[1].id);
  assert.equal(restoreModelGroupVisibility(reloaded, saved), 2);
  assert.deepEqual(reloaded.map(group => group.visible), [true, false]);
  assert.deepEqual(reloaded.map(group => group.object.visible), [true, false]);
});

test("group visibility does not apply to a different label at the same position", () => {
  const groups = createModelGroups({ children: [makeObject("Roof", "new")] });
  const restored = restoreModelGroupVisibility(groups, [
    { sessionKey: JSON.stringify([0, "Walls"]), visible: false }
  ]);

  assert.equal(restored, 0);
  assert.equal(groups[0].visible, true);
});

test("getModelGroupLabel prefers the original glTF display name", () => {
  const object = makeObject("Vázszerkezet_-_tetőszerkezet", "roof");
  object.userData = { groupLabel: "Vázszerkezet - tetőszerkezet" };

  assert.equal(getModelGroupLabel(object, 0), "Vázszerkezet - tetőszerkezet");
});

test("isObjectVisibleInHierarchy respects hidden top-level groups", () => {
  const model = makeObject("Scene", "scene");
  const group = makeObject("Walls", "walls");
  const mesh = makeObject("Wall mesh", "mesh");
  model.parent = null;
  group.parent = model;
  mesh.parent = group;

  assert.equal(isObjectVisibleInHierarchy(mesh, model), true);
  group.visible = false;
  assert.equal(isObjectVisibleInHierarchy(mesh, model), false);
});
