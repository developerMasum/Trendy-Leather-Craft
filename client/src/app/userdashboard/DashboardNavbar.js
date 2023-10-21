"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const DashboardNavbar = ({ setSidebarVisible, isSidebarVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownBtnRef = useRef(null);
  const dropdownContentRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target) &&
        dropdownContentRef.current &&
        !dropdownContentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed bg-white w-full px-6 md:w-[75%] py-2 border-b border-gray-300">
      <div className="flex justify-between md:px-0">
        <div className="flex items-center gap-5">
        {
  isSidebarVisible 
    ? <RxCross2 
        size={25} 
        className="font-bold md:hidden" 
        color="black" 
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      />
    : <HiBars3BottomLeft 
        size={25} 
        className="font-bold md:hidden" 
        color="black" 
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      />
}
          {/* search */}
          <div className="flex md:ml-5 bg-[#F3F3F9] w-full items-center gap-2 px-3 rounded-md py-2">
            <AiOutlineSearch size={22} color="gray" />
            <input
              className="outline-none text-gray-500 bg-[#F3F3F9]"
              type="search"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoNotifications className="text-gray-800" size={25} />
          {/* Profile */}
          <div>
            <div className="relative ">
              <button
                onClick={toggleDropdown}
                ref={dropdownBtnRef}
                className="text-white  py-2 gap-3 rounded flex items-center"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1409&q=80"
                  alt=""
                />
                {isOpen ? (
                  <RxCross2 color="black" className="h-6 w-6 inline-block" />
                ) : (
                  <IoIosArrowDown
                    color="black"
                    className="h-6 w-6 inline-block"
                  />
                )}
              </button>

              <div
                ref={dropdownContentRef}
                className={`absolute right-0 mt-2 w-48 bg-gray-200 border rounded shadow-2xl  border-gray-100 transition-transform duration-200 ${
                  isOpen ? "scale-100" : "scale-0"
                }`}
              >
                <a className="block px-4 py-2 hover:bg-gray-400 rounded hover:text-white">
                  Profile
                </a>
                <a className="block px-4 py-2 hover:bg-gray-400 rounded hover:text-white">
                  Dashboard
                </a>
                <a className="block px-4 py-2 hover:bg-gray-400 rounded hover:text-white">
                  Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
