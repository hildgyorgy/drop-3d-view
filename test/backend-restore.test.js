import test from "node:test";
import assert from "node:assert/strict";
import { restoreBackendHandoff } from "../js/core/backend-restore.js";

test("view restoration continues after a workbench handoff failure", async () => {
  const restored = [];
  const errors = [];
  const opened = await restoreBackendHandoff(
    { name: "model.glb" },
    { workbench: { edits: [] }, viewSession: { camera: {} } },
    {
      openFile: async () => true,
      restoreWorkbench: async () => { throw new Error("bad workbench"); },
      restoreView: () => { restored.push("view"); },
      onError: (stage, error) => { errors.push([stage, error.message]); }
    }
  );

  assert.equal(opened, true);
  assert.deepEqual(restored, ["view"]);
  assert.deepEqual(errors, [["workbench", "bad workbench"]]);
});

test("a failed model open does not restore state", async () => {
  const restored = [];
  const opened = await restoreBackendHandoff(
    { name: "broken.glb" },
    { workbench: {}, viewSession: {} },
    {
      openFile: async () => false,
      restoreWorkbench: async () => { restored.push("workbench"); },
      restoreView: () => { restored.push("view"); }
    }
  );

  assert.equal(opened, false);
  assert.deepEqual(restored, []);
});
