import test from "node:test";
import assert from "node:assert/strict";

import {
  findInitialCameraNode,
  isFiniteVector3,
  readDropViewMetadata
} from "../js/model/drop-view-metadata.js";

test("reads scene initial view and asset credits independently", () => {
  const initialView = {
    camera: 0,
    projection: "perspective",
    target: [1, 2, 3]
  };
  const sun = { directionToSun: [-0.409576, 0.573576, 0.709406] };
  const gltf = {
    scene: { userData: { dropView: { initialView, sun } } },
    parser: {
      json: {
        scene: 1,
        scenes: [{}, { extras: { dropView: { initialView: { camera: 9 } } } }],
        asset: { extras: { dropView: { designCredits: "Architect\nStudio" } } }
      }
    }
  };

  assert.deepEqual(readDropViewMetadata(gltf), {
    initialView,
    sun,
    designCredits: "Architect\nStudio"
  });
  gltf.scene.userData = {};
  assert.deepEqual(readDropViewMetadata(gltf).initialView, { camera: 9 });
  assert.equal(readDropViewMetadata(gltf).sun, null);
  assert.deepEqual(readDropViewMetadata({}), {
    initialView: null,
    sun: null,
    designCredits: ""
  });
});

test("reads sun data from the active glTF scene when userData is empty", () => {
  const sun = { directionToSun: [-0.409576, 0.573576, 0.709406] };
  const gltf = {
    scene: { userData: {} },
    parser: {
      json: {
        scene: 1,
        scenes: [{ extras: { dropView: { sun: "wrong scene" } } },
          { extras: { dropView: { sun } } }]
      }
    }
  };
  assert.deepEqual(readDropViewMetadata(gltf).sun, sun);
});

test("finds the camera node in the active scene, including its node transform", () => {
  const unrelatedCamera = { isCamera: true };
  const exportedCamera = { isCamera: true, position: [4, 5, 6] };
  const gltf = {
    scene: {
      traverse(callback) {
        [unrelatedCamera, exportedCamera].forEach(callback);
      }
    },
    parser: {
      json: { nodes: [{ camera: 1 }, { camera: 0 }] },
      associations: new Map([
        [unrelatedCamera, { nodes: 0 }],
        [exportedCamera, { nodes: 1 }]
      ])
    }
  };

  assert.equal(findInitialCameraNode(gltf, 0), exportedCamera);
  assert.equal(findInitialCameraNode(gltf, 2), null);
  assert.equal(findInitialCameraNode(gltf, -1), null);
});

test("rejects incomplete or non-finite target coordinates", () => {
  assert.equal(isFiniteVector3([1, 2, 3]), true);
  assert.equal(isFiniteVector3([1, 2]), false);
  assert.equal(isFiniteVector3([1, Infinity, 3]), false);
});
