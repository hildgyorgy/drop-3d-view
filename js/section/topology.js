/*
   SECTION SURFACE TOPOLOGY

   Előkészítő lépés a metszet-kitöltéshez: a modell
   háromszögeit "komponensekbe" csoportosítja, hogy a
   section-cap.js tudja, mely háromszögek tartoznak
   ugyanahhoz az összefüggő felülethez.
*/

import * as THREE from "three";
import { State } from "../core/state.js";


export function buildSectionTopology() {

  State.sectionTriangleComponents =
    new WeakMap();

  State.sectionTopologyComponentCount =
    0;


  if (!State.model)
    return;


  State.model.updateMatrixWorld(
    true
  );


  const tolerance =
    Math.max(
      State.maxModelSize * 1e-5,
      1e-6
    );


  const meshEntries =
    [];

  let totalTriangles =
    0;


  State.model.traverse(
    mesh => {

      if (
        !mesh.isMesh ||
        !mesh.geometry?.attributes?.position
      )
        return;


      const geometry =
        mesh.geometry;

      const position =
        geometry.attributes.position;

      const triangleCount =
        geometry.index
        ? Math.floor(
            geometry.index.count / 3
          )
        : Math.floor(
            position.count / 3
          );


      const components =
        new Int32Array(
          triangleCount
        );


      State.sectionTriangleComponents.set(
        mesh,
        components
      );


      meshEntries.push({
        mesh,
        geometry,
        start: totalTriangles,
        triangleCount,
        components
      });


      totalTriangles +=
        triangleCount;

    }
  );


  const parents =
    new Int32Array(
      totalTriangles
    );

  const ranks =
    new Uint8Array(
      totalTriangles
    );


  for (let i=0; i<totalTriangles; i++)
    parents[i] = i;


  function findRoot(index) {

    let root =
      index;


    while (parents[root] !== root)
      root = parents[root];


    while (parents[index] !== index) {

      const next =
        parents[index];

      parents[index] =
        root;

      index =
        next;

    }


    return root;

  }


  function union(aIndex,bIndex) {

    let aRoot =
      findRoot(aIndex);

    let bRoot =
      findRoot(bIndex);


    if (aRoot === bRoot)
      return;


    if (ranks[aRoot] < ranks[bRoot]) {

      const swap =
        aRoot;

      aRoot =
        bRoot;

      bRoot =
        swap;

    }


    parents[bRoot] =
      aRoot;


    if (ranks[aRoot] === ranks[bRoot])
      ranks[aRoot]++;

  }


  const pointIds =
    new Map();

  const edgeOwners =
    new Map();

  let nextPointId =
    0;


  const worldPoint =
    new THREE.Vector3();


  function getPointId(
    position,
    index,
    matrixWorld
  ) {

    worldPoint
      .fromBufferAttribute(
        position,
        index
      )
      .applyMatrix4(
        matrixWorld
      );


    const key =
      Math.round(worldPoint.x / tolerance) +
      "," +
      Math.round(worldPoint.y / tolerance) +
      "," +
      Math.round(worldPoint.z / tolerance);


    if (pointIds.has(key))
      return pointIds.get(key);


    const pointId =
      nextPointId++;


    pointIds.set(
      key,
      pointId
    );


    return pointId;

  }


  function connectEdge(
    pointA,
    pointB,
    triangleId
  ) {

    if (pointA === pointB)
      return;


    const lo =
      Math.min(pointA,pointB);

    const hi =
      Math.max(pointA,pointB);

    const key =
      lo + ":" + hi;


    if (edgeOwners.has(key)) {

      union(
        triangleId,
        edgeOwners.get(key)
      );

    }

    else {

      edgeOwners.set(
        key,
        triangleId
      );

    }

  }


  for (const entry of meshEntries) {

    const geometry =
      entry.geometry;

    const position =
      geometry.attributes.position;

    const index =
      geometry.index;


    for (
      let triangle=0;
      triangle<entry.triangleCount;
      triangle++
    ) {

      const ia =
        index
        ? index.getX(triangle*3)
        : triangle*3;

      const ib =
        index
        ? index.getX(triangle*3+1)
        : triangle*3+1;

      const ic =
        index
        ? index.getX(triangle*3+2)
        : triangle*3+2;


      const pointA =
        getPointId(
          position,
          ia,
          entry.mesh.matrixWorld
        );

      const pointB =
        getPointId(
          position,
          ib,
          entry.mesh.matrixWorld
        );

      const pointC =
        getPointId(
          position,
          ic,
          entry.mesh.matrixWorld
        );

      const triangleId =
        entry.start + triangle;


      connectEdge(
        pointA,
        pointB,
        triangleId
      );

      connectEdge(
        pointB,
        pointC,
        triangleId
      );

      connectEdge(
        pointC,
        pointA,
        triangleId
      );

    }

  }


  const componentIds =
    new Map();


  for (const entry of meshEntries) {

    for (
      let triangle=0;
      triangle<entry.triangleCount;
      triangle++
    ) {

      const root =
        findRoot(
          entry.start + triangle
        );


      if (!componentIds.has(root)) {

        componentIds.set(
          root,
          State.sectionTopologyComponentCount++
        );

      }


      entry.components[triangle] =
        componentIds.get(root);

    }

  }

}
