import test from "node:test";
import assert from "node:assert/strict";
import {
  assertValidViewSession,
  captureViewSession,
  restoreCameraPose
} from "../js/core/view-session.js";

const vector = values => ({
  values: [...values],
  toArray() {
    return [...this.values];
  },
  fromArray(next) {
    this.values = [...next];
  }
});

test("view snapshot is independent of later camera, group and setting changes", () => {
  const camera = {
    position: vector([1, 2, 3]),
    quaternion: vector([0, 0, 0, 1]),
    up: vector([0, 1, 0]),
    zoom: 1.5,
    fov: 42,
    isPerspectiveCamera: true
  };
  const state = {
    camera,
    controls: { target: vector([4, 5, 6]) },
    cameraProjection: "perspective",
    currentMode: "original",
    navigationMode: "orbit",
    sectionEnabled: true,
    sectionAxis: "x",
    sectionPlane: { normal: vector([-1, 0, 0]), constant: 7 }
  };
  const groups = [{ sessionKey: '[0,"wall"]', visible: false }];
  const settings = { sun: { azimuth: 90 } };
  const snapshot = captureViewSession(state, {
    groups, selectedIds: ["door"], settings, cameraPreset: "front"
  });

  camera.position.values[0] = 99;
  groups[0].visible = true;
  settings.sun.azimuth = 180;

  assert.equal(snapshot.camera.position[0], 1);
  assert.equal(snapshot.camera.preset, "front");
  assert.deepEqual(snapshot.groups, [{ sessionKey: '[0,"wall"]', visible: false }]);
  assert.deepEqual(snapshot.selectedIds, ["door"]);
  assert.equal(snapshot.settings.sun.azimuth, 90);
  assert.equal(snapshot.section.constant, 7);
  assert.equal(assertValidViewSession(snapshot), snapshot);
  assert.doesNotThrow(() => JSON.stringify(snapshot));
});

test("camera pose restores after the destination projection is selected", () => {
  const camera = {
    position: vector([0, 0, 0]),
    quaternion: vector([0, 0, 0, 1]),
    up: vector([0, 1, 0]),
    zoom: 1,
    fov: 50,
    isPerspectiveCamera: true,
    updateProjectionMatrix() {
      this.projectionUpdated = true;
    }
  };
  const controls = {
    target: vector([0, 0, 0]),
    update() {
      this.updated = true;
    }
  };
  restoreCameraPose(
    {
      camera: {
        projection: "perspective",
        preset: "front",
        position: [3, 4, 5],
        quaternion: [0, 0, 0, 1],
        up: [0, 1, 0],
        target: [1, 2, 3],
        zoom: 2,
        fov: 36
      }
    },
    camera,
    controls
  );

  assert.deepEqual(camera.position.values, [3, 4, 5]);
  assert.deepEqual(controls.target.values, [1, 2, 3]);
  assert.equal(camera.zoom, 2);
  assert.equal(camera.fov, 36);
  assert.equal(camera.projectionUpdated, true);
  assert.equal(controls.updated, true);
});

test("invalid external view sessions are rejected before touching the camera", () => {
  const snapshot = {
    camera: {
      projection: "perspective", preset: null,
      position: [JSON.parse("1e400"), 0, 0], quaternion: [0, 0, 0, 1],
      up: [0, 1, 0], target: [0, 0, 0], zoom: 1, fov: 42
    }
  };
  let mutations = 0;
  const vector = { fromArray: () => { mutations++; } };
  const camera = {
    position: vector, quaternion: vector, up: vector,
    isPerspectiveCamera: true, updateProjectionMatrix: () => { mutations++; }
  };
  const controls = { target: vector, update: () => { mutations++; } };

  assert.throws(() => restoreCameraPose(snapshot, camera, controls), /Invalid view session camera/);
  assert.equal(mutations, 0);
});

test("view session validation rejects malformed groups, section and settings", () => {
  const valid = {
    version: 1,
    camera: {
      projection: "perspective", preset: null,
      position: [3, 4, 5], quaternion: [0, 0, 0, 1], up: [0, 1, 0],
      target: [0, 0, 0], zoom: 1, fov: 42
    },
    displayMode: "original", navigationMode: "orbit",
    groups: [], selectedIds: [],
    section: { enabled: false, axis: "y", normal: [0, -1, 0], constant: 0 },
    settings: {}
  };
  assert.throws(() => assertValidViewSession({ ...valid, groups: [{}] }), /session state/);
  assert.throws(() => assertValidViewSession({ ...valid,
    section: { ...valid.section, normal: [0, NaN, 0] }
  }), /session section/);
  assert.throws(() => assertValidViewSession({ ...valid,
    settings: { sectionSlider: "not-a-number" }
  }), /sectionSlider/);
});
