"use client"

import "./artist.scss";
import Yoyo from "../../assets/images/honey-singh.png";
import Image from "next/image";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Artist = ({ landingGsapTimeline }) => {
  const ArtistScrollTriggerConfig = {
    trigger: '.artist',
    start: 'top center',
    scrub: true
  }

  const ArtistCarouselScrollTriggerConfig = {
    trigger: '.artist',
    start: 'center+=100 center',
    end: 'bottom center+=100',
    scrub: true,
    markers: true,
    pin: true
  }

  useEffect(() => {
    landingGsapTimeline.to('.artist__title', {
      x: '100%',
      scrollTrigger: ArtistScrollTriggerConfig
    });

    landingGsapTimeline.to('.artist__about', {
      x: '-100%',
      scrollTrigger: ArtistScrollTriggerConfig
    });

    landingGsapTimeline.fromTo('.artist__image', {
      x: '-50%',
      y: '100%',
      scrollTrigger: ArtistScrollTriggerConfig
    }, {
      x: '-50%',
      y: '-80%',
      scrollTrigger: ArtistScrollTriggerConfig
    });

    landingGsapTimeline.to('.artists__title', {
      x: '-100%',
      scrollTrigger: ArtistScrollTriggerConfig
    });

    // landingGsapTimeline.to('.artist__image', {
    //   x: '-1000%',
    //   scrollTrigger: ArtistCarouselScrollTriggerConfig
    // });
  }, []);

  return (
    <div className="artists">
      <div className="artists__title h1">Artist</div>
      <div className="artist">
        <div className="artist__title h1">
          YO YO <br /> HONEY SINGH
          <span className="artist__title--tagline">RAPPER</span>
        </div>
        <div className="artist__about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt illum culpa nostrum sequi suscipit eius est laudantium, et voluptates unde itaque, nisi quam deserunt beatae inventore id possimus velit.
        </div>
        <div className="artist__image">
          <Image src={Yoyo} />
          <div className="artist__image__ring"></div>
        </div>
        <div className="artist__next">
          01
          <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
        <div className="artist__prev">
          01
          <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Artist
