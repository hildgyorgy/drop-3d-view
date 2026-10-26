// WebGL's legacy clearcoat lobe uses acos/tan and divisions at grazing angles.
// Use the equivalent GGX/Smith equations directly in cosine space so Safari's
// shader compiler cannot turn a valid lacquer reflection into a NaN.
export function stabilizePhotoClearcoat(shader) {
  const start = shader.indexOf("float clearcoatEval(");
  const end = shader.indexOf("vec3 clearcoatDirection(", start);
  if (start < 0 || end < 0)
    throw new Error("Unsupported WebGL path tracer clearcoat shader");
  return (
    shader.slice(0, start) +
    /* glsl */ `
    float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {
      float alpha = max( surf.filteredClearcoatRoughness, 0.001 );
      float alpha2 = alpha * alpha;
      float noV = max( abs( wo.z ), 0.000001 );
      float noL = max( abs( wi.z ), 0.000001 );
      float noH = clamp( wh.z, 0.0, 1.0 );
      float voH = max( dot( wo, wh ), 0.000001 );
      float loH = max( dot( wi, wh ), 0.000001 );
      float d = ( 1.0 - noH * noH ) + alpha2 * noH * noH;
      float D = alpha2 / ( PI * d * d );
      float rootV = sqrt( alpha2 + ( 1.0 - alpha2 ) * noV * noV );
      float rootL = sqrt( alpha2 + ( 1.0 - alpha2 ) * noL * noL );
      float visibility = 0.5 / ( noL * rootV + noV * rootL );
      float F = schlickFresnel( loH, 0.04 );
      color = color * ( 1.0 - surf.clearcoat * F )
        + F * D * visibility * surf.clearcoat * noL;
      return D * voH / ( 2.0 * ( noV + rootV ) * loH );
    }

  ` +
    shader.slice(end)
  );
}

export function installPhotoClearcoatFix(pathTracer) {
  // The pinned WebGLPathTracer exposes no public shader hook. Its low-res
  // renderer shares this material, so both render paths receive the fix.
  const material = pathTracer._pathTracer?.material;
  if (!material) throw new Error("Unsupported WebGL path tracer material");
  material.fragmentShader = stabilizePhotoClearcoat(material.fragmentShader);
  material.needsUpdate = true;
}
