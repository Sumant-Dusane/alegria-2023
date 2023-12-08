"use client"


import { useEffect, useState } from "react";
import Artist from "../Artists/Artist";
import Hero from "../Hero/Hero";
import "./landing.scss";

const Landing = () => {
  const [universeName, setUniverseName] = useState(); 
  useEffect(() => {
    const id = document.body.id;
    if(id == 'universe1') setUniverseName('Real')
    if(id == 'universe2') setUniverseName('Pixel')
    if(id == 'universe3') setUniverseName('Marvel')
    if(id == 'universe4') setUniverseName('Anime')
  }, [])
  return (
    <div className="landing">
      <Hero />
      <div className="universe">
        <div className="universe__title h2">Welcome to the <br /> <span>{universeName}</span> World</div>
        <p className="universe__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam deleniti quas asperiores non? Nesciunt explicabo laborum necessitatibus omnis consequuntur similique magni voluptatem, suscipit laudantium? Nam incidunt aperiam dicta nisi?</p>
      </div>
      <Artist />
    </div>
  )
}

export default Landing
