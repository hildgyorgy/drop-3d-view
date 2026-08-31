/*
   REAL GEOMETRIC SECTION CAP

   A metszeti kitöltés itt már nem stencil-trükk.

   1. A clipping plane elmetszi a modell háromszögeit.
   2. A háromszög/sík metszésekből 2D szakaszokat gyűjtünk.
   3. A szakaszokból síkbeli zárt kontúrokat építünk.
   4. A kontúrokat (lyukakkal együtt) trianguláljuk.
   5. A létrejövő valódi geometriát piros Meshként rajzoljuk ki.

   Ez a legterjedelmesebb fájl - lásd a beszélgetésben adott
   magyarázatot arról, miért ilyen hosszú ez a rész.
*/

import * as THREE from "three";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import { State } from "../core/state.js";
import { scene } from "../core/scene.js";
import { sectionDebug, sectionDebugStats, sectionFill } from "../core/dom.js";
import {
  sectionCapMaterial,
  sectionEdgeMaterial,
  sectionDebugLineMaterial,
  sectionDebugDegree2Material,
  sectionDebugDegree1Material,
  sectionDebugBranchMaterial
} from "../model/materials.js";


export function scheduleSectionCapRebuild() {

  if (State.sectionCapFrame !== null)
    return;


  State.sectionCapFrame =
    requestAnimationFrame(
      () => {

        State.sectionCapFrame =
          null;

        rebuildSectionCap();

      }
    );

}



export function disposeSectionCap() {

  sectionDebugStats.textContent =
    "";


  if (!State.sectionCapGroup)
    return;


  scene.remove(
    State.sectionCapGroup
  );


  State.sectionCapGroup.traverse(
    object => {

      if (object.geometry)
        object.geometry.dispose();

    }
  );


  State.sectionCapGroup =
    null;

}



export function rebuildSectionCap() {

  disposeSectionCap();


  if (
    !State.sectionEnabled ||
    !State.model ||
    !State.modelBounds
  )
    return;


  State.model.updateMatrixWorld(
    true
  );


  const worldTolerance =
    Math.max(
      State.maxModelSize * 1e-5,
      1e-6
    );


  const planeOrigin =
    State.sectionPlane.coplanarPoint(
      new THREE.Vector3()
    );


  const planeNormal =
    State.sectionPlane.normal
      .clone()
      .normalize();


  /*
     Stabil 2D koordinátarendszer a metszősíkon.
  */
  const helper =
    Math.abs(planeNormal.y) < .9
      ? new THREE.Vector3(0,1,0)
      : new THREE.Vector3(1,0,0);


  const axisU =
    new THREE.Vector3()
      .crossVectors(
        helper,
        planeNormal
      )
      .normalize();


  const axisV =
    new THREE.Vector3()
      .crossVectors(
        planeNormal,
        axisU
      )
      .normalize();


  const pointMap =
    new Map();

  const points2D =
    [];

  const pointComponentIds =
    [];

  const edges =
    new Map();

  const debugEnabled =
    sectionDebug.checked;

  const rawSegmentPositions =
    [];

  const intersectedMeshes =
    new Set();

  const intersectedComponents =
    new Set();


  function pointKey(x,y,componentId) {

    return (
      componentId +
      "|" +
      Math.round(x / worldTolerance) +
      "," +
      Math.round(y / worldTolerance)
    );

  }


  function getPointIndex(
    worldPoint,
    componentId
  ) {

    const delta =
      worldPoint
        .clone()
        .sub(planeOrigin);


    const x =
      delta.dot(axisU);

    const y =
      delta.dot(axisV);


    const key =
      pointKey(
        x,
        y,
        componentId
      );


    if (pointMap.has(key))
      return pointMap.get(key);


    const index =
      points2D.length;


    /*
       A koordinátát a tolerance rácsára pattintjuk.
       Így a szomszédos háromszögek numerikusan picit
       eltérő metszéspontjai biztosan összeérnek.
    */
    const snappedX =
      Math.round(x / worldTolerance) *
      worldTolerance;

    const snappedY =
      Math.round(y / worldTolerance) *
      worldTolerance;


    points2D.push(
      new THREE.Vector2(
        snappedX,
        snappedY
      )
    );


    pointComponentIds.push(
      componentId
    );


    pointMap.set(
      key,
      index
    );


    return index;

  }


  function addSegment(
    a,
    b,
    mesh,
    componentId
  ) {

    rawSegmentPositions.push(
      a.x,a.y,a.z,
      b.x,b.y,b.z
    );

    if (debugEnabled) {


      intersectedMeshes.add(
        mesh
      );


      intersectedComponents.add(
        componentId
      );

    }

    const ia =
      getPointIndex(
        a,
        componentId
      );

    const ib =
      getPointIndex(
        b,
        componentId
      );


    if (ia === ib)
      return;


    const lo =
      Math.min(ia,ib);

    const hi =
      Math.max(ia,ib);

    const key =
      lo + ":" + hi;


    if (!edges.has(key))
      edges.set(
        key,
        [lo,hi]
      );

  }


  const a =
    new THREE.Vector3();

  const b =
    new THREE.Vector3();

  const c =
    new THREE.Vector3();


  const edgeA =
    new THREE.Vector3();

  const edgeB =
    new THREE.Vector3();


  function collectTriangleIntersection(
    p0,
    p1,
    p2,
    plane,
    epsilon,
    matrixWorld,
    mesh,
    componentId
  ) {

    const trianglePoints =
      [];


    const verts =
      [p0,p1,p2];


    for (let i=0; i<3; i++) {

      const p =
        verts[i];

      const q =
        verts[(i+1)%3];


      const dp =
        plane.distanceToPoint(p);

      const dq =
        plane.distanceToPoint(q);


      const pOn =
        Math.abs(dp) <= epsilon;

      const qOn =
        Math.abs(dq) <= epsilon;


      /*
         Ha egy teljes háromszögél a síkban fekszik,
         nem vesszük fel. A szomszédos, valóban metszett
         háromszögek stabilabban definiálják a kontúrt.
      */
      if (pOn && qOn)
        continue;


      let hit =
        null;


      if (pOn) {

        hit =
          p.clone();

      }

      else if (qOn) {

        hit =
          q.clone();

      }

      else if (dp * dq < 0) {

        const t =
          dp / (dp - dq);


        hit =
          p.clone()
            .lerp(q,t);

      }


      if (!hit)
        continue;


      let duplicate =
        false;


      for (const existing of trianglePoints) {

        if (
          existing.distanceToSquared(hit) <=
          epsilon * epsilon
        ) {

          duplicate =
            true;

          break;

        }

      }


      if (!duplicate)
        trianglePoints.push(hit);

    }


    if (trianglePoints.length < 2)
      return;


    /*
       Degenerált esetben a legtávolabbi pontpárt választjuk.
    */
    let bestA =
      0;

    let bestB =
      1;

    let bestDist =
      -1;


    for (let i=0; i<trianglePoints.length; i++) {

      for (let j=i+1; j<trianglePoints.length; j++) {

        const d =
          trianglePoints[i]
            .distanceToSquared(
              trianglePoints[j]
            );


        if (d > bestDist) {

          bestDist =
            d;

          bestA =
            i;

          bestB =
            j;

        }

      }

    }


    edgeA.copy(
      trianglePoints[bestA]
    ).applyMatrix4(
      matrixWorld
    );


    edgeB.copy(
      trianglePoints[bestB]
    ).applyMatrix4(
      matrixWorld
    );


    if (
      edgeA.distanceToSquared(edgeB) >
      worldTolerance * worldTolerance
    )
      addSegment(
        edgeA,
        edgeB,
        mesh,
        componentId
      );

  }


  /* ----------------------------------------------------
     TRIANGLE / PLANE INTERSECTIONS
  ---------------------------------------------------- */

  State.model.traverse(
    mesh => {

      if (
        !mesh.isMesh ||
        !mesh.geometry?.attributes?.position
      )
        return;


      const geometry =
        mesh.geometry;


      if (!geometry.boundingBox)
        geometry.computeBoundingBox();


      const inverseWorld =
        mesh.matrixWorld
          .clone()
          .invert();


      const localPlane =
        State.sectionPlane
          .clone()
          .applyMatrix4(
            inverseWorld
          );


      if (
        geometry.boundingBox &&
        !localPlane.intersectsBox(
          geometry.boundingBox
        )
      )
        return;


      const position =
        geometry.attributes.position;

      const index =
        geometry.index;


      const maxScale =
        Math.max(
          mesh.matrixWorld.getMaxScaleOnAxis(),
          1e-9
        );


      const localEpsilon =
        worldTolerance /
        maxScale;


      const triangleCount =
        index
          ? Math.floor(index.count / 3)
          : Math.floor(position.count / 3);

      const triangleComponents =
        State.sectionTriangleComponents.get(
          mesh
        );


      for (let tri=0; tri<triangleCount; tri++) {

        const ia =
          index
            ? index.getX(tri*3)
            : tri*3;

        const ib =
          index
            ? index.getX(tri*3+1)
            : tri*3+1;

        const ic =
          index
            ? index.getX(tri*3+2)
            : tri*3+2;


        a.fromBufferAttribute(
          position,
          ia
        );

        b.fromBufferAttribute(
          position,
          ib
        );

        c.fromBufferAttribute(
          position,
          ic
        );


        collectTriangleIntersection(
          a,b,c,
          localPlane,
          localEpsilon,
          mesh.matrixWorld,
          mesh,
          triangleComponents?.[tri] ?? -1
        );

      }

    }
  );


  /* ----------------------------------------------------
     DETERMINISTIC T-JUNCTION SPLITTING

     Ha egy már létező metszési végpont egy másik szakasz
     belsejére esik, a hosszabb szakaszt ott kettévágjuk.
     Nem hozunk létre új, becsült pontot: kizárólag a valódi
     háromszög/sík metszések pontjait használjuk.
  ---------------------------------------------------- */

  function splitEdgesAtExistingPoints() {

    if (
      edges.size < 2 ||
      points2D.length < 3
    )
      return 0;


    const indices =
      points2D.map(
        (_,index) => index
      );


    const byX =
      [...indices].sort(
        (ia,ib) =>
          points2D[ia].x -
          points2D[ib].x
      );


    const byY =
      [...indices].sort(
        (ia,ib) =>
          points2D[ia].y -
          points2D[ib].y
      );


    function coordinate(index,useX) {

      return useX
        ? points2D[index].x
        : points2D[index].y;

    }


    function lowerBound(order,value,useX) {

      let low =
        0;

      let high =
        order.length;


      while (low < high) {

        const middle =
          (low + high) >> 1;


        if (
          coordinate(
            order[middle],
            useX
          ) < value
        )
          low = middle + 1;
        else
          high = middle;

      }


      return low;

    }


    const rebuiltEdges =
      new Map();


    function addRebuiltEdge(i,j) {

      if (i === j)
        return;


      const lo =
        Math.min(i,j);

      const hi =
        Math.max(i,j);


      rebuiltEdges.set(
        lo + ":" + hi,
        [lo,hi]
      );

    }


    let splitCount =
      0;


    for (const [start,end] of edges.values()) {

      const p0 =
        points2D[start];

      const p1 =
        points2D[end];


      const dx =
        p1.x - p0.x;

      const dy =
        p1.y - p0.y;

      const lengthSquared =
        dx * dx + dy * dy;


      if (
        lengthSquared <=
        worldTolerance * worldTolerance
      )
        continue;


      /*
         A keskenyebb koordinátatengely szerint keresünk,
         így hosszú vízszintes/függőleges éleknél kevés
         pontot kell megvizsgálni.
      */
      const useX =
        Math.abs(dx) <= Math.abs(dy);

      const order =
        useX ? byX : byY;

      const minCoordinate =
        Math.min(
          useX ? p0.x : p0.y,
          useX ? p1.x : p1.y
        ) - worldTolerance;

      const maxCoordinate =
        Math.max(
          useX ? p0.x : p0.y,
          useX ? p1.x : p1.y
        ) + worldTolerance;


      const cuts = [
        {t: 0,index: start},
        {t: 1,index: end}
      ];


      for (
        let cursor =
          lowerBound(
            order,
            minCoordinate,
            useX
          );
        cursor < order.length;
        cursor++
      ) {

        const pointIndex =
          order[cursor];

        const axisCoordinate =
          coordinate(
            pointIndex,
            useX
          );


        if (axisCoordinate > maxCoordinate)
          break;


        if (
          pointIndex === start ||
          pointIndex === end
        )
          continue;


        const point =
          points2D[pointIndex];


        if (
          point.x < Math.min(p0.x,p1.x) - worldTolerance ||
          point.x > Math.max(p0.x,p1.x) + worldTolerance ||
          point.y < Math.min(p0.y,p1.y) - worldTolerance ||
          point.y > Math.max(p0.y,p1.y) + worldTolerance
        )
          continue;


        const cross =
          dx * (point.y - p0.y) -
          dy * (point.x - p0.x);


        if (
          cross * cross >
          worldTolerance *
          worldTolerance *
          lengthSquared
        )
          continue;


        const t =
          (
            (point.x - p0.x) * dx +
            (point.y - p0.y) * dy
          ) /
          lengthSquared;

        const endpointMargin =
          worldTolerance /
          Math.sqrt(lengthSquared);


        if (
          t <= endpointMargin ||
          t >= 1 - endpointMargin
        )
          continue;


        cuts.push({
          t,
          index: pointIndex
        });

      }


      cuts.sort(
        (aCut,bCut) =>
          aCut.t - bCut.t
      );


      splitCount +=
        cuts.length - 2;


      for (let i=0; i<cuts.length-1; i++) {

        addRebuiltEdge(
          cuts[i].index,
          cuts[i+1].index
        );

      }

    }


    edges.clear();


    for (const [key,value] of rebuiltEdges) {

      edges.set(
        key,
        value
      );

    }


    return splitCount;

  }


  /* ----------------------------------------------------
     PLANAR GRAPH

     A metszési szakaszokból síkbeli gráfot készítünk.
     Directed half-edge bejárással a zárt cellákat kapjuk.
  ---------------------------------------------------- */

  const neighbours =
    Array.from(
      {length: points2D.length},
      () => new Set()
    );


  for (const [i,j] of edges.values()) {

    neighbours[i].add(j);
    neighbours[j].add(i);

  }


  let degrees =
    [];

  let degree1Count =
    0;

  let branchCount =
    0;

  let openChainCount =
    0;


  if (debugEnabled) {

    degrees =
      neighbours.map(
        set => set.size
      );


    degree1Count =
      degrees.filter(
        degree => degree === 1
      ).length;


    branchCount =
      degrees.filter(
        degree => degree > 2
      ).length;


    /*
       Open chains are maximal graph paths whose ends are not
       ordinary degree-2 continuation nodes. This is diagnostic
       only; it does not repair or modify the graph.
    */
    const openChainEdges =
      new Set();


    function undirectedKey(i,j) {

      return Math.min(i,j) + ":" + Math.max(i,j);

    }


    for (let start=0; start<neighbours.length; start++) {

      if (degrees[start] === 2)
        continue;


      for (const first of neighbours[start]) {

        const firstKey =
          undirectedKey(start,first);


        if (openChainEdges.has(firstKey))
          continue;


        openChainCount++;


        let previous =
          start;

        let current =
          first;


        openChainEdges.add(firstKey);


        while (degrees[current] === 2) {

          const next =
            [...neighbours[current]].find(
              index => index !== previous
            );


          if (next === undefined)
            break;


          const nextKey =
            undirectedKey(current,next);


          if (openChainEdges.has(nextKey))
            break;


          openChainEdges.add(nextKey);

          previous =
            current;

          current =
            next;

        }

      }

    }

  }


  const sortedNeighbours =
    neighbours.map(
      (set,index) => {

        const p =
          points2D[index];


        return [...set].sort(
          (ia,ib) => {

            const aPoint =
              points2D[ia];

            const bPoint =
              points2D[ib];


            const aa =
              Math.atan2(
                aPoint.y - p.y,
                aPoint.x - p.x
              );

            const ab =
              Math.atan2(
                bPoint.y - p.y,
                bPoint.x - p.x
              );


            return aa - ab;

          }
        );

      }
    );


  const directedVisited =
    new Set();


  function directedKey(i,j) {
    return i + ">" + j;
  }


  const loops =
    [];


  for (const [edgeI,edgeJ] of edges.values()) {

    for (const [startA,startB] of [
      [edgeI,edgeJ],
      [edgeJ,edgeI]
    ]) {

      const startKey =
        directedKey(
          startA,
          startB
        );


      if (directedVisited.has(startKey))
        continue;


      const loopIndices =
        [];


      let previous =
        startA;

      let current =
        startB;

      let closed =
        false;


      const safetyLimit =
        edges.size * 2 + 10;


      for (let safety=0; safety<safetyLimit; safety++) {

        directedVisited.add(
          directedKey(
            previous,
            current
          )
        );


        loopIndices.push(
          previous
        );


        const list =
          sortedNeighbours[current];


        if (!list || list.length === 0)
          break;


        const incomingIndex =
          list.indexOf(
            previous
          );


        if (incomingIndex < 0)
          break;


        /*
           Az előző élhez képest az óramutató járásával
           megegyező legközelebbi él tartja a cellát balra.
        */
        const next =
          list[
            (
              incomingIndex - 1 +
              list.length
            ) % list.length
          ];


        previous =
          current;

        current =
          next;


        if (
          previous === startA &&
          current === startB
        ) {

          closed =
            true;

          break;

        }

      }


      if (!closed)
        continue;


      const polygon =
        loopIndices.map(
          index =>
            points2D[index].clone()
        );


      if (polygon.length < 3)
        continue;


      /*
         Egymás utáni kollineáris pontok ritkítása.
      */
      const cleaned =
        [];


      for (let i=0; i<polygon.length; i++) {

        const prev =
          polygon[
            (i - 1 + polygon.length) %
            polygon.length
          ];

        const here =
          polygon[i];

        const next =
          polygon[
            (i + 1) %
            polygon.length
          ];


        const v1x =
          here.x - prev.x;

        const v1y =
          here.y - prev.y;

        const v2x =
          next.x - here.x;

        const v2y =
          next.y - here.y;


        const cross =
          v1x * v2y -
          v1y * v2x;


        if (
          Math.abs(cross) >
          worldTolerance * worldTolerance
        )
          cleaned.push(
            here
          );

      }


      if (cleaned.length < 3)
        continue;


      const area =
        THREE.ShapeUtils.area(
          cleaned
        );


      /*
         A half-edge bejárás minden határt kétszer talál meg.
         Csak a pozitív orientációjú cellákat tartjuk meg.
      */
      if (
        area >
        worldTolerance * worldTolerance * 4
      )
        loops.push(
          {
            points: cleaned,
            componentId:
              pointComponentIds[
                loopIndices[0]
              ]
          }
        );

    }

  }


  function pointInPolygon(point,polygon) {

    let inside =
      false;


    for (
      let i=0,j=polygon.length-1;
      i<polygon.length;
      j=i++
    ) {

      const pi =
        polygon[i];

      const pj =
        polygon[j];


      const intersects =
        (
          (pi.y > point.y) !==
          (pj.y > point.y)
        ) &&
        (
          point.x <
          (pj.x - pi.x) *
          (point.y - pi.y) /
          (pj.y - pi.y) +
          pi.x
        );


      if (intersects)
        inside =
          !inside;

    }


    return inside;

  }


  function interiorPoint(loop) {

    const triangles =
      THREE.ShapeUtils.triangulateShape(
        loop,
        []
      );


    if (triangles.length) {

      const tri =
        triangles[0];


      return new THREE.Vector2(
        (
          loop[tri[0]].x +
          loop[tri[1]].x +
          loop[tri[2]].x
        ) / 3,
        (
          loop[tri[0]].y +
          loop[tri[1]].y +
          loop[tri[2]].y
        ) / 3
      );

    }


    return loop[0].clone();

  }


  const loopData =
    loops.map(
      entry => ({
        loop: entry.points,
        componentId:
          entry.componentId,
        sample: interiorPoint(
          entry.points
        ),
        area: Math.abs(
          THREE.ShapeUtils.area(
            entry.points
          )
        ),
        depth: 0,
        parent: -1
      })
    );


  /*
     Páros nesting depth = kitöltött sziget.
     Páratlan depth       = lyuk.
  */
  for (let i=0; i<loopData.length; i++) {

    let depth =
      0;

    let parent =
      -1;

    let parentArea =
      Infinity;


    for (let j=0; j<loopData.length; j++) {

      if (i === j)
        continue;


      if (
        loopData[j].componentId !==
        loopData[i].componentId
      )
        continue;


      if (
        loopData[j].area <=
        loopData[i].area
      )
        continue;


      if (
        pointInPolygon(
          loopData[i].sample,
          loopData[j].loop
        )
      ) {

        depth++;


        if (
          loopData[j].area <
          parentArea
        ) {

          parent =
            j;

          parentArea =
            loopData[j].area;

        }

      }

    }


    loopData[i].depth =
      depth;

    loopData[i].parent =
      parent;

  }


  const positions =
    [];


  function worldFrom2D(point) {

    return planeOrigin
      .clone()
      .addScaledVector(
        axisU,
        point.x
      )
      .addScaledVector(
        axisV,
        point.y
      );

  }


  for (let i=0; i<loopData.length; i++) {

    const outerData =
      loopData[i];


    if (outerData.depth % 2 !== 0)
      continue;


    let contour =
      outerData.loop.map(
        p => p.clone()
      );


    if (
      !THREE.ShapeUtils.isClockWise(
        contour
      )
    )
      contour.reverse();


    const holes =
      [];


    for (let h=0; h<loopData.length; h++) {

      const holeData =
        loopData[h];


      if (
        holeData.componentId !==
        outerData.componentId
      )
        continue;


      if (
        holeData.depth !==
        outerData.depth + 1
      )
        continue;


      if (
        holeData.parent !== i
      )
        continue;


      const hole =
        holeData.loop.map(
          p => p.clone()
        );


      if (
        THREE.ShapeUtils.isClockWise(
          hole
        )
      )
        hole.reverse();


      holes.push(
        hole
      );

    }


    const triangles =
      THREE.ShapeUtils.triangulateShape(
        contour,
        holes
      );


    const allPoints =
      contour.concat(
        ...holes
      );


    for (const triangle of triangles) {

      for (const index of triangle) {

        const worldPoint =
          worldFrom2D(
            allPoints[index]
          );


        positions.push(
          worldPoint.x,
          worldPoint.y,
          worldPoint.z
        );

      }

    }

  }


  State.sectionCapGroup =
    new THREE.Group();


  if (sectionFill.checked && positions.length > 0) {

    const geometry =
      new THREE.BufferGeometry();


    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        positions,
        3
      )
    );


    const capMesh =
      new THREE.Mesh(
        geometry,
        sectionCapMaterial
      );


    capMesh.renderOrder =
      10500;

    capMesh.castShadow =
      false;

    capMesh.receiveShadow =
      false;

    capMesh.raycast =
      () => {};


    State.sectionCapGroup.add(
      capMesh
    );

  }


  if (!sectionFill.checked && rawSegmentPositions.length > 0) {

    const edgeGeometry =
      new LineSegmentsGeometry();

    edgeGeometry.setPositions(
      rawSegmentPositions
    );

    sectionEdgeMaterial.resolution.set(
      window.innerWidth,
      window.innerHeight
    );

    const edgeLines =
      new LineSegments2(
        edgeGeometry,
        sectionEdgeMaterial
      );

    edgeLines.renderOrder =
      10505;

    edgeLines.raycast =
      () => {};

    State.sectionCapGroup.add(
      edgeLines
    );

  }


  if (debugEnabled) {

    const rawGeometry =
      new THREE.BufferGeometry();


    rawGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        rawSegmentPositions,
        3
      )
    );


    const rawLines =
      new THREE.LineSegments(
        rawGeometry,
        sectionDebugLineMaterial
      );


    rawLines.renderOrder =
      10510;

    rawLines.raycast =
      () => {};


    State.sectionCapGroup.add(
      rawLines
    );


    const pointPositions = [[],[],[]];


    for (let i=0; i<points2D.length; i++) {

      const degree =
        degrees[i];


      const groupIndex =
        degree === 1
        ? 1
        : degree > 2
          ? 2
          : 0;


      const worldPoint =
        worldFrom2D(
          points2D[i]
        );


      pointPositions[groupIndex].push(
        worldPoint.x,
        worldPoint.y,
        worldPoint.z
      );

    }


    const pointMaterials = [
      sectionDebugDegree2Material,
      sectionDebugDegree1Material,
      sectionDebugBranchMaterial
    ];


    for (let i=0; i<pointPositions.length; i++) {

      if (pointPositions[i].length === 0)
        continue;


      const pointGeometry =
        new THREE.BufferGeometry();


      pointGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
          pointPositions[i],
          3
        )
      );


      const pointCloud =
        new THREE.Points(
          pointGeometry,
          pointMaterials[i]
        );


      pointCloud.renderOrder =
        10520;

      pointCloud.raycast =
        () => {};


      State.sectionCapGroup.add(
        pointCloud
      );

    }


    sectionDebugStats.textContent =
      [
        `intersected meshes  ${intersectedMeshes.size}`,
        `surface components  ${State.sectionTopologyComponentCount}`,
        `cut components      ${intersectedComponents.size}`,
        `raw segments        ${rawSegmentPositions.length / 6}`,
        `graph edges         ${edges.size}`,
        `graph nodes         ${points2D.length}`,
        `closed loops        ${loops.length}`,
        `cap triangles       ${positions.length / 9}`,
        `open chains         ${openChainCount}`,
        `degree-1 nodes      ${degree1Count}`,
        `degree >2 nodes     ${branchCount}`
      ].join("\n");

  }


  scene.add(
    State.sectionCapGroup
  );

}
