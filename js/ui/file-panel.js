/* GLB file tools and the separate experimental Blender render tools. */

export function bindFilePanel({ openPackage }) {
  const entry = document.querySelector("#openAgain");
  const dialog = document.querySelector("#filePanel");
  const renderEntry = document.querySelector("#blenderRenderEntry");
  const renderDialog = document.querySelector("#blenderRenderPanel");
  const $ = selector => document.querySelector(selector);
  const tabs = [...renderDialog.querySelectorAll("[role=tab]")];
  const panes = [...renderDialog.querySelectorAll("[role=tabpanel]")];
  const modelInput = document.querySelector("#fileInput");
  const packageInput = $("#renderPackageInput");
  const packageStatus = $("#renderPackageStatus");
  let openingPackage = false;

  function selectTab(name, focus = false) {
    for (const tab of tabs) {
      const selected = tab.dataset.tab === name;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    }
    for (const pane of panes) pane.hidden = pane.dataset.pane !== name;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab.dataset.tab));
    tab.addEventListener("keydown", event => {
      let target;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") target = 1 - index;
      else if (event.key === "Home") target = 0;
      else if (event.key === "End") target = 1;
      else return;
      event.preventDefault();
      event.stopPropagation();
      selectTab(tabs[target].dataset.tab, true);
    });
  });

  entry.addEventListener("click", () => {
    renderDialog.close();
    if (!dialog.open) dialog.show();
  });
  renderEntry.hidden = false;
  renderEntry.addEventListener("click", () => {
    dialog.close();
    if (renderDialog.open) renderDialog.close();
    else {
      renderDialog.show();
      renderEntry.setAttribute("aria-pressed", "true");
    }
  });
  renderDialog.addEventListener("close", () => {
    renderEntry.setAttribute("aria-pressed", "false");
  });
  for (const panel of [dialog, renderDialog]) {
    panel.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      panel.close();
    });
    panel.querySelector("[data-close]").addEventListener("click", () => panel.close());
  }

  $("#openModelFile").addEventListener("click", () => {
    modelInput.value = "";
    modelInput.click();
  });
  modelInput.addEventListener("change", () => {
    if (modelInput.files?.length) dialog.close();
  });

  $("#openRenderPackage").addEventListener("click", () => {
    if (openingPackage) return;
    packageInput.value = "";
    packageInput.click();
  });
  packageInput.addEventListener("change", async () => {
    const file = packageInput.files?.[0];
    if (!file || openingPackage) return;
    openingPackage = true;
    packageStatus.textContent = "OPENING PACKAGE…";
    try {
      await openPackage(file);
      packageStatus.textContent = "";
      renderDialog.close();
    } catch (error) {
      packageStatus.textContent = `COULD NOT OPEN PACKAGE: ${error.message}`;
    } finally {
      openingPackage = false;
    }
  });
}
