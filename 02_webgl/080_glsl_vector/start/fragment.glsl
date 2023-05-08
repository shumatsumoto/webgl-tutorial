precision mediump float;
varying vec3 vVertexColor;
uniform vec2 uColor;

void main() {
    vec4 v1 = vec4(1.0, 0.0, 0.0, 0.0);
    vec4 v2 = vec4(0.0, 0.0, 1.0, 1.0);
    vec2 v3 = vec2(0.0);
    vec4 color = v1 + v2;
    gl_FragColor = color;
}