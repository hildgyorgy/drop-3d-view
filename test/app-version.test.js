import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { APP_VERSION } from "../js/core/version.js";

test("the displayed app version matches the package release", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8")
  );

  assert.equal(packageJson.version, `${APP_VERSION}.0`);
});
