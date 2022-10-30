import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, FreeMode } from "swiper";

export default function App() {
  return (
    <>
    <h1>Carousal using SwiperJs</h1>
      <Swiper
      loop={true}
      freeMode={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlide"><h1> Slide 1</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 2</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 3</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 4</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 5</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 6</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 7</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 8</h1></SwiperSlide>
        <SwiperSlide className="swiperSlide"><h1> Slide 9</h1></SwiperSlide>
      </Swiper>
    </>
  );
}
