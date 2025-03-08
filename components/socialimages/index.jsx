"use client";

import Image from "next/image";
import Link from "next/link";
import { env } from "@/config/env";
import { FaInstagram } from "react-icons/fa";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionLinkButton } from "../shared";
import { useGetSocialPostListQuery } from "@/services/features/social/socialApi";

function SocialImages() {
  const { data: { data: socialPosts = [], meta = {}} = {} } = useGetSocialPostListQuery();

  return (
    <div className="section-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between py-5">
          <div className="text-4xl mb-5 font-semibold flex items-center gap-2">
            <FaInstagram /> <span>@wellteauk</span>
          </div>
          <div>
            <SectionLinkButton
              title="Follow Us"
              url="https://www.instagram.com/wellteauk/"
              buttonClass="w-60"
              target="_blank"
            />
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={1.2}
          spaceBetween={10}
          speed={1000}
          loop={true}
          autoplay
          breakpoints={{
            520: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
        >
          {socialPosts.slice(0, 4).map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-[350px] h-[350px]"
              >
                <Image
                  src={`${env.app_url}${item?.thumbnail[0].filepath}`}
                  alt={item?.thumbnail[0].alternateText}
                  fill={true}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SocialImages;
