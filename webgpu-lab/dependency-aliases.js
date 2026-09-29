import { fileURLToPath } from "node:url";
import path from "node:path";

export const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const dependencies = path.join(projectRoot, "webgpu-lab/node_modules");

// Both comparison pages must resolve to one Three.js instance. The original
// published WebGL page still uses its CDN import map until visual parity is
// checked; these aliases affect only local Vite previews and builds.
export const dependencyAliases = [
  {
    find: /^three\/webgpu$/,
    replacement: path.join(dependencies, "three/build/three.webgpu.js")
  },
  {
    find: /^three\/tsl$/,
    replacement: path.join(dependencies, "three/build/three.tsl.js")
  },
  {
    find: /^three\/addons\//,
    replacement: `${path.join(dependencies, "three/examples/jsm")}/`
  },
  {
    find: /^three\/examples\/jsm\//,
    replacement: `${path.join(dependencies, "three/examples/jsm")}/`
  },
  {
    find: /^three$/,
    replacement: path.join(dependencies, "three/build/three.module.js")
  },
  {
    find: /^three-mesh-bvh$/,
    replacement: path.join(dependencies, "three-mesh-bvh/src/index.js")
  },
  {
    find: /^three-gpu-pathtracer\/src\//,
    replacement: `${path.join(dependencies, "three-gpu-pathtracer/src")}/`
  }
];
