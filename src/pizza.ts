import * as THREE from 'three';
import { pineapple } from './pineapple';

const moreToppings = (topping: THREE.Mesh) => {
  const group = new THREE.Group();
  const max = 1.4;
  const min = -1.4;
  let i = 0;
  for (i; i < 30; i++) {
    const clone = topping.clone();
    clone.rotation.set(2, 0, i * Math.random());
    clone.position.set(
      (i / 30) * (max - min) + min,
      0.1,
      Math.random() * (max - min) + min,
    );

    group.add(clone);
  }
  return group;
};

const doughGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 32);
const doughMaterial = new THREE.MeshLambertMaterial({ color: 0xf2d177 });
const dough = new THREE.Mesh(doughGeometry, doughMaterial);

const sauceGeometry = new THREE.CylinderGeometry(1.8, 1.8, 0.03, 32);
const sauceMaterial = new THREE.MeshLambertMaterial({ color: 0xeb2300 });
const sauce = new THREE.Mesh(sauceGeometry, sauceMaterial);
sauce.position.set(0, 0.05, 0);

const pineappleGroup = moreToppings(pineapple);

const pizzaGroup = new THREE.Group();
pizzaGroup.add(dough);
pizzaGroup.add(sauce);
pizzaGroup.add(pineappleGroup);

export { pizzaGroup };
