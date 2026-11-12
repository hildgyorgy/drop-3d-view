export const MAP_TYPES = [
  ["color", "COLOR"], ["normal", "NORMAL · GL"], ["normalDx", "NORMAL · DX"],
  ["arm", "ARM / ORM"], ["roughness", "ROUGHNESS"],
  ["metalness", "METALNESS"], ["occlusion", "AO"]
];

export function classifyMap(name) {
  const n = name.toLowerCase();
  const patterns = [
    ["normalDx", "nor[_ .-]?dx|normal[_ .-]?(dx|directx)"],
    ["normal", "nor[_ .-]?gl|normal[_ .-]?(gl|opengl)|normal|nor"],
    ["arm", "arm|orm"], ["occlusion", "ambient[_ .-]?occlusion|occlusion|ao"],
    ["roughness", "rough|roughness"], ["metalness", "metal|metallic|metalness"],
    ["color", "diff|diffuse|albedo|base[_ .-]?color|col|color|colour"]
  ];
  let result = null;
  let lastIndex = -1;
  // Prefer the map suffix over a material name such as "metal_color.png".
  // At the same position the explicit DX pattern wins over generic "normal".
  for (const [kind, words] of patterns) {
    for (const match of n.matchAll(new RegExp(`(^|[_ .-])(${words})(?=[_ .-]|$)`, "g"))) {
      if (match.index > lastIndex) {
        lastIndex = match.index;
        result = kind;
      }
    }
  }
  return result;
}

export function normalMapAlternatives(kind) {
  return kind === "normal" || kind === "normalDx" ? ["normal", "normalDx"] : [kind];
}

export function flipNormalGreen(data) {
  for (let i = 1; i < data.length; i += 4) data[i] = 255 - data[i];
}

export function extractOcclusion(data) {
  for (let i = 0; i < data.length; i += 4) {
    data[i + 1] = data[i + 2] = data[i];
    data[i + 3] = 255;
  }
}

const conversions = { normal: new WeakMap(), occlusion: new WeakMap() };

async function convertedImage(file, kind) {
  const cache = conversions[kind];
  if (!cache.has(file)) {
    const conversion = (async () => {
      const bitmap = await createImageBitmap(file);
      try {
        const canvas = document.createElement("canvas");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) throw new Error("Texture canvas is unavailable.");
        context.drawImage(bitmap, 0, 0);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
        if (kind === "normal") flipNormalGreen(pixels.data);
        else extractOcclusion(pixels.data);
        context.putImageData(pixels, 0, 0);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
        if (!blob) throw new Error("Could not convert the texture map.");
        return blob;
      } finally {
        bitmap.close();
      }
    })();
    cache.set(file, conversion);
    conversion.catch(() => cache.delete(file));
  }
  return cache.get(file);
}

// Keep uploaded bytes and their chosen roles intact for undo and backend handoff.
// Only rendering/export consume these derived, convention-correct images.
export async function preparedMapImages(images, { armOcclusion = true } = {}) {
  const prepared = { ...images };
  if (images.normalDx) prepared.normal = await convertedImage(images.normalDx, "normal");
  if (!images.occlusion && images.arm && armOcclusion)
    prepared.occlusion = await convertedImage(images.arm, "occlusion");
  return prepared;
}
