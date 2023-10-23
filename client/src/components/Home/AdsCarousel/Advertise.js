"use client"
import React, { useRef, useState } from 'react';
// import './Advertise.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Advertise = () => {
  const advertisements = [
    {
      imgSrc: 'https://i.ibb.co/MNzHqRV/1.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'FREE TO BE',
      description: 'Explore to be free with an incredible integrity',
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/tz5NdkT/2.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'Designed in Dhaka',
      description: "Blend yourself into the world of heritage & elegance",
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/9q93z4N/3.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'The Original',
      description: 'Own a style that defines integrity and originality',
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/ckRBxg4/4.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'Make Everyday Beautiful',
      description: 'Elevate your everyday with style & beauty',
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/sFwLbFc/5.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'MYour Budding Star',
      description: "Lighten Up Your Budding Star's Fun & Joy",
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/nbdVSFS/6.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'Better Be the Best',
      description: 'Adorn your kids with the better to bring the best in them',
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/kxQc9Z0/7.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'Comfort that heals',
      description: 'Elevate feet health with sincere comfort',
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/fQHDZpN/8.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'The Pursuit of Success',
      description: 'Unravel Your Confidence with timeless Craftsmanship',
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/BGFRtSN/9.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'The Luxury of being you',
      description: 'Embrace the power of you with luxury & confidence',
      buttonText: 'Shop Now'
    },
    {
      imgSrc: 'https://i.ibb.co/47jHCTF/10.jpg',
      title: 'Trendy Leather Craft',
      subtitle: 'Ignite your spark',
      description: 'Fuel your Athletic Passion with a Spark',
      buttonText: 'Shop Now'
    },
  ];
  return (
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {/* First Image */}
        {/* <SwiperSlide>
          <div>
            <img className='relative' src='https://i.ibb.co/MNzHqRV/1.jpg'/>
            <h2 className='text-4xl font-semibold absolute top-24 right-24'>Trendy Leather Craft</h2>
            <div className='absolute bottom-5 right-24 text-right space-y-3'>
              <h4 className='text-3xl font-semibold uppercase text-white'>Make Everyday Beautiful</h4>
              <h4 className='text-lg font-medium text-white'>Elevate your everyday with style & beauty</h4>
              <button className='text-black bg-white px-5 py-2 rounded-md font-medium  hover:bg-transparent border-2 hover:border-2 hover:border-black transition-colors 0.3s ease-linear'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide> */}
          {/* Second Image */}
      {/*  */}
      {advertisements.map((ad, index) => (
    <SwiperSlide key={index}>
      <div>
        <img className='relative' src={ad.imgSrc} alt={ad.title} />
        <h2 className='md:text-4xl font-semibold absolute top-5 text-2xl left-10 md:top-24 md:right-24'>{ad.title}</h2>
        <div className='absolute bottom-5 right-10 md:right-24 text-right space-y-3'>
          <h4 className='md:text-3xl text-xl font-semibold uppercase text-white'>{ad.subtitle}</h4>
          <h4 className='md:text-lg font-medium text-white'>{ad.description}</h4>
          <button className='text-black bg-white px-3 md:px-5 py-2 rounded-md font-medium hover:bg-transparent border-2 hover:border-black transition-colors 0.3s ease-linear'>{ad.buttonText}</button>
        </div>
      </div>
    </SwiperSlide>
  ))}
        
      </Swiper>
    </div>
  )
}

export default Advertise