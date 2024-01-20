import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Grid, Typography } from "@mui/material";

export default function HomeMainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{delay:1000}}
        speed={1000}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p style={{ color: "white" , fontSize:'70px', display:'flex' , position:'absolute', left:'42%'}}>Kidiies</p>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />

        </SwiperSlide>
        <SwiperSlide>
          <p style={{ color: "white" , fontSize:'70px', display:'flex' ,position:'absolute', left:'42%'}}>Kidiies</p>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />

        </SwiperSlide>
        <SwiperSlide>
          <p style={{ color: "white" , fontSize:'70px', display:'flex' , position:'absolute', left:'42%'}}>Kidiies</p>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />

        </SwiperSlide>
        <SwiperSlide>

          <p style={{ color: "white" , fontSize:'70px', display:'flex' , position:'absolute', left:'42%'}}>Kidiies</p>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
