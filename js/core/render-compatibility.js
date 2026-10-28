import { APP_VERSION } from "./version.js";

// Update the HDRI identity when replacing backdrop.hdr; bump rendererRevision
// when changing rendering behaviour without changing the public app version.
export const RENDER_PRODUCER = Object.freeze({
  appVersion: APP_VERSION,
  rendererRevision: "webgl-photo-1",
  hdriId: "sha256:e70bf97a44982db07fb952b1f74c07e818649c2bbdfeb6ad4f98af7b4431a38f"
});

export function assertRenderProducer(producer) {
  if (producer === null) return;
  if (
    !producer ||
    typeof producer !== "object" ||
    Array.isArray(producer) ||
    ["appVersion", "rendererRevision", "hdriId"].some(
      key =>
        typeof producer[key] !== "string" ||
        !producer[key].trim() ||
        producer[key].length > 200 ||
        /[\x00-\x1f]/.test(producer[key])
    )
  )
    throw new Error("Invalid render package producer information");
}

export function renderCompatibilityWarnings(producer, current = RENDER_PRODUCER) {
  if (!producer)
    return [
      "This older package has no app or HDRI identity. Render compatibility cannot be verified."
    ];
  assertRenderProducer(producer);
  const warnings = [];
  if (producer.appVersion !== current.appVersion)
    warnings.push(
      `App version differs (package ${producer.appVersion}, this viewer ${current.appVersion}).`
    );
  if (producer.rendererRevision !== current.rendererRevision)
    warnings.push("The rendering revision differs from the package creator's version.");
  if (producer.hdriId !== current.hdriId)
    warnings.push("The HDRI differs from the package creator's environment.");
  return warnings;
}
