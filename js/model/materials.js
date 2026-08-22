/*
   MATERIALS

   Minden megosztott three.js anyag (Material), amit a
   nézetmódok (fehér, drótváz, renesszánsz, stb.) használnak,
   valamint a hozzájuk tartozó segédfüggvények (üveg-e egy
   anyag, melyik renesszánsz anyagot kell rá használni).
*/

import * as THREE from "three";


/* ======================================================
   SHARED MATERIALS
====================================================== */


/* ------------------------------------------------------
   WHITE
------------------------------------------------------ */

export const whiteMaterial =
  new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
  });



/* ------------------------------------------------------
   WIREFRAME
------------------------------------------------------ */

export const wireMaterial =
  new THREE.MeshBasicMaterial({
    color: 0x111111,
    wireframe: true,
    side: THREE.DoubleSide
  });



/* ------------------------------------------------------
   EDGES
------------------------------------------------------ */

export const edgeMaterial =
  new THREE.LineBasicMaterial({
    color: 0x111111
  });



/* ------------------------------------------------------
   SECTION CAP
------------------------------------------------------ */

export const sectionCapMaterial =
  new THREE.MeshBasicMaterial({
    color: 0xe32620,
    side: THREE.DoubleSide,
    depthWrite: true,
    depthTest: true,
    toneMapped: false
  });


export const sectionDebugLineMaterial =
  new THREE.LineBasicMaterial({
    color: 0x00eaff,
    depthTest: false,
    depthWrite: false,
    toneMapped: false
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


export const sectionDebugDegree2Material =
  createSectionDebugPointMaterial(
    0x20d96b
  );

export const sectionDebugDegree1Material =
  createSectionDebugPointMaterial(
    0xff2b2b
  );

export const sectionDebugBranchMaterial =
  createSectionDebugPointMaterial(
    0xff00d4
  );



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


export const renaissanceMaterial =
  new THREE.MeshLambertMaterial({

    color: 0xffffff,

    emissive: 0x000000,

    side: THREE.DoubleSide

  });


renaissanceMaterial.onBeforeCompile =
  shader => {

    shader.fragmentShader =
      shader.fragmentShader.replace(

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


renaissanceMaterial.customProgramCacheKey =
  () => "drop-view-renaissance-1.1";

/* ======================================================
   RENAISSANCE GLASS
====================================================== */

export const renaissanceGlassMaterial =
  new THREE.MeshBasicMaterial({

    color: 0xffffff,

    transparent: true,

    opacity: 0.18,

    side: THREE.DoubleSide,

    depthWrite: false,

    toneMapped: false

  });


export function isGlassMaterial(material) {

  const name =
    (material?.name || "")
      .toLocaleLowerCase("hu");


  return (

    name.includes("üveg") ||

    name.includes("uveg") ||

    name.includes("glass")

  );

}


export function getRenaissanceMaterial(
  original
) {

  if (
    Array.isArray(original)
  ) {

    return original.map(
      material =>
        isGlassMaterial(material)
          ? renaissanceGlassMaterial
          : renaissanceMaterial
    );

  }


  return isGlassMaterial(original)
    ? renaissanceGlassMaterial
    : renaissanceMaterial;

}


export function isEntirelyGlass(
  original
) {

  const materials =
    Array.isArray(original)
      ? original
      : [original];


  return (
    materials.length > 0 &&
    materials.every(
      isGlassMaterial
    )
  );

}
