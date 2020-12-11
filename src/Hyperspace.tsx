import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { pineapple } from './pineapple';

export const Hyperspace = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const el = ref.current as HTMLDivElement;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    // This allows mouse drag to rotate camera
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    camera.position.z = 3;

    // lights!
    const color = 0xfffff2;
    const intensity = 0.7;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-4, 1, 20);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

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

    scene.add(pizzaGroup);

    const animate = function () {
      requestAnimationFrame(animate);

      pizzaGroup.rotation.x += 0.01;
      pizzaGroup.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  });
  return <div ref={ref} />;
};
