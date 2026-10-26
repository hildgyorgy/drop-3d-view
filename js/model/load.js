/*
   OPEN / DRAG & DROP / OPEN MODEL / PREPARE MODEL / DISPOSE MODEL

   A fájl-megnyitás teljes életciklusa: fájl kiválasztása
   (gombbal vagy drag&drop-pal), GLB betöltés,
   a modell előkészítése (középre igazítás, élek, talaj,
   nap, kamera ráállítás), majd - új fájl nyitásakor vagy
   bezáráskor - a korábbi modell rendes eltávolítása.
*/

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

import { State } from "../core/state.js";
import { scene } from "../core/scene.js";
import { demoModelUrl } from "../core/demo-source.js";
import { createLatestRequestGate } from "../core/latest-request.js";
import { restoreCurrentViewSession } from "../core/session-runtime.js";
import { forEachMesh } from "../core/model-utils.js";
import {
  startScreen,
  showAllButton,
  openButton,
  demoButton,
  demo2Button,
  openAgain,
  fileInput,
  sunAngle,
  sunHeight
} from "../core/dom.js";
import {
  whiteMaterial,
  wireMaterial,
  edgeMaterial,
  renaissanceMaterial,
  renaissanceGlassMaterial,
  isWhiteMaterialVariant,
  disposeWhiteMaterialVariants,
  isRenaissanceCutoutMaterial,
  disposeRenaissanceCutoutMaterials,
  sectionCapMaterial
} from "../model/materials.js";
import { centreModel, fitCamera, applyExportedInitialView } from "../view/camera.js";
import { zoomAllImmediately } from "../view/show-all.js";
import { readDropViewMetadata, readWindowLightEmitters } from "./drop-view-metadata.js";
import { isGlbFile } from "./file-format.js";
import { stageModelReplacement } from "./model-replacement.js";
import { applyMaterialVariant } from "./material-variants.js";
import { disposeDetachedModel, disposeModelResources } from "./model-resource-disposal.js";
import { buildEdges } from "../view/edges.js";
import { createGround, configureSun, applyImportedSun } from "../view/ground-sun.js";
import { configureWindowLights, clearWindowLights } from "../view/window-lights.js";
import { inspectModel } from "../ui/inspector.js";
import { showDesignCredits } from "../ui/design-credits.js";
import { buildGroupFilter, clearGroupFilter } from "../ui/group-filter.js";
import { setViewMode } from "../view/view-modes.js";
import { setStatus, resetStartMessage, showStartError } from "../ui/status.js";
import { disposeSectionCap } from "../section/section-cap.js";
import { updateSectionPlane } from "../section/section-plane.js";
import { deactivatePhoto1, updatePhoto1Availability } from "../view/photo1.js";

/*
   Draco decoder for compressed GLB files.
   Decoder files load on demand from the pinned Three.js CDN version.
   The build intentionally omits unused local decoder copies.
*/
const dracoLoader = new DRACOLoader();
const modelOpenGate = createLatestRequestGate();

dracoLoader.setDecoderPath(
  "https://cdn.jsdelivr.net/npm/three@0.186.0/examples/jsm/libs/draco/"
);

function reportOpenFailure(startMessage, retainedMessage) {
  if (State.model) {
    startScreen.classList.add("hidden");
    setStatus(retainedMessage);
  } else {
    showStartError(startMessage);
  }
}

function preserveGLTFGroupLabels(result) {
  const parser = result.parser;
  const nodes = parser?.json?.nodes || [];
  const sceneNodeIndexes = parser?.json?.scenes?.[parser.json.scene ?? 0]?.nodes || [];

  result.scene.children.forEach((object, index) => {
    const association = parser?.associations?.get(object);
    const nodeIndex = association?.nodes ?? sceneNodeIndexes[index];
    const sourceName = nodes[nodeIndex]?.name;

    if (sourceName) object.userData.groupLabel = sourceName;
  });
}

/* ======================================================
   OPEN
====================================================== */

openButton.onclick = openAgain.onclick = () => {
  fileInput.value = "";

  fileInput.click();
};

const demoButtons = [demoButton, demo2Button].filter(Boolean);
for (const [button, url] of [
  [demoButton, demoModelUrl],
  [demo2Button, "demo/demo_house_2.glb"]
]) {
  if (!button) continue;
  button.onclick = async () => {
    const request = modelOpenGate.begin();
    demoButtons.forEach(item => {
      item.disabled = true;
    });

    resetStartMessage();

    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error(`Demo model request failed (${response.status})`);

      const blob = await response.blob();
      if (!request.isCurrent()) return;

      await openFile(
        new File([blob], url.split("/").at(-1), { type: "application/octet-stream" }),
        { request }
      );
    } catch (error) {
      if (!request.isCurrent()) return;
      console.error(error);

      reportOpenFailure(
        "THE DEMO MODEL COULD NOT BE OPENED. PLEASE TRY AGAIN.",
        "THE DEMO MODEL COULD NOT BE OPENED · CURRENT MODEL KEPT"
      );
    } finally {
      demoButtons.forEach(item => {
        item.disabled = false;
      });
    }
  };
}

fileInput.addEventListener("change", event => {
  const file = event.target.files?.[0];

  if (file) openFile(file);
});

/* ======================================================
   DRAG & DROP
====================================================== */

window.addEventListener("dragover", event => {
  event.preventDefault();

  document.body.classList.add("dragging");
});

window.addEventListener("dragleave", () => {
  document.body.classList.remove("dragging");
});

window.addEventListener("drop", event => {
  event.preventDefault();

  document.body.classList.remove("dragging");

  const file = event.dataTransfer.files?.[0];

  if (file) openFile(file);
});

/* ======================================================
   OPEN MODEL
====================================================== */

export async function openFile(file, { viewSession = null, request = null } = {}) {
  request ??= modelOpenGate.begin();
  resetStartMessage();

  if (!isGlbFile(file)) {
    reportOpenFailure(
      "UNSUPPORTED FILE FORMAT. PLEASE USE A GLB FILE.",
      "UNSUPPORTED FILE FORMAT · CURRENT MODEL KEPT"
    );

    return false;
  }

  setStatus(`Opening ${file.name}…`);

  startScreen.classList.add("hidden");

  const objectUrl = URL.createObjectURL(file);
  let result = null;
  let replacementStarted = false;

  try {
    const opened = await stageModelReplacement({
      stage: async () => {
        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        result = await loader.loadAsync(objectUrl);
        if (new URLSearchParams(location.search).has("rendererDebug"))
          await applyMaterialVariant(result, "Maxon / Redshift PBR");
        preserveGLTFGroupLabels(result);
        const metadata = readDropViewMetadata(result);
        metadata.windowLightEmitters = readWindowLightEmitters(result);
        return { result, metadata };
      },
      isCurrent: request.isCurrent,
      disposeStale: candidate => disposeDetachedModel(candidate.result.scene),
      commit: candidate => {
        replacementStarted = true;
        disposeCurrentModel();
        State.currentFileName = file.name;
        State.currentFile = file;
        prepareModel(candidate.result.scene, file, candidate.result, candidate.metadata);
      }
    });
    if (!opened) return false;
    window.dispatchEvent(new CustomEvent("dropview:model-loaded", { detail: { gltf: result, file } }));
    if (viewSession) {
      try {
        restoreCurrentViewSession(viewSession);
      } catch (error) {
        // A bad handoff must not discard a successfully opened model.
        console.warn("Saved view could not be restored; using the fitted view", error);
      }
    }
    return true;
  } catch (error) {
    // A stale request must never clear a newer model or overwrite its status.
    if (!request.isCurrent()) {
      if (result?.scene) disposeDetachedModel(result.scene);
      return false;
    }
    console.error(error);

    if (result?.scene && State.model !== result.scene)
      disposeDetachedModel(result.scene);
    if (replacementStarted) disposeCurrentModel();
    reportOpenFailure(
      "THE MODEL COULD NOT BE OPENED. PLEASE TRY ANOTHER FILE.",
      `COULD NOT OPEN ${file.name} · CURRENT MODEL KEPT`
    );
    return false;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

/* ======================================================
   PREPARE MODEL
====================================================== */

export function prepareModel(object, file, gltf = null, metadata = {}) {
  State.model = object;

  State.originalMaterials.clear();

  forEachMesh(State.model, node => {
    node.castShadow = true;
    node.receiveShadow = true;

    const materials = Array.isArray(node.material) ? node.material : [node.material];

    materials.forEach(material => {
      if (!material) return;
      material.side = THREE.DoubleSide;
      material.needsUpdate = true;
    });

    State.originalMaterials.set(node.uuid, node.material);
  });

  scene.add(State.model);

  buildGroupFilter(State.model);

  const modelTranslation = centreModel();

  configureWindowLights(metadata.windowLightEmitters, modelTranslation);

  buildEdges();

  createGround();

  inspectModel(file);

  fitCamera();
  if (gltf && metadata.initialView) {
    try {
      // Keep the exported viewing direction and projection, but show the whole
      // model before the first frame instead of opening on a close-up.
      if (
        !applyExportedInitialView(gltf, metadata.initialView, modelTranslation) ||
        !zoomAllImmediately()
      )
        fitCamera();
    } catch (error) {
      console.warn("Exported camera could not be applied; using the fitted view", error);
      fitCamera();
    }
  }
  // The exported direction is in model coordinates, so apply it after the
  // model's final transform and the exported camera target have been set.
  if (metadata.sun) {
    try {
      if (!applyImportedSun(metadata.sun)) {
        console.warn("Invalid exported sun direction; using the viewer default");
        configureSun();
      }
    } catch (error) {
      console.warn("Exported sun could not be applied; using the viewer default", error);
      configureSun();
    }
  } else {
    configureSun();
  }
  showDesignCredits(metadata.designCredits);
  updateSectionPlane();

  setViewMode(State.currentMode);

  showAllButton.hidden = false;

  setStatus(`${file.name} · drag to orbit · scroll/pinch to zoom`);
  updatePhoto1Availability();
}

export function disposeCurrentModel() {
  const workbenchMaterials = new Set();
  const workbenchGeometries = new Set();
  if (new URLSearchParams(location.search).has("rendererDebug"))
    window.dispatchEvent(new CustomEvent("dropview:model-cleared", {
      detail: { materials: workbenchMaterials, geometries: workbenchGeometries }
    }));
  deactivatePhoto1({ restoreStatus: false });
  clearWindowLights();
  if (State.hasImportedSun) {
    sunAngle.value = "45";
    sunHeight.min = "5";
    sunHeight.max = "85";
    sunHeight.value = "45";
  }
  State.exportedSun = null;
  State.hasImportedSun = false;
  showDesignCredits("");
  showAllButton.hidden = true;
  clearGroupFilter();
  ++State.cameraAnimation;

  State.currentFileName = null;
  State.currentFile = null;
  updatePhoto1Availability();

  if (!State.model) {
    disposeModelResources(null, {
      materials: workbenchMaterials,
      geometries: workbenchGeometries
    });
    disposeWhiteMaterialVariants();
    disposeRenaissanceCutoutMaterials();
    return;
  }

  if (State.sectionCapFrame !== null) {
    cancelAnimationFrame(State.sectionCapFrame);
    State.sectionCapFrame = null;
  }

  disposeSectionCap();
  State.model.parent?.remove(State.model);

  disposeModelResources(State.model, {
    materials: [...State.originalMaterials.values(), ...workbenchMaterials],
    geometries: workbenchGeometries,
    excludedMaterials: [
      whiteMaterial,
      wireMaterial,
      renaissanceMaterial,
      renaissanceGlassMaterial,
      sectionCapMaterial
    ],
    excludeMaterial: material =>
      isWhiteMaterialVariant(material) || isRenaissanceCutoutMaterial(material)
  });

  disposeWhiteMaterialVariants();
  disposeRenaissanceCutoutMaterials();

  if (State.edgeGroup) {
    State.edgeGroup.parent?.remove(State.edgeGroup);
    disposeModelResources(State.edgeGroup, { excludedMaterials: [edgeMaterial] });

    State.edgeGroup = null;
  }

  if (State.ground) {
    scene.remove(State.ground);

    State.ground.geometry.dispose();

    State.ground.material.dispose();

    State.ground = null;
  }

  State.originalMaterials.clear();

  State.originalCastShadow.clear();

  State.sectionTriangleComponents = new WeakMap();

  State.sectionTopologyComponentCount = 0;

  State.sectionTopologyReady = false;

  State.model = null;
}
