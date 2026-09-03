/*
   OPEN / DRAG & DROP / OPEN MODEL / PREPARE MODEL / DISPOSE MODEL

   A fájl-megnyitás teljes életciklusa: fájl kiválasztása
   (gombbal vagy drag&drop-pal), betöltés (GLTF/GLB/FBX),
   a modell előkészítése (középre igazítás, élek, talaj,
   nap, kamera ráállítás), majd - új fájl nyitásakor vagy
   bezáráskor - a korábbi modell rendes eltávolítása.
*/

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

import { State } from "../core/state.js";
import { scene } from "../core/scene.js";
import {
  startScreen,
  openButton,
  demoButton,
  openAgain,
  fileInput
} from "../core/dom.js";
import {
  whiteMaterial,
  wireMaterial,
  renaissanceMaterial,
  renaissanceGlassMaterial,
  sectionCapMaterial
} from "../model/materials.js";
import { centreModel, fitCamera } from "../view/camera.js";
import { buildSectionTopology } from "../section/topology.js";
import { buildEdges } from "../view/edges.js";
import { createGround, configureSun } from "../view/ground-sun.js";
import { inspectModel } from "../ui/inspector.js";
import { setViewMode } from "../view/view-modes.js";
import { setStatus } from "../ui/status.js";
import { disposeSectionCap } from "../section/section-cap.js";


/*
   Draco decoder for compressed GLB/GLTF files.
   The decoder files are served from the same Three.js CDN version as the
   import map, so compressed geometry is transparently decoded in-browser.
*/
const dracoLoader =
  new DRACOLoader();

dracoLoader.setDecoderPath(
  "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/libs/draco/"
);


/* ======================================================
   OPEN
====================================================== */

openButton.onclick =
openAgain.onclick =
() => {

  fileInput.value =
    "";

  fileInput.click();

};


if (demoButton) {

  demoButton.onclick =
  async () => {

    demoButton.disabled =
      true;

    try {

      const response =
        await fetch(
          "demo/demo_house.glb"
        );

      if (!response.ok)
        throw new Error(
          `Demo model request failed (${response.status})`
        );

      const blob =
        await response.blob();

      await openFile(
        new File(
          [blob],
          "demo_house.glb",
          { type: "application/octet-stream" }
        )
      );

    }

    catch (error) {

      console.error(error);

      setStatus(
        "The demo model could not be opened."
      );

    }

    finally {

      demoButton.disabled =
        false;

    }

  };

}


fileInput.addEventListener(
  "change",
  event => {

    const file =
      event.target.files?.[0];

    if (file)
      openFile(file);

  }
);



/* ======================================================
   DRAG & DROP
====================================================== */

window.addEventListener(
  "dragover",
  event => {

    event.preventDefault();

    document.body
      .classList
      .add("dragging");

  }
);


window.addEventListener(
  "dragleave",
  () => {

    document.body
      .classList
      .remove("dragging");

  }
);


window.addEventListener(
  "drop",
  event => {

    event.preventDefault();

    document.body
      .classList
      .remove("dragging");


    const file =
      event.dataTransfer
        .files?.[0];


    if (file)
      openFile(file);

  }
);



/* ======================================================
   OPEN MODEL
====================================================== */

export async function openFile(file) {

  disposeCurrentModel();


  const extension =
    file.name
      .split(".")
      .pop()
      .toLowerCase();


  if (
    ![
      "glb",
      "gltf",
      "fbx"
    ].includes(extension)
  ) {

    setStatus(
      "Unsupported file format."
    );

    return;

  }


  setStatus(
    `Opening ${file.name}…`
  );


  startScreen.classList.add(
    "hidden"
  );


  State.currentObjectURL =
    URL.createObjectURL(file);


  try {

    let object;


    if (
      extension === "glb" ||
      extension === "gltf"
    ) {

      const loader =
        new GLTFLoader();

      loader.setDRACOLoader(
        dracoLoader
      );


      const result =
        await loader.loadAsync(
          State.currentObjectURL
        );


      object =
        result.scene;

    }


    else if (
      extension === "fbx"
    ) {

      const loader =
        new FBXLoader();


      object =
        await loader.loadAsync(
          State.currentObjectURL
        );

    }


    prepareModel(
      object,
      file
    );

  }


  catch(error) {

    console.error(
      error
    );


    setStatus(
      "The model could not be opened."
    );

  }

}



/* ======================================================
   PREPARE MODEL
====================================================== */

export function prepareModel(
  object,
  file
) {

  State.model =
    object;


  State.originalMaterials.clear();


  State.model.traverse(
  node => {

    if (!node.isMesh)
      return;

    node.castShadow =
      true;

    node.receiveShadow =
      true;

    const materials =
      Array.isArray(node.material)
        ? node.material
        : [node.material];

    materials.forEach(material => {

      if (!material)
        return;

      material.side =
        THREE.DoubleSide;

      material.needsUpdate =
        true;

    });

    State.originalMaterials.set(
      node.uuid,
      node.material
    );

  }
);


  scene.add(
    State.model
  );


  centreModel();

  buildSectionTopology();

buildEdges();

createGround();


configureSun();

  inspectModel(file);

  fitCamera();


  setViewMode(
    "original"
  );


  setStatus(
    `${file.name} · drag to orbit · scroll/pinch to zoom`
  );

}





export function disposeCurrentModel() {

  if (!State.model)
    return;


if (State.sectionCapFrame !== null) {
    cancelAnimationFrame(State.sectionCapFrame);
    State.sectionCapFrame = null;
  }

  disposeSectionCap();
  scene.remove(
    State.model
  );


  State.model.traverse(
    node => {

      if (!node.isMesh)
        return;


      node.geometry?.dispose();


      const materials =
        Array.isArray(
          node.material
        )
        ? node.material
        : [node.material];


      materials.forEach(
        material => {

          if (!material)
            return;


          /*
             A megosztott viewer-materialokat
             nem akarjuk itt eldobni.
          */

          if (
            material === whiteMaterial ||
            material === wireMaterial ||
            material === renaissanceMaterial ||
            material === renaissanceGlassMaterial ||
            material === sectionCapMaterial
          )
            return;


          material.map?.dispose();

          material.dispose();

        }
      );

    }
  );


  if (State.edgeGroup) {

    scene.remove(
      State.edgeGroup
    );

    State.edgeGroup =
      null;

  }


  if (State.ground) {

    scene.remove(
      State.ground
    );


    State.ground.geometry.dispose();

    State.ground.material.dispose();


    State.ground =
      null;

  }


  if (
    State.currentObjectURL
  ) {

    URL.revokeObjectURL(
      State.currentObjectURL
    );


    State.currentObjectURL =
      null;

  }


  State.originalMaterials.clear();
  
  State.originalCastShadow.clear();


  State.sectionTriangleComponents =
    new WeakMap();

  State.sectionTopologyComponentCount =
    0;


  State.model =
    null;

}
