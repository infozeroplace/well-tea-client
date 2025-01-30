"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionLinkButton } from "../shared";

function SocialImages() {
  const socialImages = [
    {
      image: "/insta/insta1.jpg",
      url: "https://facebook.com",
      title: "Tea 1",
    },
    {
      image: "/insta/insta2.jpg",
      url: "https://linkedin.com",
      title: "Tea 2",
    },
    {
      image: "/insta/insta3.jpg",
      url: "https://x.com",
      title: "Tea 3",
    },
    {
      image: "/insta/insta4.jpg",
      url: "https://instagram.com",
      title: "Tea 4",
    },
    {
      image: "/insta/insta5.jpg",
      url: "https://facebook.com",
      title: "Tea 5",
    },
    {
      image: "/insta/insta1.jpg",
      url: "https://facebook.com",
      title: "Tea 6",
    },
    {
      image: "/insta/insta2.jpg",
      url: "https://facebook.com",
      title: "Tea 7",
    },
    {
      image: "/insta/insta3.jpg",
      url: "https://facebook.com",
      title: "Tea 8",
    },
  ];
  return (
    <div className="section-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col sm:flex-row items-center justify-between py-5">
          <div className="text-4xl mb-5 font-semibold flex items-center gap-2">
            <FaInstagram /> <span>@wellteauk</span>
          </div>
          <div>
            <SectionLinkButton title="Follow Us" url="https://www.instagram.com/wellteauk/" buttonClass="w-60" target="_blank" />
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={5}
          spaceBetween={25}
          speed={1000}
          loop={true}
          autoplay
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
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
            1400: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
        >
          {socialImages.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-[350px] h-[350px]"
              >
                <Image src={item?.image} alt={item?.title} fill={true} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SocialImages;
