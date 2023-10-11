import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-red-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
