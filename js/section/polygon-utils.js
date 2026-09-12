/*
   PURE 2D POLYGON HELPERS

   These functions intentionally have no Three.js or DOM dependency, so the
   section algorithm can be tested without starting the viewer.
*/

export function signedPolygonArea(polygon) {
  let area = 0;

  for (
    let previous = polygon.length - 1, current = 0;
    current < polygon.length;
    previous = current++
  ) {
    const a = polygon[previous];
    const b = polygon[current];
    area += a.x * b.y - b.x * a.y;
  }

  return area * 0.5;
}

export function pointInPolygon(point, polygon) {
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const pi = polygon[i];
    const pj = polygon[j];

    const intersects =
      pi.y > point.y !== pj.y > point.y &&
      point.x < ((pj.x - pi.x) * (point.y - pi.y)) / (pj.y - pi.y) + pi.x;

    if (intersects) inside = !inside;
  }

  return inside;
}
