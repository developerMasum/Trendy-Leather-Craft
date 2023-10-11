import React from "react";
import { BsSearchHeart } from "react-icons/bs";
// import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative flex">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow bg-gray-200 text-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
      />
      <button className="absolute right-0 top-2 bg-black">
        <BsSearchHeart />
        {/* <FaSearch /> */}
      </button>
    </div>
  );
};

export default SearchBar;
