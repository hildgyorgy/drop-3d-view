import test from "node:test";
import assert from "node:assert/strict";
import { applyMaterialVariant } from "../js/model/material-variants.js";

function fixture({ variants = [{ name: "Maxon / Redshift PBR" }], mapping = true } = {}) {
  const first = { isMesh: true, material: "basic-0" };
  const second = { isMesh: true, material: "basic-1" };
  const associations = new Map([
    [first, { meshes: 0, primitives: 0 }],
    [second, { meshes: 0, primitives: 1 }]
  ]);
  const loaded = [];
  const parser = {
    json: {
      extensions: { KHR_materials_variants: { variants } },
      meshes: [
        {
          primitives: [
            {
              extensions: mapping
                ? {
                    KHR_materials_variants: { mappings: [{ material: 2, variants: [0] }] }
                  }
                : {}
            },
            {}
          ]
        }
      ]
    },
    associations,
    async getDependency(type, index) {
      loaded.push([type, index]);
      return `pbr-${index}`;
    },
    assignFinalMaterial() {}
  };
  const gltf = {
    parser,
    scene: {
      traverse(visit) {
        visit(first);
        visit(second);
      }
    }
  };
  return { gltf, first, second, loaded };
}

test("selects the named variant only on mapped primitives", async () => {
  const { gltf, first, second, loaded } = fixture();
  assert.equal(await applyMaterialVariant(gltf, "Maxon / Redshift PBR"), 1);
  assert.equal(first.material, "pbr-2");
  assert.equal(second.material, "basic-1");
  assert.deepEqual(loaded, [["material", 2]]);
});

test("keeps GLB defaults when the variant or mapping is absent", async () => {
  for (const options of [{ variants: [] }, { mapping: false }]) {
    const { gltf, first, second, loaded } = fixture(options);
    assert.equal(await applyMaterialVariant(gltf, "Maxon / Redshift PBR"), 0);
    assert.equal(first.material, "basic-0");
    assert.equal(second.material, "basic-1");
    assert.deepEqual(loaded, []);
  }
});
