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

  /*
     Távolításkor álljunk meg még a kamera far vágósíkja
     előtt, így a modell nem tud egyszerűen eltűnni.
  */

  c.maxDistance =
    cam.far * .8;

  /*
     Az ortografikus kamerák távolítása nem a kamera
     mozgatásával, hanem a zoom csökkentésével történik.
  */

  c.minZoom =
    .1;

  c.minPolarAngle =
    .02;

  /*
     A horizont alá legfeljebb 30 fokkal lehessen
     befordulni. Így az alsó csatlakozások is megnézhetők,
     de a kamera nem tud teljesen a modell alá kerülni.
  */

  c.maxPolarAngle =
    Math.PI * 2 / 3;

  return c;

}
