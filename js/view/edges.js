/*
   EDGES

   A modell éleit rajzolja ki vékony vonalakkal (ez adja a
   "hidden line" és a kontúr-vonalakat a többi nézetmódban).
*/

import * as THREE from "three";
import { State } from "../core/state.js";
import { scene } from "../core/scene.js";
import { edgeMaterial } from "../model/materials.js";


/* ======================================================
   EDGES
====================================================== */

export function buildEdges() {

  if (State.edgeGroup)
    scene.remove(
      State.edgeGroup
    );


  State.edgeGroup =
    new THREE.Group();


  State.model.updateMatrixWorld(
    true
  );


  State.model.traverse(
    object => {

      if (!object.isMesh)
        return;


      const geometry =
        new THREE.EdgesGeometry(
          object.geometry,
          25
        );


      const line =
        new THREE.LineSegments(
          geometry,
          edgeMaterial
        );

line.renderOrder = 11000;

      line.matrixAutoUpdate =
        false;


      line.matrix.copy(
        object.matrixWorld
      );


      State.edgeGroup.add(
        line
      );

    }
  );


  scene.add(
    State.edgeGroup
  );


  State.edgeGroup.visible =
    false;

}
