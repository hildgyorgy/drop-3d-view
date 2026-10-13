"""Build a reversible, lab-only PBR variant of the bundled demo house.

Usage: python3 webgpu-lab/build-pbr-demo.py --wood-pack /path/to/wood_floor_1k --concrete-pack /path/to/concrete_wall_009_1k
The original demo/demo_house.glb is never modified. The generated GLB is
ignored by Git and can be regenerated after every source-model update.
"""

import argparse
import json
import struct
from pathlib import Path

try:
    import numpy as np
    from PIL import Image
except ImportError as error:
    raise SystemExit("PBR displacement requires numpy and Pillow (use the bundled workspace Python).") from error


ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "demo/demo_house.glb"
OUTPUT = ROOT / "demo/demo_house_pbr.glb"
JSON_CHUNK = 0x4E4F534A
BIN_CHUNK = 0x004E4942

SURFACES = {
    "Felület-beton": ("concrete_wall_009", 0.75, 1.5, 0.02),
    "fa - szemcsés vízszintes fenyő": ("wood_floor", 0.5, 1.5, 0.01),
}
TEXTURE_REPEAT = 2  # Each tile appears at half its former model-space size.
SUBDIVISIONS = 8  # 64 smaller triangles per source triangle, only on test surfaces.


def pad4(data, byte=b"\0"):
    return data + byte * ((-len(data)) % 4)


def read_glb(path):
    data = path.read_bytes()
    magic, version, length = struct.unpack_from("<4sII", data)
    if magic != b"glTF" or version != 2 or length != len(data):
        raise ValueError(f"Not a valid GLB 2.0 file: {path}")
    chunks = []
    offset = 12
    while offset < len(data):
        size, kind = struct.unpack_from("<II", data, offset)
        offset += 8
        chunks.append((kind, data[offset:offset + size]))
        offset += size
    if [kind for kind, _ in chunks] != [JSON_CHUNK, BIN_CHUNK]:
        raise ValueError("Expected one JSON chunk followed by one BIN chunk")
    return json.loads(chunks[0][1]), bytearray(chunks[1][1])


def add_image(document, binary, image_path, mime_type):
    payload = image_path.read_bytes()
    if mime_type == "image/png" and not payload.startswith(b"\x89PNG\r\n\x1a\n"):
        raise ValueError(f"Not a PNG: {image_path}")
    if mime_type == "image/jpeg" and not payload.startswith(b"\xff\xd8"):
        raise ValueError(f"Not a JPEG: {image_path}")
    offset = len(binary)
    binary.extend(pad4(payload))
    view = len(document["bufferViews"])
    document["bufferViews"].append({
        "buffer": 0, "byteOffset": offset, "byteLength": len(payload)
    })
    image = len(document["images"])
    document["images"].append({"bufferView": view, "mimeType": mime_type})
    return image


def add_texture(document, image_index, sampler_index):
    texture = len(document["textures"])
    document["textures"].append({"source": image_index, "sampler": sampler_index})
    return texture


def texture_info(index, texcoord):
    return {
        "index": index,
        "texCoord": texcoord,
        "extensions": {"KHR_texture_transform": {
            "scale": [TEXTURE_REPEAT, TEXTURE_REPEAT]
        }},
    }


def pack_images(pack_dir, stem):
    manifest = pack_dir / f"{stem}_1k.gltf"
    pack = json.loads(manifest.read_text())
    source = pack["materials"][0]

    def image_for(texture_info):
        image = pack["images"][pack["textures"][texture_info["index"]]["source"]]
        if image.get("mimeType") != "image/jpeg":
            raise ValueError(f"Expected a JPEG in {manifest}: {image}")
        image_path = (pack_dir / image["uri"]).resolve()
        if not image_path.is_relative_to(pack_dir.resolve()) or not image_path.is_file():
            raise ValueError(f"Missing or unsafe pack image: {image_path}")
        return image_path

    return (
        image_for(source["pbrMetallicRoughness"]["baseColorTexture"]),
        image_for(source["pbrMetallicRoughness"]["metallicRoughnessTexture"]),
        image_for(source["normalTexture"]),
    )


def apply_surface(document, binary, material, stem, roughness, normal_scale, pack_dir):
    pbr = material["pbrMetallicRoughness"]
    original = pbr["baseColorTexture"]
    original_texture = document["textures"][original["index"]]
    sampler = original_texture.get("sampler", 0)
    texcoord = original.get("texCoord", 0)
    # Keep the existing Archicad UVs, sampler and material metadata. Replacing
    # only this material avoids changing glass, groups, cameras and geometry.
    diffuse_path, arm_path, normal_path = pack_images(pack_dir, stem)
    diffuse = add_image(document, binary, diffuse_path, "image/jpeg")
    rough = add_image(document, binary, arm_path, "image/jpeg")
    normal = add_image(document, binary, normal_path, "image/jpeg")
    pbr["baseColorTexture"] = texture_info(add_texture(document, diffuse, sampler), texcoord)
    pbr["baseColorFactor"] = [1, 1, 1, 1]
    pbr["metallicFactor"] = 0
    pbr["roughnessFactor"] = roughness
    # Use the pack's glTF-native ARM texture: roughness is in G. The original
    # pack sets metallicFactor to zero, and we retain that for the house.
    pbr["metallicRoughnessTexture"] = texture_info(add_texture(document, rough, sampler), texcoord)
    material["normalTexture"] = texture_info(add_texture(document, normal, sampler), texcoord)
    material["normalTexture"]["scale"] = normal_scale


def accessor_array(document, binary, index):
    accessor = document["accessors"][index]
    view = document["bufferViews"][accessor["bufferView"]]
    components = {"SCALAR": 1, "VEC2": 2, "VEC3": 3}[accessor["type"]]
    dtype = {5121: "u1", 5123: "<u2", 5125: "<u4", 5126: "<f4"}[accessor["componentType"]]
    dtype = np.dtype(dtype)
    offset = view.get("byteOffset", 0) + accessor.get("byteOffset", 0)
    stride = view.get("byteStride", components * dtype.itemsize)
    return np.ndarray(
        shape=(accessor["count"], components), dtype=dtype, buffer=binary,
        offset=offset, strides=(stride, dtype.itemsize)
    ).copy()


def add_accessor(document, binary, values, accessor_type, component_type, bounds=False):
    values = np.ascontiguousarray(values)
    offset = len(binary)
    payload = values.tobytes()
    binary.extend(pad4(payload))
    view = len(document["bufferViews"])
    document["bufferViews"].append({
        "buffer": 0, "byteOffset": offset, "byteLength": len(payload)
    })
    accessor = {
        "bufferView": view, "componentType": component_type,
        "count": len(values), "type": accessor_type
    }
    if bounds:
        accessor["min"] = values.min(axis=0).tolist()
        accessor["max"] = values.max(axis=0).tolist()
    index = len(document["accessors"])
    document["accessors"].append(accessor)
    return index


def wrapped_uv(values, mode):
    if mode == 33648:  # MIRRORED_REPEAT
        values = np.mod(values, 2.0)
        return np.where(values > 1.0, 2.0 - values, values)
    if mode == 33071:  # CLAMP_TO_EDGE
        return np.clip(values, 0.0, 1.0)
    return np.mod(values, 1.0)  # REPEAT


def displacement_samples(image, uv, wrap_s, wrap_t):
    height = np.asarray(Image.open(image), dtype=np.float32)
    if height.ndim != 2:
        raise ValueError(f"Expected grayscale height map: {image}")
    # Ignore isolated extreme pixels so a few dark pores cannot pull the wall
    # centimetres out of plane. The 1–99% range receives the stated amplitude.
    low, high = np.quantile(height, [0.01, 0.99])
    u = wrapped_uv(uv[:, 0] * TEXTURE_REPEAT, wrap_s)
    v = wrapped_uv(uv[:, 1] * TEXTURE_REPEAT, wrap_t)
    x = u * (height.shape[1] - 1)
    y = (1.0 - v) * (height.shape[0] - 1)  # GLB textures use flipY=false.
    x0 = np.floor(x).astype(np.int32)
    y0 = np.floor(y).astype(np.int32)
    x1 = np.minimum(x0 + 1, height.shape[1] - 1)
    y1 = np.minimum(y0 + 1, height.shape[0] - 1)
    fx, fy = x - x0, y - y0
    sampled = ((1 - fy) * ((1 - fx) * height[y0, x0] + fx * height[y0, x1])
               + fy * ((1 - fx) * height[y1, x0] + fx * height[y1, x1]))
    return (np.clip(sampled, low, high) - (low + high) / 2) / (high - low)


def subdivide_primitive(document, binary, primitive, height_image, amplitude):
    source = primitive["attributes"]
    if set(source) != {"POSITION", "NORMAL", "TEXCOORD_0"} or "indices" not in primitive:
        raise ValueError("Unexpected demo mesh attributes; refusing to alter geometry")
    positions = accessor_array(document, binary, source["POSITION"])
    normals = accessor_array(document, binary, source["NORMAL"])
    uvs = accessor_array(document, binary, source["TEXCOORD_0"])
    triangles = accessor_array(document, binary, primitive["indices"]).reshape(-1, 3)
    sampler_index = document["textures"][document["materials"][primitive["material"]]
        ["pbrMetallicRoughness"]["baseColorTexture"]["index"]].get("sampler", 0)
    sampler = document["samplers"][sampler_index]
    vertices = {}
    out_pos, out_normal, out_uv, out_indices = [], [], [], []
    resolution = SUBDIVISIONS

    def vertex(original, weights, triangle_number, i, j):
        nonzero = [(int(original[k]), weights[k]) for k in range(3) if weights[k]]
        if len(nonzero) == 1:
            key = ("v", nonzero[0][0])
        elif len(nonzero) == 2:
            (a, wa), (b, wb) = sorted(nonzero)
            key = ("e", a, b, wb)
        else:
            key = ("f", triangle_number, i, j)
        if key not in vertices:
            weights = np.asarray(weights, dtype=np.float32) / resolution
            position = weights @ positions[original]
            normal = weights @ normals[original]
            normal /= max(float(np.linalg.norm(normal)), 1e-8)
            uv = weights @ uvs[original]
            vertices[key] = len(out_pos)
            out_pos.append(position)
            out_normal.append(normal)
            out_uv.append(uv)
        return vertices[key]

    for triangle_number, original in enumerate(triangles):
        grid = {}
        for i in range(resolution + 1):
            for j in range(resolution + 1 - i):
                grid[i, j] = vertex(original, (resolution - i - j, i, j), triangle_number, i, j)
        for i in range(resolution):
            for j in range(resolution - i):
                out_indices.extend((grid[i, j], grid[i + 1, j], grid[i, j + 1]))
                if i + j < resolution - 1:
                    out_indices.extend((grid[i + 1, j], grid[i + 1, j + 1], grid[i, j + 1]))

    out_pos = np.asarray(out_pos, dtype=np.float32)
    out_normal = np.asarray(out_normal, dtype=np.float32)
    out_uv = np.asarray(out_uv, dtype=np.float32)
    heights = displacement_samples(height_image, out_uv, sampler.get("wrapS", 10497), sampler.get("wrapT", 10497))
    out_pos += out_normal * (heights * amplitude)[:, None]
    primitive["attributes"] = {
        "POSITION": add_accessor(document, binary, out_pos, "VEC3", 5126, bounds=True),
        "NORMAL": add_accessor(document, binary, out_normal, "VEC3", 5126),
        "TEXCOORD_0": add_accessor(document, binary, out_uv, "VEC2", 5126),
    }
    primitive["indices"] = add_accessor(
        document, binary, np.asarray(out_indices, dtype="<u4").reshape(-1, 1), "SCALAR", 5125
    )
    return len(triangles), len(out_indices) // 3


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--wood-pack", type=Path, required=True)
    parser.add_argument("--concrete-pack", type=Path, required=True)
    parser.add_argument("--displacement-dir", type=Path,
                        help="Optional height maps for a separate geometry test; not part of the 1K glTF packs")
    args = parser.parse_args()
    document, binary = read_glb(SOURCE)
    material_by_name = {item.get("name"): item for item in document["materials"]}
    document.setdefault("extensionsUsed", [])
    if "KHR_texture_transform" not in document["extensionsUsed"]:
        document["extensionsUsed"].append("KHR_texture_transform")
    packs = {"wood_floor": args.wood_pack, "concrete_wall_009": args.concrete_pack}
    for name, (stem, roughness, normal_scale, amplitude) in SURFACES.items():
        if name not in material_by_name:
            raise ValueError(f"Demo material missing: {name}")
        apply_surface(document, binary, material_by_name[name], stem, roughness, normal_scale, packs[stem])
    if args.displacement_dir:
        material_names = {index: material.get("name") for index, material in enumerate(document["materials"])}
        totals = [0, 0]
        for mesh in document["meshes"]:
            for primitive in mesh["primitives"]:
                name = material_names.get(primitive.get("material"))
                if name in SURFACES:
                    stem, _, _, amplitude = SURFACES[name]
                    before, after = subdivide_primitive(
                        document, binary, primitive, args.displacement_dir / f"{stem}_disp_1k.png", amplitude
                    )
                    totals[0] += before
                    totals[1] += after
        print(f"Baked displacement: {totals[0]} → {totals[1]} triangles")
    document["buffers"][0]["byteLength"] = len(binary)
    json_data = pad4(json.dumps(document, ensure_ascii=False, separators=(",", ":")).encode(), b" ")
    binary_data = pad4(binary)
    total = 12 + 8 + len(json_data) + 8 + len(binary_data)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("wb") as out:
        out.write(struct.pack("<4sII", b"glTF", 2, total))
        out.write(struct.pack("<II", len(json_data), JSON_CHUNK))
        out.write(json_data)
        out.write(struct.pack("<II", len(binary_data), BIN_CHUNK))
        out.write(binary_data)
    print(f"Created {OUTPUT} ({total / 1024 / 1024:.1f} MiB)")
    print("Modified: Felület-beton; fa - szemcsés vízszintes fenyő")


if __name__ == "__main__":
    main()
