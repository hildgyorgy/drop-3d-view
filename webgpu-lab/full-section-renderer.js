// WebGPU-safe section geometry. The production fat-line shader is WebGL-only.
import * as THREE from "three";
import {
  sectionCapMaterial, sectionEdgeMaterial, sectionDebugLineMaterial,
  sectionDebugDegree2Material, sectionDebugDegree1Material,
  sectionDebugBranchMaterial
} from "../js/model/materials.js";

export function disposeSectionGroup(group) {
  group?.traverse(object => object.geometry?.dispose());
}

export function createSectionGroup({
  fillEnabled, fillPositions, rawSegmentPositions, debugEnabled,
  points, degrees, planeOrigin, axisU, axisV
}) {
  const group = new THREE.Group();
  if (fillEnabled && fillPositions.length) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(fillPositions, 3));
    const mesh = new THREE.Mesh(geometry, sectionCapMaterial);
    mesh.renderOrder = 10500;
    mesh.raycast = () => {};
    group.add(mesh);
  }
  if (!fillEnabled && rawSegmentPositions.length) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(rawSegmentPositions, 3));
    const edges = new THREE.LineSegments(geometry, sectionEdgeMaterial);
    edges.renderOrder = 10505;
    edges.raycast = () => {};
    group.add(edges);
  }
  if (!debugEnabled) return group;

  const rawGeometry = new THREE.BufferGeometry();
  rawGeometry.setAttribute("position", new THREE.Float32BufferAttribute(rawSegmentPositions, 3));
  const rawLines = new THREE.LineSegments(rawGeometry, sectionDebugLineMaterial);
  rawLines.renderOrder = 10510;
  rawLines.raycast = () => {};
  group.add(rawLines);

  const positions = [[], [], []];
  points.forEach((point, index) => {
    const bucket = degrees[index] === 1 ? 1 : degrees[index] > 2 ? 2 : 0;
    const world = planeOrigin.clone().addScaledVector(axisU, point.x).addScaledVector(axisV, point.y);
    positions[bucket].push(world.x, world.y, world.z);
  });
  const materials = [sectionDebugDegree2Material, sectionDebugDegree1Material, sectionDebugBranchMaterial];
  positions.forEach((values, index) => {
    if (!values.length) return;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(values, 3));
    const dots = new THREE.Points(geometry, materials[index]);
    dots.renderOrder = 10520;
    dots.raycast = () => {};
    group.add(dots);
  });
  return group;
}
