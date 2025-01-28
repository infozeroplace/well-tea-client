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
      image:
        "https://instagram.fdac5-2.fna.fbcdn.net/v/t51.29350-15/470920457_1120562322847645_5480179903825227429_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac5-2.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2AGyCfTffBjo1SVpTO996PT9WvqEtiYKGdpeFGsNJnJisyXcpuq_PO4KP0yl6MIyfuU&_nc_ohc=qdg2Ridn9jwQ7kNvgEsfFZ1&_nc_gid=8c50a969443042b49b24df91701a6723&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUyNjY2OTIxNDY1MzI0MDI3Ng%3D%3D.3-ccb7-5&oh=00_AYCs52cqo8geXz5oBWKLSm-OXv-Cx9YGe_3DK8WkkPw4sQ&oe=67954CD6&_nc_sid=7a9f4b",
      url: "https://facebook.com",
      title: "Tea 1",
    },
    {
      image:
        "https://instagram.fdac5-1.fna.fbcdn.net/v/t51.29350-15/469742038_1562044941087825_868725240528495316_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2AGyCfTffBjo1SVpTO996PT9WvqEtiYKGdpeFGsNJnJisyXcpuq_PO4KP0yl6MIyfuU&_nc_ohc=k3HinwT6rSQQ7kNvgGGQb2e&_nc_gid=8c50a969443042b49b24df91701a6723&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUyNDU0OTQ3NDIwMjQzMDQ4MA%3D%3D.3-ccb7-5&oh=00_AYDCxbZrOJ9fvtosGB-rcNA-1I_hmIAKSEE62PNKss1r6g&oe=67954613&_nc_sid=7a9f4b",
      url: "https://linkedin.com",
      title: "Tea 2",
    },
    {
      image:
        "https://instagram.fdac5-1.fna.fbcdn.net/v/t51.29350-15/469020536_1310397690146362_6780872877030754969_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AGyCfTffBjo1SVpTO996PT9WvqEtiYKGdpeFGsNJnJisyXcpuq_PO4KP0yl6MIyfuU&_nc_ohc=b-skWO3kn6kQ7kNvgFX1Y7T&_nc_gid=8c50a969443042b49b24df91701a6723&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxNTAwNDE1MTA4MTA4OTAwMQ%3D%3D.3-ccb7-5&oh=00_AYDa8gLJuijc61S-vdnIQATOBmnoXwjm7POpoYmtq4asZw&oe=6795451D&_nc_sid=7a9f4b",
      url: "https://x.com",
      title: "Tea 3",
    },
    {
      image:
        "https://instagram.fdac5-2.fna.fbcdn.net/v/t51.29350-15/461404488_1586820085279299_5579787813525289385_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac5-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AGyCfTffBjo1SVpTO996PT9WvqEtiYKGdpeFGsNJnJisyXcpuq_PO4KP0yl6MIyfuU&_nc_ohc=HDAIcx-e6PEQ7kNvgG4fuZm&_nc_gid=8c50a969443042b49b24df91701a6723&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ2NTU1NzM5NTk5MDA0MjA2MA%3D%3D.3-ccb7-5&oh=00_AYDCJf_gh5NUca4_GFk-5Gv376b-Lxd_Ba_WLpCC4iS6Zg&oe=67953F27&_nc_sid=7a9f4b",
      url: "https://instagram.com",
      title: "Tea 4",
    },
    {
      image:
        "https://instagram.fdac5-1.fna.fbcdn.net/v/t39.30808-6/455298311_18051884416838014_6854741611416348177_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AFI2jAkHL_ckyJhtoaYWfjArafW0vBx4sA6PP8jvQcA23RT8Ch8ZfrcnQMtXzTDh_Y&_nc_ohc=U6MF86XoaJQQ7kNvgHKDMPd&_nc_gid=4fc61690c9be4a10b055a8ed0dc755d7&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQzNTM1MjQ4NjA2NDQ4NTcxMA%3D%3D.3-ccb7-5&oh=00_AYDRVM6nun0G1GhjinQ3OINd6SYPuoPH6nK_Cx6fKGLW5g&oe=67954251&_nc_sid=22de04",
      url: "https://facebook.com",
      title: "Tea 5",
    },
    {
      image:
        "https://instagram.fdac5-2.fna.fbcdn.net/v/t51.29350-15/410873411_1377150169840831_5080103738099037723_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45OTl4OTk5LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fdac5-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2AFI2jAkHL_ckyJhtoaYWfjArafW0vBx4sA6PP8jvQcA23RT8Ch8ZfrcnQMtXzTDh_Y&_nc_ohc=g-3Ljf5ECyUQ7kNvgHTM3RU&_nc_gid=4fc61690c9be4a10b055a8ed0dc755d7&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI1ODY3NTI2ODMyOTQwODAxOA%3D%3D.3-ccb7-5&oh=00_AYCRiJtfxzzYErtCXEdje_0N7m0uXwRT-lCVT8aIMmkcbw&oe=679550CC&_nc_sid=22de04",
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
                <Image src={item?.image} alt={item?.title} fill={true} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mx-auto">
          <SectionLinkButton title="Follow Us" url="/" />
        </div>
      </div>
    </div>
  );
}

export default SocialImages;
