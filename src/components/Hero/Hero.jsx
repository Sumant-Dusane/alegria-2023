"use client"

import { useEffect, useRef } from "react";
import "./hero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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
                    onUpdate: (e) => {
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
                }
            });
        }
    }, []);
    const changeUniverse = (index) => {
        if(document.body.id === `universe${index}`) return
        document.body.id = `universe${index}`;
    }
    return (
        <canvas className="hero">
            
        </canvas>
    )
}

export default Hero
