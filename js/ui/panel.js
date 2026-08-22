/*
   PANEL

   Az oldalsó infópanel meg- és elrejtése.
*/

import { panelButton, sidePanel } from "../core/dom.js";


/* ======================================================
   PANEL
====================================================== */

panelButton.addEventListener(
  "click",
  () => {

    sidePanel.classList.toggle(
      "hidden"
    );


    panelButton.classList.toggle(
      "active"
    );

  }
);
