import test from "node:test";
import assert from "node:assert/strict";
import { classifyMap, flipNormalGreen, extractOcclusion, normalMapAlternatives, preparedMapImages } from "../js/ui/workbench-map-types.js";

test("recognizes common map names without matching arbitrary words", () => {
  const examples = {
    "wood_diff_1k.jpg": "color", "Bricks001_Color.jpg": "color",
    "brick_BaseColor.png": "color", "brick-base_color.png": "color",
    "wood_nor_gl_1k.jpg": "normal", "Bricks001_NormalGL.jpg": "normal",
    "wood_nor_dx_1k.jpg": "normalDx", "Bricks001_NormalDX.jpg": "normalDx",
    "brick_Normal_DirectX.png": "normalDx", "wall_normal.png": "normal",
    "Bricks001_AmbientOcclusion.jpg": "occlusion", "brick_ao.jpg": "occlusion",
    "brick_ambient_occlusion.png": "occlusion", "brick_ORM.png": "arm",
    "WOOD_ARM_2K.PNG": "arm", "brick_Roughness.jpg": "roughness",
    "brick_Metalness.jpg": "metalness", "normality.jpg": null,
    "colorful.jpg": null, "my-favourite-wood.jpg": null,
    "metal_color.png": "color", "rough_plaster_diff.png": "color"
  };
  for (const [name, expected] of Object.entries(examples)) assert.equal(classifyMap(name), expected, name);
  assert.deepEqual(normalMapAlternatives("normalDx"), ["normal", "normalDx"]);
});

test("DirectX conversion changes only the normal map's green channel", () => {
  const data = new Uint8ClampedArray([128, 64, 250, 255, 12, 200, 128, 100]);
  flipNormalGreen(data);
  assert.deepEqual([...data], [128, 191, 250, 255, 12, 55, 128, 100]);
});

test("AO extraction uses ARM red, independent of roughness and metalness", () => {
  const data = new Uint8ClampedArray([70, 180, 220, 0, 125, 20, 40, 255]);
  extractOcclusion(data);
  assert.deepEqual([...data], [70, 70, 70, 255, 125, 125, 125, 255]);
});

test("source GLB metallic-roughness is not assumed to contain AO; explicit AO takes priority", async () => {
  const arm = {}, occlusion = {}, normal = {};
  assert.deepEqual(await preparedMapImages({ arm, normal }, { armOcclusion: false }), { arm, normal });
  assert.deepEqual(await preparedMapImages({ arm, occlusion }), { arm, occlusion });
});
