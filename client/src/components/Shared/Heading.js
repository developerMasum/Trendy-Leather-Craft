import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-t border-gray-300 flex-grow mx-2"></div>
      <div className="text-gray-700 text-lg font-semibold mx-2">{children}</div>
      <div className="border-t border-gray-300 flex-grow mx-2"></div>
    </div>
  );
};

export default Heading;