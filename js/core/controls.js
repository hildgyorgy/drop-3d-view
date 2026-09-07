/*
   CONTROLS

   Az OrbitControls (kamera-mozgatás egérrel/érintéssel)
   gyártó függvénye. Azért függvény és nem egyetlen
   példány, mert amikor kamerát váltunk (perspektív <->
   axonometrikus), egy vadonatúj controls példányt kell
   csinálni az új kamerához.
*/

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { renderer } from "./scene.js";


export function createControls(cam) {

  const isTouchInterface =
    window.matchMedia?.("(pointer: coarse)").matches ??
    navigator.maxTouchPoints > 0;

  const c =
    new OrbitControls(
      cam,
      renderer.domElement
    );

  c.enableDamping =
    !isTouchInterface;

  c.dampingFactor =
    .15;

  c.rotateSpeed =
    .55;

  c.zoomSpeed =
    .8;

  c.panSpeed =
    .7;

  c.screenSpacePanning =
    true;

  c.zoomToCursor =
    true;

  c.minPolarAngle =
    .02;

  c.maxPolarAngle =
    Math.PI * .495;

  return c;

}
