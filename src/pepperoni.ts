import * as THREE from 'three';
const loader = new THREE.TextureLoader();

const pepGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 32);
// const pepMaterial = new THREE.MeshLambertMaterial({ color: 0x942525 });
const pepMaterial = new THREE.MeshBasicMaterial({
  map: loader.load('./pepperoni.png'),
});

pepGeometry.scale(0.1, 0.1, 0.1);
pepGeometry.center();

export const pepperoni = new THREE.Mesh(pepGeometry, pepMaterial);
