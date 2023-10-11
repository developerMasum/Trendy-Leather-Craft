"use client";
import React, { useState } from "react";
import CardData from "./CardData";
import { FaFilter } from "react-icons/fa";
import Card from "./Card";
import ReactPaginate from "react-paginate";

const CategoriesPage = () => {
  const cardData = CardData();

  const uniqueCategories = [...new Set(cardData.map((card) => card.category))];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRangeSelect = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  const filteredCardData = cardData.filter((card) => {
    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.includes(card.category);

    const isPriceInRange =
      selectedPriceRange === null ||
      (parseFloat(card.price.replace("৳", "")) >= selectedPriceRange[0] &&
        parseFloat(card.price.replace("৳", "")) <= selectedPriceRange[1]);

    return isCategorySelected && isPriceInRange;
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleClickToView = (card) => {
    // Handle click to view card
  };

  // Define the number of cards to display per page
  const cardsPerPage = 12;

  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredCardData.length / cardsPerPage);

  // Store the currently active page
  const [currentPage, setCurrentPage] = useState(0);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Slice the filtered data to display only the cards for the current page
  const cardsToDisplay = filteredCardData.slice(startIndex, endIndex);

  return (
    <div className="container px-12">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <div className="flex justify-between p-4 md:hidden">
            <FaFilter size={24} onClick={handleFilterClick} />
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
                  0৳ - 500৳
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
                  501৳ - 1000৳
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
                  1001৳ - 2000৳
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
                  2001৳ - 3000৳
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
                  3001৳ - 4000৳
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
                  4001৳ - 5000৳
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
                  5001৳ - 6000৳
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
                  6001৳ - 7000৳
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
                  7001৳ - 8000৳
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
                  8001৳ - 10000৳
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
                  10000৳+
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="row-span-3">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4">
            {cardsToDisplay.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="pagination-container flex justify-center mt-8 mb-24 text-4xl">
        <ReactPaginate
          className="flex gap-4"
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active  bg-green-500"}
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
