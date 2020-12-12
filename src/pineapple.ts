import * as THREE from 'three';
const loader = new THREE.TextureLoader();

// Pineapple math
const square = new THREE.Shape();
square.moveTo(1, 1);
square.lineTo(1.5, -1.3);
square.lineTo(-0.5, -1.3);
square.lineTo(0, 1);
var pineappleGeometry = new THREE.ExtrudeGeometry(square, {
  depth: 0.8,
  bevelEnabled: false,
  steps: 1,
});
pineappleGeometry.scale(0.1, 0.1, 0.1);
pineappleGeometry.center();

// const pineappleMaterial = new THREE.MeshLambertMaterial({
//   color: 0xf5e042,
// });
const pineappleMaterial = new THREE.MeshBasicMaterial({
  map: loader.load(
    'https://thumbs.dreamstime.com/b/texture-inside-pineapple-looks-just-like-lava-flowing-down-volcano-29789674.jpg',
  ),
});
const pineapple = new THREE.Mesh(pineappleGeometry, pineappleMaterial);

export { pineapple };
