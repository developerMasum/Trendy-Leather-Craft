"use client";
import React, { useState } from "react";
import {
  FaAddressCard,
  FaPlus,
  FaShoppingCart,
  FaUserSecret,
} from "react-icons/fa";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { RiDashboard2Line } from "react-icons/ri";
import DashboardNavbar from "./DashboardNavbar";

const Dashboardpage = () => {

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  return (
    <section className="pt-12 flex bg-[#FFFFFF]">
      <div
        className={`overflow-y-auto fixed pt-5 h-screen bg-gray-100 shadow-xl flex flex-col 
           ${
             isSidebarVisible ? "" : "transform -translate-x-full h-screen"
           } md:transform-none mt-16 md:mt-0 h-screen transition-transform duration-300`}
        style={isSidebarVisible ? { width: "50%" } : { width: "25%" }}
      >
        <div className="flex-grow">
          <h2 className="md:text-xl text-sm text-center font-semibold">
            TRENDY-<span className="text-gray-500">LEATHER</span>-CRAFT
          </h2>
          <hr className="mt-6" />
          {/* items name */}
          <div className="mx-auto flex flex-col text-center pt-7 ">
            <div className="space-y-3 ml-20">
              <h2 className="text-start  text-gray-600 items-center  py-2 rounded-md">
                <RiDashboard2Line className="inline mr-3" size={22} />
                Dashboard
              </h2>
              <h2 className="text-start  text-gray-600 items-center  py-2 rounded-md">
                <FaUserSecret className="inline mr-3" size={22} />
                My Profile
              </h2>

              <h2 className="text-start  text-gray-600 items-center  py-2 rounded-md">
                <FaAddressCard className="inline mr-3" size={22} />
                Address Book
              </h2>

              <h2 className="text-start  text-gray-600 items-center  py-2 rounded-md">
                <FaShoppingCart className="inline mr-3 " size={22} />
                My Orders
              </h2>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center ml-20">
          {" "}
          {/* Positioned at the bottom */}
          <h2 className="text-start  text-gray-600 items-center  py-2 rounded-md">
            <HiOutlineArrowUpTray
              className="inline mr-3 -rotate-90"
              size={22}
            />
            Sign Out
          </h2>
        </div>
      </div>

      <div className=" ml-auto w-full md:w-[75%] h-full ">
        <DashboardNavbar
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <div className="pt-24 px-10">
          <h2 className="text-xl font-semibold">Good Morning, Anna!
</h2>
          <p className="text-gray-700 text-sm">
          Here's what's happening with your store today.
          </p>
          <div className="my-6">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboardpage;
