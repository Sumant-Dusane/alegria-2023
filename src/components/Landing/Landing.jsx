"use client"


import { useEffect, useRef, useState } from "react";
import Artist from "../Artists/Artist";
import Hero from "../Hero/Hero";
// import AlegriaSFX from "@/assets/intro-sfx.mp3"
import "./landing.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const landingGsapTimeline = gsap.timeline();
  const [universeName, setUniverseName] = useState(); 
  // const audioRef = useRef(null);


  useEffect(() => {
    const id = document.body.id;
    if(id == 'universe1') setUniverseName('Real')
    if(id == 'universe2') setUniverseName('Pixel')
    if(id == 'universe3') setUniverseName('Marvel')
    if(id == 'universe4') setUniverseName('Anime')


    // window.addEventListener('DOMContentLoaded', () => {
    //   const audio = audioRef.current;
    //   audio.play();
    // })
  }, [universeName])
  return (
    <div className="landing">
      <Hero landingGsapTimeline={landingGsapTimeline} />
      <div className="universe">
        <div className="universe__title h2">Welcome to the <br /> <span>{universeName}</span> World</div>
        <p className="universe__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam deleniti quas asperiores non? Nesciunt explicabo laborum necessitatibus omnis consequuntur similique magni voluptatem, suscipit laudantium? Nam incidunt aperiam dicta nisi?</p>
      </div>
      {/* <audio ref={audioRef}>
        <source src={AlegriaSFX} ref={audioRef}/>
      </audio> */}
      <Artist landingGsapTimeline={landingGsapTimeline} />
    </div>
  )
}

export default Landing
