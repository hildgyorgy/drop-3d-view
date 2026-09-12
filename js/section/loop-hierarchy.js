/* Classifies nested section loops as filled islands and holes. */

import { pointInPolygon, signedPolygonArea } from "./polygon-utils.js";

export function classifyLoopHierarchy(loops, getInteriorPoint) {
  const loopData = loops.map(entry => ({
    loop: entry.points,
    componentId: entry.componentId,
    sample: getInteriorPoint(entry.points),
    area: Math.abs(signedPolygonArea(entry.points)),
    depth: 0,
    parent: -1
  }));

  for (let i = 0; i < loopData.length; i++) {
    let depth = 0;
    let parent = -1;
    let parentArea = Infinity;

    for (let j = 0; j < loopData.length; j++) {
      if (i === j) continue;
      if (loopData[j].componentId !== loopData[i].componentId) continue;
      if (loopData[j].area <= loopData[i].area) continue;

      if (pointInPolygon(loopData[i].sample, loopData[j].loop)) {
        depth++;
        if (loopData[j].area < parentArea) {
          parent = j;
          parentArea = loopData[j].area;
        }
      }
    }

    loopData[i].depth = depth;
    loopData[i].parent = parent;
  }

  return loopData;
}
