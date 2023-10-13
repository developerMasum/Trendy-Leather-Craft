import React, { useEffect } from "react";
import { MdCancel } from "react-icons/md";

const Modal = ({ isOpen, onClose, card }) => {
  useEffect(() => {
    const handleOutsideClick = () => {
        onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto"; 
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="relative bg-white p-4 rounded-lg w-96 h-80">
        <div className="absolute top-2 right-2">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <MdCancel size={20} />
          </button>
        </div>
        {/* {children} */}
        <h1 className="text-red-400 text-xl">{card.name}</h1>
        <img className="w-full object-cover" src={card.imageSrc} alt={card.name} />
      </div>
    </div>
  );
};

export default Modal;
