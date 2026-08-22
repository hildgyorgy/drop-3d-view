/*
   SCENE / RENDERER / CAMERAS / LIGHTING

   A három.js "világ" alapelemei: a Scene, a
   WebGLRenderer, a két kamera (perspektív és axonometrikus),
   valamint a fények. Ezek az objektumok maguk nem
   változnak menet közben (nem cserélődnek le), csak a
   tulajdonságaik. Amit menet közben cserélünk (pl. melyik
   kamera az aktív), az a core/state.js-ben van.
*/


import * as THREE from "three";


/* ======================================================
   SCENE
====================================================== */

export const scene =
  new THREE.Scene();

scene.background =
  new THREE.Color(0xefefed);





/* ======================================================
   RENDERER
====================================================== */

export const renderer =
  new THREE.WebGLRenderer({
    antialias: true,
    stencil: true
  });

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

renderer.setPixelRatio(
  Math.min(
    window.devicePixelRatio,
    2
  )
);

renderer.outputColorSpace =
  THREE.SRGBColorSpace;

renderer.toneMapping =
  THREE.ACESFilmicToneMapping;

renderer.toneMappingExposure =
  1;

renderer.shadowMap.enabled =
  true;

renderer.shadowMap.type =
  THREE.PCFShadowMap;

renderer.localClippingEnabled =
  true;

document.body.appendChild(
  renderer.domElement
);





export const perspectiveCamera =
  new THREE.PerspectiveCamera(
    42,
    window.innerWidth /
    window.innerHeight,
    .01,
    100000
  );

perspectiveCamera.position.set(
  10,
  8,
  10
);


export const orthoCamera =
  new THREE.OrthographicCamera(
    -10,
    10,
    10,
    -10,
    .01,
    100000
  );


/* ======================================================
   LIGHTING
====================================================== */

export const DEFAULT_HEMI_INTENSITY =
  1.15;


export const hemi =
  new THREE.HemisphereLight(
    0xffffff,
    0x888888,
    DEFAULT_HEMI_INTENSITY
  );

scene.add(
  hemi
);


export const sun =
  new THREE.DirectionalLight(
    0xffffff,
    3.3
  );

sun.castShadow =
  true;

sun.shadow.mapSize.set(
  8192,
  8192
);

sun.shadow.bias =
  -.0001;

sun.shadow.normalBias =
  .02;

scene.add(
  sun
);

scene.add(
  sun.target
);



