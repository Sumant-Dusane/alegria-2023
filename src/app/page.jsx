"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Planets } from '@/utils/planets';

export default function Home() {
  const landing = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias: true});
    const geometry = new THREE.SphereGeometry(15, 64, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material);

    camera.position.z = 100;
    camera.position.x = 0;
    scene.add(sphere);

    renderer.setClearColor('#000000');
    renderer.setSize(window.innerWidth, window.innerHeight);

    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
    animate();

    landing.current.appendChild(renderer.domElement);
  }, []);

  return (
    <div className='landing' ref={landing} style={{height: '100vh', width: '100vw'}}></div>
  )
}
