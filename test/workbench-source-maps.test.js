import test from "node:test";
import assert from "node:assert/strict";
import { readSourceMaterialMaps, sourceMapSettings } from "../js/ui/workbench-source-maps.js";

const png = new Uint8Array([137,80,78,71,13,10,26,10,17]);
function fixture() {
  return {
    json: {
      materials: [{ name: "Archicad wall", pbrMetallicRoughness: {
        metallicFactor: 0.2, baseColorTexture: { index: 0, extensions: {
          KHR_texture_transform: { scale: [3, 4], offset: [.1, .2], rotation: .3, texCoord: 1 }
        } }, metallicRoughnessTexture: { index: 0 }
      }, normalTexture: { index: 0, scale: .4 }, occlusionTexture: { index: 0, strength: .7 } }],
      textures: [{ source: 0, sampler: 0 }],
      images: [{ bufferView: 3, name: "original-wall.png" }],
      samplers: [{ wrapS: 33071, wrapT: 33648 }]
    },
    async getDependency(kind, index) {
      assert.equal(kind, "bufferView");
      assert.equal(index, 3);
      return png.buffer;
    }
  };
}

test("imports original GLB PBR image bytes, names, channels and sampler transforms", async () => {
  const { images, settings } = await readSourceMaterialMaps(fixture(), 0);
  assert.deepEqual(Object.keys(images).sort(), ["arm", "color", "normal", "occlusion"]);
  assert.equal(images.color.name, "original-wall.png");
  assert.equal(images.color.type, "image/png");
  assert.deepEqual(new Uint8Array(await images.color.arrayBuffer()), png);
  assert.equal(settings.metalness, .2);
  assert.equal(settings.normalScale, .4);
  assert.equal(settings.occlusionStrength, .7);
  assert.deepEqual(sourceMapSettings(settings, "color", {}), {
    texCoord: 1, scaleX: 3, scaleY: 4, rotation: .3,
    offsetX: .1, offsetY: .2, wrapS: 33071, wrapT: 33648
  });
  assert.equal(settings.roughness.texCoord, 0);
});

test("edits apply relative to the original texture placement, with serializable handoff settings", async () => {
  const { settings } = await readSourceMaterialMaps(fixture(), 0);
  const restored = JSON.parse(JSON.stringify(settings));
  const value = sourceMapSettings(restored, "color", {
    workbenchTileMetres: 4, workbenchRotation: 90, workbenchOffsetX: .5, workbenchOffsetY: -.2
  });
  assert.equal(value.scaleX, 1.5);
  assert.equal(value.scaleY, 2);
  assert.equal(value.rotation, .3 + Math.PI / 2);
  assert.equal(value.offsetX, .6);
  assert.equal(value.offsetY, 0);
});

test("untextured material has an empty staging area", async () => {
  const parser = fixture();
  parser.json.materials = [{ pbrMetallicRoughness: { metallicFactor: 0 } }];
  assert.deepEqual(await readSourceMaterialMaps(parser, 0), { images: {}, settings: null });
});

test("imports data URI textures without fetching and reports unavailable originals", async () => {
  const parser = fixture();
  parser.json.images = [{ uri: `data:image/png;base64,${Buffer.from(png).toString("base64")}` }];
  const result = await readSourceMaterialMaps(parser, 0);
  assert.deepEqual(new Uint8Array(await result.images.color.arrayBuffer()), png);
  assert.match(result.images.color.name, /_color.png$/);
  parser.json.images = [];
  await assert.rejects(readSourceMaterialMaps(parser, 0), /map is unavailable/);
});

test("keeps source filtering and creates package-safe names from exporter image labels", async () => {
  const parser = fixture();
  parser.json.images[0].name = "textures/wall\\original.png";
  parser.json.samplers[0].minFilter = 9728;
  parser.json.samplers[0].magFilter = 9728;
  const { images, settings } = await readSourceMaterialMaps(parser, 0);
  assert.equal(images.color.name, "textures_wall_original.png");
  const transform = sourceMapSettings(settings, "color", {});
  assert.equal(transform.minFilter, 9728);
  assert.equal(transform.magFilter, 9728);
});
