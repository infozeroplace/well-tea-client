"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Keyboard,
  Virtual,
  Parallax,
} from "swiper/modules";
import { delay, motion } from "framer-motion";
import { useState } from 'react';
import { SectionButton } from '../shared';

function Hero() {
  const heroSilderItems = [
    {
      title: (
        <>
          Selected Teas <br /> and Teawares
        </>
      ),
      description:(
        <>
          In its unique green essence, matcha unites rich flavour, a centuries-old <br /> craftsmanship tradition and lived mindfulness.
        </>
      ),
      image: "/heroslider/well_tea_slider_01.jpg",
    },
    {
      title: (
        <>
          New English <br /> Breakfast Tea
        </>
      ),
      description:(
        <>
          In its unique green essence, matcha unites rich flavour, a centuries-old <br /> craftsmanship tradition and lived mindfulness.
        </>
      ),
      image: "/heroslider/well_tea_slider_02.jpg",
    },
    {
      title: (
        <>
          Enjoy Robust, <br /> Flavorful Teas
        </>
      ),
      description:(
        <>
          In its unique green essence, matcha unites rich flavour, a centuries-old <br /> craftsmanship tradition and lived mindfulness.
        </>
      ),
      image: "/heroslider/well_tea_slider_03.jpg",
    },
    {
      title: <>Reviving, Moreish <br /> and Truly Satisfying</>,
      description:(
        <>
          In its unique green essence, matcha unites rich flavour, a centuries-old <br /> craftsmanship tradition and lived mindfulness.
        </>
      ),
      image: "/heroslider/well_tea_slider_02.jpg",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const textAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1 },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2, delay: 0 } },
  };

  return (
    <div className="relative overflow-hidden">
      <div className="section-gap">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          speed={1000}
          // mousewheel={true}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          // spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          {heroSilderItems.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className=" w-full h-[30vh] md:h-full">
                <Image
                  src={item.image}
                  alt="Hero Image"
                  width={1900}
                  height={750}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="container absolute px-4 lg:px-16 top-1/2 transform -translate-y-1/2 text-white">
                <div
                // key={`content-${index}`}
                // className="bg-teagren-600 opacity-40"
                // initial={activeSlide === index ? "hidden" : null}
                // animate={activeSlide === index ? "visible" : "exit"}
                // variants={textAnimation}
                >
                  <motion.h1
                    key={`title-${index}`}
                    initial={activeSlide === index ? "hidden" : null}
                    animate={activeSlide === index ? "visible" : "exit"}
                    variants={textAnimation}
                    className="space-y-4 text-center md:text-left text-2xl md:text-4xl lg:text-6xl font-extralight mb-1 md:mb-2"
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    key={`description-${index}`}
                    initial={activeSlide === index ? "hidden" : null}
                    animate={activeSlide === index ? "visible" : "exit"}
                    variants={textAnimation}
                    className="space-y-4 text-center md:text-left text-sm md:text-base lg:text-lg"
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    key={`content-${index}`}
                    initial={activeSlide === index ? "hidden" : null}
                    animate={activeSlide === index ? "visible" : "exit"}
                    variants={textAnimation}
                    href="#"
                    // className="space-y-4 inline-block mt-4 bg-teagreen-600 hover:bg-teagreen-500 px-16 py-3 rounded-lg text-white font-medium duration-300"
                    className="mt-5 flex justify-center md:justify-start"
                  >
                    <SectionButton title="Shop Now" textClass="!mx-auto !text-white" buttonClass="!bg-teagreen-500" />
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero