import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsSearchHeart } from "react-icons/bs";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <main>
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

      <section>
      <nav className="bg-gray-100 text-gray-600 p-4">
      <div className="flex justify-between items-center">
        {/* 1st div with image */}
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/5Yr6rsR/logolather.png"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className=" font-semibold">Trendy Leather Craft</span>
        </div>

        {/* 2nd div with navigation links and search bar */}
        <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-gray-400">
            Puja Collection
          </a>
          <a href="#" className="hover:text-gray-400">
            Man
          </a>
          <a href="#" className="hover:text-gray-400">
            Women
          </a>
          <a href="#" className="hover:text-gray-400">
            Kids
          </a>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 text-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            />
            <button className="absolute right-2 top-2">
   <BsSearchHeart />

            </button>
          </div>
        </div>

        {/* 3rd div with icons */}
        <div className="flex items-center space-x-4">
          <FaHeart className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaUser className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </nav>
      </section>
    </main>
  );
};

export default Navbar;
