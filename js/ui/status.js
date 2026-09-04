/*
   STATUS / ESCAPE HTML

   A képernyő alján megjelenő státusz-üzenet, valamint egy
   apró biztonsági segédfüggvény, ami megakadályozza, hogy
   egy fájlnévbe rejtett HTML kód lefusson a felületen.
*/

import { statusElement, startScreen } from "../core/dom.js";

const startMessage = document.querySelector("#startMessage");
const privacyMessage = startMessage.textContent;

export function resetStartMessage() {
  startMessage.textContent = privacyMessage;
  startMessage.classList.remove("error");
}

export function showStartError(text) {
  startMessage.textContent = text;
  startMessage.classList.add("error");
  startScreen.classList.remove("hidden");
}


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
