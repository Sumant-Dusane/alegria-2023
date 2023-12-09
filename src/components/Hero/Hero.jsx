"use client"

import { useEffect, useRef, useState } from "react";
import "./hero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Textures } from "@/Utils/Utils";
import * as THREE from "three";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        return () => {
            gsap.to('.hero', {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom+=5000 center',
                    pin: true,
                    scrub: true,
                    markers: false,
                    onUpdate: (e) => handleHeroScroll(e)
                }
            });
        } 
    }, []); 

    // useEffect(() => {
    //     let deviceWidth = window.innerWidth;
    //     let deviceHeight = window.innerHeight;

    //     const scene = new THREE.Scene();
    //     const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: heroRef.current });
    //     const camera = new THREE.PerspectiveCamera(75, deviceWidth / deviceHeight, 0.1, 100);
    //     const material = new THREE.PointsMaterial({ size: 0.009, transparent: true });
        
    //     const textTextureArr = [
    //         'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/px.jpg',
    //         'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/nx.jpg',
    //         'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/py.jpg',
    //         'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/pz.jpg',
    //         'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/nz.jpg'
    //     ];
    //     const pixelT = new THREE.CubeTextureLoader().load(textTextureArr);
    //     scene.background = pixelT;

    //     const controls = new OrbitControls(camera, heroRef.current);
    //     controls.enableDamping = true;
    //     controls.enableZoom = true;
    //     controls.enablePan = true;
    //     controls.zoomSpeed = 1.5;
    //     controls.maxDistance = 10;
    //     controls.minDistance = 0.5;

    //     camera.position.x = 0;
    //     camera.position.y = 0;
    //     camera.position.z = 2;
    //     camera.lookAt(scene.position);

    //     const sunGeometry = new THREE.SphereGeometry(.5, 100, 100);
    //     const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF2E, wireframe: true, opacity: 0.1, transparent: true });
    //     const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    //     scene.add(sunMesh);

    //     const particlesGeometry = new THREE.BufferGeometry;
    //     const particlesCount = 9000;
    //     const positionArray = new Float32Array(particlesCount * 3);
    //     for (let  i = 0; i < particlesCount * 3; i++) {
    //         positionArray[i] = (Math.random() - 0.5) * 15;
    //     }
        
    //     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    //     const particlesMesh = new THREE.Points(particlesGeometry, material);
    //     scene.add(particlesMesh);

    //     renderer.setClearColor('#000000');
    //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //     renderer.setSize(deviceWidth , deviceHeight);

    //     const animate = () => {
    //         controls.update();
    //         renderer.render(scene, camera);
    //         window.requestAnimationFrame(animate);
    //     }
    //     animate();

    //     window.addEventListener('resize', ()=> {
    //         deviceWidth = window.innerWidth;
    //         deviceHeight = window.innerHeight;
    //         camera.aspect = deviceWidth / deviceHeight;
    //         camera.updateProjectionMatrix();
    //         renderer.setSize(deviceWidth, deviceHeight);
    //     })
    // });

    const handleHeroScroll = (e) => {
        let currentScroll = e.scroll();
            
            // distributing 5300px which is scroll limit into 4 universes
            if (currentScroll <= 1325) {
                changeUniverse(1);
            } else if (currentScroll > 1325 && currentScroll <= 1325 * 2) {
                changeUniverse(2);
            } else if (currentScroll > 1325 * 2 && currentScroll <= 1325 * 3) {
                changeUniverse(3);
            } else if (currentScroll > 1325 * 3 && currentScroll <= 1325 * 4) {
                changeUniverse(4);
            }
    }

    const changeUniverse = (index) => {
        if (document.body.id === `universe${index}`) return
        document.body.id = `universe${index}`;
    }
    return (
        <div className="hero">
            <div className="hero__content">
                <h1>ALEGRIA</h1>
            </div>
            <canvas ref={heroRef} ></canvas>
        </div>
    )
}

export default Hero
