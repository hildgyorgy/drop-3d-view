# Drop & View Cycles bridge — proof of concept

The bridge renders a `.glb` or Drop & View `.dvrender` package through Blender
5.2 LTS in background mode with Cycles and the Apple Metal GPU. Blender's
interface does not open.

## Finder workflow

Double-click `Drop & View Cycles.app` and choose one or more GLB or `.dvrender`
files, or drag the files directly onto the app. The app opens Terminal only for
the progress log; Blender's interface remains closed. A PNG named
`<model>-cycles.png` is written next to each input. After a successful run,
Finder opens the destination folder and selects the last rendered image.
Blender creates the PNG only at the end of the render; keep Terminal open until
the log prints `Saved:` followed by `READY:`. During rendering, Terminal shows a
live sample-based progress bar with Blender's remaining-time estimate. Scene and
shader preparation use an indeterminate moving bar with elapsed time.

`Render with Cycles.command` is the underlying shell launcher and remains
available for Terminal use.

## Terminal workflow

```sh
/Applications/Blender.app/Contents/MacOS/Blender \
  --background --factory-startup --python-exit-code 1 \
  --python tools/cycles/render_glb.py -- model.glb
```

Optional arguments after `--`:

```text
--output result.png
--hdri environment.hdr
--width 1920 --height 1080
--samples 500
--bounces 6 --transmission-bounces 10
```

For `.dvrender`, the bridge restores the packaged current GLB, current camera,
render dimensions, sample/bounce targets, packaged HDRI and
top-level group visibility. The HDRI's brightest solar point is aligned to the
saved sun controls without adding a duplicate Sun light. Experimental packages
from before the flattened v1 layout are intentionally unsupported.

For plain GLB, the repository's `assets/hdri/backdrop.hdr` is used. When the GLB
contains the exporter-provided `asset.extras.dropView` metadata, its initial
camera and sun direction are used. Otherwise the bridge creates a framed camera
and neutral sun.
