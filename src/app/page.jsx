"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import "./page.scss";
import { Planets } from "@/utils/planets";
import ArrowBtn from "@/assets/images/arrow.svg";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const planetDivRef = useRef(null);
  const planetsRef = {
    planet1: useRef(null),
    planet2: useRef(null),
    planet3: useRef(null),
    planet4: useRef(null)
  }

  // useEffect(() => {
  //   const planets = [planetsRef.planet1.current, planetsRef.planet2.current, planetsRef.planet3.current, planetsRef.planet4.current];
  //   const landingTop = planetDivRef.current?.offsetTop;
  //   const landingBottom = planetDivRef.current?.offsetHeight + landingTop;

  //   const planetScrollTimeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: planetDivRef.current,
  //       start: 'top top',
  //       end: 'center top+=10',
  //       scrub: true,
  //       markers: true
  //     }
  //   });
  //   planets.forEach((planet, index) => {
  //     planetScrollTimeline.to(
  //       planet, {
  //         x: index % 2 === 0 ? '-100%' : '100%',
  //         scale: 1.5
  //       }
  //     )
  //   })
  // }, []);

  useEffect(() => {
  // let scrollPos = 0;

  return () => {
    gsap.to('.landing', {
      scrollTrigger: {
        trigger: '.landing',
        start: 'top top',
        end: 'bottom+=5000 center',
        markers: true,
        pin: true,
        scrub: true,
        // onUpdate: (self) => {
        //   console.log('this is scroll postiion:', self.scroll());
        //   scrollPos = self.scroll();
        // },
      },
    })


    // const boxes = gsap.utils.toArray('.planet');
    const planets = [planetsRef.planet1.current, planetsRef.planet2.current, planetsRef.planet3.current, planetsRef.planet4.current];
    
    let l = Math.sqrt(Math.pow((planetDivRef.current.clientHeight/2), 2) + Math.pow((planetDivRef.current.clientWidth/2), 2));
    console.log(l);

    planets.forEach((planet, index) => {
      index += 1;
      let isOdd = index % 2 !== 0;
      const aa = {
        scale: 1/(index),
        x: Math.abs(index-4)*100,
        y: Math.abs(index)*-100
      }
      // gsap.to(box, {
      //   scale: 1.5,
      //   x: i % 2 == 0 ? `-300%` : `300%`,

      //   scrollTrigger: {
      //     // x: i%2 == 0? -(300 *i) : (300*i),
      //     trigger: box,
      //     scrub: true,
      //     markers: true
      //   },
      // });
      gsap.fromTo(planet, 
        aa, aa
      );
    });
  }
  }, []);

  return (
    <>
      <div className="landing" ref={planetDivRef}>
        <div className="landing__upper">

        </div>
        <div className="landing__lower">
          <div className="landing__lower__planets">
            <div className="planet" ref={planetsRef.planet1}>
              <Image draggable={false} src={Planets.Planet1} alt="Planet 1" />
            </div>
            <div className="planet" ref={planetsRef.planet2}>
              <Image draggable={false} src={Planets.Planet2} alt="Planet 2" />
            </div>
            <div className="planet" ref={planetsRef.planet3}>
              <Image draggable={false} src={Planets.Planet3} alt="Planet 3" />
            </div>
            <div className="planet" ref={planetsRef.planet4}>
              <Image draggable={false} src={Planets.Planet4} alt="Planet 4" />
            </div>
          </div>

          <button className="landing__lower__navigate-btn">
            <Image src={ArrowBtn} />
          </button>
        </div>
      </div>
    </>
  )
}
