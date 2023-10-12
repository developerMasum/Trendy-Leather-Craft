import React from "react";

const FullPageModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute text-red-500 text-3xl cursor-pointer"
        >
          &times;
        </button>
        {/* Add the content for your modal here */}
        <h2 className="text-2xl font-semibold mb-4">Modal Content</h2>
        <p>Your modal content goes here.</p>
      </div>
    </div>
  );
};

export default FullPageModal;
