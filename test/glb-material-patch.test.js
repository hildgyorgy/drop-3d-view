import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { readGlb, patchGlbMaterials } from "../js/model/glb-material-patch.js";

const pngBytes = value => new Uint8Array([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, value
]);

test("rejects image records whose bytes do not match their MIME type", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  assert.throws(() => patchGlbMaterials(source, [{
    materialIndex: 0,
    images: {
      color: {
        bytes: new TextEncoder().encode("RIFF0000WEBP"),
        mimeType: "image/png"
      }
    }
  }]), /bytes and JPEG\/PNG MIME type do not match/);
});

test("patches a material while keeping model structure and metadata", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const image = { bytes: pngBytes(1), mimeType: "image/png" };
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

test("embeds a complete three-map package in the GLB structure", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const images = Object.fromEntries(["color", "roughness", "normal"].map((kind, i) => [
    kind, { bytes: pngBytes(i), mimeType: "image/png" }
  ]));
  const edited = readGlb(patchGlbMaterials(source, [{
    materialIndex: 0, images, roughness: 0.4, metalness: 0, clearcoat: 0,
    transform: { scale: 0.5, rotation: 0, offsetX: 0.1, offsetY: 0.2 }
  }]));
  const material = edited.json.materials[0];
  assert.equal(edited.json.images.length, original.json.images.length + 3);
  for (const info of [
    material.pbrMetallicRoughness.baseColorTexture,
    material.pbrMetallicRoughness.metallicRoughnessTexture,
    material.normalTexture
  ]) {
    assert.deepEqual(info.extensions.KHR_texture_transform.scale, [0.5, 0.5]);
    assert.ok(edited.json.textures[info.index].source >= original.json.images.length);
  }
  assert.deepEqual(edited.binary.slice(0, original.binary.length), original.binary);
  assert.equal(edited.json.buffers[0].byteLength, edited.binary.length);
});

test("polished metal ignores uploaded maps and replaces source texture with color", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const image = { bytes: pngBytes(2), mimeType: "image/png" };
  const edited = readGlb(patchGlbMaterials(source, [{
    materialIndex: 0, images: { color: image, normal: image },
    ignoreMaps: true, color: [0.25, 0.5, 0.75],
    roughness: 0.25, metalness: 1, clearcoat: 0, clearcoatRoughness: 0
  }]));
  const material = edited.json.materials[0];
  assert.equal(material.pbrMetallicRoughness.baseColorTexture, undefined);
  assert.equal(material.pbrMetallicRoughness.metallicRoughnessTexture, undefined);
  assert.equal(material.normalTexture, undefined);
  assert.deepEqual(material.pbrMetallicRoughness.baseColorFactor, [0.25, 0.5, 0.75, 1]);
  assert.equal(material.pbrMetallicRoughness.metallicFactor, 1);
  assert.equal(material.extensions?.KHR_materials_clearcoat, undefined);
  assert.equal(edited.json.images.length, original.json.images.length);
});

test("surface color without an uploaded color map becomes a solid color", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const edited = readGlb(patchGlbMaterials(source, [{
    materialIndex: 0, images: {}, color: [0.2, 0.6, 0.3],
    roughness: 0.75, metalness: 0, clearcoat: 0
  }]));
  const material = edited.json.materials[0];
  assert.equal(material.pbrMetallicRoughness.baseColorTexture, undefined);
  assert.deepEqual(material.pbrMetallicRoughness.baseColorFactor, [0.2, 0.6, 0.3, 1]);
});

test("lacquered texture retains a tinted base map under the clear coat", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const image = { bytes: pngBytes(3), mimeType: "image/png" };
  const edited = readGlb(patchGlbMaterials(source, [{
    materialIndex: 0, images: { color: image }, color: [0.4, 0.7, 0.9],
    roughness: 0.35, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08
  }]));
  const material = edited.json.materials[0];
  assert.ok(material.pbrMetallicRoughness.baseColorTexture);
  assert.deepEqual(material.pbrMetallicRoughness.baseColorFactor, [0.4, 0.7, 0.9, 1]);
  assert.deepEqual(material.extensions.KHR_materials_clearcoat, {
    clearcoatFactor: 1, clearcoatRoughnessFactor: 0.08
  });
});

test("glass edits only exporter-selected clear glass and retain its IOR", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const clearIndex = original.json.materials.findIndex(material =>
    material.extras?.archicad?.clearGlassOverride === true &&
    material.extensions?.KHR_materials_transmission?.transmissionFactor > 0);
  const nonClearIndex = original.json.materials.findIndex(material =>
    material.extras?.archicad?.clearGlassOverride === false &&
    material.extensions?.KHR_materials_transmission?.transmissionFactor > 0);
  assert.ok(clearIndex >= 0);
  assert.ok(nonClearIndex >= 0);
  const edited = readGlb(patchGlbMaterials(source, [{
    materialIndex: clearIndex,
    glassTransmission: 0.65,
    color: [0.4, 0.7, 0.9],
    roughness: 0.4
  }]));
  const before = original.json.materials[clearIndex];
  const after = edited.json.materials[clearIndex];
  assert.equal(after.extensions.KHR_materials_transmission.transmissionFactor, 0.65);
  assert.deepEqual(after.pbrMetallicRoughness.baseColorFactor, [0.4, 0.7, 0.9, 1]);
  assert.equal(after.pbrMetallicRoughness.roughnessFactor, 0.4);
  assert.equal(after.pbrMetallicRoughness.metallicFactor, before.pbrMetallicRoughness.metallicFactor);
  assert.deepEqual(after.extensions.KHR_materials_ior, before.extensions.KHR_materials_ior);
  assert.deepEqual(after.extras, before.extras);
  assert.deepEqual(edited.json.materials[nonClearIndex], original.json.materials[nonClearIndex]);
  assert.deepEqual(edited.binary, original.binary);
  assert.equal(original.json.materials[clearIndex].extensions.KHR_materials_transmission.transmissionFactor, 0.98);
  assert.throws(() => patchGlbMaterials(source, [{
    materialIndex: nonClearIndex, glassTransmission: 0.5, color: [1, 1, 1], roughness: 0.2
  }]), /not exporter-selected clear glass/);
});

test("imported source maps keep separate UV transforms, sampler wrapping and strengths", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const image = { bytes: pngBytes(8), mimeType: "image/png" };
  const edited = readGlb(patchGlbMaterials(source, [{
    materialIndex: 0, images: { color: image, normal: { ...image }, occlusion: { ...image } },
    roughness: .6, metalness: .2, normalScale: .4, occlusionStrength: .7,
    mapSettings: {
      color: { texCoord: 0, scaleX: 3, scaleY: 4, rotation: .3, offsetX: .1, offsetY: .2, wrapS: 33071, wrapT: 33648 },
      normal: { texCoord: 1, scaleX: 2, scaleY: 2 },
      occlusion: { texCoord: 0, scaleX: 1, scaleY: 1 }
    }
  }]));
  const material = edited.json.materials[0];
  const info = material.pbrMetallicRoughness.baseColorTexture;
  assert.deepEqual(info.extensions.KHR_texture_transform.scale, [3, 4]);
  assert.deepEqual(info.extensions.KHR_texture_transform.offset, [.1, .2]);
  assert.deepEqual(edited.json.samplers[edited.json.textures[info.index].sampler], { wrapS: 33071, wrapT: 33648 });
  assert.equal(material.normalTexture.texCoord, 1);
  assert.equal(material.normalTexture.scale, .4);
  assert.equal(material.occlusionTexture.strength, .7);
  assert.deepEqual(edited.json.meshes, original.json.meshes);
  assert.deepEqual(edited.binary.slice(0, original.binary.length), original.binary);
});

test("shared image bytes can retain different source samplers", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const original = readGlb(source);
  const image = { bytes: pngBytes(9), mimeType: "image/png" };
  const { json } = readGlb(patchGlbMaterials(source, [{
    materialIndex: 0, images: { color: image, normal: image },
    mapSettings: {
      color: { wrapS: 33071, wrapT: 33071, minFilter: 9728, magFilter: 9728 },
      normal: { wrapS: 10497, wrapT: 10497 }
    }
  }]));
  const color = json.textures[json.materials[0].pbrMetallicRoughness.baseColorTexture.index];
  const normal = json.textures[json.materials[0].normalTexture.index];
  assert.equal(json.images.length, original.json.images.length + 1);
  assert.equal(color.source, normal.source);
  assert.notEqual(color.sampler, normal.sampler);
  assert.equal(json.samplers[color.sampler].magFilter, 9728);
});
