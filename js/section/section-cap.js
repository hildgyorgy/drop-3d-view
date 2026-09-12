/*
   SECTION CAP ORCHESTRATOR

   Keeps the section pipeline readable while the individual geometry,
   topology, fill and rendering steps live in focused modules.
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { scene } from "../core/scene.js";
import { sectionDebug, sectionDebugStats, sectionFill } from "../core/dom.js";
import { buildPlanarLoops } from "./planar-graph.js";
import { collectSectionSegments } from "./section-segments.js";
import { createSectionFillPositions } from "./section-fill.js";
import { createSectionGroup, disposeSectionGroup } from "./section-renderer.js";
import { buildSectionTopology } from "./topology.js";

export function scheduleSectionCapRebuild() {
  if (State.sectionCapFrame !== null) return;

  State.sectionCapFrame = requestAnimationFrame(() => {
    State.sectionCapFrame = null;
    rebuildSectionCap();
  });
}

export function disposeSectionCap() {
  sectionDebugStats.textContent = "";
  if (!State.sectionCapGroup) return;

  scene.remove(State.sectionCapGroup);
  disposeSectionGroup(State.sectionCapGroup);
  State.sectionCapGroup = null;
}

export function rebuildSectionCap() {
  disposeSectionCap();

  if (!State.sectionEnabled || !State.model || !State.modelBounds) return;

  State.model.updateMatrixWorld(true);

  const worldTolerance = Math.max(State.maxModelSize * 1e-5, 1e-6);
  const planeOrigin = State.sectionPlane.coplanarPoint(new THREE.Vector3());
  const planeNormal = State.sectionPlane.normal.clone().normalize();

  // Stable 2D coordinate system on the active section plane.
  const helper =
    Math.abs(planeNormal.y) < 0.9
      ? new THREE.Vector3(0, 1, 0)
      : new THREE.Vector3(1, 0, 0);
  const axisU = new THREE.Vector3().crossVectors(helper, planeNormal).normalize();
  const axisV = new THREE.Vector3().crossVectors(planeNormal, axisU).normalize();

  const debugEnabled = sectionDebug.checked;
  const needsPlanarGraph = sectionFill.checked || debugEnabled;

  if (needsPlanarGraph && !State.sectionTopologyReady) {
    buildSectionTopology();
  }

  const {
    points: points2D,
    pointComponentIds,
    edges,
    rawSegmentPositions,
    intersectedMeshes,
    intersectedComponents
  } = collectSectionSegments({
    model: State.model,
    sectionPlane: State.sectionPlane,
    triangleComponents: State.sectionTriangleComponents,
    planeOrigin,
    axisU,
    axisV,
    tolerance: worldTolerance,
    collectGraph: needsPlanarGraph,
    includeDiagnostics: debugEnabled
  });

  let loops = [];
  let degrees = [];
  let degree1Count = 0;
  let branchCount = 0;
  let openChainCount = 0;

  if (needsPlanarGraph) {
    ({ loops, degrees, degree1Count, branchCount, openChainCount } = buildPlanarLoops({
      points: points2D,
      pointComponentIds,
      edges,
      tolerance: worldTolerance,
      includeDiagnostics: debugEnabled
    }));
  }

  const positions = sectionFill.checked
    ? createSectionFillPositions({ loops, planeOrigin, axisU, axisV })
    : [];

  State.sectionCapGroup = createSectionGroup({
    fillEnabled: sectionFill.checked,
    fillPositions: positions,
    rawSegmentPositions,
    debugEnabled,
    points: points2D,
    degrees,
    planeOrigin,
    axisU,
    axisV
  });

  if (debugEnabled) {
    sectionDebugStats.textContent = [
      `intersected meshes  ${intersectedMeshes.size}`,
      `surface components  ${State.sectionTopologyComponentCount}`,
      `cut components      ${intersectedComponents.size}`,
      `raw segments        ${rawSegmentPositions.length / 6}`,
      `graph edges         ${edges.size}`,
      `graph nodes         ${points2D.length}`,
      `closed loops        ${loops.length}`,
      `cap triangles       ${positions.length / 9}`,
      `open chains         ${openChainCount}`,
      `degree-1 nodes      ${degree1Count}`,
      `degree >2 nodes     ${branchCount}`
    ].join("\n");
  }

  scene.add(State.sectionCapGroup);
}
