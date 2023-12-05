"use client"

import { useEffect } from 'react';
import { gsap} from 'gsap';
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import "./page.scss";
import { Planets } from "@/utils/planets";
import ArrowBtn from "@/assets/images/arrow.svg";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let scrollPos = 0;

    return ()=>{
       gsap.to('.landing', {
      scrollTrigger: {
        trigger: '.landing',
        start: 'top top',
        end: 'bottom+=4000 top-=3000',
        markers:true,
        pin: true,
        scrub: true,
          onUpdate: (self) => {
          console.log('this is scroll postiion:', self.scroll());
          scrollPos = self.scroll();
        },
        },
      })
  

       const boxes = gsap.utils.toArray('.planet');

     boxes.forEach((box,i) => {
     gsap.to(box, {
         scale: 1.5,
         x: i%2==0 ? `-100%`:`100%`,
          
         scrollTrigger: {
           // x: i%2 == 0? -(300 *i) : (300*i),
           trigger: box,
           scrub: true,
         },
       });
     });
    }
  }, []);

  return (
    <>
    <div className="landing">
        <div className="planets">
              <div className="planet">
                <Image src={Planets.Planet1} alt="Planet 1" />
              </div>
              <div className="planet">
                <Image src={Planets.Planet2} alt="Planet 2" />
              </div>
              <div className="planet">
                <Image src={Planets.Planet3} alt="Planet 3" />
              </div>
              <div className="planet">
                <Image src={Planets.Planet4} alt="Planet 4" />
              </div>
        </div>
    
        <button className="navigate-btn">
          <Image src={ArrowBtn} />
        </button>
    </div>
    </>
  )
}
