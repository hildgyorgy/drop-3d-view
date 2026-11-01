import * as THREE from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { environmentSunDirectionFromPixel } from "../model/sun-metadata.js";
import { getEnvironmentSource } from "./environment-source.js";

let cache = null;

export function prepareEnvironmentTexture(texture) {
  const { data, width, height } = texture.image ?? {};
  let sunDirection = null;

  if (data instanceof Float32Array && width && height) {
    let brightest = 0;
    let maximum = -Infinity;
    const stride = Math.floor(data.length / (width * height));
    for (let pixel = 0; pixel < width * height; pixel += 1) {
      const offset = pixel * stride;
      const luminance = 0.2126 * data[offset] +
        0.7152 * data[offset + 1] + 0.0722 * data[offset + 2];
      if (luminance > maximum) {
        maximum = luminance;
        brightest = pixel;
      }
    }
    sunDirection = new THREE.Vector3(...environmentSunDirectionFromPixel(
      brightest % width, Math.floor(brightest / width), width, height
    )).normalize();

    // WebGPU and the path tracers eventually store this data as half floats.
    // Clamp once in the shared CPU image so every consumer gets finite input.
    for (let index = 0; index < data.length; index += 1)
      data[index] = Math.min(65504, Math.max(-65504, data[index]));
  }

  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.needsUpdate = true;
  return { texture, sunDirection };
}

function clonePreparedEnvironment(record) {
  const texture = record.texture.clone();
  texture.needsUpdate = true;
  return {
    texture,
    sunDirection: record.sunDirection?.clone() ?? null
  };
}

export async function loadEnvironmentTexture(source = getEnvironmentSource()) {
  if (!cache || cache.url !== source.url) {
    cache?.texture?.dispose();
    const record = { url: source.url, texture: null, sunDirection: null, promise: null };
    cache = record;
    record.promise = new HDRLoader().setDataType(THREE.FloatType).loadAsync(source.url)
      .then(texture => {
        if (cache !== record || getEnvironmentSource().url !== record.url) {
          texture.dispose();
          throw new Error("The scene environment changed while loading");
        }
        const prepared = prepareEnvironmentTexture(texture);
        record.texture = prepared.texture;
        record.sunDirection = prepared.sunDirection;
        return record;
      })
      .catch(error => {
        if (cache === record) cache = null;
        throw error;
      });
  }

  const record = cache;
  const ready = await record.promise;
  if (cache !== record || getEnvironmentSource().url !== record.url)
    throw new Error("The scene environment changed while loading");
  return clonePreparedEnvironment(ready);
}
