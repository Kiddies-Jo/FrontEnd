import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function HomeMainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ objectFit: "cover", height: "400px" }}
            src="https://kidsindanger.org/wp-content/uploads/2022/03/hero-safety-toolkit.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            height={"400px"}
            src="https://kidsindanger.org/wp-content/uploads/2018/11/facebook-og-image-01.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
