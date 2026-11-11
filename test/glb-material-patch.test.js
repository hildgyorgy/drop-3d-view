import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { readGlb, patchGlbMaterials,
  pruneGlbResources } from "../js/model/glb-material-patch.js";

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

test("any material can become clean exporter-equivalent physical glass", async () => {
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
  const after = edited.json.materials[clearIndex];
  assert.equal(after.extensions.KHR_materials_transmission.transmissionFactor, 0.65);
  assert.deepEqual(after.pbrMetallicRoughness.baseColorFactor, [0.4, 0.7, 0.9, 1]);
  assert.equal(after.pbrMetallicRoughness.roughnessFactor, 0.4);
  assert.equal(after.pbrMetallicRoughness.metallicFactor, 0);
  assert.deepEqual(after.extensions.KHR_materials_ior, { ior: 1.5 });
  assert.equal(after.extras.archicad.clearGlassOverride, true);
  assert.deepEqual(edited.json.materials[nonClearIndex], original.json.materials[nonClearIndex]);
  assert.deepEqual(edited.binary, original.binary);
  assert.equal(original.json.materials[clearIndex].extensions.KHR_materials_transmission.transmissionFactor, 0.98);
  for (const index of [nonClearIndex, 0]) {
    const converted = readGlb(patchGlbMaterials(source, [{
      materialIndex: index, glassTransmission: 0.98
    }])).json.materials[index];
    assert.deepEqual(converted.pbrMetallicRoughness, {
      baseColorFactor: [1, 1, 1, 1], metallicFactor: 0, roughnessFactor: 0.03
    });
    assert.deepEqual(converted.extensions, {
      KHR_materials_transmission: { transmissionFactor: 0.98 },
      KHR_materials_ior: { ior: 1.5 }
    });
    assert.equal(converted.doubleSided, true);
    for (const field of ["normalTexture", "occlusionTexture", "emissiveTexture", "emissiveFactor", "alphaMode", "alphaCutoff"])
      assert.equal(converted[field], undefined);
  }
});

test("physical glass converts back into each opaque workbench type", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const glass = patchGlbMaterials(source, [{ materialIndex: 0, glassTransmission: 0.98 }]);
  for (const type of ["surface", "metal", "lacquered"]) {
    const converted = readGlb(patchGlbMaterials(glass, [{
      materialIndex: 0, images: {}, color: [0.2, 0.3, 0.4],
      roughness: 0.4, metalness: type === "metal" ? 1 : 0,
      clearcoat: type === "lacquered" ? 1 : 0, clearcoatRoughness: 0.08
    }])).json.materials[0];
    for (const extension of ["KHR_materials_transmission", "KHR_materials_ior", "KHR_materials_volume", "KHR_materials_dispersion"])
      assert.equal(converted.extensions[extension], undefined);
    assert.equal(converted.extras.archicad.clearGlassOverride, false);
    assert.equal(converted.pbrMetallicRoughness.metallicFactor, type === "metal" ? 1 : 0);
    assert.equal(converted.pbrMetallicRoughness.baseColorFactor[3], 1);
    assert.equal(converted.alphaMode, "OPAQUE");
    assert.equal(converted.extensions.KHR_materials_clearcoat?.clearcoatFactor ?? 0, type === "lacquered" ? 1 : 0);
  }
});

test("glass replacement drops foreign shading, textures, emission, alpha and volume", () => {
  const material = {
    name: "Foreign glass", extras: { owner: "test" },
    pbrMetallicRoughness: {
      baseColorFactor: [0.1, 0.2, 0.3, 0.2], metallicFactor: 1,
      roughnessFactor: 0.9, baseColorTexture: { index: 0 }
    },
    normalTexture: { index: 0 }, emissiveFactor: [4, 3, 2],
    alphaMode: "BLEND", alphaCutoff: 0.5, doubleSided: false,
    extensions: {
      KHR_materials_transmission: { transmissionFactor: 0.5, transmissionTexture: { index: 0 } },
      KHR_materials_volume: { thicknessFactor: 2, attenuationColor: [0.2, 0.5, 0.9] },
      KHR_materials_ior: { ior: 2.4 }, KHR_materials_unlit: {},
      KHR_materials_clearcoat: { clearcoatFactor: 1 },
      KHR_materials_dispersion: { dispersion: 0.8 }
    }
  };
  const json = { asset: { version: "2.0" }, buffers: [{ byteLength: 4 }], materials: [material] };
  const encoded = new TextEncoder().encode(JSON.stringify(json));
  const length = (encoded.length + 3) & ~3;
  const buffer = new ArrayBuffer(32 + length);
  const view = new DataView(buffer);
  for (const [offset, value] of [[0, 0x46546c67], [4, 2], [8, buffer.byteLength],
    [12, length], [16, 0x4e4f534a], [20 + length, 4], [24 + length, 0x004e4942]])
    view.setUint32(offset, value, true);
  const bytes = new Uint8Array(buffer);
  bytes.fill(0x20, 20, 20 + length);
  bytes.set(encoded, 20);
  const converted = readGlb(patchGlbMaterials(buffer, [{ materialIndex: 0, glassTransmission: 0.98 }])).json.materials[0];
  assert.deepEqual(Object.keys(converted).sort(), ["doubleSided", "extensions", "extras", "name", "pbrMetallicRoughness"]);
  assert.deepEqual(converted.extensions, {
    KHR_materials_transmission: { transmissionFactor: 0.98 }, KHR_materials_ior: { ior: 1.5 }
  });
  assert.equal(converted.extras.owner, "test");
  assert.equal(converted.extras.archicad.clearGlassOverride, true);
  const opaque = readGlb(patchGlbMaterials(buffer, [{
    materialIndex: 0, images: {}, color: [1, 1, 1], roughness: 0.75, metalness: 0, clearcoat: 0
  }])).json.materials[0];
  assert.equal(opaque.extensions.KHR_materials_volume, undefined);
  assert.equal(opaque.extensions.KHR_materials_dispersion, undefined);
  assert.equal(opaque.alphaMode, "OPAQUE");
  assert.equal(opaque.pbrMetallicRoughness.baseColorFactor[3], 1);
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

test("repeated material saves replace orphaned embedded textures instead of growing the GLB", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const edit = value => ({
    materialIndex: 0,
    images: { color: { bytes: pngBytes(value), mimeType: "image/png" } },
    roughness: 0.5,
    metalness: 0,
    clearcoat: 0
  });

  const firstBuffer = patchGlbMaterials(source, [edit(21)]);
  const first = readGlb(firstBuffer);
  const secondBuffer = patchGlbMaterials(firstBuffer, [edit(22)]);
  const second = readGlb(secondBuffer);
  const thirdBuffer = patchGlbMaterials(secondBuffer, [edit(23)]);
  const third = readGlb(thirdBuffer);

  assert.equal(second.json.images.length, first.json.images.length);
  assert.equal(third.json.images.length, first.json.images.length);
  assert.equal(second.json.textures.length, first.json.textures.length);
  assert.equal(third.json.textures.length, first.json.textures.length);
  assert.equal(second.binary.length, first.binary.length);
  assert.equal(third.binary.length, first.binary.length);
  assert.ok(secondBuffer.byteLength <= firstBuffer.byteLength);
  assert.ok(thirdBuffer.byteLength <= firstBuffer.byteLength);
  for (const glb of [second, third]) {
    for (const texture of glb.json.textures) {
      assert.ok(texture.source < glb.json.images.length);
      if (texture.sampler !== undefined)
        assert.ok(texture.sampler < glb.json.samplers.length);
    }
    for (const image of glb.json.images) {
      const view = glb.json.bufferViews[image.bufferView];
      assert.ok(view.byteOffset + view.byteLength <= glb.binary.length);
    }
  }
});

test("switching an edited surface to a solid color removes its orphaned image bytes", async () => {
  const file = await readFile(new URL("../demo/demo_house_2.glb", import.meta.url));
  const source = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
  const texturedBuffer = patchGlbMaterials(source, [{
    materialIndex: 0,
    images: { color: { bytes: pngBytes(31), mimeType: "image/png" } },
    roughness: 0.5,
    metalness: 0,
    clearcoat: 0
  }]);
  const textured = readGlb(texturedBuffer);
  const solidBuffer = patchGlbMaterials(texturedBuffer, [{
    materialIndex: 0,
    images: {},
    color: [0.2, 0.3, 0.4],
    roughness: 0.5,
    metalness: 0,
    clearcoat: 0
  }]);
  const solid = readGlb(solidBuffer);

  assert.equal(solid.json.images.length, textured.json.images.length - 1);
  assert.equal(solid.json.textures.length, textured.json.textures.length - 1);
  assert.ok(solid.binary.length < textured.binary.length);
  assert.ok(solidBuffer.byteLength < texturedBuffer.byteLength);
});

test("unknown extensions conservatively disable resource pruning", () => {
  const json = {
    extensionsUsed: ["VENDOR_hidden_resource_indices"],
    textures: [{ source: 0, sampler: 0 }],
    images: [{ bufferView: 0, mimeType: "image/png" }],
    samplers: [{}],
    bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: 4 }],
    materials: []
  };
  const binaryParts = [new Uint8Array([1, 2, 3, 4])];

  assert.equal(pruneGlbResources(json, binaryParts), binaryParts);
  assert.equal(json.textures.length, 1);
  assert.equal(json.images.length, 1);
  assert.equal(json.bufferViews.length, 1);
});
