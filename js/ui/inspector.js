/*
   MODEL INSPECTOR

   A betöltött modell statisztikáinak (méret, mesh-ek,
   háromszögek, anyagok) kiszámítása és kiírása az oldalsó
   panelre.
*/

import { State } from "../core/state.js";
import { modelStats, materialList, elementTypeList } from "../core/dom.js";
import { escapeHTML } from "./status.js";


export function inspectModel(file) {

  let meshCount =
    0;

  let triangleCount =
    0;

  let vertexCount =
    0;


  const materials =
    new Map();

  const elementTypes =
    new Map();

  State.model.traverse(
    node => {
      if (!node.isMesh)
        return;

      const typeName =
        node.name ||
        "(unnamed)";

      const meshes =
        elementTypes.get(typeName) ||
        new Set();

      meshes.add(node);
      elementTypes.set(typeName, meshes);


      meshCount++;


      const geometry =
        node.geometry;


      if (
        geometry.attributes.position
      ) {

        vertexCount +=
          geometry
            .attributes
            .position
            .count;

      }


      if (
        geometry.index
      ) {

        triangleCount +=
          geometry.index.count /
          3;

      }

      else if (
        geometry.attributes.position
      ) {

        triangleCount +=
          geometry
            .attributes
            .position
            .count /
          3;

      }


      const mats =
        Array.isArray(
          node.material
        )
        ? node.material
        : [node.material];


      mats.forEach(
        material => {

          if (!material)
            return;


          const name =
            material.name ||
            "(unnamed)";


          materials.set(
            name,
            (materials.get(name) || 0) + 1
          );

        }
      );

    }
  );


  const mb =
    file.size /
    1024 /
    1024;


  modelStats.innerHTML =
    `

    <div class="model-stat">
      <span>File</span>
      <span>${escapeHTML(file.name)}</span>
    </div>

    <div class="model-stat">
      <span>Size</span>
      <span>${mb.toFixed(1)} MB</span>
    </div>

    <div class="model-stat">
      <span>Meshes</span>
      <span>${meshCount.toLocaleString()}</span>
    </div>

    <div class="model-stat">
      <span>Vertices</span>
      <span>${Math.round(vertexCount).toLocaleString()}</span>
    </div>

    <div class="model-stat">
      <span>Triangles</span>
      <span>${Math.round(triangleCount).toLocaleString()}</span>
    </div>

    <div class="model-stat">
      <span>Materials</span>
      <span>${materials.size}</span>
    </div>

    `;


  materialList.innerHTML =
    "";


  [...materials.entries()]
    .sort(
      (a,b) =>
        a[0].localeCompare(
          b[0],
          "hu"
        )
    )
    .forEach(
      ([name,count]) => {

        const item =
          document.createElement(
            "div"
          );


        item.className =
          "material-item";


        item.textContent =
          `${name} · ${count}`;


        materialList.appendChild(
          item
        );

      }
    );

  elementTypeList.innerHTML =
    "";

  if (!elementTypes.size) {

    elementTypeList.textContent =
      "No named element groups found in this export.";

  }

  [...elementTypes.entries()]
    .sort(
      (a,b) =>
        a[0].localeCompare(
          b[0],
          "hu"
        )
    )
    .forEach(
      ([name,meshes]) => {

        const item =
          document.createElement(
            "label"
          );

        item.className =
          "element-type-item";

        const toggle =
          document.createElement(
            "input"
          );

        toggle.type =
          "checkbox";

        toggle.checked =
          true;

        toggle.addEventListener(
          "change",
          () => {
            meshes.forEach(
              mesh => {
                mesh.visible =
                  toggle.checked;
              }
            );
          }
        );

        const text =
          document.createElement(
            "span"
          );

        text.textContent =
          `${name} · ${meshes.size}`;

        item.append(
          toggle,
          text
        );

        elementTypeList.appendChild(
          item
        );

      }
    );

}
