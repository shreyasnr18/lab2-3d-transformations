import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Degree to radian
const degToRad = (deg) => deg * (Math.PI / 180);

// Translation
document.getElementById('transX').oninput = (e) => cube.position.x = e.target.value;
document.getElementById('transY').oninput = (e) => cube.position.y = e.target.value;
document.getElementById('transZ').oninput = (e) => cube.position.z = e.target.value;

// Rotation
document.getElementById('rotX').oninput = (e) => cube.rotation.x = degToRad(e.target.value);
document.getElementById('rotY').oninput = (e) => cube.rotation.y = degToRad(e.target.value);
document.getElementById('rotZ').oninput = (e) => cube.rotation.z = degToRad(e.target.value);

// Scaling
document.getElementById('scaleAll').oninput = (e) => {
    let s = e.target.value;
    cube.scale.set(s, s, s);
};

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Resize fix
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});