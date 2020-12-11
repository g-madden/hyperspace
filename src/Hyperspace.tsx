import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { addSphere } from './addSphere';
import { animateStars } from './animateStars';
import { light, ambientLight } from './lights';
import { pizzaGroup } from './pizza';

export const Hyperspace = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let stars: any = [];
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );
    camera.position.z = 5;

    const el = ref.current as HTMLDivElement;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    // This allows mouse drag to rotate camera
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.update();

    scene.add(light);
    scene.add(ambientLight);

    scene.add(pizzaGroup);

    const animate = function () {
      requestAnimationFrame(animate);

      pizzaGroup.rotation.x += 0.01;
      pizzaGroup.rotation.y += 0.01;
      //render the scene
      renderer.render(scene, camera);
      animateStars(stars);
    };

    addSphere(scene, stars);
    animate();
  }, []);

  return <div ref={ref} />;
};
