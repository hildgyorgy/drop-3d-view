# Material Workbench (debug only)

Open the unified viewer with `?rendererDebug=1`, load a GLB and expand
**MATERIAL WORKBENCH**. Click a visible model surface to select its glTF
material. Every primitive sharing that material is edited together.

Drop JPEG/PNG maps onto the panel or choose several files at once. Filenames
containing `diff`/`albedo`/`basecolor`, `rough`, `nor_gl`/`normal`, or `arm`/`orm`
are recognized. OpenGL normal maps are expected. If both a standalone roughness
map and an ARM map are supplied, the ARM map takes precedence. Uploaded maps
are used in **SURFACE** and **LACQUERED** modes. Both modes also allow the
native **COLOR** picker: without an uploaded color map it makes a solid base
color; with one, it tints the map (white is neutral). **LACQUERED** adds a
clear coat over either base. **POLISHED METAL** remains solid-colored and
ignores uploaded maps. Size, rotation and X/Y shift apply to uploaded maps as
one aligned set. Click
**APPLY** for a live preview in ORIGINAL mode, then **SAVE NEW GLB** to download
`*_pbr.glb`.

To use a different package on the next surface, click **CLEAR MAPS**, then
choose or drop the new files. This clears only the pending map selection;
materials already applied to the model remain in the preview and saved edits.
**UNDO** reverses the most recent APPLY or RESET MATERIAL action. **RESET
MATERIAL** restores only the currently selected material to the source GLB
appearance; all other edited materials remain in place. Reload the page to
discard the whole editing session.

The original file is never modified. The downloaded GLB is based on the
original JSON and binary geometry, not a Three.js scene re-export, so scene
metadata and custom extensions survive. Edits are written to both the default
material and its debug Maxon variant (when present); the PBR appearance is
therefore visible in either viewer after saving. Uploaded map transforms are
stored with `KHR_texture_transform`, and LACQUERED uses
`KHR_materials_clearcoat`.

This deliberately small first version does not repair UV coordinates, perform
displacement/subdivision, edit transparent glass, or show changes in the active
progressive path-tracing session. Leave PATH TRACER before applying edits.
