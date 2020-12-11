import * as THREE from 'three';
import { pineapple } from './pineapple';
import { pepperoni } from './pepperoni';

const loader = new THREE.TextureLoader();
const moreToppings = (topping: THREE.Mesh, rotate: boolean) => {
  const group = new THREE.Group();
  const max = 1.4;
  const min = -1.4;
  let i = 0;
  for (i; i < 30; i++) {
    const clone = topping.clone();
    if (rotate) {
      clone.rotation.set(2, 0, i * Math.random());
    }
    clone.position.set(
      (i / 30) * (max - min) + min,
      Math.random() + 0.1,
      Math.random() * (max - min) + min,
    );

    group.add(clone);
  }
  return group;
};

const doughGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 32);
// const doughMaterial = new THREE.MeshLambertMaterial({ color: 0xf2d177 });
const doughMaterial = new THREE.MeshBasicMaterial({
  map: loader.load(
    'https://i1.wp.com/www.brewinghappiness.com/wp-content/uploads/2019/02/L1.jpg?resize=500%2C750&ssl=1',
  ),
});
const dough = new THREE.Mesh(doughGeometry, doughMaterial);

const sauceGeometry = new THREE.CylinderGeometry(1.8, 1.8, 0.03, 32);
// const sauceMaterial = new THREE.MeshLambertMaterial({ color: 0xeb2300 });
const sauceMaterial = new THREE.MeshBasicMaterial({
  map: loader.load(
    'https://thumbs.dreamstime.com/t/pizza-texture-17863994.jpg',
  ),
});
const sauce = new THREE.Mesh(sauceGeometry, sauceMaterial);
sauce.position.set(0, 0.05, 0);

const pineappleGroup = moreToppings(pineapple, true);
const peps = moreToppings(pepperoni, false);

const pizzaGroup = new THREE.Group();
pizzaGroup.add(dough);
pizzaGroup.add(sauce);
pizzaGroup.add(pineappleGroup);
pizzaGroup.add(peps);

export { pizzaGroup };
