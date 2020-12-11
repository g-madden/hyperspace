import * as THREE from 'three';

export const addSphere = (scene: THREE.Scene, stars: any) => {
  // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
  for (let z = -1000; z < 1000; z += 3) {
    // Make a sphere (exactly the same as before).
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphere = new THREE.Mesh(geometry, material);

    // This time we give the sphere random x and y positions between -500 and 500
    sphere.position.x = Math.random() * 1000 - 500;
    sphere.position.y = Math.random() * 1000 - 500;

    // Then set the z position to where it is in the loop (distance of camera)
    sphere.position.z = z;

    // scale it up a bit
    sphere.scale.x = 2;
    sphere.scale.y = 2;

    //add the sphere to the scene
    scene.add(sphere);

    //finally push it to the stars array
    stars.push(sphere);
  }
};
