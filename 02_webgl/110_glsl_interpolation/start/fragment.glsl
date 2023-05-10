precision mediump float;
varying vec3 vVertexColor;

uniform vec2 uColor;
varying vec2 vVertexPosition;

void main() {
    vec4 color = vec4(vVertexPosition, 0.5, 1.0);
    gl_FragColor = color;
}