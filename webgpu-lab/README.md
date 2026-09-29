# Drop & View · WebGPU lab

This is an isolated renderer experiment on `codex/webgpu-experiment`. The existing Drop & View page and its WebGL path tracer are unchanged.

In VS Code, open this worktree, then run from `webgpu-lab`:

```sh
pnpm install
pnpm dev
```

Open `http://127.0.0.1:8001/webgpu-lab/`. Use **DEMO** or **OPEN GLB**, then **START PATH TRACER**. **PAUSE** keeps the accumulated image. **BACK TO PREVIEW** returns to the interactive WebGPU raster view. The **WINDOW LIGHTS** switch is available when the GLB contains Drop & View light metadata. The viewer requires a browser with WebGPU support and rejects a WebGL fallback so the experiment measures the intended renderer.

The lab has its own small interface. It is a technology and image-quality test, not yet a replacement for the full viewer: groups, sections, style modes, fly navigation, and the existing UI are not ported. It reads the existing exported camera direction and sun direction and fits the whole model into view. The quick preview uses a neutral fill light and mapped sun shadows; the path tracer uses the HDRI for lighting and reflections while keeping it invisible as a backdrop.

The window-light switch affects the path-traced image. The quick raster preview does not show those area lights.

For repeatable local testing, you may place a private GLB at `webgpu-lab/comparison.glb` and open `http://127.0.0.1:8001/webgpu-lab/?model=/webgpu-lab/comparison.glb`. This file is ignored by Git.

Dependencies are pinned in `package.json` and `pnpm-lock.yaml`. The experimental WebGPU path tracer comes from a specific upstream Git commit because the published npm release does not yet contain that renderer.
