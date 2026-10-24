// Debug-only material editor. The opened GLB is never overwritten; download is
// a copy with material records patched into the original binary container.
import * as THREE from "three";
import { State } from "../core/state.js";
import { renderer } from "../core/scene.js";
import { setViewMode } from "../view/view-modes.js";
import { patchGlbMaterials } from "../model/glb-material-patch.js";
import { makeMeterUvs } from "../model/meter-uv.js";

const variantName = "Maxon / Redshift PBR";
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const edits = new Map();
const baselineMaterials = new Map();
const baselineGeometries = new Map();
let gltf = null;
let sourceFile = null;
let selectedIndex = null;
let packageImages = {};
let lastAction = null;
let busy = false;

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("../../css/material-workbench.css?v=5", import.meta.url).href;
document.head.append(stylesheet);

const panel = document.createElement("details");
panel.id = "materialWorkbench";
panel.innerHTML = `<summary>MATERIAL WORKBENCH</summary>
  <div class="workbench-body">
    <p class="workbench-hint">Open a GLB, then click a surface. Edits affect every part sharing its material. SURFACE and LACQUERED use color or uploaded maps; white leaves a color map unchanged. POLISHED METAL uses a solid color. GLASS is available only for exporter-selected clear glass.</p>
    <div id="workbenchMaterial" class="workbench-selected">NO MATERIAL SELECTED</div>
    <label class="workbench-file">DROP MAPS HERE OR CHOOSE · JPG/PNG
      <input id="workbenchFiles" type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" multiple>
    </label>
    <div class="workbench-map-row">
      <div id="workbenchMaps" class="workbench-maps">NO MAPS LOADED</div>
      <button id="workbenchClearMaps" type="button" disabled>CLEAR MAPS</button>
    </div>
    <label>TYPE <select id="workbenchType">
      <option value="surface">SURFACE</option><option value="metal">POLISHED METAL</option>
      <option value="lacquered">LACQUERED</option><option value="glass">GLASS</option>
    </select></label>
    <label class="workbench-color-label">COLOR <input id="workbenchColor" type="color" value="#ffffff" aria-label="Material color"></label>
    <label>ROUGHNESS <input id="workbenchRoughness" type="range" min="0.02" max="1" step="0.01" value="0.75"><output id="workbenchRoughnessValue">0.75</output></label>
    <label id="workbenchGlassTransparencyRow" hidden>TRANSPARENCY <input id="workbenchGlassTransparency" type="range" min="0.05" max="1" step="0.01" value="0.98"><output id="workbenchGlassTransparencyValue">98%</output></label>
    <label>TEXTURE SIZE <input id="workbenchTileMetres" type="range" min="0.1" max="20" step="0.1" value="2"><output id="workbenchTileMetresValue">2.0 m</output></label>
    <label>ROTATION <input id="workbenchRotation" type="range" min="-180" max="180" step="1" value="0"><output id="workbenchRotationValue">0°</output></label>
    <label>SHIFT X <input id="workbenchOffsetX" type="range" min="-1" max="1" step="0.01" value="0"></label>
    <label>SHIFT Y <input id="workbenchOffsetY" type="range" min="-1" max="1" step="0.01" value="0"></label>
    <div class="workbench-actions"><button id="workbenchApply" type="button">APPLY</button>
      <button id="workbenchUndo" type="button" disabled>UNDO</button>
      <button id="workbenchReset" type="button" disabled>RESET MATERIAL</button></div>
    <div class="workbench-actions">
      <button id="workbenchDownload" type="button">SAVE NEW GLB</button></div>
    <div id="workbenchStatus" role="status">ORIGINAL FILE STAYS UNCHANGED</div>
  </div>`;
document.body.append(panel);
const $ = id => panel.querySelector(`#${id}`);
const status = message => { $("workbenchStatus").textContent = message; };
const controls = ["workbenchRoughness", "workbenchGlassTransparency", "workbenchTileMetres", "workbenchRotation", "workbenchOffsetX", "workbenchOffsetY"];
const textureControls = ["workbenchTileMetres", "workbenchRotation", "workbenchOffsetX", "workbenchOffsetY"];

function updateButtons() {
  $("workbenchUndo").disabled = !lastAction || busy;
  $("workbenchReset").disabled = selectedIndex === null || !edits.has(selectedIndex) || busy;
  $("workbenchDownload").disabled = !edits.size || busy;
}

function updateModeControls() {
  const glass = $("workbenchType").value === "glass";
  const usesMaps = $("workbenchType").value === "surface" || $("workbenchType").value === "lacquered";
  const clearGlass = selectedGlassMaterial();
  for (const option of $("workbenchType").options) {
    option.disabled = option.value === "glass" ? !clearGlass : clearGlass;
  }
  $("workbenchGlassTransparencyRow").hidden = !glass;
  $("workbenchGlassTransparency").disabled = !glass;
  $("workbenchFiles").disabled = !usesMaps;
  $("workbenchColor").disabled = false;
  for (const id of textureControls) $(id).disabled = !usesMaps;
}

function selectedGlassMaterial() {
  if (selectedIndex === null || !gltf) return false;
  const material = gltf.parser.json.materials?.[selectedIndex];
  return material?.extras?.archicad?.clearGlassOverride === true &&
    Number(material.extensions?.KHR_materials_transmission?.transmissionFactor) > 0;
}

function materialIndexFor(object) {
  const association = gltf?.parser?.associations?.get(object);
  const primitive = gltf?.parser?.json?.meshes?.[association?.meshes]?.primitives?.[association?.primitives];
  if (!primitive) return null;
  const variants = gltf.parser.json.extensions?.KHR_materials_variants?.variants;
  const variantIndex = variants?.findIndex(item => item.name === variantName) ?? -1;
  const mapping = primitive.extensions?.KHR_materials_variants?.mappings?.find(
    item => item.variants?.includes(variantIndex)
  );
  return Number.isInteger(mapping?.material) ? mapping.material : primitive.material;
}

function materialTargets(index) {
  const json = gltf.parser.json;
  const targets = new Set([index]);
  for (const mesh of json.meshes || []) for (const primitive of mesh.primitives || []) {
    if (primitive.material === index || primitive.extensions?.KHR_materials_variants?.mappings?.some(
      item => item.material === index
    )) targets.add(primitive.material);
  }
  return [...targets].filter(Number.isInteger);
}

function materialObjects(index) {
  const objects = [];
  State.model?.traverse(object => {
    if (object.isMesh && materialIndexFor(object) === index) objects.push(object);
  });
  return objects;
}

function captureMaterial(index) {
  return {
    index,
    objects: materialObjects(index).map(object => ({
      object,
      material: object.material,
      geometry: object.geometry,
      originalMaterial: State.originalMaterials.get(object.uuid)
    })),
    edit: edits.get(index)
  };
}

function restoreMaterial(snapshot) {
  for (const { object, material, geometry, originalMaterial } of snapshot.objects) {
    object.material = material;
    object.geometry = geometry;
    if (originalMaterial) State.originalMaterials.set(object.uuid, originalMaterial);
    else State.originalMaterials.delete(object.uuid);
  }
  if (snapshot.edit) edits.set(snapshot.index, snapshot.edit);
  else edits.delete(snapshot.index);
  setViewMode("original");
  updateButtons();
}

function select(object) {
  const index = materialIndexFor(object);
  if (!Number.isInteger(index)) return;
  selectedIndex = index;
  const name = gltf.parser.json.materials[index]?.name || `MATERIAL ${index}`;
  $("workbenchMaterial").textContent = `${name} · #${index}`;
  const saved = edits.get(index);
  if (saved) {
    for (const [id, value] of Object.entries(saved.inputs)) $(id).value = value;
    // Keep the staging area independent from the last applied edit: choosing
    // another file must not silently alter what SAVE NEW GLB would export.
    packageImages = { ...saved.images };
  } else {
    $("workbenchType").value = selectedGlassMaterial() ? "glass" : "surface";
    $("workbenchRoughness").value = "0.75";
    $("workbenchGlassTransparency").value = "0.98";
    $("workbenchTileMetres").value = "2";
    $("workbenchRotation").value = "0";
    $("workbenchOffsetX").value = "0";
    $("workbenchOffsetY").value = "0";
    const original = baselineMaterials.get(object.uuid);
    const material = Array.isArray(original) ? original[0] : original;
    if (selectedGlassMaterial()) {
      const authored = gltf.parser.json.materials[index];
      $("workbenchRoughness").value = String(authored.pbrMetallicRoughness?.roughnessFactor ?? 0.03);
      $("workbenchGlassTransparency").value = String(authored.extensions.KHR_materials_transmission.transmissionFactor);
    }
    $("workbenchColor").value = material?.color ? `#${material.color.getHexString(THREE.SRGBColorSpace)}` : "#ffffff";
  }
  showMaps();
  showValues();
  updateModeControls();
  updateButtons();
  status("SELECT MAPS, ADJUST, THEN APPLY");
}

function onCanvasClick(event) {
  if (!panel.open || !State.model || !gltf || State.pathTracerActive) return;
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.set((event.clientX - rect.left) / rect.width * 2 - 1,
    -(event.clientY - rect.top) / rect.height * 2 + 1);
  raycaster.setFromCamera(pointer, State.camera);
  const hit = raycaster.intersectObject(State.model, true).find(item => item.object.isMesh);
  if (hit) select(hit.object);
}

function classify(name) {
  const n = name.toLowerCase();
  if (/(^|[_ .-])(nor_gl|normal|nor)([_ .-]|$)/.test(n)) return "normal";
  if (/(^|[_ .-])(arm|orm)([_ .-]|$)/.test(n)) return "arm";
  if (/(^|[_ .-])(rough|roughness)([_ .-]|$)/.test(n)) return "roughness";
  if (/(^|[_ .-])(metal|metallic|metalness)([_ .-]|$)/.test(n)) return "metalness";
  if (/(^|[_ .-])(diff|diffuse|albedo|basecolor|col)([_ .-]|$)/.test(n)) return "color";
  return null;
}

function showMaps() {
  const labels = Object.entries(packageImages).filter(([, file]) => file).map(([kind, file]) => `${kind}: ${file.name}`);
  $("workbenchMaps").textContent = labels.length ? labels.join(" · ") : "NO MAPS LOADED";
  $("workbenchClearMaps").disabled = labels.length === 0;
}

function showValues() {
  $("workbenchRoughnessValue").textContent = Number($("workbenchRoughness").value).toFixed(2);
  $("workbenchGlassTransparencyValue").textContent = `${Math.round(Number($("workbenchGlassTransparency").value) * 100)}%`;
  $("workbenchTileMetresValue").textContent = `${Number($("workbenchTileMetres").value).toFixed(1)} m`;
  $("workbenchRotationValue").textContent = `${$("workbenchRotation").value}°`;
}

function imageBitmap(file) { return createImageBitmap(file); }

async function packedRoughnessImage(images, metalness) {
  const source = images.arm || images.roughness || images.metalness;
  if (!source) return null;
  const bitmap = await imageBitmap(source);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(bitmap, 0, 0);
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  bitmap.close();
  let metalPixels = null;
  if (images.metalness && images.metalness !== source) {
    const metalBitmap = await imageBitmap(images.metalness);
    const other = document.createElement("canvas");
    other.width = canvas.width; other.height = canvas.height;
    const otherContext = other.getContext("2d", { willReadFrequently: true });
    otherContext.drawImage(metalBitmap, 0, 0, canvas.width, canvas.height);
    metalPixels = otherContext.getImageData(0, 0, canvas.width, canvas.height).data;
    metalBitmap.close();
  }
  for (let i = 0; i < pixels.data.length; i += 4) {
    const rough = images.arm ? pixels.data[i + 1] : images.roughness ? pixels.data[i + 1] : 255;
    const metal = metalPixels ? metalPixels[i] : images.arm ? pixels.data[i + 2] :
      images.metalness ? pixels.data[i] : 255;
    pixels.data[i] = 255;
    pixels.data[i + 1] = rough;
    pixels.data[i + 2] = metalness > 0 ? metal : 255;
    pixels.data[i + 3] = 255;
  }
  context.putImageData(pixels, 0, 0);
  return new Promise(resolve => canvas.toBlob(resolve, "image/png"));
}

function transformFromInputs(inputs) {
  return {
    scale: 1,
    rotation: Number(inputs.workbenchRotation) * Math.PI / 180,
    offsetX: Number(inputs.workbenchOffsetX),
    offsetY: Number(inputs.workbenchOffsetY)
  };
}

async function imageForPreview(blob, color = false) {
  if (!blob) return null;
  const image = await imageBitmap(blob);
  const texture = new THREE.Texture(image);
  texture.flipY = false;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function setTransform(texture, transform) {
  if (!texture) return;
  texture.repeat.set(transform.scale, transform.scale);
  texture.rotation = transform.rotation;
  texture.offset.set(transform.offsetX, transform.offsetY);
  texture.needsUpdate = true;
}

function meterGeometry(object, tileMetres) {
  const original = baselineGeometries.get(object.uuid);
  const position = original?.getAttribute("position");
  const normal = original?.getAttribute("normal");
  if (original?.getAttribute("uv1"))
    throw new Error("This mesh already uses a second UV set; meter UVs would replace it.");
  if (!position || !normal || position.count !== normal.count)
    throw new Error("This mesh has no matching positions and normals for meter UVs.");
  object.updateWorldMatrix(true, false);
  const normalMatrix = new THREE.Matrix3().getNormalMatrix(object.matrixWorld);
  const point = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const positions = new Float32Array(position.count * 3);
  const normals = new Float32Array(normal.count * 3);
  for (let i = 0; i < position.count; i++) {
    point.fromBufferAttribute(position, i).applyMatrix4(object.matrixWorld).toArray(positions, i * 3);
    direction.fromBufferAttribute(normal, i).applyMatrix3(normalMatrix).normalize().toArray(normals, i * 3);
  }
  const uv = makeMeterUvs(positions, normals, tileMetres);
  const geometry = original.clone();
  geometry.setAttribute("uv1", new THREE.BufferAttribute(uv, 2));
  return { geometry, uv };
}

function editableMaterial(original) {
  if (original.isMeshPhysicalMaterial) return original.clone();
  // MeshPhysicalMaterial.copy() expects physical-only colour and vector fields;
  // GLTFLoader often supplies MeshStandardMaterial, so promote explicitly.
  const material = new THREE.MeshPhysicalMaterial();
  for (const key of [
    "map", "lightMap", "aoMap", "emissiveMap", "normalMap", "bumpMap",
    "displacementMap", "roughnessMap", "metalnessMap", "alphaMap", "envMap",
    "vertexColors", "side", "transparent", "opacity", "alphaTest",
    "depthWrite", "flatShading", "envMapIntensity", "lightMapIntensity",
    "aoMapIntensity", "emissiveIntensity", "normalMapType"
  ]) if (original[key] !== undefined) material[key] = original[key];
  material.color.copy(original.color);
  material.emissive.copy(original.emissive);
  material.normalScale.copy(original.normalScale);
  material.userData = { ...original.userData };
  material.roughness = original.roughness;
  material.metalness = original.metalness;
  return material;
}

async function apply() {
  if (busy || selectedIndex === null || !gltf || !sourceFile) return;
  if (State.pathTracerActive) { status("EXIT PATH TRACER BEFORE EDITING"); return; }
  busy = true;
  updateButtons();
  let before = null;
  try {
    const inputs = Object.fromEntries([...controls, "workbenchType", "workbenchColor"].map(id => [id, $(id).value]));
    const type = inputs.workbenchType;
    const glass = type === "glass";
    if (glass !== selectedGlassMaterial())
      throw new Error(glass ? "GLASS is only available for exporter-selected clear glass." : "Clear glass must use GLASS mode.");
    const usesMaps = type === "surface" || type === "lacquered";
    const metalness = type === "metal" ? 1 : 0;
    const clearcoat = type === "lacquered" ? 1 : 0;
    const images = usesMaps ? { ...packageImages } : {};
    const meterUv = usesMaps &&
      Boolean(images.color || images.normal || images.arm || images.roughness || images.metalness);
    const packed = usesMaps ? await packedRoughnessImage(images, metalness) : null;
    const transform = transformFromInputs(inputs);
    const [colorMap, roughMap, normalMap] = await Promise.all([
      imageForPreview(images.color, true),
      imageForPreview(packed),
      imageForPreview(images.normal)
    ]);
    for (const texture of [colorMap, roughMap, normalMap]) {
      setTransform(texture, transform);
      if (texture && meterUv) texture.channel = 1;
    }
    before = captureMaterial(selectedIndex);
    if (!before.objects.length) throw new Error("No model part uses the selected material.");
    const applied = new Map();
    const meterUvs = [];
    for (const { object } of before.objects) {
      if (meterUv) {
        const projected = meterGeometry(object, Number(inputs.workbenchTileMetres));
        object.geometry = projected.geometry;
        const association = gltf.parser.associations.get(object);
        if (!Number.isInteger(association?.meshes) || !Number.isInteger(association?.primitives))
          throw new Error("Could not identify this mesh primitive for GLB export.");
        meterUvs.push({ meshIndex: association.meshes, primitiveIndex: association.primitives,
          coordinates: projected.uv });
      } else {
        object.geometry = baselineGeometries.get(object.uuid);
      }
      const baseline = baselineMaterials.get(object.uuid);
      const original = Array.isArray(baseline) ? baseline[0] : baseline;
      if (!original) throw new Error("The original material is no longer available.");
      let material = applied.get(original);
      if (!material) {
        material = editableMaterial(original);
        material.name = `${original.name} · workbench`;
        if (!glass) material.metalness = metalness;
        material.roughness = Number(inputs.workbenchRoughness);
        if (!glass) {
          material.clearcoat = clearcoat;
          material.clearcoatRoughness = clearcoat ? 0.08 : 0;
          material.clearcoatMap = null;
          material.clearcoatRoughnessMap = null;
          material.clearcoatNormalMap = null;
        }
        if (glass) {
          material.transmission = Number(inputs.workbenchGlassTransparency);
          material.opacity = 1;
          material.transparent = false;
          material.depthWrite = true;
        }
        if (!usesMaps && !glass) {
          material.map = null;
          material.roughnessMap = null;
          material.metalnessMap = null;
          material.normalMap = null;
          material.bumpMap = null;
          material.displacementMap = null;
        } else if (usesMaps) {
          // No uploaded base-color map means a solid color, not the source GLB's old map.
          material.map = colorMap;
          // A newly applied package replaces the former surface maps as a set.
          // Otherwise an old UV0 roughness/normal map would conflict with UV1.
          material.roughnessMap = null;
          material.metalnessMap = null;
          material.normalMap = null;
          material.bumpMap = null;
          material.displacementMap = null;
        }
        material.color.set(inputs.workbenchColor);
        if (roughMap) material.roughnessMap = roughMap;
        if (roughMap) material.metalnessMap = roughMap;
        if (normalMap) material.normalMap = normalMap;
        material.needsUpdate = true;
        applied.set(original, material);
      }
      object.material = material;
      State.originalMaterials.set(object.uuid, material);
    }
    edits.set(selectedIndex, { inputs, images, packed, meterUvs,
      materialIndices: materialTargets(selectedIndex).filter(index => !glass ||
        (gltf.parser.json.materials[index]?.extras?.archicad?.clearGlassOverride === true &&
         Number(gltf.parser.json.materials[index]?.extensions?.KHR_materials_transmission?.transmissionFactor) > 0)) });
    setViewMode("original");
    lastAction = before;
    status(`${edits.size} MATERIAL${edits.size === 1 ? "" : "S"} READY · SAVE A NEW GLB`);
  } catch (error) {
    if (before) restoreMaterial(before);
    console.error("Material preview failed", error);
    status(`COULD NOT APPLY: ${error.message}`);
  } finally { busy = false; updateButtons(); }
}

async function imageRecord(file) {
  if (!file) return null;
  return { bytes: new Uint8Array(await file.arrayBuffer()), mimeType: file.type || "image/png" };
}

async function download() {
  if (busy || !sourceFile || !edits.size) return;
  busy = true;
  status("SAVING NEW GLB…");
  try {
    const patches = [];
    for (const edit of edits.values()) {
      const [color, roughness, normal] = await Promise.all([
        imageRecord(edit.images.color), imageRecord(edit.packed), imageRecord(edit.images.normal)
      ]);
      for (const [targetIndex, materialIndex] of edit.materialIndices.entries()) patches.push({
        materialIndex, images: { color, roughness, normal },
        meterUvs: targetIndex === 0 ? edit.meterUvs : undefined,
        texCoord: edit.meterUvs?.length ? 1 : 0,
        ignoreMaps: edit.inputs.workbenchType === "metal",
        glassTransmission: edit.inputs.workbenchType === "glass" ? Number(edit.inputs.workbenchGlassTransparency) : undefined,
        color: new THREE.Color(edit.inputs.workbenchColor).toArray(),
        roughness: Number(edit.inputs.workbenchRoughness),
        metalness: edit.inputs.workbenchType === "metal" ? 1 : 0,
        clearcoat: edit.inputs.workbenchType === "lacquered" ? 1 : 0,
        clearcoatRoughness: 0.08,
        transform: transformFromInputs(edit.inputs)
      });
    }
    const buffer = patchGlbMaterials(await sourceFile.arrayBuffer(), patches);
    const url = URL.createObjectURL(new Blob([buffer], { type: "model/gltf-binary" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = sourceFile.name.replace(/\.glb$/i, "") + "_pbr.glb";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
    status(`SAVED ${link.download} · ORIGINAL UNCHANGED`);
  } catch (error) {
    console.error("Workbench export failed", error);
    status(`SAVE FAILED: ${error.message}`);
  } finally { busy = false; }
}

function undo() {
  if (busy || !lastAction) return;
  const previous = lastAction;
  lastAction = null;
  restoreMaterial(previous);
  if (selectedIndex === previous.index && previous.objects[0]) select(previous.objects[0].object);
  status("LAST MATERIAL CHANGE UNDONE");
  updateButtons();
}

function resetMaterial() {
  if (busy || selectedIndex === null || !edits.has(selectedIndex)) return;
  if (State.pathTracerActive) { status("EXIT PATH TRACER BEFORE RESETTING"); return; }
  const previous = captureMaterial(selectedIndex);
  if (previous.objects.some(({ object }) => !baselineMaterials.has(object.uuid))) {
    status("ORIGINAL MATERIAL IS UNAVAILABLE");
    return;
  }
  for (const { object } of previous.objects) {
    const baseline = baselineMaterials.get(object.uuid);
    object.material = baseline;
    object.geometry = baselineGeometries.get(object.uuid);
    State.originalMaterials.set(object.uuid, baseline);
  }
  edits.delete(selectedIndex);
  lastAction = previous;
  packageImages = {};
  $("workbenchFiles").value = "";
  setViewMode("original");
  if (previous.objects[0]) select(previous.objects[0].object);
  status("SELECTED MATERIAL RESTORED · OTHER EDITS KEPT");
  updateButtons();
}

function acceptFiles(files) {
  for (const file of files || []) {
    const kind = classify(file.name);
    if (kind) packageImages[kind] = file;
  }
  showMaps();
  status(Object.keys(packageImages).length ? "MAPS READY · SELECT A MATERIAL AND APPLY" :
    "NO RECOGNIZED MAPS · USE DIFF / ROUGH / NOR_GL / ARM NAMES");
}
$("workbenchFiles").addEventListener("change", event => acceptFiles(event.target.files));
$("workbenchClearMaps").addEventListener("click", () => {
  packageImages = {};
  $("workbenchFiles").value = "";
  showMaps();
  status("MAPS CLEARED · APPLIED MATERIALS UNCHANGED");
});
panel.addEventListener("dragover", event => {
  event.preventDefault();
  event.stopPropagation();
  panel.classList.add("workbench-dragging");
});
panel.addEventListener("dragleave", () => panel.classList.remove("workbench-dragging"));
panel.addEventListener("drop", event => {
  event.preventDefault();
  event.stopPropagation();
  panel.classList.remove("workbench-dragging");
  acceptFiles(event.dataTransfer.files);
});
for (const id of controls) $(id).addEventListener("input", showValues);
$("workbenchType").addEventListener("change", event => {
  if (selectedGlassMaterial() && event.target.value !== "glass") event.target.value = "glass";
  if (!selectedGlassMaterial() && event.target.value === "glass") event.target.value = "surface";
  $("workbenchRoughness").value = event.target.value === "metal" ? "0.25" :
    event.target.value === "lacquered" ? "0.35" :
    event.target.value === "glass" ? "0.03" : "0.75";
  showValues();
  updateModeControls();
});
$("workbenchApply").addEventListener("click", apply);
$("workbenchUndo").addEventListener("click", undo);
$("workbenchReset").addEventListener("click", resetMaterial);
$("workbenchDownload").addEventListener("click", download);
renderer.domElement.addEventListener("click", onCanvasClick);
window.addEventListener("dropview:model-loaded", event => {
  gltf = event.detail.gltf;
  sourceFile = event.detail.file;
  selectedIndex = null;
  $("workbenchType").value = "surface";
  packageImages = {};
  $("workbenchFiles").value = "";
  edits.clear();
  baselineMaterials.clear();
  baselineGeometries.clear();
  lastAction = null;
  State.model?.traverse(object => {
    if (object.isMesh) {
      baselineMaterials.set(object.uuid, State.originalMaterials.get(object.uuid) || object.material);
      baselineGeometries.set(object.uuid, object.geometry);
    }
  });
  $("workbenchMaterial").textContent = "CLICK A SURFACE TO SELECT ITS MATERIAL";
  showMaps();
  updateModeControls();
  updateButtons();
  status("ORIGINAL FILE STAYS UNCHANGED");
});
window.addEventListener("dropview:model-cleared", () => {
  gltf = null; sourceFile = null; selectedIndex = null; packageImages = {}; edits.clear();
  $("workbenchType").value = "surface";
  baselineMaterials.clear(); lastAction = null;
  baselineGeometries.clear();
  $("workbenchFiles").value = "";
  $("workbenchMaterial").textContent = "NO MATERIAL SELECTED";
  showMaps();
  updateModeControls();
  updateButtons();
});
updateModeControls();
updateButtons();
