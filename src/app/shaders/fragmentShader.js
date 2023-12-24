const fragmentShader = `
  uniform float u_time;

  varying vec2 vUv;

  void main() {
    vec3 color = vec3(1, 1, 1);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const fragmentShader2 = `

uniform sampler2D uPositions;

void main() {
  vec2 uv = gl_PointCoord.xy;
  vec3 particlePosition = texture2D(uPositions, uv).rgb;

  // Map the y-coordinate of the particle position to the color gradient
  float yPos = particlePosition.y;
  vec3 color = vec3(1.0, 1.0, 1.0); // Default white color
  if (yPos < 0.33) {
    color = vec3(1.0, 0.0, 0.0); // Red color for the bottom third
  } else if (yPos < 0.66) {
    color = vec3(1.0, 1.0, 1.0); // White color for the middle third
  } else {
    color = vec3(0.0, 0.0, 1.0); // Blue color for the top third
  }

  gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShader;
