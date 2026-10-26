import { isObjectVisibleInHierarchy } from "../model/groups.js";

export function isVisibleRaycastHit(hit, {
  model,
  sectionEnabled = false,
  sectionPlane = null
} = {}) {
  if (!hit?.object || !hit.point || !isObjectVisibleInHierarchy(hit.object, model))
    return false;
  return !sectionEnabled || sectionPlane?.distanceToPoint(hit.point) >= 0;
}

export function firstVisibleRaycastHit(hits, options) {
  return hits.find(hit => isVisibleRaycastHit(hit, options)) || null;
}
