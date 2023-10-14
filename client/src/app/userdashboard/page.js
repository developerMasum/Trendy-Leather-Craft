"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaBars, FaPowerOff } from "react-icons/fa";
import Heading from "./Heading";
import './page.css'
const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const activeLinkClass =
    "bg-gradient-to-tr from-cyan-600 to-cyan-400 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40";
  return (
    <section className="pt-12">
      <div className="flex w-full ">
      <div
          className={`bg-[#0A2C88] text-white  2xl:w-[20%] md:w-[25%] h-[85%] mt-5 md:mt-0 md:h-full my-auto  z-50 fixed md:block sidebar ${
            isSidebarOpen
              ? "sidebar-open mx-2 rounded-lg md:rounded-none md:mx-0 w-[60%]"
              : ""
          }`}
        >
          {/* Header */}
          <div className="border-b  border-white/20 px-5  justify-between  flex md:block items-center">
          <img
          src="https://i.ibb.co/YQ8gbz5/leather-craft-logo-icon-design-vector.jpg"
          className="w-[70px] h-[70px] p-2 mx-auto  text-center  rounded-full"
          alt="Logo"
        />
            <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <FaPowerOff color="white" size={25} />
          </button>
            
          </div>
          {/*  */}
          <div className="px-5 pt-10 space-y-3">
            <>
              <p
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                <span>
                  {/* <icon c/lassName="w-[24px] h-[24px]"></icon> */}
                </span>

                <span>Dashboard List</span>
              </p>
              <p
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                <span>
                  {/* <icon className="w-[24px] h-[24px] text-[#FFAE00]"></icon> */}
                </span>
                <span>Dashboard List</span>
              </p>
            </>
          </div>
        </div>
        <div className="md:flex-1   w-full  mx-auto">
        <Heading toggleSidebar={toggleSidebar} />
          <div className="md:w-[75%] 2xl:w-[80%] ml-auto px-5 mt-[100px]">
            {/* <Outlet></Outlet> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
