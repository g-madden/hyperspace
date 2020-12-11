import * as THREE from 'three';
import { pineapple } from './pineapple';

const doughGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 32);
const doughMaterial = new THREE.MeshLambertMaterial({ color: 0xf2d177 });
const dough = new THREE.Mesh(doughGeometry, doughMaterial);

const sauceGeometry = new THREE.CylinderGeometry(1.8, 1.8, 0.03, 32);
const sauceMaterial = new THREE.MeshLambertMaterial({ color: 0xeb2300 });
const sauce = new THREE.Mesh(sauceGeometry, sauceMaterial);
sauce.position.set(0, 0.05, 0);

pineapple.rotation.set(2, 0, 1.1);
pineapple.position.set(0, 0.1, 0);

const pizzaGroup = new THREE.Group();
pizzaGroup.add(dough);
pizzaGroup.add(sauce);
pizzaGroup.add(pineapple);

export { pizzaGroup };
