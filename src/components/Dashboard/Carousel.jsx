import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "./assets/1.jpeg";
import logo2 from "./assets/2.jpeg";
import logo3 from "./assets/3.jpeg";
import "../styles/Carousel.css";
export default () => (
  <Carousel
    autoPlay={true}
    fade
    infiniteLoop
    transitionTime={"500ms"}
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
  >
    <div>
      <img alt='' className='center' src={logo1} />
    </div>
    <div>
      <img alt='' src={logo2} className='center' />
    </div>
    <div>
      <img alt='' src={logo3} />
    </div>
  </Carousel>
);
