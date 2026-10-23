import { defineConfig } from "vite";
import path from "node:path";
import { dependencyAliases, projectRoot } from "./dependency-aliases.js";
import { externalDracoDecoder } from "./external-draco-decoder.js";

const root = projectRoot;
const replacementModules = new Map([
  ["js/core/scene.js", "webgpu-lab/full-scene.js"],
  ["js/view/photo1.js", "webgpu-lab/full-photo.js"],
  ["js/model/materials.js", "webgpu-lab/full-materials.js"],
  ["js/section/section-plane.js", "webgpu-lab/full-section-plane.js"],
  ["js/section/section-renderer.js", "webgpu-lab/full-section-renderer.js"],
  ["js/view/ground-sun.js", "webgpu-lab/full-ground-sun.js"],
  ["js/view/window-lights.js", "webgpu-lab/full-window-lights.js"],
  ["js/view/view-modes.js", "webgpu-lab/full-view-modes.js"],
  ["js/ui/adaptive-contrast.js", "webgpu-lab/full-contrast.js"]
]);

// Serve the versioned demo GLBs and HDRI from the project root.
export default defineConfig({
  root,
  resolve: {
    alias: dependencyAliases
  },
  plugins: [
    externalDracoDecoder(),
    {
      name: "drop-view-webgpu-full-adapters",
      enforce: "pre",
      resolveId(source, importer) {
        if (!importer || !source.startsWith(".")) return null;
        const resolved = path.resolve(
          path.dirname(importer.split("?")[0]),
          source.split("?")[0]
        );
        const relative = path.relative(root, resolved);
        const replacement = replacementModules.get(relative);
        return replacement ? path.join(root, replacement) : null;
      }
    }
  ],
  server: { host: "127.0.0.1", port: 8001, strictPort: true },
  build: {
    outDir: "/tmp/drop-view-webgpu-build",
    rollupOptions: {
      input: path.join(root, "index.html")
    }
  }
});
