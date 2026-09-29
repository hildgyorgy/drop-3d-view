import { defineConfig } from "vite";
import path from "node:path";
import { dependencyAliases, projectRoot } from "./dependency-aliases.js";

// Temporary compatibility checkpoint: the unchanged production HTML and
// WebGL app logic, using the WebGPU lab's pinned Three.js dependency set.
// This does not replace the published CDN-based page or add another product UI.
export default defineConfig({
  root: projectRoot,
  resolve: { alias: dependencyAliases },
  server: { host: "127.0.0.1", port: 8002, strictPort: true },
  build: {
    outDir: "/tmp/drop-view-webgl-compat-build",
    rollupOptions: { input: path.join(projectRoot, "index.html") }
  }
});
