# Drop & View

**Current version: 2.0**

![Drop & View – 3D model viewer](demo/drop-and-view.png)

A lightweight browser-based 3D model viewer by **György Hild**. Open a model, explore it, and share the file with a client who can view it without installing a desktop application or creating an account.

**[Open the viewer](https://hildgyorgy.github.io/drop-3d-view/)** · **[Usage guide and support](https://hildgyorgy.github.io/app-support/drop-view/)**

## Getting started

1. Drop a **GLB** file onto the page, or choose **OPEN**. You can also try **DEMO 1** or **DEMO 2** on the start screen; both renderers use the same two files.
2. Drag with the left mouse button to orbit, drag with the right button to pan, and scroll or pinch to zoom.
3. Double-click a point on the model to bring it to the centre of the view.
4. Lost your model while zooming or panning? Choose **ZOOM ALL** at the bottom centre to fit the whole model back into view while keeping the viewing direction, projection and group visibility.

Use a modern browser with JavaScript. The viewer uses WebGL by default; WebGPU is available through the debug renderer selector. Large models may require more memory and a more capable device.

## Views and controls

- **Display styles:** ORIGINAL, WHITE, HIDDEN, WIRE and B&W.
- **PERSP:** perspective viewing with an adjustable field of view.
- **AXON:** an orbitable axonometric view with parallel projection.
- **ORTHO:** TOP, FRONT, LEFT, RIGHT and BACK presets. Elevations can be rotated horizontally while remaining upright and orthogonal. TOP stays fixed. Double-click centring preserves the current ORTHO direction.
- **CONTROLS:** sun direction, sun height, glass transparency and shadows. Camera FOV is available in PERSP; sun and shadow controls are disabled in WIRE.
- **ORBIT / FLY:** orbit around the model, or fly through it with WASD/arrow keys; E/Q changes height. Where pointer lock is unavailable, FLY uses mouse dragging to look around.
- **PATH TRACER:** optional progressive path-traced rendering under ORIGINAL mode. Legacy alpha-blended glass is upgraded to thin physical glass when it can be distinguished safely from masked or texture-backed transparency. SUN DIRECTION is shared by ORIGINAL and PATH TRACER. For GLBs with an exported sun position, both direction and height are shared, and the HDRI lighting aligns with that sun. Without exported sun data, the HDRI retains its native sun height, so SUN HEIGHT adjusts only the regular ORIGINAL sun. The SAMPLES status shows the number of samples per pixel. Compose the view in ORIGINAL mode before activating PATH TRACER; camera controls stay locked while the progressive image refines. The default WebGL renderer uses its own path tracer; the WebGPU path tracer remains available in debug mode.
- **SECTION:** toggle cutting with the circle, choose an X/Y/Z axis and move the section slider to inspect the interior.
- **GROUPS:** show or hide the model's exported top-level groups.

## Material Workbench

The standalone viewer's red **i** panel opens the optional **MATERIAL WORKBENCH**. Select a visible surface to preview SURFACE, POLISHED METAL, LACQUERED or exporter-selected clear GLASS changes. JPEG/PNG base-colour, roughness, OpenGL normal and ARM maps are supported. APPLY changes only the live preview; the source file is never overwritten. For a user-opened editable GLB, **EXPORT → SAVE GLB** downloads a modified copy after APPLY.

The built-in demos are fully editable for experimentation but cannot be saved. A GLB exported with `asset.extras.dropView.materialWorkbench.policy` set to `disabled` remains view-only and asks the user to request an editable version from its owner. Older files and GLBs without that explicit policy remain editable. The Material Workbench and its code are not loaded in embedded viewers.

## Measurements (experimental)

Toggle **MEASUREMENTS** in the red **i** panel, then drag each black endpoint onto a model surface. The red ruler shows the straight-line 3D distance in metres and adapts its subdivisions to the current view. Endpoints remain attached while orbiting or zooming; only dragging a handle temporarily suspends the camera. Empty-space drops retain the last valid point. Hidden groups and section-clipped surfaces cannot receive endpoints.

The first version provides one measurement, without edge/vertex snapping. Accuracy depends on the GLB's scale and endpoint placement. Switching the tool off preserves the current measurement; opening another model or switching renderers clears it. Measurements are a viewer overlay, are not saved into exported GLBs, and are unavailable in embedded viewers.

### Dormant GLASS LIGHT experiment

The PATH TRACER contains an off-by-default, currently hidden experiment for brightening dark interiors. It makes only the Archicad exporter's explicitly selected Clear Glass materials (`extras.archicad.clearGlassOverride: true`, with physical transmission) emit neutral light; legacy transparent materials and cutouts do not emit. It can improve an interior view when the windows are outside the frame, but visible windows become glowing white panes and convergence can be noisy. The imported GLB and ORIGINAL mode are never changed. To try it again, set `GLASS_LIGHT_EXPERIMENT_ENABLED` to `true` in `js/view/photo1.js`; the GLASS LIGHT button under PATH TRACER will reappear. The experiment remains isolated in `js/view/photo1.js` and `js/model/material-policy.js`, with its dormant button styling in `index.html`, `css/style.css`, `css/adaptive-contrast.css`, and `js/ui/adaptive-contrast.js`.

The three corner menus start closed. Click their labels to open or close them; click the model area or press Escape to close them. The red **i** beside OPEN opens an About panel with Material Workbench, Support and, when included in the GLB, the model's design credits.

### Adaptive menu contrast

When a model is open, the non-red overlay labels use CSS `mix-blend-mode: difference`: they appear dark over light pixels and light over dark pixels without putting panels over the model. Safari sometimes leaves those labels white over the WebGL canvas, so it samples the rendered canvas beneath each label about twice per second and switches that label between crisp dark and white text. This avoids panels and text halos; Safari's switch is per label, not per letter. Red active and hover states, the About button, sliders and coloured controls keep their normal colours. This is a visual aid, not a guaranteed contrast or accessibility threshold; labels can still be faint over mixed or mid-tone areas.

The feature is isolated in [`css/adaptive-contrast.css`](css/adaptive-contrast.css) and [`js/ui/adaptive-contrast.js`](js/ui/adaptive-contrast.js). To switch it off, remove the stylesheet link from `index.html` and the `updateAdaptiveContrast` import/call from `js/main.js`; the viewer then uses its original styling. For a complete code cleanup, also remove the Safari-detection script and the inert `adaptive-text` spans/classes from the slider and toggle labels in `index.html`. These wrappers let only the words blend while the red slider thumbs and toggle indicators remain untouched. The CSS also replaces some `fixed` and transformed positioning with visually equivalent `absolute` positioning while a model is open, because those stacking contexts otherwise prevent the labels from blending with the WebGL canvas—especially in windows at or below 1100 px wide.

If a file cannot be opened, the start screen returns with a red error message in place of the privacy note. Try another file or the demo.

## Model formats

**GLB is the only supported model format.** A self-contained GLB carries geometry and textures in one file and gives the most consistent materials and visual result. Export directly from Archicad with the Drop & View GLB Exporter, or convert another model to GLB before opening it.

GLB files exported with a saved Drop & View initial view open from that viewing direction and projection, automatically zoomed to show the whole model. Files without one still open in the automatically fitted view.

See the [support guide](https://hildgyorgy.github.io/app-support/drop-view/) for export workflows and limitations.

## Privacy and sharing

Your selected model is processed locally in your browser. Drop & View does not upload it to a developer-operated server and requires no account or login.

To share a project, send the model file and the viewer's web address. There is no model-hosting service or uploaded-model sharing link.

The published app serves its renderer packages, environment image and demo from its own website. If a GLB uses Draco compression, the decoder is fetched from jsDelivr. External online converters are separate services with their own upload processes and privacy terms.

### Experimental website embed

An architect can keep a public GLB on their own website and place this classic script at the desired point in an HTML page:

```html
<script
  src="https://hildgyorgy.github.io/drop-3d-view/embed/drop-view-embed.js"
  data-model="/images/projects/tiszato/szabics_03.glb"
  data-title="3D walkthrough"
></script>
```

`data-poster="/path/to/preview.webp"` adds an optional cover image. The GLB URL must be on the **same origin as the architect's page** and end in `.glb`. The script makes a preview button and loads the model only after a click. The host page fetches its own file and passes a browser Blob to a full-screen Drop & View iframe using an origin-checked message; it does not upload the file to Drop & View, and no CORS configuration is needed. The model remains publicly downloadable from the architect's website. The pilot currently uses the normal WebGL viewer and does not change the standalone OPEN/DEMO workflow.

For an interactive model directly in the page, add `data-inline="true"`. The iframe loads near the viewport, allows orbit/zoom without the viewer UI, and expands the **same iframe** to full screen with the usual controls. The model and camera are kept when expanding or returning to the page. The Tisza-tó V3 pilot uses this mode.

## Free to use; proprietary code

The published Drop & View web app is **free to use for personal and commercial projects**, including client work. You retain your rights in your models and may share images of your own work produced with the viewer, subject to any third-party rights in that content.

This is not an open-source licence. Except where applicable law or separate permissions allow it, reusing the application's proprietary code in another product, distributing modified versions, or hosting copies requires prior written permission. Public access to this repository does not grant those rights. GitHub's platform permissions and third-party component licences remain applicable.

See [LICENSE](LICENSE) for the full terms. For permission requests, contact [hild.gyorgy@freemail.hu](mailto:hild.gyorgy@freemail.hu).

## Possible next steps

### Experimental render snapshot transfer

The Export window is a nonmodal panel with the same dimensions and dashed, translucent styling as the Material Workbench. It does not dim or block the viewer. Close it with the × button, or Escape while focus is inside it; a background render continues running.

Open **EXPORT** from the info menu. In the **EXPORT** tab, **SAVE GLB** downloads the applied Material Workbench changes as a modified GLB for an editable, user-opened model. The Workbench itself contains only APPLY, UNDO and RESET. In **RENDER PACKAGE**, set **SAMPLES** and use **SAVE PACKAGE**. This sample count is saved for the receiving computer; it does not change the visible viewer's path tracer. The `.dvrender` package includes one current GLB with all applied Material Workbench changes, plus camera, lighting, group visibility, canvas pixel dimensions, target samples, fixed bounce settings (6 regular, 10 transmissive), and the active Radiance HDRI bytes. It is a snapshot of the current scene, not a lossless archive of the originally opened GLB.

On the receiving computer, open **EXPORT → RENDER**. Drop or choose multiple `.dvrender` packages. They appear as a left-aligned list inside the dashed drop box. Select a row for **OPEN IN VIEWER**, or choose **START QUEUE** to render all waiting packages in list order. Adding files alone does not start rendering or replace the current model. The arrow controls reorder jobs, × removes an inactive job, and ↻ queues a finished, failed, or cancelled job again.

**OPEN IN VIEWER** replaces the visible model with the package's current materialized GLB and restores its camera, lighting, group visibility, image frame and render target. The dialog closes and path tracing stays off. Continue editing the model or view, start **PATH TRACER** manually, save the model as GLB through the EXPORT tab, or export another render package. The saved pixel resolution and aspect ratio stay fixed across browser resizing and camera projection changes until a different model is opened. The export's TARGET SAMPLES field is restored from the package.

**START QUEUE** renders one package at a time in an isolated offscreen renderer without changing the visible model. Each row shows its state and sample progress; the panel shows the current image dimensions and bounce settings. **PAUSE / RESUME** pauses both the current job and advancement through the queue. **SKIP** cancels the current package and advances; **CANCEL** stops the queue and leaves the remaining jobs waiting. A package error is marked FAILED and does not block the next job. GPU resources are released between jobs. Closing the panel or switching tabs keeps the queue running; more packages can be added while it runs.

A finished PNG triggers an automatic download named after its package and render settings. Browser download permissions still apply: allow downloads for this site for unattended batches. Every completed row also has a **PNG** link, so blocked automatic downloads do not lose results. Packages and completed PNGs are retained in this browser’s IndexedDB until removed from the list or the site’s data is cleared. Reloading restores the list and completed images; interrupted jobs return to QUEUED and restart from zero when **START QUEUE** is pressed. A storage failure displays a warning and the current tab retains the queue in memory. Keep the computer awake and the browser tab open during rendering.

New exports default to **500 samples**. Older packages default to 1920 × 1080 for background rendering and 500 samples when those settings are missing; visible opening of an older package without a saved frame uses the viewer's current viewport. An explicitly saved sample count is preserved.

Background jobs render in tiles of at most 512 × 512 pixels per GPU dispatch. They skip preview HDRI filtering, raster shadows, low-resolution previews, material-sphere previews, and per-frame canvas presentation; the accumulated full-resolution result is drawn only for PNG capture. This reduces extra GPU work for large images without changing the requested dimensions, sample target, or bounce settings.

The queue processes one package at a time and does not yet send jobs over the network. Both computers should use the same viewer build for the closest match; new packages carry their own HDRI. Keep packages private if their models are confidential. EXPORT is available in the normal standalone view through the info menu’s Experimental features. The RENDER tab retains package selection and job state while switching tabs or closing the panel.

Each job starts at **0 samples**; previously accumulated samples are not transferred. Turn off **SECTION** before exporting: the export button is disabled while section cutting is enabled. A v1 package accepts at most **two resources**: the current GLB and an optional HDRI. The 2 GB file-size limit also applies.

New packages record the creator's app version, rendering revision and HDRI content identity. They include the HDRI bytes, which override the default environment only for the loaded scene and its render. Opening another GLB or an older package without an HDRI restores the app default. Re-exporting an imported scene retains its packaged HDRI. The HDRI's hash and pixel data are validated before replacing the scene. A matching embedded HDRI does not cause a default-asset mismatch warning; renderer/app differences still warn. Older packages without identity information remain supported with an unverified-compatibility notice. Renderer code is not embedded in the package.

The main WebGL model window also offers **SAVE IMAGE** below **PATH TRACER** in debug mode. It saves the current accumulated image as a PNG without controls, whether tracing is running or paused, without starting a new render.

- Real-world sun and shadow studies using the project's geographic location, orientation, date and time.
- More granular visibility controls beyond the current exported top-level groups.

## Local preview

The normal preview uses subtle HDRI lighting and reflections behind a solid background. HDRI loading starts alongside app startup; a model is first shown after its environment is ready, with WebGL's reflection filtering prepared in advance to avoid a later lighting change. If the HDRI fails to load, direct lighting remains available. Like WebGPU and the path tracer, WebGL clamps HDRI values to the finite half-float range before upload, preventing the iOS black-model issue. With `?rendererDebug=1`, WebGL retains **CONTROLS → HDRI LIGHT** for comparison; it starts enabled and does not affect the path tracer's own lighting.

For the author, authorised contributors, or anyone with separate permission to run a local copy, serve the repository over HTTP:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. ES modules require an HTTP server; opening `index.html` directly with a `file://` URL is not sufficient. The published root contains prebuilt WebGPU and WebGL renderer packages under `renderers/`; `AUTO` uses WebGL. The manual comparison selector, including WebGPU, is available only with `?rendererDebug=1`. Without that parameter, the page uses WebGL even if WebGPU was selected during an earlier debug session. To rebuild the packages after source changes, run `pnpm build:public` from `webgpu-lab/` (after `pnpm install`). Do not edit the generated `renderers/` files by hand.

Draco-compressed user GLBs remain supported. Their decoder is fetched on demand from the pinned Three.js CDN version, so opening such a file requires a network connection; no decoder copy is shipped in either renderer package. The two bundled demo GLBs are unchanged and do not use Draco compression.

The baked WebGPU preview calibration also applies outside debug mode. With `?rendererDebug=1` and WEBGPU selected, open the **WEBGPU TUNING** panel at the upper right to adjust it live, including separate glass transparency for WHITE/HIDDEN and B&W. SAVE keeps the values in this browser for later debug sessions; COPY JSON gives you the exact numbers to share or bake into the defaults. RESET restores the current code defaults. The controls are disabled while the path tracer is active.

The model, camera, backend and section logic have automated tests. With Node.js installed, run:

```sh
npm test
```

## Project layout

For a new development chat, start with the [project handoff](PROJECT_HANDOFF.md).

- `index.html` — shared viewer interface and renderer bootstrap
- `renderers/` — generated, same-origin WebGPU and WebGL packages for GitHub Pages
- `webgpu-lab/` — renderer adapters and build scripts for both packages (the old standalone lab page is retired)
- `css/` — layout and visual styling
- `js/core/` — scene, cameras, controls and application state
- `js/model/` — model loading and materials
- `js/view/` — display modes, navigation, framing, lighting and edges
- `js/section/` — clipping, intersection collection, planar contours, fill triangulation and section rendering
- `js/ui/` — menus, messages and model inspection helpers
- `assets/hdri/` — one shared environment image for normal HDRI fill and the path tracers
- `demo/` — sample model used by the viewer
- `test/` — automated tests for model, backend, camera and section logic

## Third-party components

Drop & View uses [Three.js](https://threejs.org/) and [three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) under their MIT licences, [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) under its MIT licence, and [Draco](https://github.com/google/draco) under its [Apache 2.0 licence](https://github.com/google/draco/blob/main/LICENSE). PATH TRACER uses the replaceable `assets/hdri/backdrop.hdr` environment image from [Poly Haven](https://polyhaven.com/hdris/pure-skies) under its [CC0 licence](https://polyhaven.com/license). These components and assets retain their own licences; the proprietary terms apply only to the project's own material.

## Contact

Questions, feedback and permission requests: **[hild.gyorgy@freemail.hu](mailto:hild.gyorgy@freemail.hu)**

Copyright © 2026 György Hild.
