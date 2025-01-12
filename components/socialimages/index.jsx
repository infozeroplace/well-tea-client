"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function SocialImages() {
  const socialImages = [
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t51.29350-15/471687730_2431906473808153_6241149470780653397_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=EZHgohL99qcQ7kNvgEr8m1x&_nc_gid=b862659eae304a89b30a5b39e8b7d41c&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUzMTY4NDkxODk2ODMxMzA2NQ%3D%3D.3-ccb7-5&oh=00_AYCZfP-wpH3G3S361IeDTDlMkQPHOR5-fB2V2s9fNljtyw&oe=6785FD21&_nc_sid=7a9f4b",
      url: "https://facebook.com",
      title: "Tea 1",
    },
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t51.29350-15/470920457_1120562322847645_5480179903825227429_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=nj2hhgjc8bwQ7kNvgHwnNUK&_nc_gid=b862659eae304a89b30a5b39e8b7d41c&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUyNjY2OTIxNDY1MzI0MDI3Ng%3D%3D.3-ccb7-5&oh=00_AYDMikGNJCdcHw3ywd4JsHXhJUwkrGzzwiDiHtepWbngzw&oe=6785EB56&_nc_sid=7a9f4b",
      url: "https://linkedin.com",
      title: "Tea 2",
    },
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t51.29350-15/469742038_1562044941087825_868725240528495316_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=K0DxnCWoPH4Q7kNvgGPUJiG&_nc_gid=b862659eae304a89b30a5b39e8b7d41c&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUyNDU0OTQ3NDIwMjQzMDQ4MA%3D%3D.3-ccb7-5&oh=00_AYB-LIVn-mclBTbnBn-pRhf25Wjqu4Vd7ohjZs-dOB86hg&oe=6785E493&_nc_sid=7a9f4b",
      url: "https://x.com",
      title: "Tea 3",
    },
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t51.29350-15/469740508_610879714727320_8677616930553192056_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=VnSxEQLXuH0Q7kNvgEAjYfY&_nc_gid=b862659eae304a89b30a5b39e8b7d41c&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUyMDg3ODU4NzAzNzE0ODA2Ng%3D%3D.3-ccb7-5&oh=00_AYDeJE4EtE73Dhfrp9hB0_KBJKRTEUx8dnUv7mfP1xZnWg&oe=67860598&_nc_sid=7a9f4b",
      url: "https://instagram.com",
      title: "Tea 4",
    },
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t51.29350-15/469020536_1310397690146362_6780872877030754969_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=JvimjiFNvAQQ7kNvgGPZh21&_nc_gid=b862659eae304a89b30a5b39e8b7d41c&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxNTAwNDE1MTA4MTA4OTAwMQ%3D%3D.3-ccb7-5&oh=00_AYCWPhNx8xKRukqDEnROW0PIjmlQJ0LxKZSJareco2N4PA&oe=6785E39D&_nc_sid=7a9f4b",
      url: "https://facebook.com",
      title: "Tea 5",
    },
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t51.29350-15/461404488_1586820085279299_5579787813525289385_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=cAG7-GdH5MIQ7kNvgEwYdFR&_nc_gid=b862659eae304a89b30a5b39e8b7d41c&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ2NTU1NzM5NTk5MDA0MjA2MA%3D%3D.3-ccb7-5&oh=00_AYCd6RPdR-69YuqR4nF32p9b7BGV5prasgGC1Ox8ypZUyA&oe=6785DDA7&_nc_sid=7a9f4b",
      url: "https://facebook.com",
      title: "Tea 6",
    },
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t39.30808-6/455298311_18051884416838014_6854741611416348177_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=LnvrX2fqDLAQ7kNvgHXVDtg&_nc_gid=b862659eae304a89b30a5b39e8b7d41c&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzQzNTM1MjQ4NjA2NDQ4NTcxMA%3D%3D.3-ccb7-5&oh=00_AYAZX4eST78j4bTmjQB1hVtzS4hx7WyxvXgPsKKra3bnPA&oe=6785E0D1&_nc_sid=7a9f4b",
      url: "https://facebook.com",
      title: "Tea 7",
    },
    {
      image:
        "https://instagram.fdac19-1.fna.fbcdn.net/v/t51.29350-15/295892506_108464258546403_8887764407334686706_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac19-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=0fE24RfGunAQ7kNvgFW5gLJ&_nc_gid=605e5ff1c4084505809cd656b463567f&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=Mjg5MTY2MzAwOTEwOTg3NTE5Nw%3D%3D.3-ccb7-5&oh=00_AYDPwy0Icfkp4qM6Fe5RXPPmPtzhhEsaghjCjE0utjL4LA&oe=6785D668&_nc_sid=22de04",
      url: "https://facebook.com",
      title: "Tea 8",
    },
  ];
  return (
    <div className="section-gap">
      <div className="container px-20">
        <div className="flex items-center justify-between">
          <p className="text-4xl mb-5 font-semibold flex items-center gap-2">
            <FaInstagram /> <span>@wellteauk</span>
          </p>
          <p className="uppercase font-semibold">Follow us</p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={5}
          spaceBetween={25}
          speed={1000}
          loop={true}
          autoplay
          //   slidesPerGroup={2}
          // onSlideChange={handleSlideChange}
          //   navigation={{
          //     prevEl: ".category-swiper-prev",
          //     nextEl: ".category-swiper-next",
          //   }}
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
                <Image src={item.image} alt={item.title} fill={true} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SocialImages;
