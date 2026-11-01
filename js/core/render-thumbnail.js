export const MAX_THUMBNAIL_BYTES = 256 * 1024;
export const MAX_THUMBNAIL_SIDE = 640;

export function assertRenderThumbnail(thumbnail) {
  if (!thumbnail || thumbnail.mimeType !== "image/jpeg" ||
      !Number.isInteger(thumbnail.width) || !Number.isInteger(thumbnail.height) ||
      thumbnail.width < 1 || thumbnail.height < 1 ||
      thumbnail.width > MAX_THUMBNAIL_SIDE || thumbnail.height > MAX_THUMBNAIL_SIDE ||
      typeof thumbnail.data !== "string" || thumbnail.data.length === 0 ||
      thumbnail.data.length > 4 * Math.ceil(MAX_THUMBNAIL_BYTES / 3) ||
      thumbnail.data.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(thumbnail.data))
    throw new Error("Invalid render thumbnail");
  const bytes = atob(thumbnail.data);
  if (bytes.length > MAX_THUMBNAIL_BYTES || bytes.length < 4 ||
      bytes.charCodeAt(0) !== 0xff || bytes.charCodeAt(1) !== 0xd8 ||
      bytes.charCodeAt(bytes.length - 2) !== 0xff || bytes.charCodeAt(bytes.length - 1) !== 0xd9)
    throw new Error("Invalid render thumbnail JPEG");
  return thumbnail;
}

// Call immediately after repainting the viewport, before the browser clears
// the GPU drawing buffer. This copies only the scene canvas, never UI overlays.
export function captureRenderThumbnail(source) {
  if (!source.width || !source.height) throw new Error("The viewport has no image");
  const scale = Math.min(1, MAX_THUMBNAIL_SIDE / Math.max(source.width, source.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(source.width * scale));
  canvas.height = Math.max(1, Math.round(source.height * scale));
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not create the render thumbnail");
  context.fillStyle = "#dddddd";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  return assertRenderThumbnail({ mimeType: "image/jpeg", width: canvas.width,
    height: canvas.height, data: canvas.toDataURL("image/jpeg", 0.8).split(",")[1] });
}
