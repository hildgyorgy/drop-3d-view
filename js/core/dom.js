/*
   DOM

   Az összes olyan HTML elem, amit a JS közvetlenül
   használ (gombok, csúszkák, kijelzők). Minden más
   modul innen importálja őket, ha kellenek neki.
*/


/* ======================================================
   DOM
====================================================== */

export const startScreen =
  document.querySelector("#startScreen");

export const openButton =
  document.querySelector("#openButton");

export const openAgain =
  document.querySelector("#openAgain");

export const fileInput =
  document.querySelector("#fileInput");

export const sidePanel =
  document.querySelector("#sidePanel");

export const panelButton =
  document.querySelector("#panelButton");

export const perspectiveButton =
  document.querySelector("#perspectiveButton");

export const axonButton =
  document.querySelector("#axonButton");

export const sectionButton =
  document.querySelector("#sectionButton");

export const sunAngle =
  document.querySelector("#sunAngle");

export const sunHeight =
  document.querySelector("#sunHeight");

export const shadowToggle =
  document.querySelector("#shadowToggle");

export const lightSection =
  document.querySelector("#lightSection");

export const sectionSlider =
  document.querySelector("#sectionSlider");

export const sectionFlip =
  document.querySelector("#sectionFlip");

export const sectionDebug =
  document.querySelector("#sectionDebug");

export const sectionFill =
  document.querySelector("#sectionFill");

export const sectionColorButtons =
  document.querySelectorAll("[data-section-color]");

export const sectionDebugStats =
  document.querySelector("#sectionDebugStats");

export const statusElement =
  document.querySelector("#status");

export const modelStats =
  document.querySelector("#modelStats");

export const materialList =
  document.querySelector("#materialList");
