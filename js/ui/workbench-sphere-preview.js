// Independent preview scene using the same renderer backend as the viewer.
// Only edits, dragging and keyboard rotation schedule a frame.
import * as THREE from "three";
import { sourceMapSettings } from "./workbench-source-maps.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { renderer as viewerRenderer } from "../core/scene.js";
import { createWorkbenchPreviewRenderer } from "./workbench-preview-renderer.js";
import { disposeTextureResources } from "../model/model-resource-disposal.js";

export function createWorkbenchSpherePreview(element) {
  const canvas = element.querySelector("canvas");
  let renderer = null;
  let initializing = null;
  let scene, camera, material, sphere;
  let ownedTextures = [];
  let visible = false;
  let frame = 0;
  let pointer = null;
  let settings = { type: "surface", color: "#ffffff", roughness: .75,
    transparency: .98, tileMetres: 2, rotation: 0, offsetX: 0, offsetY: 0 };
  const horizontal = new THREE.Vector3(0, 1, 0);
  const vertical = new THREE.Vector3(1, 0, 0);

  function render() {
    frame = 0;
    if (!visible || !renderer || !sphere) return;
    const size = element.clientWidth;
    if (!size) return;
    renderer.setSize(size, size, false);
    renderer.render(scene, camera);
  }

  function schedule() {
    if (visible && sphere && !frame) frame = requestAnimationFrame(render);
  }

  // Let the sphere consume the free vertical space above the maps, while
  // retaining a useful minimum in short, scrollable panels.
  const resizeObserver = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect;
    if (!width || !height) return;
    const size = Math.max(1, Math.min(width, height - 8));
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    schedule();
  });
  resizeObserver.observe(element.parentElement);

  function updateMaterial() {
    if (!material) return;
    const usesMaps = ["surface", "lacquered"].includes(settings.type);
    material.color.set(settings.color);
    material.roughness = settings.roughness;
    material.metalness = settings.type === "metal" ? 1 : settings.sourceMaps?.metalness ?? 0;
    material.clearcoat = settings.type === "lacquered" ? 1 : 0;
    material.clearcoatRoughness = .08;
    material.transmission = settings.type === "glass" ? settings.transparency : 0;
    material.thickness = settings.type === "glass" ? .5 : 0;
    material.map = usesMaps ? ownedTextures[0] ?? null : null;
    material.roughnessMap = material.metalnessMap = usesMaps ? ownedTextures[1] ?? null : null;
    material.normalMap = usesMaps ? ownedTextures[2] ?? null : null;
    material.aoMap = usesMaps ? ownedTextures[3] ?? null : null;
    material.emissiveMap = usesMaps ? ownedTextures[4] ?? null : null;
    material.emissive.fromArray(settings.sourceMaps?.emissive ?? [0, 0, 0]);
    material.normalScale.setScalar(settings.sourceMaps?.normalScale ?? 1);
    material.aoMapIntensity = settings.sourceMaps?.occlusionStrength ?? 1;
    for (const [index, texture] of ownedTextures.entries()) {
      if (!texture) continue;
      texture.repeat.set(2 / settings.tileMetres, 2 / settings.tileMetres);
      texture.rotation = settings.rotation * Math.PI / 180;
      texture.offset.set(settings.offsetX, settings.offsetY);
      if (settings.sourceMaps) {
        const transform = sourceMapSettings(settings.sourceMaps,
          ["color", "roughness", "normal", "occlusion", "emissive"][index], {
            workbenchTileMetres: settings.tileMetres, workbenchRotation: settings.rotation,
            workbenchOffsetX: settings.offsetX, workbenchOffsetY: settings.offsetY
          });
        texture.repeat.set(transform.scaleX, transform.scaleY);
        texture.rotation = transform.rotation;
        texture.offset.set(transform.offsetX, transform.offsetY);
        texture.wrapS = transform.wrapS;
        texture.wrapT = transform.wrapT;
        if (transform.minFilter !== undefined) texture.minFilter = transform.minFilter;
        if (transform.magFilter !== undefined) texture.magFilter = transform.magFilter;
      }
    }
    material.needsUpdate = true;
    schedule();
  }

  async function initialize() {
    const created = await createWorkbenchPreviewRenderer(canvas);
    renderer = created.renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0xefefed, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = viewerRenderer.toneMapping;
    renderer.toneMappingExposure = viewerRenderer.toneMappingExposure;
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1.02, 1.02, 1.02, -1.02, .1, 10);
    camera.position.z = 4;
    const room = new RoomEnvironment();
    const pmrem = new created.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(room, .04);
    scene.environment = environment.texture;
    room.dispose();
    pmrem.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x747474, 1.7));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-2, 3, 4);
    scene.add(key);
    material = new THREE.MeshPhysicalMaterial();
    sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), material);
    scene.add(sphere);
    canvas.hidden = false;
    canvas.dataset.rendererBackend = renderer.isWebGPURenderer ? "webgpu" : "webgl";
    element.classList.add("has-renderer");
    updateMaterial();
  }

  function rotate(dx, dy) {
    if (!sphere) return;
    sphere.rotateOnWorldAxis(horizontal, dx);
    sphere.rotateOnWorldAxis(vertical, dy);
    schedule();
  }
  canvas.addEventListener("pointerdown", event => {
    if (event.button !== 0 || !sphere) return;
    event.preventDefault();
    event.stopPropagation();
    canvas.focus({ preventScroll: true });
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
    element.classList.add("rotating");
  });
  canvas.addEventListener("pointermove", event => {
    if (pointer?.id !== event.pointerId) return;
    const scale = Math.PI / Math.max(1, element.clientWidth);
    rotate((event.clientX - pointer.x) * scale, (event.clientY - pointer.y) * scale);
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  const endRotation = () => {
    if (pointer && canvas.hasPointerCapture(pointer.id)) canvas.releasePointerCapture(pointer.id);
    pointer = null;
    element.classList.remove("rotating");
  };
  canvas.addEventListener("pointerup", endRotation);
  canvas.addEventListener("pointercancel", endRotation);
  canvas.addEventListener("lostpointercapture", endRotation);
  canvas.addEventListener("keydown", event => {
    const delta = { ArrowLeft: [-.15, 0], ArrowRight: [.15, 0],
      ArrowUp: [0, -.15], ArrowDown: [0, .15] }[event.key];
    if (!delta) return;
    event.preventDefault();
    event.stopPropagation();
    rotate(...delta);
  });

  return {
    setVisible(value) {
      visible = value;
      if (visible && !initializing) initializing = initialize().catch(error => {
        console.warn("Material sphere preview unavailable", error);
      });
      if (!visible) {
        cancelAnimationFrame(frame);
        frame = 0;
        endRotation();
      } else schedule();
    },
    setValues(values) {
      settings = { ...settings, ...values };
      updateMaterial();
    },
    show({ colorMap, roughMap, normalMap, aoMap, emissiveMap }) {
      disposeTextureResources(ownedTextures);
      ownedTextures = [colorMap, roughMap, normalMap, aoMap, emissiveMap];
      updateMaterial();
    },
    clear() {
      disposeTextureResources(ownedTextures);
      ownedTextures = [];
      updateMaterial();
    }
  };
}
