const vertex = `
uniform sampler2D uPositions;
uniform float uTime;
uniform float uFocus;
uniform float uFov;
uniform float uBlur;
varying float vDistance;
varying float vSize;

void main() { 
  vec3 pos = texture2D(uPositions, position.xy).xyz;
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vDistance = abs(uFocus - -mvPosition.z);
  vSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur * 2.0;
  gl_PointSize = vSize;
}
`

export default vertex
