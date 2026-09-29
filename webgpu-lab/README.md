# Drop & View · WebGPU lab

This is an isolated renderer experiment on `codex/webgpu-experiment`. The published WebGL site and its path tracer remain the reference.

## Shared-dependency checkpoint

Before merging renderer code, run the unchanged WebGL viewer against the lab's pinned dependencies (the same Three.js version as WebGPU):

```sh
pnpm dev:webgl
```

Open `http://127.0.0.1:8002/`; `pnpm build:webgl` checks the production WebGL code with these dependencies. This local compatibility preview is not a second product UI and does not alter the published WebGL page. Compare it with the current WebGL release before changing the renderer architecture. The `dev` / `build` scripts below continue to serve the WebGPU experiment on port 8001.

Both local builds now use pinned Three.js `0.186.0`. The public WebGL import map remains on `0.180.0` until the common-version preview is visually checked. The renderer-neutral view snapshot lives in `js/core/view-session.js`; it records camera pose, projection, display/navigation modes, group visibility, selection IDs, section plane and settings without retaining GPU resources or the model. Its camera-pose restore helper is ready for the later backend restart, but no live renderer switch uses it yet.

Group visibility snapshots now use a stable key derived from each GLB scene child's original position and label, not a Three.js UUID. `restoreGroupVisibilitySnapshot` can apply a saved list to a freshly loaded copy of the same GLB and refresh the derived geometry. A different GLB or changed group order is not assumed equivalent. `js/core/session-runtime.js` now captures UI, groups, camera preset/pose, section and controls settings and restores them after the same model loads. The local `?model=…&viewSession=<URL-encoded JSON>` comparison fixture exercises this on both backends; it is not a public save/share feature. The automatic handoff during a live backend switch is still pending.

In VS Code, open this worktree, then run from `webgpu-lab`:

```sh
pnpm install
pnpm dev
```

Open `http://127.0.0.1:8001/webgpu-lab/`. Use **DEMO** or **OPEN GLB**, then **START PATH TRACER**. **PAUSE** keeps the accumulated image. **BACK TO PREVIEW** returns to the interactive WebGPU raster view. The **WINDOW LIGHTS** switch is available when the GLB contains Drop & View light metadata. The viewer requires a browser with WebGPU support and rejects a WebGL fallback so the experiment measures the intended renderer.

The full-interface experiment is at `http://127.0.0.1:8001/`. Both local builds now use the same root `index.html` UI and the same `js/main.js` application entry and render loop. The old `/webgpu-lab/full.html` bookmark redirects to `/`, retaining its query string and hash. The shared entry initializes WebGPU only when that backend is selected by the build, then starts the same resize/UI/model/navigation flow; WebGPU adapters still supply the renderer, path tracer, style materials, area-light initialization, and clipping. Open a GLB or choose **DEMO** just as on the original page. For repeatable comparison, `?model=/webgpu-lab/comparison.glb` opens a local test model if present.

Canvas-owned focus and FLY navigation listeners now bind through `js/core/canvas-binding.js` instead of attaching once at module import. `js/main.js` binds them after renderer initialization; each binding can detach from the old canvas and attach to a replacement without duplicate events. `createControls(camera, canvas)` likewise accepts a replacement canvas. FLY navigation now has one shared `js/view/navigation.js`; only the WebGPU pointer-lock failure path activates its drag-to-look fallback.

## Local A/B switch

Run **both** `pnpm dev` (port 8001) and `pnpm dev:webgl` (port 8002), then use only `http://127.0.0.1:8001/`. The info popup has a small `AUTO / WEBGPU / WEBGL` selector in this local comparison page. `AUTO` prefers WebGPU and falls back to WebGL when WebGPU is unavailable or startup fails. Explicit `WEBGPU` does not silently fall back. The page and UI stay the same; the selected renderer module graph is reloaded from the matching dev server. The WebGL adapter script comes from port 8002, while the document and private one-shot IndexedDB handoff stay on port 8001.

When switching, the loaded GLB and renderer-independent view state are saved locally, then restored after restart. Camera pose/projection, display mode, groups, section and relevant controls are preserved. Path-tracer accumulation is intentionally discarded and tracing starts off after the switch. The handoff entry is deleted only after the model opens successfully. No model is uploaded. The selector is hidden outside the port-8001 development preview; this two-server arrangement is an A/B checkpoint, **not yet the final single-origin production packaging**.

Keep the `pnpm dev` terminal running while using the lab. Opening `webgpu-lab/index.html` directly as a `file://` URL will not load its modules; use the HTTP address above instead.

## Single-origin release candidate

`pnpm build:unified` builds both renderer graphs from the same `js/main.js` and
shared root UI into `webgpu-lab/dist-unified/`. Serve that directory on one
HTTP origin (for example, `python3 -m http.server 8003 --directory
webgpu-lab/dist-unified` from the repository root). No port-8002 server is
needed. `AUTO` prefers WebGPU and falls back to WebGL when WebGPU is unavailable
or fails to initialize. The model and view-state handoff remains in the page's
own IndexedDB. Both packages use the pinned Three.js 0.186 dependency set.

The renderer picker appears automatically on localhost. On a deployed host it
is hidden unless `?rendererDebug=1` is added to the page URL; the default mode
is still `AUTO`. The generated directory is ignored by Git and is **not yet
published**. Before switching the public site, test the built page with real
Archicad GLBs in Safari and Chromium, especially both path tracers and the
WebGPU-failure fallback. The source-root `index.html` continues to run the
current published WebGL code until deployment is deliberately changed. For a
root-directory GitHub Pages release, run `pnpm build:public` to update the
tracked `renderers/` packages; the shared `index.html` already points to them.

For comparison on a Retina Mac, the drawing resolution is fixed at 2×. The directional shadow map is 8192×8192 and its camera covers the same model-relative area as the current WebGL viewer. The WebGL viewer caps its pixel ratio at 2, so displays with a lower device pixel ratio are not resolution-matched by this fixed lab setting.

The minimal lab still has its own small interface. It reads the exported camera direction and sun direction and fits the whole model into view. Its quick preview uses a neutral fill light and mapped sun shadows; the path tracer uses the HDRI for lighting and reflections while keeping it invisible as a backdrop.

The full-interface experiment is functional, but material shaders are WebGPU equivalents rather than byte-for-byte copies of the WebGL GLSL hooks. B&W uses a two-tone toon material; section outlines use standard one-pixel lines instead of WebGL fat lines. The full-interface WebGPU path tracer does not trace an active section, matching the production restriction. It remains an experimental page; the published WebGL viewer is unaffected.

The minimal lab's window-light switch affects the path-traced image only. The full-interface experiment initializes WebGPU area-light textures and shows window lights in both preview and path tracing.

For repeatable local testing, you may place a private GLB at `webgpu-lab/comparison.glb` and open `http://127.0.0.1:8001/webgpu-lab/?model=/webgpu-lab/comparison.glb`. This file is ignored by Git.

Dependencies are pinned in `package.json` and `pnpm-lock.yaml`. The experimental WebGPU path tracer comes from a specific upstream Git commit because the published npm release does not yet contain that renderer.
