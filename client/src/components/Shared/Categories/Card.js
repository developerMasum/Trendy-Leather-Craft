import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import StarsRating from "react-awesome-stars-rating";

const Card = ({ card, clickedCardIds, setClickedCardIds }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLoveButton, setShowLoveButton] = useState(false);

  const handleClickToView = () => {
    console.log("Click to view Button");
  };

  const handleShopButton = () => {
    console.log("Click to shop Button");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowLoveButton(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowLoveButton(false);
  };

  const handleLoveButtonClick = (card) => {
    console.log("Add to favorite" +" "+card.name);
  };

  return (
    <div
      className="max-w-lg mx-2 my-4 border border-gray-500 shadow-2xl transition duration-300 transform hover:scale-105 rounded-lg hover:shadow-xl bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={card.imageSrc}
        alt={card.name}
        className="w-full p-4 h-80 object-cover rounded-t-lg transition duration-300 transform hover:scale-125"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{card.name}</h2>
        <div className="flex justify-center gap-4 my-2">
          <del className="text-red-700">{card.previousPrice}</del>
          <p className="text-green-700">{card.price}</p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <StarsRating className="flex" value={card.rating} isEdit={false} />
        </div>
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <button
            className="text-black bg-white font-bold py-2 px-4 rounded-md transition duration-500 transform hover:scale-110"
            onClick={() => handleClickToView(card)}
          >
            Click to view
          </button>
        </div>
      )}
      {isHovered && showLoveButton && (
        <button
          className="absolute top-8 left-8 text-black hover:text-red-500 transition duration-500 transform hover:scale-110"
          onClick={()=>handleLoveButtonClick(card)}
        >
          <FaHeart size={30} />
        </button>
        
      )}
      {isHovered && (
        <button
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white hover:bg-red-700 text-black hover:text-white font-bold py-2 px-4 rounded-md transition duration-500 transform hover:scale-105"
          onClick={() => handleShopButton(card)}
        >
          Shop Now
        </button>
      )}
    </div>
  );
};

export default Card;
