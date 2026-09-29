# Drop & View · WebGPU lab

This is an isolated renderer experiment on `codex/webgpu-experiment`. The existing Drop & View page and its WebGL path tracer are unchanged.

In VS Code, open this worktree, then run from `webgpu-lab`:

```sh
pnpm install
pnpm dev
```

Open `http://127.0.0.1:8001/webgpu-lab/`. Use **DEMO** or **OPEN GLB**, then **START PATH TRACER**. **PAUSE** keeps the accumulated image. **BACK TO PREVIEW** returns to the interactive WebGPU raster view. The **WINDOW LIGHTS** switch is available when the GLB contains Drop & View light metadata. The viewer requires a browser with WebGPU support and rejects a WebGL fallback so the experiment measures the intended renderer.

The full-interface experiment is at `http://127.0.0.1:8001/webgpu-lab/full.html`. It reuses the production HTML, CSS, model loading, camera/navigation, sun metadata, group controls, info panel, and UI event modules. WebGPU adapters supply the renderer, path tracer, style materials, area-light initialization, and clipping. Open a GLB or choose **DEMO** just as on the original page. For repeatable comparison, `?model=/webgpu-lab/comparison.glb` opens a local test model if present.

Keep the `pnpm dev` terminal running while using the lab. Opening `webgpu-lab/index.html` directly as a `file://` URL will not load its modules; use the HTTP address above instead.

For comparison on a Retina Mac, the drawing resolution is fixed at 2×. The directional shadow map is 8192×8192 and its camera covers the same model-relative area as the current WebGL viewer. The WebGL viewer caps its pixel ratio at 2, so displays with a lower device pixel ratio are not resolution-matched by this fixed lab setting.

The minimal lab still has its own small interface. It reads the exported camera direction and sun direction and fits the whole model into view. Its quick preview uses a neutral fill light and mapped sun shadows; the path tracer uses the HDRI for lighting and reflections while keeping it invisible as a backdrop.

The full-interface experiment is functional, but material shaders are WebGPU equivalents rather than byte-for-byte copies of the WebGL GLSL hooks. B&W uses a two-tone toon material; section outlines use standard one-pixel lines instead of WebGL fat lines. The full-interface WebGPU path tracer does not trace an active section, matching the production restriction. It remains an experimental page; the published WebGL viewer is unaffected.

The minimal lab's window-light switch affects the path-traced image only. The full-interface experiment initializes WebGPU area-light textures and shows window lights in both preview and path tracing.

For repeatable local testing, you may place a private GLB at `webgpu-lab/comparison.glb` and open `http://127.0.0.1:8001/webgpu-lab/?model=/webgpu-lab/comparison.glb`. This file is ignored by Git.

Dependencies are pinned in `package.json` and `pnpm-lock.yaml`. The experimental WebGPU path tracer comes from a specific upstream Git commit because the published npm release does not yet contain that renderer.
