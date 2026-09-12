/* Collects model/plane intersections and projects them into section-plane 2D. */

import * as THREE from "three";
import { forEachMesh } from "../core/model-utils.js";
import { intersectTriangleWithPlane } from "./triangle-intersection.js";

export function collectSectionSegments({
  model,
  sectionPlane,
  triangleComponents,
  planeOrigin,
  axisU,
  axisV,
  tolerance,
  collectGraph = true,
  includeDiagnostics = false
}) {
  const pointMap = new Map();
  const points = [];
  const pointComponentIds = [];
  const edges = new Map();
  const rawSegmentPositions = [];
  const intersectedMeshes = new Set();
  const intersectedComponents = new Set();

  function pointKey(x, y, componentId) {
    return `${componentId}|${Math.round(x / tolerance)},${Math.round(
      y / tolerance
    )}`;
  }

  function getPointIndex(worldPoint, componentId) {
    const delta = worldPoint.clone().sub(planeOrigin);
    const x = delta.dot(axisU);
    const y = delta.dot(axisV);
    const key = pointKey(x, y, componentId);

    if (pointMap.has(key)) return pointMap.get(key);

    const index = points.length;
    points.push(
      new THREE.Vector2(
        Math.round(x / tolerance) * tolerance,
        Math.round(y / tolerance) * tolerance
      )
    );
    pointComponentIds.push(componentId);
    pointMap.set(key, index);
    return index;
  }

  function addSegment(start, end, mesh, componentId) {
    rawSegmentPositions.push(
      start.x,
      start.y,
      start.z,
      end.x,
      end.y,
      end.z
    );

    if (includeDiagnostics) {
      intersectedMeshes.add(mesh);
      intersectedComponents.add(componentId);
    }

    if (!collectGraph) return;

    const startIndex = getPointIndex(start, componentId);
    const endIndex = getPointIndex(end, componentId);
    if (startIndex === endIndex) return;

    const low = Math.min(startIndex, endIndex);
    const high = Math.max(startIndex, endIndex);
    const key = `${low}:${high}`;
    if (!edges.has(key)) edges.set(key, [low, high]);
  }

  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const worldStart = new THREE.Vector3();
  const worldEnd = new THREE.Vector3();

  forEachMesh(model, mesh => {
    if (!mesh.geometry?.attributes?.position) return;

    const geometry = mesh.geometry;
    if (!geometry.boundingBox) geometry.computeBoundingBox();

    const inverseWorld = mesh.matrixWorld.clone().invert();
    const localPlane = sectionPlane.clone().applyMatrix4(inverseWorld);
    if (geometry.boundingBox && !localPlane.intersectsBox(geometry.boundingBox)) {
      return;
    }

    const position = geometry.attributes.position;
    const index = geometry.index;
    const maxScale = Math.max(mesh.matrixWorld.getMaxScaleOnAxis(), 1e-9);
    const localEpsilon = tolerance / maxScale;
    const triangleCount = index
      ? Math.floor(index.count / 3)
      : Math.floor(position.count / 3);
    const components = triangleComponents.get(mesh);

    for (let triangle = 0; triangle < triangleCount; triangle++) {
      const indexA = index ? index.getX(triangle * 3) : triangle * 3;
      const indexB = index ? index.getX(triangle * 3 + 1) : triangle * 3 + 1;
      const indexC = index ? index.getX(triangle * 3 + 2) : triangle * 3 + 2;

      a.fromBufferAttribute(position, indexA);
      b.fromBufferAttribute(position, indexB);
      c.fromBufferAttribute(position, indexC);

      const intersection = intersectTriangleWithPlane(
        a,
        b,
        c,
        localPlane,
        localEpsilon
      );
      if (!intersection) continue;

      worldStart
        .set(intersection[0].x, intersection[0].y, intersection[0].z)
        .applyMatrix4(mesh.matrixWorld);
      worldEnd
        .set(intersection[1].x, intersection[1].y, intersection[1].z)
        .applyMatrix4(mesh.matrixWorld);

      if (worldStart.distanceToSquared(worldEnd) > tolerance * tolerance) {
        addSegment(
          worldStart,
          worldEnd,
          mesh,
          components?.[triangle] ?? -1
        );
      }
    }
  });

  return {
    points,
    pointComponentIds,
    edges,
    rawSegmentPositions,
    intersectedMeshes,
    intersectedComponents
  };
}
