import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { scene, renderer } from "../core/scene.js";
import { State } from "../core/state.js";

const button = document.getElementById("aoToggle");
let enabled = false;
let composer, renderPass, aoPass, outputPass;
const size = new THREE.Vector2();

// Pinned to Three r180: keep glass out of the normal/depth pass so it
// does not become a solid wall in front of the interior.
class ViewerGTAOPass extends GTAOPass {
  _renderOverride(...args) {
    const autoUpdate = renderer.shadowMap.autoUpdate;
    renderer.shadowMap.autoUpdate = false;
    try {
      return super._renderOverride(...args);
    } finally {
      renderer.shadowMap.autoUpdate = autoUpdate;
    }
  }
  _overrideVisibility() {
    super._overrideVisibility();
    scene.traverse(object => {
      if (!object.isMesh || !object.visible) return;
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      if (
        materials.every(material => material.transparent || material.depthWrite === false)
      ) {
        object.visible = false;
        this._visibilityCache.push(object);
      }
    });
  }
}

function prepareComposer() {
  if (composer) return;
  renderer.getSize(size);
  const target = new THREE.WebGLRenderTarget(1, 1, {
    type: THREE.HalfFloatType,
    samples: Math.min(4, renderer.capabilities.maxSamples)
  });
  composer = new EffectComposer(renderer, target);
  // Bound the extra rendering cost on high-density phone screens.
  composer.setPixelRatio(Math.min(renderer.getPixelRatio(), 1.5));
  composer.setSize(size.x, size.y);
  renderPass = new RenderPass(scene, State.camera);
  renderPass.clearColor = new THREE.Color(0);
  renderPass.clearAlpha = 0;
  aoPass = new ViewerGTAOPass(scene, State.camera);
  aoPass.blendIntensity = 0.35;
  composer.addPass(renderPass);
  composer.addPass(aoPass);
  outputPass = new OutputPass();
  outputPass.uniforms.viewerBackground = { value: scene.background.clone() };
  outputPass.material.fragmentShader = outputPass.material.fragmentShader
    .replace(
      "uniform sampler2D tDiffuse;",
      "uniform sampler2D tDiffuse;\nuniform vec3 viewerBackground;"
    )
    .replace(
      "// color space",
      `// Keep the flat UI background outside photographic tone mapping.
      gl_FragColor.rgb = mix(viewerBackground, gl_FragColor.rgb, gl_FragColor.a);
      gl_FragColor.a = 1.0;
      // color space`
    );
  composer.addPass(outputPass);
}

function disposeComposer() {
  if (!composer) return;

  renderer.setRenderTarget(null);

  aoPass?.dispose();
  // GTAOPass r180 does not dispose these two shader materials itself.
  aoPass?.gtaoMaterial?.dispose();
  aoPass?.blendMaterial?.dispose();
  outputPass?.dispose();
  composer.dispose();

  composer = null;
  renderPass = null;
  aoPass = null;
  outputPass = null;
}

export function updateAO() {
  if (!enabled || State.currentMode !== "original") disposeComposer();

  button.disabled = State.currentMode !== "original";
  button.setAttribute("aria-pressed", String(enabled));
  button.setAttribute("aria-label", `Ambient occlusion ${enabled ? "on" : "off"}`);
}

button.addEventListener("click", () => {
  enabled = !enabled;
  updateAO();
});

export function resizeAO(width, height) {
  composer?.setSize(width, height);
}

export function renderViewer() {
  if (!enabled || State.currentMode !== "original" || !State.model) {
    renderer.render(scene, State.camera);
    return;
  }
  prepareComposer();
  renderPass.camera = aoPass.camera = State.camera;
  const perspective = State.camera.isPerspectiveCamera ? 1 : 0;
  if (aoPass.gtaoMaterial.defines.PERSPECTIVE_CAMERA !== perspective) {
    aoPass.gtaoMaterial.defines.PERSPECTIVE_CAMERA = perspective;
    aoPass.gtaoMaterial.needsUpdate = true;
  }
  aoPass.normalMaterial.clippingPlanes = State.sectionEnabled ? [State.sectionPlane] : [];
  // Models can use different units: scale the effect to their bounds.
  aoPass.updateGtaoMaterial({ radius: Math.max(State.maxModelSize * 0.015, 0.001) });
  const background = scene.background;
  scene.background = null;
  try {
    composer.render();
  } finally {
    scene.background = background;
  }
}

updateAO();
