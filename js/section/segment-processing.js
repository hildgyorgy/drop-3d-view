/*
   DETERMINISTIC T-JUNCTION SPLITTING

   This repair step is retained for future section-fill experiments. It is not
   currently enabled by the viewer. Keeping it isolated makes that status
   explicit and lets us test it independently.
*/

export function splitEdgesAtExistingPoints(points, edges, tolerance) {
  if (edges.size < 2 || points.length < 3) return 0;

  const indices = points.map((_, index) => index);
  const byX = [...indices].sort((a, b) => points[a].x - points[b].x);
  const byY = [...indices].sort((a, b) => points[a].y - points[b].y);

  function coordinate(index, useX) {
    return useX ? points[index].x : points[index].y;
  }

  function lowerBound(order, value, useX) {
    let low = 0;
    let high = order.length;

    while (low < high) {
      const middle = (low + high) >> 1;
      if (coordinate(order[middle], useX) < value) low = middle + 1;
      else high = middle;
    }

    return low;
  }

  const rebuiltEdges = new Map();

  function addRebuiltEdge(a, b) {
    if (a === b) return;
    const low = Math.min(a, b);
    const high = Math.max(a, b);
    rebuiltEdges.set(`${low}:${high}`, [low, high]);
  }

  let splitCount = 0;

  for (const [start, end] of edges.values()) {
    const p0 = points[start];
    const p1 = points[end];
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;
    const lengthSquared = dx * dx + dy * dy;

    if (lengthSquared <= tolerance * tolerance) continue;

    const useX = Math.abs(dx) <= Math.abs(dy);
    const order = useX ? byX : byY;
    const minCoordinate =
      Math.min(useX ? p0.x : p0.y, useX ? p1.x : p1.y) - tolerance;
    const maxCoordinate =
      Math.max(useX ? p0.x : p0.y, useX ? p1.x : p1.y) + tolerance;

    const cuts = [
      { t: 0, index: start },
      { t: 1, index: end }
    ];

    for (
      let cursor = lowerBound(order, minCoordinate, useX);
      cursor < order.length;
      cursor++
    ) {
      const pointIndex = order[cursor];
      const axisCoordinate = coordinate(pointIndex, useX);

      if (axisCoordinate > maxCoordinate) break;
      if (pointIndex === start || pointIndex === end) continue;

      const point = points[pointIndex];
      if (
        point.x < Math.min(p0.x, p1.x) - tolerance ||
        point.x > Math.max(p0.x, p1.x) + tolerance ||
        point.y < Math.min(p0.y, p1.y) - tolerance ||
        point.y > Math.max(p0.y, p1.y) + tolerance
      ) {
        continue;
      }

      const cross = dx * (point.y - p0.y) - dy * (point.x - p0.x);
      if (cross * cross > tolerance * tolerance * lengthSquared) continue;

      const t =
        ((point.x - p0.x) * dx + (point.y - p0.y) * dy) /
        lengthSquared;
      const endpointMargin = tolerance / Math.sqrt(lengthSquared);

      if (t <= endpointMargin || t >= 1 - endpointMargin) continue;
      cuts.push({ t, index: pointIndex });
    }

    cuts.sort((a, b) => a.t - b.t);
    splitCount += cuts.length - 2;

    for (let i = 0; i < cuts.length - 1; i++) {
      addRebuiltEdge(cuts[i].index, cuts[i + 1].index);
    }
  }

  edges.clear();
  for (const [key, value] of rebuiltEdges) edges.set(key, value);

  return splitCount;
}
