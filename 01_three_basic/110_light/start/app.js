/**
 * Three.js
 * https://threejs.org/
 */
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
init();
async function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 床
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    new THREE.MeshStandardMaterial({
      color: 0xf4f4f4,
      side: THREE.DoubleSide,
    })
  );
  floor.rotation.x = THREE.Math.degToRad(90);
  floor.position.y = -50;
  scene.add(floor);

  // メッシュ作成
  const geometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 100);
  const basic = new THREE.MeshBasicMaterial({ color: 0x3f7b9d });
  const lambert = new THREE.MeshLambertMaterial({ color: 0x3f7b9d });
  const standard = new THREE.MeshStandardMaterial({
    color: 0x3f7b9d,
    roughness: 0,
  });

  const mesh1 = new THREE.Mesh(geometry, basic);
  mesh1.position.x -= 20;

  const mesh2 = new THREE.Mesh(geometry, lambert);

  const mesh3 = new THREE.Mesh(geometry, standard);
  mesh3.position.x += 20;

  scene.add(mesh1, mesh2, mesh3);

  // 軸ヘルパー
  const axis = new THREE.AxesHelper(20);
  scene.add(axis);

  camera.position.z = 30;

  const control = new OrbitControls(camera, renderer.domElement);

  // ライト
  // const amlight = new THREE.AmbientLight(0xffffff);
  // scene.add(amlight);

  const dilight = new THREE.DirectionalLight(0xffffff, 1);
  dilight.position.set(0, 5, 10);
  // dilight.target.position.set(0, 10, 0);
  const diHelper = new THREE.DirectionalLightHelper(dilight);
  scene.add(diHelper, dilight.target, dilight);
  scene.add(dilight);

  const plight = new THREE.PointLight(0xffffff, 1, 100);
  const spherical = new THREE.Spherical(10, 1, 1);
  plight.position.setFromSpherical(spherical);
  const pHelper = new THREE.PointLightHelper(plight);
  scene.add(plight, pHelper);

  let i = 0;
  function animate() {
    requestAnimationFrame(animate);
    spherical.theta += 0.01;
    plight.position.setFromSpherical(spherical);
    // diHelper.update();

    control.update();

    renderer.render(scene, camera);
  }

  animate();
}
