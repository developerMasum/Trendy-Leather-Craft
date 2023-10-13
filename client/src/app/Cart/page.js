"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./page.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="pt-20 px-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          
          {/* 1st */}
          <div className="relative">
            <img className="rounded-md" src="https://i.ibb.co/b5v78jY/ladybags.jpg" />
            <p className="uppercase absolute bottom-3 underline text-white right-0 left-0 text-sm font-medium text-center mx-auto">Ladies bags</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 2nd */}
          <div>
           
            <img className="rounded-md" src="https://i.ibb.co/7W5Pr5V/shoes.jpg" />
            <p className="uppercase absolute bottom-3 underline text-white right-0 left-0 text-sm font-medium text-center mx-auto">Boots</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 3rd */}
          <div>
            <img className="rounded-md" src="https://i.ibb.co/4MfTG2d/21187546-c739-46f2-aa14-58133e4c16a4.jpg" />
            <p className="uppercase absolute bottom-3 underline text-white right-0 left-0 text-sm font-medium text-center mx-auto">Formal Shoes</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 4th */}
          <div className="relative">
            <img className="rounded-md" src="https://i.ibb.co/bdkpznf/9153768a-b8d7-446e-aff0-e74f840b6a14.jpg" />
            <p className="uppercase absolute bottom-3 underline text-white right-0 left-0 text-sm font-medium text-center mx-auto">Kid's bags</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 5th */}
          <div>
            <img className="rounded-md" src="https://i.ibb.co/nCBmDWn/9f314f23-df3b-4cb1-9836-af7c57e84c23.jpg" />
            <p className="uppercase absolute bottom-3 underline text-white right-0 left-0 text-sm font-medium text-center mx-auto">Pants</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 6th */}
          <div>
            <img className="rounded-md" src="https://i.ibb.co/pzCjZtb/9edce07f-8cb8-46e4-a60e-47a3ab3f0447.jpg" />
            <p className="uppercase absolute bottom-3 underline text-white right-0 left-0 text-sm font-medium text-center mx-auto">Men's bags</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

//   const images = [
//     "https://i.ibb.co/b5v78jY/ladybags.jpg",
//     "https://i.ibb.co/7W5Pr5V/shoes.jpg",
//     "https://i.ibb.co/4MfTG2d/21187546-c739-46f2-aa14-58133e4c16a4.jpg",
//     "https://i.ibb.co/bdkpznf/9153768a-b8d7-446e-aff0-e74f840b6a14.jpg",
//   ];
//  const imageTexts = [
//     "Text for ladybags",
//     "Text for shoes",
//     "Text for third image",
//     "Text for fourth image",
//     "Text for fifth image",
//     "Text for sixth image",
//   ];
