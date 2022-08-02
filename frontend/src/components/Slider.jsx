import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "../style/slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import gr_slider1 from "../assets/Sliderimggif001.gif";
import gr_slider2 from "../assets/Sliderimggif002.gif";
import gr_slider3 from "../assets/Sliderimggif003.gif";
import gr_slider4 from "../assets/Sliderimggif004.gif";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      arrows:true,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 7000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="btmSlide">
        <Slider {...settings}>
          <div>
            <img
              src={gr_slider4}
              alt="img04_gr"
              width="100%"
              height="950px"
              margin="auto"
            />
          </div>
          <div>
            <img
              src={gr_slider1}
              alt="img01_gr"
              width="100%"
              height="950px"
              margin="auto"
            />
          </div>
          <div>
            <img
              src={gr_slider2}
              alt="img02_gr"
              width="100%"
              height="950px"
              margin="auto"
            />
          </div>
          <div>
            <img
              src={gr_slider3}
              alt="img03_gr"
              width="100%"
              height="950px"
              margin="auto"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
