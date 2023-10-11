"use client";
import React, { useState } from "react";
import CardData from "./CardData";
import { FaFilter } from "react-icons/fa";

const CategoriesPage = () => {
  const cardData = CardData();

  // Extract unique category names from cardData
  const uniqueCategories = [...new Set(cardData.map((card) => card.category))];

  // Initialize state to keep track of selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Initialize state to keep track of selected price range
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      // Category is already selected, remove it
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // Category is not selected, add it
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Function to handle price range selection
  const handlePriceRangeSelect = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  // Function to filter card data based on selected categories and price range
  const filteredCardData = cardData.filter((card) => {
    // Check if the card's category is in selectedCategories
    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.includes(card.category);

    // Check if the card's price falls within the selected price range
    const isPriceInRange =
      selectedPriceRange === null ||
      (parseFloat(card.price.replace("$", "")) >= selectedPriceRange[0] &&
        parseFloat(card.price.replace("$", "")) <= selectedPriceRange[1]);

    return isCategorySelected && isPriceInRange;
  });
  // Initialize state to keep track of selected categories
  const [isFilterVisible, setIsFilterVisible] = useState(false); // Added state for filter visibility

  // Function to toggle the filter visibility
  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="container px-12">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <div className="flex justify-between p-4 md:hidden ">
            <FaFilter size={24} onClick={() => handleFilterClick()} />
          </div>
          <div
            className={`border p-4 ${isFilterVisible ? "" : "hidden md:block"}`}
          >
            <h1 className="my-3 font-bold">Select Categories</h1>
            <ul>
              {uniqueCategories.map((category, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategorySelect(category)}
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
            <h1 className="my-3 font-bold">Select Price Range</h1>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={selectedPriceRange === null}
                    onChange={() => handlePriceRangeSelect(null)}
                  />
                  All
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 0 &&
                      selectedPriceRange[1] === 500
                    }
                    onChange={() => handlePriceRangeSelect([0, 500])}
                  />
                  $0 - $500
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 501 &&
                      selectedPriceRange[1] === 1000
                    }
                    onChange={() => handlePriceRangeSelect([501, 1000])}
                  />
                  $501 - $1000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 1001 &&
                      selectedPriceRange[1] === 2000
                    }
                    onChange={() => handlePriceRangeSelect([1001, 2000])}
                  />
                  $1001 - $2000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 2001 &&
                      selectedPriceRange[1] === 3000
                    }
                    onChange={() => handlePriceRangeSelect([2001, 3000])}
                  />
                  $2001 - $3000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 3001 &&
                      selectedPriceRange[1] === 4000
                    }
                    onChange={() => handlePriceRangeSelect([3001, 4000])}
                  />
                  $3001 - $4000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 4001 &&
                      selectedPriceRange[1] === 5000
                    }
                    onChange={() => handlePriceRangeSelect([4001, 5000])}
                  />
                  $4001 - $5000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 5001 &&
                      selectedPriceRange[1] === 6000
                    }
                    onChange={() => handlePriceRangeSelect([5001, 6000])}
                  />
                  $5001 - $6000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 6001 &&
                      selectedPriceRange[1] === 7000
                    }
                    onChange={() => handlePriceRangeSelect([6001, 7000])}
                  />
                  $6001 - $7000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 7001 &&
                      selectedPriceRange[1] === 8000
                    }
                    onChange={() => handlePriceRangeSelect([7001, 8000])}
                  />
                  $7001 - $8000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 8001 &&
                      selectedPriceRange[1] === 10000
                    }
                    onChange={() => handlePriceRangeSelect([8001, 10000])}
                  />
                  $8001 - $10000
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      selectedPriceRange !== null &&
                      selectedPriceRange[0] === 10001
                    }
                    onChange={() => handlePriceRangeSelect([10001, 100000])}
                  />
                  $10000+
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="row-span-3">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4">
            {filteredCardData.map((card, index) => (
              <div
                key={index}
                className={`max-w-lg mx-2 my-4 border border-gray-300 transition duration-300 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-xl ${
                  card.category === "Shoes"
                    ? "bg-blue-100"
                    : card.category === "Clothing"
                    ? "bg-green-100"
                    : "bg-gray-100"
                }`}
              >
                <img
                  src={card.imageSrc}
                  alt={card.name}
                  className="w-full p-4 h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg text-black font-semibold">
                    {card.name}
                  </h2>
                  <p className="text-gray-700">{card.price}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-sm mr-1">
                      &#9733;
                    </span>
                    <span className="text-gray-700 text-sm">{card.rating}</span>
                  </div>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
