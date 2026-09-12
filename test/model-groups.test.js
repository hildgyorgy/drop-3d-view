import test from "node:test";
import assert from "node:assert/strict";

import {
  createModelGroups,
  getModelGroupLabel,
  isObjectVisibleInHierarchy,
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

test("setModelGroupVisible keeps state and Three.js object visibility together", () => {
  const object = makeObject("Roof", "roof");
  const group = { object, visible: true };

  setModelGroupVisible(group, false);

  assert.equal(group.visible, false);
  assert.equal(object.visible, false);
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
