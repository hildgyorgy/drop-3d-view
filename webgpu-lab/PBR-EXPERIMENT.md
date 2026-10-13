# WebGPU PBR demo

The ordinary viewer still starts in WebGL and loads the original
`demo/demo_house.glb`. With `?rendererDebug=1`, manually selecting WEBGPU loads
the WebGPU renderer; its DEMO button loads the versioned
`demo/demo_house_pbr.glb`. WEBGL and AUTO continue to use the original model.
Switching renderers preserves an already-open model. To see the other backend's
built-in demo variant, reload the page after the switch, then click DEMO.

The PBR variant replaces only the `Felület-beton` and
`fa - szemcsés vízszintes fenyő` materials with the two Poly Haven 1K glTF
packs' JPEG base-colour, ARM (roughness in green), and OpenGL normal maps.
Their UV patterns repeat twice in each direction. The chosen normal strength
is 1.5; roughness factors are 0.75 for concrete and 0.5 for wood. The two
separately supplied 1K displacement PNGs are baked into those surfaces at
20 mm and 10 mm peak-to-peak relief respectively. No height PNG is embedded.
Glass, groups, metadata and other materials remain unchanged.

The WebGPU preview uses the existing HDRI at intensity 0.2, aligned to the sun
control, as fill and reflection lighting. The sun remains the key light and the
background stays neutral. The path tracer retains its own HDRI; on exit, the
preview lighting is restored. WebGL lighting is unchanged.

The PBR GLB is about 27 MiB. The former 2K test assets and local generated
fixture are not part of the repository. To regenerate the committed GLB from
the downloaded 1K packs and height maps:

```sh
python3 webgpu-lab/build-pbr-demo.py \
  --wood-pack /path/to/wood_floor_1k \
  --concrete-pack /path/to/concrete_wall_009_1k \
  --displacement-dir /path/to/height-maps
```

The script requires NumPy and Pillow. It never modifies the original GLB.
Build the local comparison with `pnpm --dir webgpu-lab run build:unified`,
or update the public renderer bundles with `pnpm --dir webgpu-lab run build:public`.
