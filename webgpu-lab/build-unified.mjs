import { build } from "vite";
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projectRoot } from "./dependency-aliases.js";

const labRoot = path.dirname(fileURLToPath(import.meta.url));
const publish = process.argv.includes("--public");
const output = publish ? projectRoot : path.join(labRoot, "dist-unified");
const entry = path.join(projectRoot, "js/main.js");

for (const [backend, config] of [
  ["webgpu", "vite.config.js"],
  ["webgl", "vite-webgl.config.js"]
]) {
  await build({
    configFile: path.join(labRoot, config),
    base: "./",
    build: {
      outDir: path.join(output, "renderers", backend),
      emptyOutDir: true,
      rollupOptions: {
        input: entry,
        preserveEntrySignatures: "strict",
        output: {
          entryFileNames: "main.js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]"
        }
      }
    }
  });
}

if (publish) {
  console.log(`Updated public renderer packages: ${path.join(output, "renderers")}`);
  process.exit(0);
}

for (const folder of ["css", "demo", "assets"]) {
  await cp(path.join(projectRoot, folder), path.join(output, folder), {
    recursive: true,
    force: true
  });
}
await mkdir(path.join(output, "js/core"), { recursive: true });
for (const file of ["renderer-bootstrap.js", "backend-choice.js", "backend-handoff.js"]) {
  await cp(
    path.join(projectRoot, "js/core", file),
    path.join(output, "js/core", file)
  );
}
for (const file of ["icon.png", "site.webmanifest"]) {
  await cp(path.join(projectRoot, file), path.join(output, file));
}

const sourceHtml = await readFile(path.join(projectRoot, "index.html"), "utf8");
await writeFile(path.join(output, "index.html"), sourceHtml);
console.log(`Unified single-origin build: ${output}`);
