```javascript
// Importing Three.js library
import * as THREE from 'three';

// Variables for the 3D environment
let scene, camera, renderer;

// Function to initialize the 3D office environment
function init3DOffice() {
    // Create a scene
    scene = new THREE.Scene();

    // Create a camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d_office').appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // Add objects to the scene
    // Replace with your own 3D models
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// Function to animate the 3D office environment
function animate3DOffice() {
    requestAnimationFrame(animate3DOffice);
    renderer.render(scene, camera);
}

// Function to handle window resize events
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Event listener for window resize events
window.addEventListener('resize', onWindowResize, false);

// Initialize and animate the 3D office environment
init3DOffice();
animate3DOffice();
```