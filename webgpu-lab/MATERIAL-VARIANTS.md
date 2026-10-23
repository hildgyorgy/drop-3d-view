# Maxon material-variant comparison

The viewer accepts GLBs exported in the Archicad exporter's **Both** mode.
Their Basic materials are glTF defaults; `KHR_materials_variants` supplies the
`Maxon / Redshift PBR` alternative on individual mesh primitives.

The ordinary viewer always retains the GLB defaults. With `?rendererDebug=1`,
the shared loader selects the named variant immediately after GLTFLoader
finishes, before Drop & View saves the model's original materials. The choice
is independent of WEBGL / WEBGPU; missing variants or unmapped primitives keep
their Basic materials. The loader needs this small local adapter because
Three.js GLTFLoader does not activate `KHR_materials_variants` on its own.

To compare the supplied dual-material test file in a unified local build, open
the same `demo/demo_house_2.glb` in both views:

```text
/?model=demo/demo_house_2.glb
/?rendererDebug=1&model=demo/demo_house_2.glb
```

The start screen's DEMO 1 uses the same model in both backends; DEMO 2
opens the dual-material file in either view. In the debug view, the renderer
picker can switch between WEBGL and WEBGPU without changing which material
variant is selected.
