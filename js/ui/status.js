/*
   STATUS / ESCAPE HTML

   A képernyő alján megjelenő státusz-üzenet, valamint egy
   apró biztonsági segédfüggvény, ami megakadályozza, hogy
   egy fájlnévbe rejtett HTML kód lefusson a felületen.
*/

import { statusElement } from "../core/dom.js";


export function setStatus(text) {

  if (!statusElement)
    return;

  statusElement.textContent =
    text;


  statusElement.style.opacity =
    "1";


  clearTimeout(
    setStatus.timeout
  );


  setStatus.timeout =
    setTimeout(
      () => {

        statusElement.style.opacity =
          ".38";

      },
      5000
    );

}



/* ======================================================
   ESCAPE HTML
====================================================== */

export function escapeHTML(text) {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    text;


  return div.innerHTML;

}
