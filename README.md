# Drop & View

A lightweight browser-based 3D model viewer by **György Hild**. Open a model, explore it, and share the file with a client who can view it without installing a desktop application or creating an account.

**[Open the viewer](https://hildgyorgy.github.io/drop-3d-view/)** · **[Usage guide and support](https://hildgyorgy.github.io/app-support/drop-view/)**

## Getting started

1. Drop a **GLB**, **FBX** or **GLTF** file onto the page, or choose **OPEN FILE**. You can also try the **DEMO** on the start screen.
2. Drag with the left mouse button to orbit, drag with the right button to pan, and scroll or pinch to zoom.
3. Double-click a point on the model to bring it to the centre of the view.
4. Lost your model while zooming or panning? Choose **SHOW ALL** at the bottom centre to fit the whole model back into view while keeping the viewing direction and projection.

Use a modern browser with JavaScript and WebGL support. Large models may require more memory and a more capable device.

## Views and controls

- **Display styles:** ORIGINAL, WHITE, HIDDEN, WIRE and B&W.
- **PERSP:** perspective viewing with an adjustable field of view.
- **AXON:** an orbitable axonometric view with parallel projection.
- **ORTHO:** TOP, FRONT, LEFT, RIGHT and BACK presets. Elevations can be rotated horizontally while remaining upright and orthogonal. TOP stays fixed. Double-click centring preserves the current ORTHO direction.
- **CONTROLS:** sun direction, sun height, glass transparency and shadows. Camera FOV is available in PERSP; sun and shadow controls are disabled in WIRE.
- **SECTION:** toggle cutting with the circle, choose an X/Y/Z axis and move the section slider to inspect the interior.

The three corner menus start closed. Click their labels to open or close them; click the model area or press Escape to close them. The red **i** beside OPEN FILE opens the support page.

If a file cannot be opened, the start screen returns with a red error message in place of the privacy note. Try another file or the demo.

## Model formats

**GLB is recommended.** In our testing it gives the most consistent materials, textures and overall visual result. A self-contained GLB can carry both geometry and textures in one file. Archicad workflows include a paid direct-export plugin, conversion through Blender or an online converter, or Datasmith export followed by GLB export from Unreal Engine.

**FBX is a useful quick option**, particularly with native export from supported Archicad versions. Results can vary between versions and export settings: orientation, colours and textures may differ, materials can appear darker, and some files may fail to load. Converting through Blender to GLB can help, but cannot restore textures missing from the original export.

**GLTF is also supported**, but files referencing separate local textures or binary data may not load correctly: the viewer opens one selected file at a time. Prefer an embedded GLB for sharing.

See the [support guide](https://hildgyorgy.github.io/app-support/drop-view/) for export workflows and limitations.

## Privacy and sharing

Your selected model is processed locally in your browser. Drop & View does not upload it to a developer-operated server and requires no account or login.

To share a project, send the model file and the viewer's web address. There is no model-hosting service or uploaded-model sharing link.

The app loads Three.js and, when required, Draco decoder files from jsDelivr. The demo downloads from the app's website. External online converters are separate services with their own upload processes and privacy terms.

## Free to use; proprietary code

The published Drop & View web app is **free to use for personal and commercial projects**, including client work. You retain your rights in your models and may share images of your own work produced with the viewer, subject to any third-party rights in that content.

This is not an open-source licence. Except where applicable law or separate permissions allow it, reusing the application's proprietary code in another product, distributing modified versions, or hosting copies requires prior written permission. Public access to this repository does not grant those rights. GitHub's platform permissions and third-party component licences remain applicable.

See [LICENSE](LICENSE) for the full terms. For permission requests, contact [hild.gyorgy@freemail.hu](mailto:hild.gyorgy@freemail.hu).

## Local preview

For the author, authorised contributors, or anyone with separate permission to run a local copy, the project is a static HTML/CSS/JavaScript application with no build step:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. ES modules require an HTTP server; opening `index.html` directly with a `file://` URL is not sufficient. Network access is needed for CDN dependencies unless they are already cached.

## Project layout

- `index.html` — viewer interface and Three.js import map
- `css/` — layout and visual styling
- `js/core/` — scene, cameras, controls and application state
- `js/model/` — model loading and materials
- `js/view/` — display modes, navigation, framing, lighting and edges
- `js/section/` — clipping and section geometry
- `js/ui/` — menus, messages and model inspection helpers
- `demo/` — sample model used by the viewer

## Third-party components

Drop & View uses [Three.js](https://threejs.org/) under its [MIT licence](https://github.com/mrdoob/three.js/blob/r180/LICENSE) and [Draco](https://github.com/google/draco) under its [Apache 2.0 licence](https://github.com/google/draco/blob/main/LICENSE). These components retain their own licences; the proprietary terms apply only to the project's own material.

## Contact

Questions, feedback and permission requests: **[hild.gyorgy@freemail.hu](mailto:hild.gyorgy@freemail.hu)**

Copyright © 2026 György Hild.
