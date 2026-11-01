import { test, expect } from "@playwright/test";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const modelPath = fileURLToPath(new URL("../demo/demo_house_2.glb", import.meta.url));

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

  await page.locator("#openAgain").click();
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
  await expect(page.locator("#filePanel")).not.toHaveAttribute("open", "");
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
