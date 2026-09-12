import {
  panelButton, sidePanel, orthoButton, orthoMenu,
  sectionMenuButton, sectionMenu,
  perspectiveButton, axonButton
} from "../core/dom.js";

const menus = [
  { button: panelButton, panel: sidePanel, dock: panelButton.closest(".controls-dock") },
  { button: orthoButton, panel: orthoMenu, dock: orthoButton.closest(".view-dock") },
  { button: sectionMenuButton, panel: sectionMenu, dock: sectionMenuButton.closest(".section-dock") }
];

function setMenu(menu, open) {
  menu.panel.hidden = !open;
  menu.button.setAttribute("aria-expanded", String(open));
}

for (const menu of menus) {
  setMenu(menu, false);
  menu.button.addEventListener("click", () => {
    // On phones only one expanded menu should occupy the canvas.
    if (menu.panel.hidden && window.matchMedia("(max-width: 600px)").matches)
      menus.filter(other => other !== menu).forEach(other => setMenu(other, false));
    setMenu(menu, menu.panel.hidden);
  });
}

[perspectiveButton, axonButton].forEach(button => {
  button.addEventListener("click", () => setMenu(menus[1], false));
});

document.addEventListener("pointerdown", event => {
  if (menus.some(menu => menu.dock.contains(event.target))) return;
  menus.forEach(menu => {
    if (!menu.panel.hidden && !menu.dock.contains(event.target))
      setMenu(menu, false);
  });
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  menus.forEach(menu => {
    if (menu.panel.contains(document.activeElement)) menu.button.focus();
    setMenu(menu, false);
  });
});
