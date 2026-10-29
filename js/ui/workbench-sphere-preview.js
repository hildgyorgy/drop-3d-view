// A small, on-demand preview of the staged map package. It never touches the
// loaded model or the main renderer, and it renders only when maps change.
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { disposeTextureResources } from "../model/model-resource-disposal.js";

export function createWorkbenchSpherePreview(element) {
  const canvas = element.querySelector("canvas");
  let renderer = null;
  let scene = null;
  let camera = null;
  let material = null;
  let ownedTextures = [];

  function initialize() {
    if (renderer) return;
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(88, 88, false);
    renderer.setClearColor(0xffffff, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(38, 1, 0.1, 10);
    camera.position.set(0, 0, 3.45);
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose();
    pmrem.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x747474, 1.7));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-2, 3, 4);
    scene.add(key);
    material = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.75 });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), material));
  }

  return {
    show({ colorMap, roughMap, normalMap, metalness }) {
      initialize();
      disposeTextureResources(ownedTextures);
      ownedTextures = [colorMap, roughMap, normalMap].filter(Boolean);
      material.map = colorMap;
      material.roughnessMap = roughMap;
      material.metalnessMap = roughMap;
      material.normalMap = normalMap;
      material.metalness = metalness;
      material.needsUpdate = true;
      canvas.hidden = false;
      element.classList.add("has-maps");
      renderer.render(scene, camera);
    },
    clear() {
      if (material) {
        material.map = null;
        material.roughnessMap = null;
        material.metalnessMap = null;
        material.normalMap = null;
        material.metalness = 0;
        material.needsUpdate = true;
      }
      disposeTextureResources(ownedTextures);
      ownedTextures = [];
      canvas.hidden = true;
      element.classList.remove("has-maps");
    }
  };
}
