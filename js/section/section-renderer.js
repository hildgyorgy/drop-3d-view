/* Creates and disposes the Three.js objects used to display section results. */

import * as THREE from "three";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import {
  sectionCapMaterial,
  sectionEdgeMaterial,
  sectionDebugLineMaterial,
  sectionDebugDegree2Material,
  sectionDebugDegree1Material,
  sectionDebugBranchMaterial
} from "../model/materials.js";

export function disposeSectionGroup(group) {
  if (!group) return;

  group.traverse(object => {
    if (object.geometry) object.geometry.dispose();
  });
}

export function createSectionGroup({
  fillEnabled,
  fillPositions,
  rawSegmentPositions,
  debugEnabled,
  points,
  degrees,
  planeOrigin,
  axisU,
  axisV
}) {
  const group = new THREE.Group();

  if (fillEnabled && fillPositions.length > 0) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(fillPositions, 3));

    const capMesh = new THREE.Mesh(geometry, sectionCapMaterial);
    capMesh.renderOrder = 10500;
    capMesh.castShadow = false;
    capMesh.receiveShadow = false;
    capMesh.raycast = () => {};
    group.add(capMesh);
  }

  if (!fillEnabled && rawSegmentPositions.length > 0) {
    const edgeGeometry = new LineSegmentsGeometry();
    edgeGeometry.setPositions(rawSegmentPositions);
    sectionEdgeMaterial.resolution.set(window.innerWidth, window.innerHeight);

    const edgeLines = new LineSegments2(edgeGeometry, sectionEdgeMaterial);
    edgeLines.renderOrder = 10505;
    edgeLines.raycast = () => {};
    group.add(edgeLines);
  }

  if (!debugEnabled) return group;

  const rawGeometry = new THREE.BufferGeometry();
  rawGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(rawSegmentPositions, 3)
  );

  const rawLines = new THREE.LineSegments(rawGeometry, sectionDebugLineMaterial);
  rawLines.renderOrder = 10510;
  rawLines.raycast = () => {};
  group.add(rawLines);

  const pointPositions = [[], [], []];
  for (let i = 0; i < points.length; i++) {
    const degree = degrees[i];
    const groupIndex = degree === 1 ? 1 : degree > 2 ? 2 : 0;
    const worldPoint = planeOrigin
      .clone()
      .addScaledVector(axisU, points[i].x)
      .addScaledVector(axisV, points[i].y);
    pointPositions[groupIndex].push(worldPoint.x, worldPoint.y, worldPoint.z);
  }

  const pointMaterials = [
    sectionDebugDegree2Material,
    sectionDebugDegree1Material,
    sectionDebugBranchMaterial
  ];

  for (let i = 0; i < pointPositions.length; i++) {
    if (pointPositions[i].length === 0) continue;

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(pointPositions[i], 3)
    );

    const pointCloud = new THREE.Points(pointGeometry, pointMaterials[i]);
    pointCloud.renderOrder = 10520;
    pointCloud.raycast = () => {};
    group.add(pointCloud);
  }

  return group;
}
