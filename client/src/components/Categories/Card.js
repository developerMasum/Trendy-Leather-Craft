import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
// import StarsRating from "react-awesome-stars-rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import Modal from "./Modal";
import Link from "next/link";

const Card = ({ card, handleClickToView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLoveButton, setShowLoveButton] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    // Check if the item is in local storage when the component mounts
    const favoriteItems =
      JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const isAlreadyFavorite = favoriteItems.some((item) => item.id === card.id);
    setIsFavorite(isAlreadyFavorite);
  }, [card.id]);

  // const handleClickToView = (card) => {
  //   openModal(true); // Open the modal
  // };

  const handleShopButton = (card) => {
    console.log("Click to shop Button",card);
    toast("added to cart");
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
    setIsFavorite(!isFavorite);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Define closeModal within the component scope
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="max-w-lg mx-1 my-4 hover:border shadow-md transition duration-300 transform rounded-lg hover:shadow-xl  relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={card.imageSrc}
        alt={card.name}
        className={`w-full h-64 object-cover  rounded-t-lg transition duration-300 transform ${
          isHovered ? "scale-105 opacity-40 " : ""
        }`}
      />

      <div className="p-4 text-center text-sm ">
        <h2 className="text-xs font-semibold text-slate-700">{card.name}</h2>
        <div className="flex justify-center gap-4 my-2">
          <del className="text-red-700">{card.previousPrice}</del>
          <p className="text-green-700">{card.price}</p>
        </div>
        {/* <div className="flex justify-center items-center mt-2">
          <StarsRating className="flex" value={card.rating} isEdit={false} />
        </div> */}
      </div>

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-10">
          <button
            className="text-black bg-white text-xs hover:bg-black hover:text-white font-bold py-2 px-4 rounded-md transition duration-500 transform hover:scale-110"
            onClick={() => handleClickToView(card)}
          >
            Click to view
          </button>
        </div>
      )}

      {isHovered && showLoveButton && (
        <button
          className="absolute top-4 left-4 transition duration-500 transform hover:scale-110"
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
      <div className="mt-5">
        {isHovered && (
          <Link href='/details'>
            <button
              className="absolute bottom-1 w-3/4 left-1/2 cursor-pointer -translate-x-1/2  text-sm hover:bg-green-800 bg-red-700 text-white font-bold py-1 px-4 rounded-md transition duration-500 transform hover:scale-105"
              onClick={() => handleShopButton(card)}
            >
              Shop Now
            </button>
          </Link>
        )}
      </div>
      {/* <Modal card={card} isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default Card;
