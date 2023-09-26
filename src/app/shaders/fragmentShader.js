const fragmentShader = `
  uniform float u_time;

  varying vec2 vUv;

  void main() {
    vec3 color = vec3(1, 1, 1);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default fragmentShader;
