// Display materials for the full WebGPU page. GLSL onBeforeCompile hooks from
// the WebGL viewer cannot run on a WebGPU backend, so these are shader-free.
import * as THREE from "three";
import { MeshLambertNodeMaterial } from "three/webgpu";
import { diffuseColor, dot, step, vec3, vec4 } from "three/tsl";
import {
  isAlphaCutoutCandidate,
  prepareWhitePhysicalGlassVariant,
  preserveAuthoredPhysicalTransmission
} from "../js/model/material-policy.js";

export const whiteMaterial = new THREE.MeshStandardMaterial({
  color: 0xf7f7f4, roughness: 0.88, metalness: 0, side: THREE.DoubleSide
});
export const wireMaterial = new THREE.MeshBasicMaterial({
  color: 0x111111, wireframe: true, side: THREE.DoubleSide
});
export const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x111111 });
export const sectionCapMaterial = new THREE.MeshBasicMaterial({
  color: 0xff3b30, side: THREE.DoubleSide, depthWrite: true,
  depthTest: true, toneMapped: false
});
export const sectionDebugLineMaterial = new THREE.LineBasicMaterial({
  color: 0x00eaff, depthTest: false, depthWrite: false, toneMapped: false
});
export const sectionEdgeMaterial = new THREE.LineBasicMaterial({
  color: 0xff3b30, depthTest: false, depthWrite: false, toneMapped: false
});
export const sectionDebugDegree2Material = new THREE.PointsMaterial({
  color: 0x20d96b, size: 6, sizeAttenuation: false, depthTest: false
});
export const sectionDebugDegree1Material = new THREE.PointsMaterial({
  color: 0xff2b2b, size: 6, sizeAttenuation: false, depthTest: false
});
export const sectionDebugBranchMaterial = new THREE.PointsMaterial({
  color: 0xff00d4, size: 6, sizeAttenuation: false, depthTest: false
});

const whiteVariants = new WeakMap();
function whiteVariant(original) {
  if (!original?.clone) return whiteMaterial;
  const cached = whiteVariants.get(original);
  if (cached) return cached;
  const variant = original.clone();
  variant.color?.set(0xf7f7f4);
  variant.emissive?.set(0);
  if ("roughness" in variant) variant.roughness = 0.88;
  if ("metalness" in variant) variant.metalness = 0;
  // Keep the alpha texture for foliage and other punched-out geometry.
  if (!isAlphaCutoutCandidate(original)) variant.map = null;
  variant.emissiveMap = null;
  prepareWhitePhysicalGlassVariant(original, variant);
  variant.needsUpdate = true;
  whiteVariants.set(original, variant);
  return variant;
}
export function getWhiteMaterial(original) {
  return Array.isArray(original) ? original.map(whiteVariant) : whiteVariant(original);
}

// Match the WebGL B/W shader: classify the final sunlit Lambert result,
// including shadow-map attenuation, rather than quantising N dot L first.
class BWMaterial extends MeshLambertNodeMaterial {
  setupDiffuseColor(builder) {
    super.setupDiffuseColor(builder);
    // Keep the source texture's alpha cutout but ignore its RGB colour.
    diffuseColor.rgb.assign(vec3(1));
  }

  setupOutput(builder, litColor) {
    const luminance = dot(litColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    const ink = step(0.1, luminance);
    return super.setupOutput(builder, vec4(vec3(ink), litColor.a));
  }
}
export const renaissanceMaterial = new BWMaterial({
  color: 0xffffff, side: THREE.DoubleSide, toneMapped: false
});
export const renaissanceGlassMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff, transparent: true, opacity: 0.18,
  side: THREE.DoubleSide, depthWrite: false, toneMapped: false
});
const bwCutouts = new Map();
const bwCutoutSet = new Set();
function bwCutout(original) {
  if (bwCutouts.has(original)) return bwCutouts.get(original);
  const material = renaissanceMaterial.clone();
  material.map = original.map ?? null;
  material.alphaMap = original.alphaMap ?? null;
  material.alphaTest = Number(original.alphaTest) > 0 ? Number(original.alphaTest) : 0.5;
  material.opacity = original.opacity ?? 1;
  material.needsUpdate = true;
  bwCutouts.set(original, material);
  bwCutoutSet.add(material);
  return material;
}
export function isRenaissanceCutoutMaterial(material) { return bwCutoutSet.has(material); }
export function disposeRenaissanceCutoutMaterials() {
  for (const material of bwCutoutSet) material.dispose();
  bwCutouts.clear();
  bwCutoutSet.clear();
}
export function isTranslucentMaterial(material) {
  if (!material) return false;
  return (Number.isFinite(Number(material.opacity)) && Number(material.opacity) < 0.999) ||
    (Number.isFinite(Number(material.transmission)) && Number(material.transmission) > 0);
}
export function isEntirelyTranslucent(original) {
  const materials = Array.isArray(original) ? original : [original];
  return materials.length > 0 && materials.every(isTranslucentMaterial);
}
export function hasRenaissanceCutout(original) {
  const materials = Array.isArray(original) ? original : [original];
  return materials.some(isAlphaCutoutCandidate);
}
export function getRenaissanceMaterial(original) {
  if (Array.isArray(original)) return original.map(getRenaissanceMaterial);
  if (isAlphaCutoutCandidate(original)) return bwCutout(original);
  return isTranslucentMaterial(original) ? renaissanceGlassMaterial : renaissanceMaterial;
}
export function applyTranslucentAppearance(material, opacity, physicalTransmission = null) {
  if (!isTranslucentMaterial(material)) return;
  if (preserveAuthoredPhysicalTransmission(material)) {
    if (Number.isFinite(physicalTransmission)) material.transmission = physicalTransmission;
    return;
  }
  material.transparent = true;
  material.opacity = opacity;
  material.depthWrite = false;
  if ("roughness" in material) material.roughness = 0.16;
  if ("metalness" in material) material.metalness = 0.02;
  material.needsUpdate = true;
}
