"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import SingleSlider from "./SingleSlider";
import sliderData from "../data/sliderData";

const Slider = () => {
  return (
    <section className="main-slider pt-[52px]">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
