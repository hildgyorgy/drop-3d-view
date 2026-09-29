import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// Serve the existing demo GLB and HDRI without copying them into the lab.
export default defineConfig({
  root: fileURLToPath(new URL("..", import.meta.url)),
  server: { host: "127.0.0.1", port: 8001, strictPort: true },
  build: {
    outDir: "/tmp/drop-view-webgpu-build",
    rollupOptions: {
      input: fileURLToPath(new URL("index.html", import.meta.url))
    }
  }
});
