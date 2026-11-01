import test from "node:test";
import assert from "node:assert/strict";
import { captureRenderThumbnail } from "../js/core/render-thumbnail.js";

test("thumbnail preserves landscape/portrait aspect ratio and never upscales", () => {
  const previous = globalThis.document;
  try {
    for (const [width, height, expected] of [
      [3456, 2168, [640, 401]], [800, 1600, [320, 640]], [200, 100, [200, 100]]
    ]) {
      let drawn;
      const canvas = { width: 0, height: 0,
        getContext: () => ({ fillRect() {}, drawImage(...args) { drawn = args; } }),
        toDataURL: () => "data:image/jpeg;base64,/9j/2Q==" };
      globalThis.document = { createElement: () => canvas };
      const source = { width, height };
      const thumbnail = captureRenderThumbnail(source);
      assert.deepEqual([thumbnail.width, thumbnail.height], expected);
      assert.deepEqual(drawn, [source, 0, 0, ...expected]);
    }
  } finally { globalThis.document = previous; }
});
