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
  const audioRef = useRef(null);
  const audioRef1 = useRef(null);
  
  useEffect(() => {
    audioRef.current.volume = 0.3;
    audioRef.current.play();

    setTimeout(() => {
      audioRef1.current.play();
    }, 5000)
  }, [])

  return (
    <div className="landing">
      <Hero landingGsapTimeline={landingGsapTimeline} />
      <div className="universe">
        <div className="universe__title h2">Welcome to the <br /> <span>Multiverse</span></div>
        <p className="universe__about">
        Embark on an odyssey across the Multiverse, where the essence of Alegria converges into a cosmic symphony of joy and creativity
        </p>
      </div>
      <Artist landingGsapTimeline={landingGsapTimeline} />
      <audio ref={audioRef} autoPlay >
        <source src="/static/intro-sfx.mp3" type="audio/mp3" />
      </audio>
      <audio ref={audioRef1} autoPlay >
        <source src="/static/bg-sfx.mp3" type="audio/mp3" />
      </audio>
    </div>
  )
}

export default Landing
