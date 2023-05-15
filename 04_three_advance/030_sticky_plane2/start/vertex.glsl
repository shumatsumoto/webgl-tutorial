precision mediump float;
#pragma glslify: easeBack = require(glsl-easings/back-in-out)

varying vec2 vUv;
varying float vDelay;
attribute float aDelay;

uniform float uProgress;

void main() {
    vUv = uv;
    vDelay = aDelay;
    vec3 pos = position;
    float progress = easeBack(clamp(uProgress * 1.4 - aDelay * .3, 0., 1.));
    pos.z += progress * 250.;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}