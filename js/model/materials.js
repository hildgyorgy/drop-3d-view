/*
   MATERIALS

   Minden megosztott three.js anyag (Material), amit a
   nézetmódok (fehér, drótváz, renesszánsz, stb.) használnak,
   valamint a hozzájuk tartozó segédfüggvények (üveg-e egy
   anyag, melyik renesszánsz anyagot kell rá használni).
*/

import * as THREE from "three";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";

/* ======================================================
   SHARED MATERIALS
====================================================== */

/* ------------------------------------------------------
   WHITE
------------------------------------------------------ */

export const whiteMaterial = new THREE.MeshStandardMaterial({
  color: 0xf7f7f4,
  roughness: 0.88,
  metalness: 0,
  side: THREE.DoubleSide
});

const whiteMaterialVariants = new WeakMap();

function getWhiteMaterialVariant(original) {
  if (!original?.clone) return whiteMaterial;

  const cached = whiteMaterialVariants.get(original);

  if (cached) return cached;

  const material = original.clone();

  if (material.color) material.color.set(0xf7f7f4);

  if (material.emissive) material.emissive.set(0x000000);

  if ("roughness" in material) material.roughness = 0.88;

  if ("metalness" in material) material.metalness = 0;

  material.emissiveMap = null;

  const baseProgramCacheKey = material.customProgramCacheKey();

  const baseOnBeforeCompile = material.onBeforeCompile;

  material.onBeforeCompile = function (shader, renderer) {
    baseOnBeforeCompile.call(this, shader, renderer);

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <map_fragment>",
      `
          #include <map_fragment>
          diffuseColor.rgb = vec3(
            0.9301,
            0.9301,
            0.9110
          );
          `
    );
  };

  material.customProgramCacheKey = () =>
    `${baseProgramCacheKey}|drop-view-white-alpha-preserving-1`;

  material.needsUpdate = true;
  whiteMaterialVariants.set(original, material);

  return material;
}

/* ------------------------------------------------------
   WIREFRAME
------------------------------------------------------ */

export const wireMaterial = new THREE.MeshBasicMaterial({
  color: 0x111111,
  wireframe: true,
  side: THREE.DoubleSide
});

/* ------------------------------------------------------
   EDGES
------------------------------------------------------ */

export const edgeMaterial = new THREE.LineBasicMaterial({
  color: 0x111111
});

/* ------------------------------------------------------
   SECTION CAP
------------------------------------------------------ */

export const sectionCapMaterial = new THREE.MeshBasicMaterial({
  color: 0xff3b30,
  side: THREE.DoubleSide,
  depthWrite: true,
  depthTest: true,
  toneMapped: false
});

export const sectionDebugLineMaterial = new THREE.LineBasicMaterial({
  color: 0x00eaff,
  depthTest: false,
  depthWrite: false,
  toneMapped: false
});

export const sectionEdgeMaterial = new LineMaterial({
  color: 0xff3b30,
  linewidth: 1,
  worldUnits: false,
  vertexColors: false,
  dashed: false,
  alphaToCoverage: true,
  transparent: false,
  depthTest: false,
  depthWrite: false
});

export function createSectionDebugPointMaterial(color) {
  return new THREE.PointsMaterial({
    color,
    size: 6,
    sizeAttenuation: false,
    depthTest: false,
    depthWrite: false,
    toneMapped: false
  });
}

export const sectionDebugDegree2Material = createSectionDebugPointMaterial(0x20d96b);

export const sectionDebugDegree1Material = createSectionDebugPointMaterial(0xff2b2b);

export const sectionDebugBranchMaterial = createSectionDebugPointMaterial(0xff00d4);

/* ======================================================
   RENAISSANCE / B&W MATERIAL
====================================================== */

/*
   Drop & View 1.1

   FONTOS VÁLTOZÁS:

   A B/W mód most MeshLambertMaterial.

   Így:

   - az eredeti anyagszínek nem számítanak;
   - nincs metallic / roughness / specular;
   - a DirectionalLight N·L világítása működik;
   - a DirectionalLight SHADOW MAP működik;
   - a HemisphereLightot B/W módban kikapcsoljuk.

   Ezután a KÉSZ megvilágítás eredményét
   kvantáljuk tiszta feketére vagy fehérre.

*/

export const renaissanceMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,

  emissive: 0x000000,

  side: THREE.DoubleSide
});

renaissanceMaterial.onBeforeCompile = shader => {
  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <dithering_fragment>",

    `

        /*
           Csak két tónus létezhet.

           A direkt napfény + shadow map eredményéből
           készítünk fekete/fehér grafikát.
        */

        float dvLuma =
          dot(
            gl_FragColor.rgb,
            vec3(
              0.2126,
              0.7152,
              0.0722
            )
          );


        /*
           Küszöb.

           Alacsony érték:
           csak az igazi árnyék lesz fekete.

           Magasabb érték:
           grafikusabb, több fekete felület.

           Első próbára 0.24.
        */

        float dvBW =
          step(
            0.24,
            dvLuma
          );


        gl_FragColor =
          vec4(
            vec3(dvBW),
            1.0
          );


        #include <dithering_fragment>

        `
  );
};

renaissanceMaterial.customProgramCacheKey = () => "drop-view-renaissance-1.1";

/* ======================================================
   RENAISSANCE GLASS
====================================================== */

export const renaissanceGlassMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,

  transparent: true,

  opacity: 0.18,

  side: THREE.DoubleSide,

  depthWrite: false,

  toneMapped: false
});

export function isTranslucentMaterial(material) {
  if (!material) return false;

  const opacity = Number(material.opacity);
  const transmission = Number(material.transmission);
  return (
    (Number.isFinite(opacity) && opacity < 0.999) ||
    (Number.isFinite(transmission) && transmission > 0)
  );
}

export function applyTranslucentAppearance(material, opacity) {
  if (!material || !isTranslucentMaterial(material)) return;

  material.transparent = true;

  material.opacity = opacity;

  material.depthWrite = false;

  if ("roughness" in material) material.roughness = 0.16;

  if ("metalness" in material) material.metalness = 0.02;

  if ("shininess" in material) material.shininess = 90;

  material.needsUpdate = true;
}

/* Preserve every material's alpha while replacing all visible color with white. */
export function getWhiteMaterial(original) {
  if (Array.isArray(original)) {
    return original.map(material => getWhiteMaterialVariant(material));
  }

  return getWhiteMaterialVariant(original);
}

export function getRenaissanceMaterial(original) {
  if (Array.isArray(original)) {
    return original.map(material =>
      isTranslucentMaterial(material) ? renaissanceGlassMaterial : renaissanceMaterial
    );
  }

  return isTranslucentMaterial(original) ? renaissanceGlassMaterial : renaissanceMaterial;
}

export function isEntirelyTranslucent(original) {
  const materials = Array.isArray(original) ? original : [original];

  return materials.length > 0 && materials.every(isTranslucentMaterial);
}
