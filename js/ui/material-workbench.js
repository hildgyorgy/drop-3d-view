// Debug-only material editor. The opened GLB is never overwritten; download is
// a copy with material records patched into the original binary container.
import * as THREE from "three";
import { State } from "../core/state.js";
import { renderer } from "../core/scene.js";
import { setViewMode } from "../view/view-modes.js";
import { patchGlbMaterials } from "../model/glb-material-patch.js";

const variantName = "Maxon / Redshift PBR";
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const edits = new Map();
let gltf = null;
let sourceFile = null;
let selectedIndex = null;
let packageImages = {};
let busy = false;

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = new URL("../../css/material-workbench.css?v=2", import.meta.url).href;
document.head.append(stylesheet);

const panel = document.createElement("details");
panel.id = "materialWorkbench";
panel.innerHTML = `<summary>MATERIAL WORKBENCH</summary>
  <div class="workbench-body">
    <p class="workbench-hint">Open a GLB, then click a surface. Edits affect every part sharing its material.</p>
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
      <option value="car">CAR PAINT</option>
    </select></label>
    <label>ROUGHNESS <input id="workbenchRoughness" type="range" min="0.02" max="1" step="0.01" value="0.75"><output id="workbenchRoughnessValue">0.75</output></label>
    <label>TEXTURE SIZE <input id="workbenchScale" type="range" min="0.25" max="8" step="0.05" value="1"><output id="workbenchScaleValue">1.00×</output></label>
    <label>ROTATION <input id="workbenchRotation" type="range" min="-180" max="180" step="1" value="0"><output id="workbenchRotationValue">0°</output></label>
    <label>SHIFT X <input id="workbenchOffsetX" type="range" min="-1" max="1" step="0.01" value="0"></label>
    <label>SHIFT Y <input id="workbenchOffsetY" type="range" min="-1" max="1" step="0.01" value="0"></label>
    <div class="workbench-actions"><button id="workbenchApply" type="button">APPLY</button>
      <button id="workbenchDownload" type="button">SAVE NEW GLB</button></div>
    <div id="workbenchStatus" role="status">ORIGINAL FILE STAYS UNCHANGED</div>
  </div>`;
document.body.append(panel);
const $ = id => panel.querySelector(`#${id}`);
const status = message => { $("workbenchStatus").textContent = message; };
const controls = ["workbenchRoughness", "workbenchScale", "workbenchRotation", "workbenchOffsetX", "workbenchOffsetY"];

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

function select(object) {
  const index = materialIndexFor(object);
  if (!Number.isInteger(index)) return;
  selectedIndex = index;
  const name = gltf.parser.json.materials[index]?.name || `MATERIAL ${index}`;
  $("workbenchMaterial").textContent = `${name} · #${index}`;
  const saved = edits.get(index);
  if (saved) {
    for (const [id, value] of Object.entries(saved.inputs)) $(id).value = value;
    packageImages = saved.images;
  } else {
    $("workbenchType").value = "surface";
    $("workbenchRoughness").value = "0.75";
    $("workbenchScale").value = "1";
    $("workbenchRotation").value = "0";
    $("workbenchOffsetX").value = "0";
    $("workbenchOffsetY").value = "0";
  }
  showMaps();
  showValues();
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
  $("workbenchScaleValue").textContent = `${Number($("workbenchScale").value).toFixed(2)}×`;
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
    scale: Number(inputs.workbenchScale),
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
  try {
    const inputs = Object.fromEntries([...controls, "workbenchType"].map(id => [id, $(id).value]));
    const type = inputs.workbenchType;
    const metalness = type === "metal" ? 1 : 0;
    const clearcoat = type === "car" ? 1 : 0;
    const packed = await packedRoughnessImage(packageImages, metalness);
    const transform = transformFromInputs(inputs);
    const [colorMap, roughMap, normalMap] = await Promise.all([
      imageForPreview(packageImages.color, true),
      imageForPreview(packed),
      imageForPreview(packageImages.normal)
    ]);
    for (const texture of [colorMap, roughMap, normalMap]) setTransform(texture, transform);
    const applied = new Map();
    State.model.traverse(object => {
      if (!object.isMesh || materialIndexFor(object) !== selectedIndex) return;
      const previous = State.originalMaterials.get(object.uuid) || object.material;
      const original = Array.isArray(previous) ? previous[0] : previous;
      if (!original) return;
      let material = applied.get(original);
      if (!material) {
        material = editableMaterial(original);
        material.name = `${original.name} · workbench`;
        material.metalness = metalness;
        material.roughness = Number(inputs.workbenchRoughness);
        material.clearcoat = clearcoat;
        material.clearcoatRoughness = clearcoat ? 0.08 : 0;
        if (colorMap) {
          material.map = colorMap;
          material.color.set(0xffffff);
        }
        if (roughMap) material.roughnessMap = roughMap;
        if (roughMap) material.metalnessMap = roughMap;
        if (normalMap) material.normalMap = normalMap;
        material.needsUpdate = true;
        applied.set(original, material);
      }
      object.material = material;
      State.originalMaterials.set(object.uuid, material);
    });
    if (!applied.size) throw new Error("No model part uses the selected material.");
    edits.set(selectedIndex, { inputs, images: { ...packageImages }, packed,
      materialIndices: materialTargets(selectedIndex) });
    setViewMode("original");
    status(`${edits.size} MATERIAL${edits.size === 1 ? "" : "S"} READY · SAVE A NEW GLB`);
  } catch (error) {
    console.error("Material preview failed", error);
    status(`COULD NOT APPLY: ${error.message}`);
  } finally { busy = false; }
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
      for (const materialIndex of edit.materialIndices) patches.push({
        materialIndex, images: { color, roughness, normal },
        roughness: Number(edit.inputs.workbenchRoughness),
        metalness: edit.inputs.workbenchType === "metal" ? 1 : 0,
        clearcoat: edit.inputs.workbenchType === "car" ? 1 : 0,
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
  $("workbenchRoughness").value = event.target.value === "metal" ? "0.25" :
    event.target.value === "car" ? "0.35" : "0.75";
  showValues();
});
$("workbenchApply").addEventListener("click", apply);
$("workbenchDownload").addEventListener("click", download);
renderer.domElement.addEventListener("click", onCanvasClick);
window.addEventListener("dropview:model-loaded", event => {
  gltf = event.detail.gltf;
  sourceFile = event.detail.file;
  selectedIndex = null;
  packageImages = {};
  $("workbenchFiles").value = "";
  edits.clear();
  $("workbenchMaterial").textContent = "CLICK A SURFACE TO SELECT ITS MATERIAL";
  showMaps();
  status("ORIGINAL FILE STAYS UNCHANGED");
});
window.addEventListener("dropview:model-cleared", () => {
  gltf = null; sourceFile = null; selectedIndex = null; packageImages = {}; edits.clear();
  $("workbenchFiles").value = "";
  $("workbenchMaterial").textContent = "NO MATERIAL SELECTED";
  showMaps();
});
