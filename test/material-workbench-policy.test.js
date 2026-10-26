import test from "node:test";
import assert from "node:assert/strict";

import {
  getMaterialWorkbenchAccess,
  readMaterialWorkbenchPolicy,
  shouldLoadMaterialWorkbench
} from "../js/model/material-workbench-policy.js";

function gltfWithPolicy(policy) {
  return {
    parser: {
      json: {
        asset: {
          extras: {
            dropView: { materialWorkbench: { policy } }
          }
        }
      }
    }
  };
}

test("only an explicit disabled policy locks the Material Workbench", () => {
  assert.equal(readMaterialWorkbenchPolicy(gltfWithPolicy("disabled")), "disabled");
  assert.equal(readMaterialWorkbenchPolicy(gltfWithPolicy("enabled")), "enabled");
  assert.equal(readMaterialWorkbenchPolicy(gltfWithPolicy("future-value")), "enabled");
  assert.equal(readMaterialWorkbenchPolicy({}), "enabled");
});

test("embedded viewers do not load the Material Workbench module", () => {
  assert.equal(shouldLoadMaterialWorkbench(null), true);
  assert.equal(shouldLoadMaterialWorkbench({ channel: "embed" }), false);
});

test("Material Workbench access follows embed, policy and model origin", () => {
  assert.deepEqual(getMaterialWorkbenchAccess({ embedded: true, sourceKind: "user" }), {
    visible: false,
    canEdit: false,
    canSave: false
  });
  assert.deepEqual(
    getMaterialWorkbenchAccess({ policy: "disabled", sourceKind: "user" }),
    {
      visible: true,
      canEdit: false,
      canSave: false
    }
  );
  assert.deepEqual(
    getMaterialWorkbenchAccess({ policy: "enabled", sourceKind: "demo" }),
    {
      visible: true,
      canEdit: true,
      canSave: false
    }
  );
  assert.deepEqual(
    getMaterialWorkbenchAccess({ policy: "enabled", sourceKind: "user" }),
    {
      visible: true,
      canEdit: true,
      canSave: true
    }
  );
});
