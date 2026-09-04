/*
   STATE

   Ez a fájl az alkalmazás közös, változó állapotát tartja:
   melyik modell van betöltve, melyik kamera aktív, hol tart
   a metszősík, stb. Minden más fájl ezt importálja, ha
   ilyesmit kell olvasnia vagy módosítania - így nem kell
   találgatni, melyik fájlban "lakik" éppen egy érték.
*/

import * as THREE from "three";
import { perspectiveCamera } from "./scene.js";
import { createControls } from "./controls.js";

export const State = {

  // --- kamera ---
  camera: perspectiveCamera,
  cameraMode: "perspective",
  cameraProjection: "perspective",
  controls: createControls(perspectiveCamera),

  // --- betöltött modell ---
  model: null,
  modelSize: new THREE.Vector3(),
  modelCenter: new THREE.Vector3(),
  modelBounds: null,
  maxModelSize: 10,
  currentObjectURL: null,
  currentMode: "original",

  // --- metszés (section) ---
  sectionEnabled: false,
  sectionAxis: "y",
  sectionPlane: new THREE.Plane(
    new THREE.Vector3(0, -1, 0),
    0
  ),
  sectionTriangleComponents: new WeakMap(),
  sectionTopologyComponentCount: 0,
  sectionCapGroup: null,
  sectionCapFrame: null,

  // --- egyéb megjelenítési állapot ---
  originalMaterials: new Map(),
  originalCastShadow: new Map(),
  edgeGroup: null,
  ground: null

};
