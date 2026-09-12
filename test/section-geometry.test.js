import test from "node:test";
import assert from "node:assert/strict";

import { pointInPolygon, signedPolygonArea } from "../js/section/polygon-utils.js";
import { buildPlanarLoops } from "../js/section/planar-graph.js";
import { splitEdgesAtExistingPoints } from "../js/section/segment-processing.js";
import { intersectTriangleWithPlane } from "../js/section/triangle-intersection.js";
import { classifyLoopHierarchy } from "../js/section/loop-hierarchy.js";

const square = [
  { x: 0, y: 0 },
  { x: 2, y: 0 },
  { x: 2, y: 2 },
  { x: 0, y: 2 }
];

function edgeMap(pairs) {
  return new Map(
    pairs.map(([a, b]) => {
      const low = Math.min(a, b);
      const high = Math.max(a, b);
      return [`${low}:${high}`, [low, high]];
    })
  );
}

test("signedPolygonArea preserves contour orientation", () => {
  assert.equal(signedPolygonArea(square), 4);
  assert.equal(signedPolygonArea([...square].reverse()), -4);
});

test("pointInPolygon distinguishes inside and outside points", () => {
  assert.equal(pointInPolygon({ x: 1, y: 1 }, square), true);
  assert.equal(pointInPolygon({ x: 3, y: 1 }, square), false);
});

test("buildPlanarLoops finds one positive square cell", () => {
  const result = buildPlanarLoops({
    points: square,
    pointComponentIds: [7, 7, 7, 7],
    edges: edgeMap([
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0]
    ]),
    tolerance: 1e-6,
    includeDiagnostics: true
  });

  assert.equal(result.loops.length, 1);
  assert.equal(result.loops[0].componentId, 7);
  assert.equal(result.loops[0].points.length, 4);
  assert.equal(result.degree1Count, 0);
  assert.equal(result.branchCount, 0);
  assert.equal(result.openChainCount, 0);
});

test("buildPlanarLoops ignores an open chain and reports it", () => {
  const result = buildPlanarLoops({
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 }
    ],
    pointComponentIds: [1, 1, 1],
    edges: edgeMap([
      [0, 1],
      [1, 2]
    ]),
    tolerance: 1e-6,
    includeDiagnostics: true
  });

  assert.equal(result.loops.length, 0);
  assert.equal(result.degree1Count, 2);
  assert.equal(result.openChainCount, 1);
});

test("splitEdgesAtExistingPoints splits a segment at a real endpoint", () => {
  const edges = edgeMap([
    [0, 1],
    [2, 3]
  ]);

  const splitCount = splitEdgesAtExistingPoints(
    [
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 }
    ],
    edges,
    1e-6
  );

  assert.equal(splitCount, 1);
  assert.deepEqual([...edges.keys()].sort(), ["0:2", "1:2", "2:3"]);
});

const xPlane = {
  distanceToPoint(point) {
    return point.x;
  }
};

test("intersectTriangleWithPlane returns the crossing segment", () => {
  const segment = intersectTriangleWithPlane(
    { x: -1, y: 0, z: 0 },
    { x: 1, y: 0, z: 0 },
    { x: 1, y: 2, z: 0 },
    xPlane,
    1e-6
  );

  assert.deepEqual(segment, [
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 }
  ]);
});

test("intersectTriangleWithPlane handles one vertex on the plane", () => {
  const segment = intersectTriangleWithPlane(
    { x: 0, y: 0, z: 0 },
    { x: -1, y: 1, z: 0 },
    { x: 1, y: 1, z: 0 },
    xPlane,
    1e-6
  );

  assert.deepEqual(segment, [
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 }
  ]);
});

test("intersectTriangleWithPlane preserves the endpoints of a coplanar edge", () => {
  const segment = intersectTriangleWithPlane(
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 1, y: 0, z: 0 },
    xPlane,
    1e-6
  );

  assert.deepEqual(segment, [
    { x: 0, y: 1, z: 0 },
    { x: 0, y: 0, z: 0 }
  ]);
});

test("classifyLoopHierarchy identifies a hole inside the same component", () => {
  const innerSquare = [
    { x: 0.5, y: 0.5 },
    { x: 1.5, y: 0.5 },
    { x: 1.5, y: 1.5 },
    { x: 0.5, y: 1.5 }
  ];
  const hierarchy = classifyLoopHierarchy(
    [
      { points: square, componentId: 3 },
      { points: innerSquare, componentId: 3 }
    ],
    loop => loop[0]
  );

  assert.equal(hierarchy[0].depth, 0);
  assert.equal(hierarchy[0].parent, -1);
  assert.equal(hierarchy[1].depth, 1);
  assert.equal(hierarchy[1].parent, 0);
});

test("classifyLoopHierarchy keeps different components independent", () => {
  const innerSquare = [
    { x: 0.5, y: 0.5 },
    { x: 1.5, y: 0.5 },
    { x: 1.5, y: 1.5 },
    { x: 0.5, y: 1.5 }
  ];
  const hierarchy = classifyLoopHierarchy(
    [
      { points: square, componentId: 1 },
      { points: innerSquare, componentId: 2 }
    ],
    loop => loop[0]
  );

  assert.equal(hierarchy[1].depth, 0);
  assert.equal(hierarchy[1].parent, -1);
});
