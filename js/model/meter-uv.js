// Experimental box projection in model metres. The caller supplies world-space
// positions and normals, so unrelated source UV scales cannot affect tile size.
export function makeMeterUvs(positions, normals, tileMetres) {
  if (!Number.isFinite(tileMetres) || tileMetres <= 0 ||
      positions.length !== normals.length || positions.length % 3 !== 0)
    throw new Error("Meter UVs need matching positions, normals and a positive tile size.");
  const uv = new Float32Array(positions.length / 3 * 2);
  for (let i = 0, j = 0; i < positions.length; i += 3, j += 2) {
    const [x, y, z] = [positions[i], positions[i + 1], positions[i + 2]];
    const [nx, ny, nz] = [normals[i], normals[i + 1], normals[i + 2]];
    if (Math.abs(ny) >= Math.abs(nx) && Math.abs(ny) >= Math.abs(nz)) {
      uv[j] = x / tileMetres;
      uv[j + 1] = (ny < 0 ? z : -z) / tileMetres;
    } else if (Math.abs(nx) >= Math.abs(nz)) {
      uv[j] = (nx < 0 ? -z : z) / tileMetres;
      uv[j + 1] = y / tileMetres;
    } else {
      uv[j] = (nz < 0 ? x : -x) / tileMetres;
      uv[j + 1] = y / tileMetres;
    }
  }
  return uv;
}
