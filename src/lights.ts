import * as THREE from 'three';

// lights!
const color = 0xfffff2;
const intensity = 0.7;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-4, 1, 20);
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
export { light, ambientLight };
