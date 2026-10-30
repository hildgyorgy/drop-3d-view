// Three's DRACOLoader defines local decoder URLs even when setDecoderPath()
// overrides them at runtime. Vite would otherwise copy those unused files
// into every renderer bundle. Keep the fallback URLs remote as well.
const decoderBase = "https://cdn.jsdelivr.net/npm/three@0.187.0/examples/jsm/libs/draco/";

export function externalDracoDecoder() {
  return {
    name: "drop-view-external-draco-decoder",
    enforce: "pre",
    transform(code, id) {
      if (!id.replaceAll("\\", "/").endsWith("/three/examples/jsm/loaders/DRACOLoader.js")) {
        return null;
      }

      let replacements = 0;
      const transformed = code.replace(
        /new URL\(\s*'\.\.\/libs\/draco\/([^']+)'\s*,\s*import\.meta\.url\s*\)\.toString\(\)/g,
        (_, file) => {
          replacements++;
          return JSON.stringify(new URL(file, decoderBase).href);
        }
      );
      if (replacements !== 5) {
        throw new Error(`Expected five Draco decoder URLs, found ${replacements}. Check the pinned Three.js loader.`);
      }
      return { code: transformed, map: null };
    }
  };
}
