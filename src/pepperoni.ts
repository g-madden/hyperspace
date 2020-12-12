import * as THREE from 'three';
const loader = new THREE.TextureLoader();

const pepGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 32);
// const pepMaterial = new THREE.MeshLambertMaterial({ color: 0x942525 });
const pepMaterial = new THREE.MeshBasicMaterial({
  map: loader.load(
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62901af8-2785-4227-9b12-1b7bc81e6ca5/d8f733r-7d7ba6a9-279f-4275-bd6e-c82ab260a928.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjI5MDFhZjgtMjc4NS00MjI3LTliMTItMWI3YmM4MWU2Y2E1XC9kOGY3MzNyLTdkN2JhNmE5LTI3OWYtNDI3NS1iZDZlLWM4MmFiMjYwYTkyOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.h_XaLIN8yiVZBPSUYaXVbPbp9eiAKGneFTLgV0iWjbQ',
  ),
});

pepGeometry.scale(0.1, 0.1, 0.1);
pepGeometry.center();

export const pepperoni = new THREE.Mesh(pepGeometry, pepMaterial);
