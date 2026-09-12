/* Builds triangulated section-fill positions from planar contour loops. */

import * as THREE from "three";
import { classifyLoopHierarchy } from "./loop-hierarchy.js";

function interiorPoint(loop) {
  const triangles = THREE.ShapeUtils.triangulateShape(loop, []);

  if (triangles.length) {
    const triangle = triangles[0];
    return new THREE.Vector2(
      (loop[triangle[0]].x + loop[triangle[1]].x + loop[triangle[2]].x) /
        3,
      (loop[triangle[0]].y + loop[triangle[1]].y + loop[triangle[2]].y) /
        3
    );
  }

  return loop[0].clone();
}

export function createSectionFillPositions({ loops, planeOrigin, axisU, axisV }) {
  const loopData = classifyLoopHierarchy(loops, interiorPoint);
  const positions = [];

  function worldFrom2D(point) {
    return planeOrigin
      .clone()
      .addScaledVector(axisU, point.x)
      .addScaledVector(axisV, point.y);
  }

  for (let i = 0; i < loopData.length; i++) {
    const outerData = loopData[i];
    if (outerData.depth % 2 !== 0) continue;

    const contour = outerData.loop.map(point => point.clone());
    if (!THREE.ShapeUtils.isClockWise(contour)) contour.reverse();

    const holes = [];
    for (let holeIndex = 0; holeIndex < loopData.length; holeIndex++) {
      const holeData = loopData[holeIndex];
      if (holeData.componentId !== outerData.componentId) continue;
      if (holeData.depth !== outerData.depth + 1) continue;
      if (holeData.parent !== i) continue;

      const hole = holeData.loop.map(point => point.clone());
      if (THREE.ShapeUtils.isClockWise(hole)) hole.reverse();
      holes.push(hole);
    }

    const triangles = THREE.ShapeUtils.triangulateShape(contour, holes);
    const allPoints = contour.concat(...holes);

    for (const triangle of triangles) {
      for (const pointIndex of triangle) {
        const worldPoint = worldFrom2D(allPoints[pointIndex]);
        positions.push(worldPoint.x, worldPoint.y, worldPoint.z);
      }
    }
  }

  return positions;
}
