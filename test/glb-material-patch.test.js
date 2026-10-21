import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { readGlb, patchGlbMaterials } from "../js/model/glb-material-patch.js";

test("patches a material while keeping model structure and metadata", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const image = { bytes: new Uint8Array([1, 2, 3, 4, 5]), mimeType: "image/png" };
  const edit = {
    materialIndex: 0,
    roughness: 0.3,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    transform: { scale: 2, rotation: 0.5, offsetX: 0, offsetY: 0 },
    images: { color: image }
  };
  const edited = readGlb(patchGlbMaterials(source, [edit, { ...edit, materialIndex: 1 }]));
  for (const key of ["meshes", "nodes", "scenes", "extensions"])
    assert.equal(JSON.stringify(edited.json[key]), JSON.stringify(original.json[key]));
  assert.deepEqual(edited.binary.slice(0, original.binary.length), original.binary);
  assert.equal(edited.json.materials[0].pbrMetallicRoughness.roughnessFactor, 0.3);
  assert.equal(edited.json.materials[0].extensions.KHR_materials_clearcoat.clearcoatFactor, 1);
  const info = edited.json.materials[0].pbrMetallicRoughness.baseColorTexture;
  assert.deepEqual(edited.json.materials[0].pbrMetallicRoughness.baseColorFactor, [1, 1, 1, 1]);
  assert.equal(edited.json.materials[1].pbrMetallicRoughness.baseColorTexture.index, info.index);
  assert.equal(edited.json.images.length, original.json.images.length + 1);
  assert.deepEqual(info.extensions.KHR_texture_transform.scale, [2, 2]);
  assert.equal(edited.json.buffers[0].byteLength, edited.binary.length);
});
