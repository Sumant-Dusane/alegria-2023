"use client"

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./page.scss";
import Image from 'next/image';

import planet1 from "../assets/textures/planet1.png";
import planet2 from "../assets/textures/planet2.png";
import planet3 from "../assets/textures/planet3.png";
import planet4 from "../assets/textures/planet4.png";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  useEffect(() => {
  return () => {
    gsap.to('.landing', {
      scrollTrigger: {
        trigger: '.landing',
        start: 'top top',
        end: 'bottom+=5000 center',
        markers: true,
        pin: true,
        scrub: true,
      },
    })
  }
  }, []);

  return (
    <>
      <div className="landing">
        <div className="universe star">
          <figure>
            <Image src={planet1} />
          </figure>
        </div>
        <div className="universe ">
        <figure>
            <Image src={planet2} />
          </figure>
        </div>
        <div className="universe ">
        <figure>
            <Image src={planet3} />
          </figure>
        </div>
        <div className="universe ">
        <figure>
            <Image src={planet4} />
          </figure>
        </div>
      </div>
    </>
  )
}
