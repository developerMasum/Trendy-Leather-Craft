import React from 'react';
import { AiOutlinePhone } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const AdsBar = () => {
    return (
        <section class="flex flex-col md:flex-row justify-between text-xs bg-red-500 py-2 md:px-12">
        <div class="flex items-center mb-2 md:mb-0 ">
          <p>
            <AiOutlinePhone size={20} />
          </p>
          <p class="ml-2 md:ml-1">+880994455805</p>
          <p class="hidden md:block ml-2">
            <IoMdTimer size={20} />
          </p>
          <p class="hidden md:block">10am to 9pm</p>
        </div>

        <div class="flex items-center justify-center md:justify-end mb-2 md:mb-0">
          <p>25% OFF FOR NEW USERS, CODE - ZAYSNEW</p>
        </div>

        <div class="flex items-center justify-center">
          <p>
            <FaFacebookF size={20} />
          </p>
          <p class="ml-2">Like Us</p>
        </div>
      </section>
    );
};

export default AdsBar;