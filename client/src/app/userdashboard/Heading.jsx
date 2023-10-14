"use client";
import useAuth from "@/hooks/useAuth";
import "./page.css";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { FaBars,  FaUserCircle } from "react-icons/fa";
import {  BiSolidDownArrow } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";

const Heading = ({toggleSidebar}) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const toggleBar = () => {
    setOpen(!open);
  };
  return (
    <div className="2xl:w-[80%]   md:w-[75%] w-[100%]  ml-auto z-50">
      <div
        className="flex z-10 bg-white fixed 2xl:w-[80%] w-[100%] md:w-[75%] text-gray-100  items-center px-5 py-3 justify-between"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        }}
      >
        <button className="md:hidden pl-2 pr-2" onClick={toggleSidebar}>
      <FaBars color="black" />
    </button>
        <div className="md:flex hidden gap-2 items-center ">
          <AiOutlineSearch className="w-7 h-7" color="#64748b" />
          <input
            type="text"
            name=""
            className="w-full text-black focus:outline-none bg-white text-base"
            id=""
            placeholder="Type to search..."
          />
        </div>
        <div className="flex items-center gap-4 md:space-x-5 space-x-0">
          <MdNotificationsNone className="w-7 h-7" color="#64748b" />
          <div className="text-end">
            <h2 className="font-semibold text-black">{user?.displayName}</h2>
          </div>
          <div className="flex items-center gap-2 relative" onClick={toggleBar}>
            {/* Photo */}
            <div className="flex items-center gap-2">
              {user?.photoURL ? (
                <>
                  <img
                    src={user?.photoURL}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                </>
              ) : (
                <>
                  <FaUserCircle className="w-12 h-12" color="gray" />
                </>
              )}
              <BiSolidDownArrow
                className="w-6 h-6 " color="gray"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
