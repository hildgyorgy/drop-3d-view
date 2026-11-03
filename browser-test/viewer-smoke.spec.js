import { test, expect } from "@playwright/test";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const modelPath = fileURLToPath(new URL("../demo/demo_house_2.glb", import.meta.url));

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

test("a user GLB saves and reopens as a visible render package", async ({ page }) => {
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
  await page.locator("#exportTab").click();
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
    await page.locator("#exportTab").click();
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
