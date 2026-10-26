# Maxon material-variant support

The current exporter no longer creates dual-material GLBs. The viewer retains
backward compatibility with files previously exported in the former **Both**
mode: their Basic materials are glTF defaults, while `KHR_materials_variants`
supplies the `Maxon / Redshift PBR` alternative on individual mesh primitives.

The ordinary viewer always retains the GLB defaults. With `?rendererDebug=1`,
the shared loader selects the named variant immediately after GLTFLoader
finishes, before Drop & View saves the model's original materials. The choice
is independent of WEBGL / WEBGPU; missing variants or unmapped primitives keep
their Basic materials. The loader needs this small local adapter because
Three.js GLTFLoader does not activate `KHR_materials_variants` on its own.

The two bundled demo files currently contain no `KHR_materials_variants` data.
They can compare renderer output, but they cannot demonstrate Basic versus
Maxon material selection. To test that selection in a unified local build,
serve a legacy GLB previously exported in **Both** mode and open that same file
in both views:

```text
/?model=path/to/dual-material.glb
/?rendererDebug=1&model=path/to/dual-material.glb
```

The start screen's DEMO 1 and DEMO 2 use the same respective model in both
backends. In the debug view, the renderer picker can switch between WEBGL and
WEBGPU without changing which material variant is selected in a GLB that
actually supplies the named variant.
