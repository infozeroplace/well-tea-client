"use client";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Header() {
    const sliderDetails = [
      {
        title: "Get 20% off for christmas",
      },
      {
        title: "Get 25% off for first order",
      },
      {
        title: "Get 30% off for multiple orders",
      },
    ];
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      arrows: false,
    };
  return (
    <div className="w-full bg-primary text-white p-3 text-center">
      <Slider {...settings}>
        {
            sliderDetails.map((item, index) => (
              <div key={index} className="">
                <h3>{item.title}</h3>
              </div>
            ))
        }
      </Slider>
    </div>
  );
}

export default Header