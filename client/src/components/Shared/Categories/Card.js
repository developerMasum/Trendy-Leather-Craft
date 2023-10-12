import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import StarsRating from "react-awesome-stars-rating";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";

const Card = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLoveButton, setShowLoveButton] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the item is in local storage when the component mounts
    const favoriteItems =
      JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const isAlreadyFavorite = favoriteItems.some((item) => item.id === card.id);
    setIsFavorite(isAlreadyFavorite);
  }, [card.id]);

  const handleClickToView = () => {
    console.log("handleClickToView");
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
    const favoriteItems =
      JSON.parse(localStorage.getItem("favoriteItems")) || [];

    if (!isFavorite) {
      favoriteItems.push(card);
      localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
      toast.success(`Added successfully as Favorite`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // If already in favorites, remove it
      const cardIndex = favoriteItems.findIndex((item) => item.id === card.id);
      if (cardIndex !== -1) {
        favoriteItems.splice(cardIndex, 1);
        localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
        toast.error(`Removed from Favorites`, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }

    // Update the state
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="max-w-lg mx-2 my-4 hover:border shadow-2xl transition duration-300 transform hover:scale-105 rounded-lg hover:shadow-xl bg-black"
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
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-10">
          <button
            className="text-black bg-white hover:bg-black hover:text-white font-bold py-2 px-4 rounded-md transition duration-500 transform hover:scale-110"
            onClick={() => handleClickToView(card)}
          >
            Click to view
          </button>
        </div>
      )}

      {isHovered && showLoveButton && (
        <button
          className="absolute top-8 left-8 transition duration-500 transform hover:scale-110"
          onClick={() => handleLoveButtonClick(card)}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 hover:text-rose-800" size={30} />
          ) : (
            <AiFillHeart
              className="text-stone-400 hover:text-stone-700"
              size={30}
            />
          )}
        </button>
      )}

      {isHovered && (
        <button
          className="absolute bottom-2 w-3/4 left-1/2 -translate-x-1/2 bg-white hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded-md transition duration-500 transform hover:scale-105"
          onClick={() => handleShopButton(card)}
        >
          Shop Now
        </button>
      )}
    </div>
  );
};

export default Card;
