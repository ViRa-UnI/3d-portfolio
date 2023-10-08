```javascript
import * as THREE from 'three';

// Create a raycaster for detecting clicks on 3D objects
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Function to handle click events
function handleClick(event) {
    // Normalize mouse position
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);

    // If an object is intersected
    if (intersects.length > 0) {
        // Get the first intersected object
        const intersectedObject = intersects[0].object;

        // Check the name of the intersected object and perform the corresponding action
        switch (intersectedObject.name) {
            case 'computer':
                // Open CV
                window.open('cv.pdf', '_blank');
                break;
            case 'wallScreen':
                // Open portfolio
                window.open('portfolio.html', '_blank');
                break;
            case 'virtualAssistant':
                // Open chat
                document.getElementById('chat_box').style.display = 'block';
                break;
            default:
                // Do nothing
                break;
        }
    }
}

// Add event listener for mouse click
window.addEventListener('click', handleClick, false);
```