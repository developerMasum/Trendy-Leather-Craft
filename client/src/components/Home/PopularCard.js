'use client'

import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

const PopularCard = ({ item }) => {
  const { image, price, size, description } = item;
  const [showQuickView, setShowQuickView] = useState(false);

  const toggleQuickView = () => {
    setShowQuickView(!showQuickView);
  };

  return (
    <div className="bg-gray-100 text-black rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={description} className="w-full h-auto grayscale cursor-pointer" onClick={toggleQuickView} />
        {showQuickView && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-95 flex items-center justify-center z-10">
            <div className="p-4 max-w-md">
              <div className="text-gray-900 text-2xl font-semibold mb-2">${price.toFixed(2)}</div>
              {/* <div className="text-gray-700 text-sm mb-2">Size: {size.join(', ')}</div> */}
              <div className="text-gray-700">{description}</div>
              <button
                className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-full mt-4 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={toggleQuickView}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCard;