/* Pure triangle/plane intersection used by the section segment collector. */

function clonePoint(point) {
  return { x: point.x, y: point.y, z: point.z };
}

function lerpPoints(a, b, t) {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t
  };
}

function distanceSquared(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  const z = a.z - b.z;
  return x * x + y * y + z * z;
}

export function intersectTriangleWithPlane(p0, p1, p2, plane, epsilon) {
  const intersections = [];
  const vertices = [p0, p1, p2];

  for (let i = 0; i < 3; i++) {
    const point = vertices[i];
    const nextPoint = vertices[(i + 1) % 3];
    const pointDistance = plane.distanceToPoint(point);
    const nextDistance = plane.distanceToPoint(nextPoint);
    const pointOnPlane = Math.abs(pointDistance) <= epsilon;
    const nextOnPlane = Math.abs(nextDistance) <= epsilon;

    // Skip the edge itself; its endpoints may still be collected from the
    // triangle's other two edges, matching the viewer's established behavior.
    if (pointOnPlane && nextOnPlane) continue;

    let intersection = null;
    if (pointOnPlane) intersection = clonePoint(point);
    else if (nextOnPlane) intersection = clonePoint(nextPoint);
    else if (pointDistance * nextDistance < 0) {
      const t = pointDistance / (pointDistance - nextDistance);
      intersection = lerpPoints(point, nextPoint, t);
    }

    if (!intersection) continue;

    const duplicate = intersections.some(
      existing => distanceSquared(existing, intersection) <= epsilon * epsilon
    );
    if (!duplicate) intersections.push(intersection);
  }

  if (intersections.length < 2) return null;

  let bestA = 0;
  let bestB = 1;
  let bestDistance = -1;

  for (let i = 0; i < intersections.length; i++) {
    for (let j = i + 1; j < intersections.length; j++) {
      const candidateDistance = distanceSquared(intersections[i], intersections[j]);
      if (candidateDistance > bestDistance) {
        bestDistance = candidateDistance;
        bestA = i;
        bestB = j;
      }
    }
  }

  return [intersections[bestA], intersections[bestB]];
}
