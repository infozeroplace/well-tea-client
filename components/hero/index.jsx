"use client";
import { env } from "@/config/env";
import { motion } from "framer-motion";
import { useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionLinkButton } from "../shared";
import NextImage from "../shared/NextImage";

function Hero({ data }) {
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


  if(!data) return null

  return (
    <div className="relative overflow-hidden">
      <div className="section-gap">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          speed={800}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          slidesPerView={1}
          loop={true}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx} className="relative">
              <div className="w-full">
                <NextImage
                  img={`${env.app_url}${item?.bannerImagePath[0]?.filepath}`}
                  alt={item?.bannerImagePath[0]?.alternateText}
                  quality={100}
                  className="w-full object-cover max-2xl:h-full"
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-70"></div>

              <div className="container absolute text-center md:text-left top-1/2 transform left-24 -translate-y-1/2 text-white">
                <div>
                  <motion.h1
                    key={`title-${idx}`}
                    initial={activeSlide === idx ? "hidden" : null}
                    animate={activeSlide === idx ? "visible" : "exit"}
                    variants={textAnimation}
                    className="space-y-4 text-center md:text-left text-2xl md:text-4xl lg:text-6xl font-extralight mb-1 md:mb-2 max-w-[550px] w-full"
                  >
                    {item.bannerImageTitle || ""}
                  </motion.h1>
                  <motion.p
                    key={`description-${idx}`}
                    initial={activeSlide === idx ? "hidden" : null}
                    animate={activeSlide === idx ? "visible" : "exit"}
                    variants={textAnimation}
                    className="space-y-4 text-sm md:text-base lg:text-lg max-w-[650px] w-full"
                  >
                    {item.bannerImageDescription || ""}
                  </motion.p>
                  <motion.div
                    key={`content-${idx}`}
                    initial={activeSlide === idx ? "hidden" : null}
                    animate={activeSlide === idx ? "visible" : "exit"}
                    variants={textAnimation}
                    className="mt-5 flex justify-center md:justify-start"
                  >
                    <SectionLinkButton
                      title={item.bannerImageButtonText || "Shop Now"}
                      textClass="!mx-auto !text-white"
                      buttonClass="!bg-teagreen-500 w-60"
                      url={item.bannerImageButtonUrl}
                    />
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

export default Hero;
