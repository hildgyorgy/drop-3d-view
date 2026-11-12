import { test, expect } from "@playwright/test";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { readGlb } from "../js/model/glb-material-patch.js";

const modelPath = fileURLToPath(new URL("../demo/demo_house_2.glb", import.meta.url));

test("Workbench classifies dropped maps, accepts manual roles and exports DX normals with ARM AO", async ({ page }) => {
  const backend = process.env.DVR_TEST_RENDERER ?? "webgl";
  await page.addInitScript(mode => localStorage.setItem("drop-view-renderer-mode", mode), backend);
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(backend === "webgpu" ? "/?rendererDebug=1" : "/");
  await page.setInputFiles("#fileInput", modelPath);
  await expect(page.locator("#startScreen")).toHaveClass(/hidden/);
  await page.locator("#aboutButton").click();
  await page.locator("#materialWorkbenchEntry").click();
  await page.locator("body > canvas").click({ position: { x: 640, y: 400 } });
  await expect(page.locator("#workbenchApply")).toBeEnabled();
  await page.locator("#workbenchType").selectOption("surface");
  if (await page.locator("#workbenchClearMaps").isEnabled())
    await page.locator("#workbenchClearMaps").click();
  const index = Number((await page.locator("#workbenchMaterial").textContent()).match(/#(\d+)/)[1]);

  async function dropMaps(maps) {
    await page.evaluate(async maps => {
      const transfer = new DataTransfer();
      for (const { name, pixel } of maps) {
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 2;
        const context = canvas.getContext("2d");
        context.fillStyle = `rgb(${pixel.join(",")})`;
        context.fillRect(0, 0, 2, 2);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
        transfer.items.add(new File([blob], name, { type: "image/png" }));
      }
      document.querySelector(".workbench-file").dispatchEvent(new DragEvent("drop", {
        bubbles: true, cancelable: true, dataTransfer: transfer
      }));
    }, maps);
    await expect(page.locator("#workbenchAddMaps")).toBeEnabled();
  }

  await dropMaps([
    { name: "Bricks001_Color.png", pixel: [90, 60, 30] },
    { name: "wood_nor_dx_1k.png", pixel: [128, 64, 250] },
    { name: "wood_arm_1k.png", pixel: [70, 180, 220] }
  ]);
  await expect(page.getByRole("combobox", { name: "Map type for Bricks001_Color.png", exact: true })).toHaveValue("color");
  await expect(page.getByRole("combobox", { name: "Map type for wood_nor_dx_1k.png", exact: true })).toHaveValue("normalDx");
  await expect(page.locator("#workbenchMaps .workbench-map-item")).toHaveCount(3);
  await dropMaps([{ name: "my-favourite-wood.png", pixel: [100, 80, 40] }]);
  await expect(page.locator("#workbenchMaps .workbench-map-item")).toHaveCount(4);
  await page.getByRole("combobox", { name: "Map type for my-favourite-wood.png", exact: true }).selectOption("color");
  // Reassignment preserves the displaced image for a deliberate new choice.
  await expect(page.getByRole("combobox", { name: "Map type for Bricks001_Color.png", exact: true })).toHaveValue("");
  await page.getByRole("combobox", { name: "Map type for Bricks001_Color.png", exact: true }).selectOption("roughness");
  await expect(page.locator("#workbenchStatus")).toBeEmpty();
  await page.locator("#workbenchApply").click();
  await expect(page.locator("#workbenchApply")).toBeEnabled();
  await expect(page.locator("#workbenchStatus")).toBeEmpty();
  await page.locator("#materialWorkbench").evaluate(panel => { panel.scrollTop = 0; });
  await page.locator("#materialWorkbench").screenshot({ path: `test-results/workbench-map-roles-${backend}.png` });

  async function exportedPixels() {
    await page.locator("#openAgain").click();
    const download = page.waitForEvent("download");
    await page.locator("#exportGlb").click();
    const bytes = await readFile(await (await download).path());
    const { json, binary } = readGlb(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
    const material = json.materials[index];
    const images = {};
    for (const [kind, info] of Object.entries({
      normal: material.normalTexture, ao: material.occlusionTexture,
      packed: material.pbrMetallicRoughness.metallicRoughnessTexture
    })) {
      expect(info.texCoord).toBe(1);
      const image = json.images[json.textures[info.index].source];
      const view = json.bufferViews[image.bufferView];
      images[kind] = [...binary.slice(view.byteOffset || 0, (view.byteOffset || 0) + view.byteLength)];
    }
    await page.locator("#filePanel [data-close]").click();
    return page.evaluate(async images => {
      const pixels = {};
      for (const [kind, bytes] of Object.entries(images)) {
        const bitmap = await createImageBitmap(new Blob([new Uint8Array(bytes)], { type: "image/png" }));
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 2;
        const context = canvas.getContext("2d");
        context.drawImage(bitmap, 0, 0);
        pixels[kind] = [...context.getImageData(0, 0, 1, 1).data];
        bitmap.close();
      }
      return pixels;
    }, images);
  }
  const first = await exportedPixels();
  expect(first.normal).toEqual([128, 191, 250, 255]);
  expect(first.ao).toEqual([70, 70, 70, 255]);
  expect(first.packed).toEqual([255, 180, 220, 255]);
  // An individually added AO replaces derived ARM AO without losing other maps.
  await dropMaps([{ name: "Bricks001_AmbientOcclusion.png", pixel: [110, 110, 110] }]);
  await page.locator("#workbenchApply").click();
  await expect(page.locator("#workbenchApply")).toBeEnabled();
  const second = await exportedPixels();
  expect(second.ao).toEqual([110, 110, 110, 255]);
  expect(second.normal).toEqual([128, 191, 250, 255]);
  expect(errors).toEqual([]);
});

test("Workbench converts a surface to clean physical glass and back, with export and undo", async ({ page }) => {
  const backend = process.env.DVR_TEST_RENDERER ?? "webgl";
  await page.addInitScript(mode => localStorage.setItem("drop-view-renderer-mode", mode), backend);
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto(backend === "webgpu" ? "/?rendererDebug=1" : "/");
  await page.setInputFiles("#fileInput", modelPath);
  await expect(page.locator("#startScreen")).toHaveClass(/hidden/);
  await page.locator("#aboutButton").click();
  await page.locator("#materialWorkbenchEntry").click();
  await page.locator("body > canvas").click({ position: { x: 640, y: 400 } });
  await expect(page.locator("#workbenchApply")).toBeEnabled();
  const materialIndex = Number((await page.locator("#workbenchMaterial").textContent()).match(/#(\d+)/)[1]);
  let lastExportPath;
  let glassPath;

  async function applyType(type) {
    await page.locator("#workbenchType").selectOption(type);
    await page.locator("#workbenchApply").click();
    await expect(page.locator("#workbenchApply")).toBeEnabled();
    await expect(page.locator("#workbenchStatus")).toBeEmpty();
  }
  async function exportedMaterial() {
    await page.locator("#openAgain").click();
    const download = page.waitForEvent("download");
    await page.locator("#exportGlb").click();
    lastExportPath = await (await download).path();
    const bytes = await readFile(lastExportPath);
    await page.locator("#filePanel [data-close]").click();
    return readGlb(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength)).json.materials[materialIndex];
  }
  await applyType("glass");
  const glass = await exportedMaterial();
  glassPath = lastExportPath;
  expect(glass.pbrMetallicRoughness).toEqual({
    baseColorFactor: [1, 1, 1, 1], metallicFactor: 0, roughnessFactor: 0.03
  });
  expect(glass.extensions).toEqual({
    KHR_materials_transmission: { transmissionFactor: 0.98 },
    KHR_materials_ior: { ior: 1.5 }
  });
  expect(glass.extras.archicad.clearGlassOverride).toBe(true);
  for (const type of ["surface", "metal", "lacquered"]) {
    await applyType(type);
    const opaque = await exportedMaterial();
    expect(opaque.extensions?.KHR_materials_transmission).toBeUndefined();
    expect(opaque.extensions?.KHR_materials_volume).toBeUndefined();
    expect(opaque.extras.archicad.clearGlassOverride).toBe(false);
    await page.locator("#workbenchUndo").click();
    await expect(page.locator("#workbenchType")).toHaveValue("glass");
  }
  await page.locator("#workbenchReset").click();
  await expect(page.locator("#workbenchReset")).toBeDisabled();

  // Reopen actual saved glass so the next edit starts from a physical-glass
  // baseline, rather than from the first model's opaque original material.
  await page.setInputFiles("#fileInput", {
    name: "saved-glass.glb", mimeType: "model/gltf-binary", buffer: await readFile(glassPath)
  });
  await expect(page.locator("#workbenchMaterial")).toHaveText("—");
  await page.locator("body > canvas").click({ position: { x: 640, y: 400 } });
  await expect(page.locator("#workbenchType")).toHaveValue("glass");
  await applyType("surface");
  const reopenedSurface = await exportedMaterial();
  expect(reopenedSurface.extensions?.KHR_materials_transmission).toBeUndefined();
  expect(reopenedSurface.extras.archicad.clearGlassOverride).toBe(false);
  await page.locator("#workbenchReset").click();
  await expect(page.locator("#workbenchType")).toHaveValue("glass");
  expect(errors).toEqual([]);
});

async function openBlenderTools(page) {
  if (!await page.locator("#blenderRenderPanel").evaluate(panel => panel.open)) {
    if (!await page.locator("#aboutMenu").isVisible())
      await page.locator("#aboutButton").click();
    await page.locator("#blenderRenderEntry").click();
  }
}

async function expectVisibleCanvas(page) {
  const canvas = page.locator("body > canvas");
  await expect(canvas).toBeVisible();
  // WebKit may clear the WebGL drawing buffer after compositing, so test the
  // actually displayed canvas rather than readPixels/drawImage afterwards.
  const screenshot = await canvas.screenshot();
  expect(screenshot.byteLength).toBeGreaterThan(20_000);
}

test("normal view uses WebGL and a fresh debug view selects WebGPU", async ({ page }) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await page.evaluate(() => localStorage.setItem("drop-view-renderer-mode", "webgpu"));
  await page.reload();
  await page.setInputFiles("#fileInput", modelPath);
  await expect(page.locator("#photo1Button")).toHaveAttribute("title", "Progressive path tracing");
  await expect(page.locator("#rendererPicker")).toBeHidden();
  await expectVisibleCanvas(page);

  const webGpuAvailable = await page.evaluate(async () => Boolean(await navigator.gpu?.requestAdapter()));
  if (process.env.DVR_REQUIRE_WEBGPU === "1") expect(webGpuAvailable).toBe(true);
  await page.evaluate(() => localStorage.removeItem("drop-view-renderer-mode"));
  await page.goto("/?rendererDebug=1");
  await page.locator("#aboutButton").click();
  await expect(page.locator('[data-renderer-mode="webgpu"]')).toHaveAttribute("aria-pressed", "true");
  if (webGpuAvailable) {
    await page.setInputFiles("#fileInput", modelPath);
    await expect(page.locator("#photo1Button")).toBeEnabled();
    await expectVisibleCanvas(page);
    await page.locator("#photo1Button").click();
    await expect(page.locator("#performanceStats")).toHaveText(/SAMPLES • [1-9][0-9]*/, { timeout: 60_000 });
    await page.locator("#photo1Button").click();
    await expect(page.locator("#photo1Button")).toHaveText("RESUME");
    await page.locator("#photo1Button").click();
    await expect(page.locator("#photo1Button")).toHaveText("PAUSE");
  } else {
    test.info().annotations.push({ type: "WebGPU", description: "No adapter: checked default selection; GPU render requires a capable browser." });
  }

  if (!await page.locator("#aboutMenu").isVisible()) await page.locator("#aboutButton").click();
  const reloaded = page.waitForEvent("load");
  await page.locator('[data-renderer-mode="webgl"]').click();
  await reloaded;
  await page.locator("#aboutButton").click();
  await expect(page.locator('[data-renderer-mode="webgl"]')).toHaveAttribute("aria-pressed", "true");
  await page.reload();
  await page.locator("#aboutButton").click();
  await expect(page.locator('[data-renderer-mode="webgl"]')).toHaveAttribute("aria-pressed", "true");
  expect(errors).toEqual([]);
});

test("a user GLB saves and reopens as a visible render package", async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem("drop-view-renderer-mode"))
      localStorage.setItem("drop-view-renderer-mode", "webgl");
  });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/?rendererDebug=1");
  await page.setInputFiles("#fileInput", modelPath);
  await expect(page.locator("#startScreen")).toHaveClass(/hidden/);
  await expect(page.locator("#photo1Button")).toBeEnabled();
  await expectVisibleCanvas(page);

  // WebGPU device loss cannot be repaired in place. Exercise the shared
  // handoff/reload path without destroying the browser test runner's device.
  const recovered = page.waitForEvent("load");
  await page.evaluate(() => window.dispatchEvent(new CustomEvent(
    "dropview:gpu-device-lost",
    { detail: { api: "test", scope: "viewer" } }
  )));
  await recovered;
  await expect(page.locator("#startScreen")).toHaveClass(/hidden/);
  await expect(page.locator("#photo1Button")).toBeEnabled();
  await expectVisibleCanvas(page);

  await page.locator("#openAgain").click();
  await expect(page.locator("#filePanel #openModelFile")).toBeVisible();
  await expect(page.locator("#filePanel #exportGlb")).toBeVisible();
  await expect(page.locator("#filePanel #renderSnapshotExport")).toHaveCount(0);
  await expect(page.locator("#filePanel #renderPackageInput")).toHaveCount(0);
  await expect(page.locator("#filePanel #renderBridgeRender")).toHaveCount(0);
  await page.locator("#filePanel [data-close]").click();

  await openBlenderTools(page);
  await page.locator("#importTab").click();
  await expect(page.locator("#importTab")).toHaveText("IMPORT / EXPORT");
  await expect(page.locator("#exportTab")).toHaveText("RENDER");
  await expect(page.locator("#openRenderPackage")).toBeVisible();
  await expect(page.locator("#renderBridgeRender")).toBeHidden();
  await page.locator("#exportTab").click();
  await expect(page.locator("#renderBridgeRender")).toHaveText("RENDER SCENE");
  await expect(page.locator("#renderDenoise")).toBeChecked();
  await expect(page.locator("#renderAdaptive")).toBeChecked();
  await page.locator("#renderDenoise").uncheck();
  await page.locator("#renderAdaptive").uncheck();
  await expect(page.locator("#renderDenoise")).not.toBeChecked();
  await expect(page.locator("#renderAdaptive")).not.toBeChecked();
  await page.locator("#importTab").click();
  await expect(page.locator("#renderSnapshotExport")).toBeEnabled();
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#renderSnapshotExport").click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("demo_house_2.dvrender");
  const packagePath = await download.path();
  expect(packagePath).toBeTruthy();
  expect((await stat(packagePath)).size).toBeGreaterThan(1_000_000);

  await page.locator("#importTab").click();
  await page.setInputFiles("#renderPackageInput", packagePath);
  await expect(page.locator("#blenderRenderPanel")).not.toHaveAttribute("open", "");
  await expect(page.locator("#photo1Button")).toBeEnabled();
  await expectVisibleCanvas(page);

  const webGpuAvailable = await page.evaluate(async () =>
    Boolean(await navigator.gpu?.requestAdapter())
  );
  if (webGpuAvailable) {
    await page.locator("#aboutButton").click();
    const reloaded = page.waitForEvent("load");
    await page.locator('[data-renderer-mode="webgpu"]').click();
    await reloaded;
    await expect(page.locator("#startScreen")).toHaveClass(/hidden/);
    await expect(page.locator("#photo1Button")).toHaveAttribute(
      "title",
      /WebGPU path tracing/
    );
    await expectVisibleCanvas(page);
  } else {
    test.info().annotations.push({
      type: "WebGPU",
      description:
        "Backend handoff skipped because this WebKit runtime has no GPU adapter."
    });
  }

  expect(errors).toEqual([]);
});

test("orthographic package preserves the zoomed portrait camera frame on reopen", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("drop-view-renderer-mode", "webgl"));
  await page.setViewportSize({ width: 800, height: 1000 });
  await page.goto("/?rendererDebug=1");
  await page.setInputFiles("#fileInput", modelPath);
  await expect(page.locator("#startScreen")).toHaveClass(/hidden/);
  await page.locator("#orthoButton").click();
  const canvas = page.locator("body > canvas");
  await canvas.hover();
  await page.mouse.wheel(0, -200);
  // OrbitControls handles the wheel synchronously; await a displayed frame.
  await expectVisibleCanvas(page);

  async function exportPackage() {
    await openBlenderTools(page);
    await page.locator("#importTab").click();
    const downloadPromise = page.waitForEvent("download");
    await page.locator("#renderSnapshotExport").click();
    const path = await (await downloadPromise).path();
    const bytes = await readFile(path);
    return { path, manifest: JSON.parse(bytes.subarray(12, 12 + bytes.readUInt32LE(8))) };
  }

  const first = await exportPackage();
  const camera = first.manifest.viewSession.camera;
  expect(camera.projection).toBe("ortho");
  expect(camera.zoom).toBeGreaterThan(1);
  const frame = camera.orthographic;
  expect((frame.right - frame.left) / (frame.top - frame.bottom))
    .toBeCloseTo(first.manifest.renderSize.width / first.manifest.renderSize.height, 6);
  await page.locator("#importTab").click();
  await page.setInputFiles("#renderPackageInput", first.path);
  await expect(page.locator("#blenderRenderPanel")).not.toHaveAttribute("open", "");
  await expectVisibleCanvas(page);
  const second = await exportPackage();
  expect(second.manifest.viewSession.camera.orthographic).toEqual(frame);
  expect(second.manifest.viewSession.camera.zoom).toBeCloseTo(camera.zoom, 6);
});

test("a lost WebGL context rebuilds the visible viewer", async ({ page }) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.addInitScript(() => {
    localStorage.setItem("drop-view-renderer-mode", "webgl");
  });

  await page.goto("/?rendererDebug=1");
  await page.setInputFiles("#fileInput", modelPath);
  await expect(page.locator("#startScreen")).toHaveClass(/hidden/);
  await expectVisibleCanvas(page);

  const supported = await page.evaluate(() => {
    window.__dropViewGpuRecoveryEvents = [];
    window.addEventListener("dropview:gpu-context-lost", () => {
      window.__dropViewGpuRecoveryEvents.push("lost");
    });
    window.addEventListener("dropview:gpu-context-restored", () => {
      window.__dropViewGpuRecoveryEvents.push("restored");
    });
    const canvas = document.querySelector("body > canvas");
    const context = canvas?.getContext("webgl2");
    const extension = context?.getExtension("WEBGL_lose_context");
    if (!extension) return false;
    extension.loseContext();
    setTimeout(() => extension.restoreContext(), 150);
    return true;
  });
  if (!supported) {
    test.info().annotations.push({
      type: "WebGL",
      description: "WEBGL_lose_context is unavailable in this WebKit runtime."
    });
    return;
  }

  await expect.poll(() => page.evaluate(
    () => window.__dropViewGpuRecoveryEvents
  )).toEqual(["lost", "restored"]);
  await expectVisibleCanvas(page);
  await page.locator("#openAgain").click();
  await expect(page.locator("#exportModelName")).toHaveText("demo_house_2.glb");

  await page.locator("#filePanel [data-close]").click();
  await page.locator("#aboutButton").click();
  await page.locator("#materialWorkbenchEntry").click();
  const materialPreview = page.locator("#workbenchSpherePreview canvas");
  await expect(materialPreview).toBeVisible();
  const previewRecovered = await materialPreview.evaluate(canvas => {
    const context = canvas.getContext("webgl2");
    const extension = context?.getExtension("WEBGL_lose_context");
    if (!extension) return false;
    return new Promise(resolve => {
      canvas.addEventListener("webglcontextrestored", () => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve(true)));
      }, { once: true });
      extension.loseContext();
      setTimeout(() => extension.restoreContext(), 150);
    });
  });
  if (previewRecovered) {
    const previewScreenshot = await materialPreview.screenshot();
    expect(previewScreenshot.byteLength).toBeGreaterThan(1_000);
  } else {
    test.info().annotations.push({
      type: "WebGL",
      description: "Material preview context-loss coverage is unavailable."
    });
  }
  expect(errors).toEqual([]);
});

test("the WebGL path tracer builds its BVH in a worker", async ({ page }) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.addInitScript(() => {
    localStorage.setItem("drop-view-renderer-mode", "webgl");
  });

  await page.goto("/?rendererDebug=1");
  await page.setInputFiles("#fileInput", modelPath);
  await expect(page.locator("#photo1Button")).toBeEnabled();
  await page.locator("#photo1Button").click();
  await expect(page.locator("#performanceStats")).toHaveText(
    /SAMPLES • [1-9][0-9]*/,
    { timeout: 60_000 }
  );
  await expect(page.locator("#photo1Button")).not.toHaveAttribute("aria-busy", "true");
  await expectVisibleCanvas(page);
  expect(errors).toEqual([]);
});
