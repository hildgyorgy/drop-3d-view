/*
   PLANAR SECTION GRAPH

   Converts undirected section edges into closed, consistently oriented cells.
   The module is independent from Three.js and the viewer state.
*/

import { signedPolygonArea } from "./polygon-utils.js";

function clonePoint(point) {
  return typeof point.clone === "function" ? point.clone() : { x: point.x, y: point.y };
}

function edgeKey(a, b) {
  return `${Math.min(a, b)}:${Math.max(a, b)}`;
}

function directedEdgeKey(a, b) {
  return `${a}>${b}`;
}

export function buildPlanarLoops({
  points,
  pointComponentIds,
  edges,
  tolerance,
  includeDiagnostics = false
}) {
  const neighbours = Array.from({ length: points.length }, () => new Set());

  for (const [a, b] of edges.values()) {
    neighbours[a].add(b);
    neighbours[b].add(a);
  }

  let degrees = [];
  let degree1Count = 0;
  let branchCount = 0;
  let openChainCount = 0;

  if (includeDiagnostics) {
    degrees = neighbours.map(set => set.size);
    degree1Count = degrees.filter(degree => degree === 1).length;
    branchCount = degrees.filter(degree => degree > 2).length;

    const visitedOpenEdges = new Set();

    for (let start = 0; start < neighbours.length; start++) {
      if (degrees[start] === 2) continue;

      for (const first of neighbours[start]) {
        const firstKey = edgeKey(start, first);
        if (visitedOpenEdges.has(firstKey)) continue;

        openChainCount++;
        let previous = start;
        let current = first;
        visitedOpenEdges.add(firstKey);

        while (degrees[current] === 2) {
          const next = [...neighbours[current]].find(index => index !== previous);
          if (next === undefined) break;

          const nextKey = edgeKey(current, next);
          if (visitedOpenEdges.has(nextKey)) break;

          visitedOpenEdges.add(nextKey);
          previous = current;
          current = next;
        }
      }
    }
  }

  const sortedNeighbours = neighbours.map((set, index) => {
    const point = points[index];
    return [...set].sort((a, b) => {
      const pointA = points[a];
      const pointB = points[b];
      const angleA = Math.atan2(pointA.y - point.y, pointA.x - point.x);
      const angleB = Math.atan2(pointB.y - point.y, pointB.x - point.x);
      return angleA - angleB;
    });
  });

  const visitedDirectedEdges = new Set();
  const loops = [];

  for (const [edgeA, edgeB] of edges.values()) {
    for (const [startA, startB] of [
      [edgeA, edgeB],
      [edgeB, edgeA]
    ]) {
      const startKey = directedEdgeKey(startA, startB);
      if (visitedDirectedEdges.has(startKey)) continue;

      const loopIndices = [];
      let previous = startA;
      let current = startB;
      let closed = false;
      const safetyLimit = edges.size * 2 + 10;

      for (let safety = 0; safety < safetyLimit; safety++) {
        visitedDirectedEdges.add(directedEdgeKey(previous, current));
        loopIndices.push(previous);

        const list = sortedNeighbours[current];
        if (!list || list.length === 0) break;

        const incomingIndex = list.indexOf(previous);
        if (incomingIndex < 0) break;

        const next = list[(incomingIndex - 1 + list.length) % list.length];
        previous = current;
        current = next;

        if (previous === startA && current === startB) {
          closed = true;
          break;
        }
      }

      if (!closed) continue;

      const polygon = loopIndices.map(index => clonePoint(points[index]));
      if (polygon.length < 3) continue;

      const cleaned = [];
      for (let i = 0; i < polygon.length; i++) {
        const previousPoint = polygon[(i - 1 + polygon.length) % polygon.length];
        const point = polygon[i];
        const nextPoint = polygon[(i + 1) % polygon.length];
        const firstX = point.x - previousPoint.x;
        const firstY = point.y - previousPoint.y;
        const secondX = nextPoint.x - point.x;
        const secondY = nextPoint.y - point.y;
        const cross = firstX * secondY - firstY * secondX;

        if (Math.abs(cross) > tolerance * tolerance) cleaned.push(point);
      }

      if (cleaned.length < 3) continue;

      if (signedPolygonArea(cleaned) > tolerance * tolerance * 4) {
        loops.push({
          points: cleaned,
          componentId: pointComponentIds[loopIndices[0]]
        });
      }
    }
  }

  return {
    loops,
    neighbours,
    degrees,
    degree1Count,
    branchCount,
    openChainCount
  };
}
