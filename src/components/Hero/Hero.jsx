"use client"

import { useEffect, useRef } from "react";
import "./hero.scss";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const Hero = ({ landingGsapTimeline, }) => {
    const heroRef = useRef(null);

    // useEffect(() => {
    //     return () => {
    //         landingGsapTimeline.to('.hero', {
    //             scrollTrigger: {
    //                 trigger: '.hero',
    //                 start: 'top top',
    //                 end: 'bottom+=5000 center',
    //                 pin: true,
    //                 scrub: true,
    //                 markers: false,
    //                 onUpdate: (e) => handleHeroScroll(e)
    //             }
    //         });
    //     } 
    // }, []); 

    useEffect(() => {
        let deviceWidth = window.innerWidth;
        let deviceHeight = window.innerHeight;

        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: heroRef.current });
        const camera = new THREE.PerspectiveCamera(75, deviceWidth / deviceHeight, 0.000001, 100);

        const controls = new OrbitControls(camera, heroRef.current);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.zoomSpeed = .25;
        controls.maxDistance = 10;
        controls.enableRotate = false;

        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 10;
        camera.lookAt(scene.position);

        const planetAGeometry = new THREE.SphereGeometry(.33, 100, 100);
        const planetAMaterial = new THREE.MeshBasicMaterial({ color: 'gray', transparent: false });
        const planetAMesh = new THREE.Mesh(planetAGeometry, planetAMaterial);
        planetAMesh.position.z = 8
        scene.add(planetAMesh);

        const planetBGeometry = new THREE.SphereGeometry(.33, 100, 100);
        const planetBMaterial = new THREE.MeshBasicMaterial({ color: 'blue', transparent: false });
        const planetBMesh = new THREE.Mesh(planetBGeometry, planetBMaterial);
        planetBMesh.position.z = 6
        scene.add(planetBMesh);

        const planetCGeometry = new THREE.SphereGeometry(.33, 100, 100);
        const planetCMaterial = new THREE.MeshBasicMaterial({ color: 'orange', transparent: false });
        const planetCMesh = new THREE.Mesh(planetCGeometry, planetCMaterial);
        planetCMesh.position.z = 4
        scene.add(planetCMesh);

        const planetDGeometry = new THREE.SphereGeometry(.33, 100, 100);
        const planetDMaterial = new THREE.MeshBasicMaterial({ color: 'orange', transparent: false });
        const planetDMesh = new THREE.Mesh(planetDGeometry, planetDMaterial);
        planetDMesh.position.z = 2
        scene.add(planetDMesh);

        const planetEGeometry = new THREE.SphereGeometry(.33, 100, 100);
        const planetEMaterial = new THREE.MeshBasicMaterial({ color: 'orange', transparent: false });
        const planetEMesh = new THREE.Mesh(planetEGeometry, planetEMaterial);
        planetEMesh.position.z = 0
        scene.add(planetEMesh);


        const particlesGeometry = new THREE.BufferGeometry;
        const particlesCount = 9000;
        const positionArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            positionArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({ size: 0.009, transparent: true });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        renderer.setClearColor('#000000');
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(deviceWidth, deviceHeight);

        const handleGlobalState = () => {
            const distFromCenter = camera.position.z;
            const AFromCenter = planetAMesh.position.z;
            const BFromCenter = planetBMesh.position.z;
            const CFromCenter = planetCMesh.position.z;
            const DFromCenter = planetDMesh.position.z;
            const EFromCenter = planetEMesh.position.z;

            if (distFromCenter >= AFromCenter) {
                changeUniverse(1)
            } else if (distFromCenter >= BFromCenter && distFromCenter < AFromCenter) {
                changeUniverse(2)
            } else if (distFromCenter >= CFromCenter && distFromCenter < BFromCenter) {
                changeUniverse(3)
            } else if (distFromCenter >= DFromCenter && distFromCenter < CFromCenter) {
                changeUniverse(4)
            } else if (distFromCenter >= EFromCenter && distFromCenter < DFromCenter) {
                changeUniverse(5)
            } 
        }
        controls.addEventListener('change', handleGlobalState)

        const animate = () => {
            window.requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            deviceWidth = window.innerWidth;
            deviceHeight = window.innerHeight;
            camera.aspect = deviceWidth / deviceHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(deviceWidth, deviceHeight);
        })
    });

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
