/* Generic top-level model group list for every supported exporter grouping. */

import { State } from "../core/state.js";
import {
  groupMenu,
  groupMenuButton,
  groupList,
  showAllGroupsButton,
  hideAllGroupsButton
} from "../core/dom.js";
import { createModelGroups, setModelGroupVisible } from "../model/groups.js";
import { syncEdgeGroupVisibility } from "../view/edges.js";
import { scheduleSectionCapRebuild } from "../section/section-cap.js";

let groups = [];

function refreshDerivedGeometry() {
  syncEdgeGroupVisibility();
  if (State.sectionEnabled) scheduleSectionCapRebuild();
}

function updateGroup(group, visible, checkbox) {
  setModelGroupVisible(group, visible);
  if (checkbox) checkbox.checked = visible;
}

function setAllGroupsVisible(visible) {
  groups.forEach(group => updateGroup(group, visible, group.checkbox));
  refreshDerivedGeometry();
}

function renderGroupList() {
  groupList.replaceChildren();

  groups.forEach(group => {
    const item = document.createElement("label");
    item.className = "group-filter-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = group.visible;
    checkbox.setAttribute("aria-label", group.displayLabel);
    checkbox.addEventListener("change", () => {
      updateGroup(group, checkbox.checked, checkbox);
      refreshDerivedGeometry();
    });

    const label = document.createElement("span");
    label.textContent = group.displayLabel;
    label.title = group.displayLabel;

    group.checkbox = checkbox;
    item.append(checkbox, label);
    groupList.appendChild(item);
  });
}

export function buildGroupFilter(model) {
  groups = createModelGroups(model);
  renderGroupList();
  groupMenuButton.hidden = groups.length === 0;
}

export function clearGroupFilter() {
  groups = [];
  groupList.replaceChildren();
  groupMenu.hidden = true;
  groupMenuButton.hidden = true;
  groupMenuButton.setAttribute("aria-expanded", "false");
}

export function applyGroupVisibility() {
  groups.forEach(group => setModelGroupVisible(group, group.visible));
  syncEdgeGroupVisibility();
}

showAllGroupsButton.addEventListener("click", () => setAllGroupsVisible(true));
hideAllGroupsButton.addEventListener("click", () => setAllGroupsVisible(false));
