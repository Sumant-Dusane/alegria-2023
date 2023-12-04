"use client";
import { useEffect } from 'react';

import Testimonial from "@/components/section/Testimonial";
import "../../assets/style/style.scss";
import Artists from "@/components/section/Artists";
import Footer from "@/components/footer/Footer";

const UniversePage = () => {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  return (
    <div className="universe">
      <div className="universe-banner">
        {/* <div className="heading">
          <h2 className="capitalize">Marvel Universe</h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis inventore, tenetur laudantium dignissimos ipsam magni corporis ipsa est dolore?</p>

          <button className="btn">Let's Go</button>
        </div> */}
      </div>
      
        {/* <Testimonial/> */}
        <Artists/>
        <Footer/>
        {/* <Footer></Footer> */}
    </div>
  );
};

export default UniversePage;
