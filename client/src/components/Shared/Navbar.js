"use client"
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import SearchBar from "./SearchBar";
// import { authContext } from "../../Auth/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { user, logout } = ''; // You should replace this with your actual user context.

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed z-10 font-bold flex items-center justify-between flex-wrap px-6 w-full ${
        scrolling
          ? "bg-white bg-opacity-90 text-black shadow-lg"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img
          src="https://i.ibb.co/YQ8gbz5/leather-craft-logo-icon-design-vector.jpg"
          className={`w-12 h-12 mr-2 p-2 rounded-full ${
            scrolling ? "bg-white bg-opacity-80" : "bg-white bg-opacity-80"
          }`}
          alt="Logo"
        />
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-9 w-9 p-2 rounded-full bg-emerald-700 bg-opacity-80 ${
              isOpen ? "hidden" : "block"
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-9 w-9 bg-emerald-700 bg-opacity-80 p-2 rounded-full ${
              isOpen ? "block" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`md:lg:bg-[#00756a] rounded-lg bg-opacity-90 lg:md:bg-opacity-0 ps-4 lg:md:ps-0 pb-5 lg:md:pb-0 w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-[13px] lg:flex-grow py-2 lg:md:bg-opacity-0 w-40 lg:md:w-100">
          <Link
            href="/"
            className={`block mt-4 sm:w-11 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 40 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(40)}
          >
            Event
          </Link>
          <Link
            href="/details-marketplace"
            className={`block mt-4 sm:w-12 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 0 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(0)}
          >
            Man
          </Link>
          <Link
            href="/single-pay"
            className={`block mt-4 sm:w-14 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 8 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(8)}
          >
            Women
          </Link>
          <Link
            href="/hiring"
            className={`block mt-4 sm:w-12 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 2 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}
            onClick={() => handleLinkClick(2)}
          >
           Kids
          </Link>


          <div className="relative inline-block">
        <Link
          href="/"
          className={`menu-link block mt-4 sm:w-24 lg:inline-block font-bold lg:mt-0 mr-4 ${
            isDropdownOpen ? 'active-link' : ''
          }`}
          style={{ color: isDropdownOpen ? '#00756A' : 'white' }}
          onMouseEnter={toggleDropdown}
          onClick={toggleDropdown}
        >
          Accessories
        </Link>
        {isDropdownOpen && (
          <div className="dropdown absolute mt-2 py-2 px-4 shadow-md bg-white text-black">
            <Link href="/shoes" className="dropdown-item block py-2 border-b-2">
              Shoes
            </Link>
            <Link href="/hama" className="dropdown-item block py-2 border-b-2">
              Hama
            </Link>
            <Link href="/yaya" className="dropdown-item block py-2 border-b-2">
              Yaya
            </Link>
          </div>
        )}
      </div>

        
         <div  className={`block mt-4 sm:w-24 lg:inline-block font-bold lg:mt-0 mr-4 ${
              activeLink === 1 ? "active-link" : ""
            }`}
            style={{ color: scrolling ? "#00756A" : "white" }}>
         <SearchBar />
         </div>
         
        </div>
        <div className="flex-col sm:flex-row justify-start md:lg:flex items-center">
          {user ? (
            <>
              <div className="flex justify-between">
                <div>
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-9 h-9 rounded-full mx-3"
                  />
                </div>
                <div>
                  <Link href="/dashboard/jobs">
                    <button className="px-8 py-2 bg-teal-700 rounded-md hover:bg-teal-700 hover:border border hover:border-cyan-600 text-white md:block">
                      Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-start gap-2 items-center">
            <div className="flex items-center space-x-4">
          <FaHeart className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
          <Link href='/login'><FaUser className="text-2xl cursor-pointer hover:text-gray-400" /></Link>
        </div>
      </div>
           
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
