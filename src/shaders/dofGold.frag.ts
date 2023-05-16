const fragment = `
uniform float uOpacity;
varying float vDistance;
varying float vSize;

void main() {
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;
  if (dot(cxy, cxy) > 1.0) discard;
  if (vDistance > 0.9) discard;
  if (vSize < 5.0) discard;
  gl_FragColor = vec4(vec3(247.0 / 255.0, 166.0 / 255.0, 35.0 / 255.0), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
}
`

export default fragment
