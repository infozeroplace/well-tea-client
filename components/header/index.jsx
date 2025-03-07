"use client";

import axios from "@/api/axios";
import { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Header() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { data },
      } = await axios.get("/public/system");

      setNotifications(data.topNotifications);
    };

    loadData();
  }, []);

  return (
    <>
    {notifications.length > 0 && (
      <div className="w-full bg-teagreen-800 text-white p-3 text-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={1}
          autoplay
          loop
          speed={2000}
          slidesPerGroup={1}
        >
          {notifications.map((item, idx) => (
            <SwiperSlide key={idx}>
              <h3>{item}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )}
    </>
  );
}

export default Header;
