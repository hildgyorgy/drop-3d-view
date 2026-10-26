import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { makeMeterUvs } from "../js/model/meter-uv.js";
import { readGlb, patchGlbMaterials } from "../js/model/glb-material-patch.js";

function floats(glb, accessorIndex) {
  const accessor = glb.json.accessors[accessorIndex];
  const view = glb.json.bufferViews[accessor.bufferView];
  assert.equal(accessor.componentType, 5126);
  const size = accessor.type === "VEC3" ? 3 : 2;
  const bytes = new DataView(glb.binary.buffer, glb.binary.byteOffset, glb.binary.byteLength);
  const offset = (view.byteOffset || 0) + (accessor.byteOffset || 0);
  const stride = view.byteStride || size * 4;
  const values = new Float32Array(accessor.count * size);
  for (let i = 0; i < accessor.count; i++)
    for (let component = 0; component < size; component++)
      values[i * size + component] = bytes.getFloat32(offset + i * stride + component * 4, true);
  return values;
}

test("meter UVs use model coordinates instead of source UV scale", () => {
  const pos = new Float32Array([0, 0, 0, 2, 0, 0, 2, 2, 0]);
  const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]);
  assert.deepEqual([...makeMeterUvs(pos, normals, 2)].map(value => value === 0 ? 0 : value),
    [0, 0, -1, 0, -1, 1]);
  assert.throws(() => makeMeterUvs(pos, normals, 0), /positive tile size/);
});

test("both Rhino materials and an originally textured control save independent meter UVs", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const targets = [[7, 19], [7, 20], [9, 0]];
  const materialUse = new Map();
  for (const mesh of original.json.meshes) for (const primitive of mesh.primitives)
    materialUse.set(primitive.material, (materialUse.get(primitive.material) || 0) + 1);
  const controlMaterial = original.json.materials.findIndex((material, index) =>
    material.pbrMetallicRoughness?.baseColorTexture && materialUse.get(index) === 1);
  assert.ok(controlMaterial >= 0);
  let control = null;
  for (let meshIndex = 0; meshIndex < original.json.meshes.length && !control; meshIndex++) {
    const primitiveIndex = original.json.meshes[meshIndex].primitives.findIndex(
      primitive => primitive.material === controlMaterial);
    if (primitiveIndex >= 0) control = [meshIndex, primitiveIndex];
  }
  assert.ok(control);
  targets.push(control);

  const image = {
    bytes: new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1]),
    mimeType: "image/png"
  };
  const edits = targets.map(([meshIndex, primitiveIndex]) => {
    const primitive = original.json.meshes[meshIndex].primitives[primitiveIndex];
    const positions = floats(original, primitive.attributes.POSITION);
    const normals = floats(original, primitive.attributes.NORMAL);
    return {
      materialIndex: primitive.material,
      images: { color: image },
      roughness: 0.7, metalness: 0, clearcoat: 0,
      texCoord: 1,
      meterUvs: [{ meshIndex, primitiveIndex,
        coordinates: makeMeterUvs(positions, normals, 2) }]
    };
  });
  const saved = readGlb(patchGlbMaterials(source, edits));
  assert.deepEqual(saved.binary.slice(0, original.binary.length), original.binary);
  for (const [meshIndex, primitiveIndex] of targets) {
    const before = original.json.meshes[meshIndex].primitives[primitiveIndex];
    const after = saved.json.meshes[meshIndex].primitives[primitiveIndex];
    assert.equal(after.attributes.TEXCOORD_0, before.attributes.TEXCOORD_0);
    assert.equal(before.attributes.TEXCOORD_1, undefined);
    assert.equal(saved.json.accessors[after.attributes.TEXCOORD_1].count,
      original.json.accessors[before.attributes.POSITION].count);
    assert.equal(saved.json.materials[before.material].pbrMetallicRoughness.baseColorTexture.texCoord, 1);
  }
  // The same uploaded image can be shared, while each texture slot retains its UV choice.
  const plain = readGlb(patchGlbMaterials(source, [{ ...edits[0], meterUvs: [], texCoord: 0 }, edits[1] ]));
  assert.equal(plain.json.materials[edits[0].materialIndex].pbrMetallicRoughness.baseColorTexture.texCoord, undefined);
  assert.equal(plain.json.materials[edits[1].materialIndex].pbrMetallicRoughness.baseColorTexture.texCoord, 1);
});
