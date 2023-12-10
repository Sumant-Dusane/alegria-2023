"use client"

import { useEffect, useRef } from "react";
import "./hero.scss";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import CustomCursor from "../CustomCursor/CustomCursor";

const Hero = ({ landingGsapTimeline }) => {
    const heroRef = useRef(null);
    const portalRef = useRef(null);


    useEffect(() => {
        let deviceWidth = window.innerWidth;
        let deviceHeight = window.innerHeight;

        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: heroRef.current, alpha: true });
        const camera = new THREE.PerspectiveCamera(75, deviceWidth / deviceHeight, 0.000001, 122);

        const controls = new OrbitControls(camera, heroRef.current);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.zoomSpeed = 0.15;
        controls.maxDistance = 122;
        controls.enableRotate = false;

        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 122;
        camera.lookAt(scene.position);


        // const planetAMaterial = new THREE.ShaderMaterial({
        //     vertexShader: `
        //         varying vec2 vUv;
        //         void main() {
        //             vUv = uv;
        //             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        //         }
        //     `,
        //     fragmentShader: `
        //         varying vec2 vUv;
        //         uniform float time;

        //         void main() {
        //             float pi = 3.14159265359;
        //             vec2 uv = vUv;
        //             uv = uv * 2.0 - 1.0;

        //             // Distortion effect
        //             float distortion = sin(length(uv) * 10.0 - time * 2.0) * 0.1;
        //             uv *= 1.0 + distortion;

        //             // Glass-like, transparent color
        //             float alpha = 1.0 - length(uv) * 0.5;
        //             vec3 color = vec3(1.0 - alpha); // Soft white color

        //             // Applying color and transparency
        //             gl_FragColor = vec4(color, alpha);
        //         }
        //     `,
        //     uniforms: {
        //         time: { value: 0 }
        //     },
        //     transparent: true
        // });


        //     const vertexShader = `
        //     varying vec2 vUv;
        //     void main() {
        //       vUv = uv;
        //       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        //     }
        //   `;

        //   const fragmentShader = `
        //   varying vec2 vUv;
        //   uniform float time;
        //   uniform float openPortal;

        //   void main() {
        //     vec2 p = -1.0 + 2.0 * vUv;
        //     float a = atan(p.y, p.x);
        //     float r = length(p) * 1.5;

        //     float color = abs(sin(a * 3.0 + r * 3.0 - time)) * 0.8 + 0.2;
        //     float portal = step(openPortal, r * 1.5);

        //     // Modify the portal effect color
        //     vec3 portalColor = vec3(0.1, 0.8, 0.9);

        //     // Simulate teleportation effect when portal is open
        //     vec3 teleportColor = mix(vec3(0.0), portalColor, smoothstep(0.0, 0.5, openPortal));

        //     gl_FragColor = vec4(teleportColor * color * portal, 1.0);
        //   }
        // `;
        // const planetAGeometry = new THREE.PlaneGeometry(5, 3, 100, 100);
        const planetAGeometry = new THREE.SphereGeometry(.5, 100, 100);
        // const planetAMaterial = new THREE.MeshBasicMaterial({ color: 'gray', opacity: 0.2, transparent: true, wireframe: true });
        // const planetAMaterial = new THREE.ShaderMaterial({ 
        //     uniforms: {
        //         time: {value: 0}
        //     },
        //     transparent: true
        //     vertexShader: vertexShader,
        //     fragmentShader: fragmentShader
        // })
        const planetAMaterial = new THREE.MeshBasicMaterial({ color: 'gray', transparent: false });
        const planetAMesh = new THREE.Mesh(planetAGeometry, planetAMaterial);
        planetAMesh.position.z = 120
        // scene.add(planetAMesh);

        const planetBGeometry = new THREE.SphereGeometry(3, 100, 100);
        const planetBMaterial = new THREE.MeshBasicMaterial({ color: 'blue', transparent: false });
        const planetBMesh = new THREE.Mesh(planetBGeometry, planetBMaterial);
        planetBMesh.position.z = 90
        // scene.add(planetBMesh);

        const planetCGeometry = new THREE.SphereGeometry(3, 100, 100);
        const planetCMaterial = new THREE.MeshBasicMaterial({ color: 'orange', transparent: false });
        const planetCMesh = new THREE.Mesh(planetCGeometry, planetCMaterial);
        planetCMesh.position.z = 60
        // scene.add(planetCMesh);

        const planetDGeometry = new THREE.SphereGeometry(3, 100, 100);
        const planetDMaterial = new THREE.MeshBasicMaterial({ color: 'orange', transparent: false });
        const planetDMesh = new THREE.Mesh(planetDGeometry, planetDMaterial);
        planetDMesh.position.z = 30
        // scene.add(planetDMesh);

        const planetEGeometry = new THREE.SphereGeometry(3, 100, 100);
        const planetEMaterial = new THREE.MeshBasicMaterial({ color: 'orange', transparent: false });
        const planetEMesh = new THREE.Mesh(planetEGeometry, planetEMaterial);
        planetEMesh.position.z = 0
        // scene.add(planetEMesh);

        const particlesGeometry = new THREE.BufferGeometry;
        const particlesCount = 10000;
        const positionArray = new Float32Array(particlesCount * 3);
        const zIncrease = 60; // The amount by which you want to increase the Z value
        for (let i = 0; i < particlesCount * 3; i++) {
            // Every third element represents the Z coordinate
            if (i % 3 === 2) {
                positionArray[i] = (Math.random() - 0.5) * 135 + zIncrease; // Increase Z value
            } else {
                positionArray[i] = (Math.random() - 0.5) * 125;
            }
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({ size: 0.15, transparent: true });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        /*
        const explodingParticlesGeometry = new THREE.BufferGeometry();
        const explodingParticlesCount = 5000;
        const explodingParticlesPositions = new Float32Array(explodingParticlesCount * 3);
        for (let i = 0; i < explodingParticlesCount * 3; i++) {
            explodingParticlesPositions[i] = (Math.random() - 0.5) * 20;
        }
        explodingParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(explodingParticlesPositions, 3));
        const explodingParticlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 'yellow' });
        const explodingParticlesMesh = new THREE.Points(explodingParticlesGeometry, explodingParticlesMaterial);
        // explodingParticlesMesh.visible = false; // Hide explodingParticlesMesh initially
        scene.add(explodingParticlesMesh);
        */

        const vertexShader = `
            uniform float time;
            uniform vec3 noiseScale;

            varying vec2 vUv;
            varying float noise;

            void main() {
                vUv = uv;
                vec3 pos = position;

                // Add noise-based distortion
                float distortion = sin(time + position.x) * 0.5 + 0.5;
                pos.xyz += normal * distortion;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `;

        const fragmentShader = `
            uniform float time;
            varying vec2 vUv;

            void main() {
                // Color manipulation for a psychedelic effect
                float r = abs(sin(vUv.x * cos(time) + time));
                float g = abs(cos(vUv.y * sin(time) + time));
                float b = abs(sin(vUv.x + vUv.y + time));

                vec3 color = vec3(r, g, b);

                gl_FragColor = vec4(color, 1.0);
            }
        `;

        // Parameters for portal
        const portalRadius = 6; // Change this value to adjust the radius
        const portalPosition = new THREE.Vector3(0, 0, 0); // Change this to move the portal

        const geometry1 = new THREE.TorusGeometry(portalRadius, 3, 16, 100);
        const material1 = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                time: { value: 0.0 },
                noiseScale: { value: new THREE.Vector3(1, 1, 1) }
            }
        });

        const torusA = new THREE.Mesh(geometry1, material1);
        torusA.position.set(portalPosition.x, portalPosition.y, portalPosition.z + 120);
        torusA.visible = false;
        scene.add(torusA);

        const torusB = new THREE.Mesh(geometry1, material1);
        torusB.position.set(portalPosition.x, portalPosition.y, portalPosition.z + 90);
        torusB.visible = false;
        scene.add(torusB);

        const torusC = new THREE.Mesh(geometry1, material1);
        torusC.position.set(portalPosition.x, portalPosition.y, portalPosition.z + 60);
        torusC.visible = false;
        scene.add(torusC);

        const torusD = new THREE.Mesh(geometry1, material1);
        torusD.position.set(portalPosition.x, portalPosition.y, portalPosition.z + 30);
        torusD.visible = false;
        scene.add(torusD);

        const torusE = new THREE.Mesh(geometry1, material1);
        torusE.position.set(portalPosition.x, portalPosition.y, portalPosition.z + 0);
        torusE.visible = false;
        scene.add(torusE);

        renderer.setClearColor('#000000');
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(deviceWidth, deviceHeight);

        /*
        const explodeParticles = () => {
            explodingParticlesMesh.position.copy(planetAMesh.position);

            const explodingParticlesPositions = explodingParticlesMesh.geometry.attributes.position.array;

            for (let i = 0; i < explodingParticlesPositions.length; i += 3) {
                explodingParticlesPositions[i] = (Math.random() - 0.5) * 0.5;
                explodingParticlesPositions[i + 1] = (Math.random() - 0.5) * 0.5 * 2;
                explodingParticlesPositions[i + 2] = (Math.random() - 0.5) * 0.5 * 2;
            }

            explodingParticlesMesh.geometry.attributes.position.needsUpdate = true;
        }
        */

        const handleGlobalState = () => {

            // Update time
            // shaderMaterial.uniforms.time.value += 0.01;

            // // Rotate particle system
            // particleSystem.rotation.x += 0.0005;
            // particleSystem.rotation.y += 0.001;



            torusA.material.uniforms.time.value += 0.05;

            const distFromCenter = camera.position.z;
            const AFromCenter = planetAMesh.position.z;
            const BFromCenter = planetBMesh.position.z;
            const CFromCenter = planetCMesh.position.z;
            const DFromCenter = planetDMesh.position.z;
            const EFromCenter = planetEMesh.position.z;

            const AFromCamera = camera.position.distanceTo(planetAMesh.position);
            const BFromCamera = camera.position.distanceTo(planetAMesh.position);
            const CFromCamera = camera.position.distanceTo(planetAMesh.position);
            const DFromCamera = camera.position.distanceTo(planetAMesh.position);
            const EFromCamera = camera.position.distanceTo(planetAMesh.position);


            const PortalAFromCenter = torusA.position.z;
            const PortalBFromCenter = torusB.position.z;
            const PortalCFromCenter = torusC.position.z;
            const PortalDFromCenter = torusD.position.z;
            const PortalEFromCenter = torusE.position.z;

            const PortalAFromCamera = camera.position.distanceTo(torusA.position);
            const PortalBFromCamera = camera.position.distanceTo(torusB.position);
            const PortalCFromCamera = camera.position.distanceTo(torusC.position);
            const PortalDFromCamera = camera.position.distanceTo(torusD.position);
            const PortalEFromCamera = camera.position.distanceTo(torusE.position);

            if (distFromCenter >= PortalAFromCenter) {
                torusA.visible = true;
                torusB.visible = false;
                torusC.visible = false;
                torusD.visible = false;
                torusE.visible = false;
            } else if (distFromCenter >= PortalBFromCenter && distFromCenter < PortalAFromCenter) {
                torusB.visible = true;
                torusC.visible = false;
                torusD.visible = false;
                torusE.visible = false;
            } else if (distFromCenter >= PortalCFromCenter && distFromCenter < PortalBFromCenter) {
                torusC.visible = true;
                torusD.visible = false;
                torusE.visible = false;
            } else if (distFromCenter >= PortalDFromCenter && distFromCenter < PortalCFromCenter) {
                torusD.visible = true;
                torusE.visible = false;
            } else if (distFromCenter >= PortalEFromCenter && distFromCenter < PortalDFromCenter) {
                torusE.visible = true;
            }

            // if(PortalAFromCamera < 0.5 && camera.position.z > torusA.position.z) {
            //     torusA.visible = true;
            // }

            /*
            if (AFromCamera < 0.9 && camera.position.z > planetAMesh.position.z) {
                explodingParticlesMesh.visible = true;
                explodeParticles();
                planetAMesh.visible = false;
            } else {
                planetAMesh.visible = true;
                explodingParticlesMesh.visible = false;
            }
            */

            if (distFromCenter >= AFromCenter) {
                scene.background = new THREE.Color('#164C93')
                changeUniverse(1);
            } else if (distFromCenter >= BFromCenter && distFromCenter < AFromCenter) {
                scene.background = new THREE.Color('#16427A')
                changeUniverse(2);
            } else if (distFromCenter >= CFromCenter && distFromCenter < BFromCenter) {
                scene.background = new THREE.Color('#153155')
                changeUniverse(3);
            } else if (distFromCenter >= DFromCenter && distFromCenter < CFromCenter) {
                scene.background = new THREE.Color('#192D46')
                changeUniverse(4);
            } else if (distFromCenter >= EFromCenter && distFromCenter < DFromCenter) {
                scene.background = new THREE.Color('#13181E')
                changeUniverse(5);
            }
        }
        controls.addEventListener('change', handleGlobalState)

        const animate = () => {
            // planetAMaterial.uniforms.time.value += 0.05;
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
            <CustomCursor />
            <div className="hero__content">
                <h1>ALEGRIA</h1>
            </div>
            <canvas ref={heroRef} ></canvas>
            <video
                ref={portalRef}
                playsInline
                loop
                autoPlay
                width={100}
                height={100}
                src="/static/portal.mp4"
                style={{ display: 'none' }}
            />
        </div>
    )
}

export default Hero




/*



        const particles = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const sizes = [];
        const radius = 0.33; // Radius of the sphere

        for (let i = 0; i < particles; i++) {
            // Random position within a sphere
            let x = (Math.random() - 0.5) * 2;
            let y = (Math.random() - 0.5) * 2;
            let z = (Math.random() - 0.5) * 2;
            let normalizationFactor = Math.sqrt(x * x + y * y + z * z);

            x = (x / normalizationFactor) * radius;
            y = (y / normalizationFactor) * radius;
            z = (z / normalizationFactor) * radius;

            positions.push(x, y, z);

            // Colors
            colors.push(1.0, 1.0, 1.0); // White color

            // Smaller Sizes
            sizes.push(0.1);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader: `
                attribute float size;
                varying vec3 vColor;
        
                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform float time;
                varying vec3 vColor;
        
                void main() {
                    float alpha = sin(time + length(gl_PointCoord - 0.5) * 4.0) * 0.5 + 0.5;
                    gl_FragColor = vec4(vColor, alpha);
                }
            `,
            uniforms: {
                time: { value: 0 }
            },
            transparent: true,
            vertexColors: true
        });
        const particleSystem = new THREE.Points(geometry, shaderMaterial);
        scene.add(particleSystem);
        // Manipulate the center of the particle system
        particleSystem.position.set(0, 0, 5); // Change these values to move the center


*/