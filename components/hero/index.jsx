"use client";

import { env } from "@/config/env";
import extractAlterText from "@/utils/extractAlterText";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionLinkButton } from "../shared";

function Hero({ data }) {
  const router = useRouter();
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

  // const handleNavigation = (url) => {
  //   router.push(url);
  // };

  return (
    <div className="relative overflow-hidden">
      <div className="section-gap">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          speed={1000}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          slidesPerView={1}
          loop={true}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx} className="relative">
              <div className=" w-full h-[30vh] md:h-full">
                <Image
                  src={`${env.app_url}${item?.bannerImagePath}`}
                  alt={extractAlterText(
                    item?.bannerImagePath?.split("upload/")[1]
                  )}
                  width={1900}
                  height={750}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="container absolute px-5 sm:px-10 md:px-14 lg:px-20 text-center md:text-left top-1/2 transform -translate-y-1/2 text-white">
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
