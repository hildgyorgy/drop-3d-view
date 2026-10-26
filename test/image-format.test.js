import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  detectSupportedImageMime,
  readSupportedImage
} from "../js/model/image-format.js";

test("detects PNG and JPEG from bytes instead of the declared MIME", async () => {
  const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1]);
  const jpeg = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 1]);
  assert.equal(detectSupportedImageMime(png), "image/png");
  assert.equal(detectSupportedImageMime(jpeg), "image/jpeg");
  const record = await readSupportedImage({
    type: "image/webp",
    arrayBuffer: async () => jpeg.buffer
  });
  assert.equal(record.mimeType, "image/jpeg");
});

test("accepts the project's real PNG asset", async () => {
  const bytes = await readFile(new URL("../demo/drop-and-view.png", import.meta.url));
  assert.equal(detectSupportedImageMime(bytes), "image/png");
});

test("rejects WebP, GIF, empty and truncated signatures", async () => {
  for (const bytes of [
    new Uint8Array([0x52, 0x49, 0x46, 0x46, 1, 2, 3, 4, 0x57, 0x45, 0x42, 0x50]),
    new TextEncoder().encode("GIF89a"),
    new Uint8Array(),
    new Uint8Array([0x89, 0x50, 0x4e, 0x47])
  ]) assert.equal(detectSupportedImageMime(bytes), null);

  await assert.rejects(
    readSupportedImage({ arrayBuffer: async () => new Uint8Array([1, 2, 3]).buffer }),
    /genuine JPEG or PNG/
  );
});
