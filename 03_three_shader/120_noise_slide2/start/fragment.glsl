precision mediump float;

#pragma glslify: noise2 = require(glsl-noise/simplex/2d);
#pragma glslify: noise3 = require(glsl-noise/simplex/3d);

varying vec2 vUv;
uniform sampler2D uTexCurrent;
uniform sampler2D uTexNext;
uniform float uTick;
uniform float uProgress;
uniform vec2 uNoiseScale;

void main() {
  float n = noise2(vec2(vUv.x * uNoiseScale.x, vUv.y * uNoiseScale.y));
  n = n * 0.5 - 0.5;
  n = n + uProgress;
  n = step(0.0, n);
  vec4 texCurrent = texture(uTexCurrent, vUv);
  vec4 texNext = texture(uTexNext, vUv);
  gl_FragColor = mix(texCurrent, texNext, n);
}