"use client";

import axios from "@/api/axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  cssEase: "linear",
  arrows: false,
};

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
    <div className="w-full bg-teagreen-800 text-white p-3 text-center">
      <Slider {...settings}>
        {notifications.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Header;
