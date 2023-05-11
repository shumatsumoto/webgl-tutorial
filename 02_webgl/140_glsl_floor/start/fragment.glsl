precision mediump float;

uniform vec2 uColor;
varying vec2 vVertexPosition;

void main() {
    vec2 uv = vVertexPosition / 2.0 + 0.5;
    uv = floor(uv * 20.) / 20.;
    vec4 color = vec4(uv, 0.0, 1.0);
    gl_FragColor = color;
}