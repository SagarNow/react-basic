import React from "react";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="bg-gradient-to-t from-black via-gray-900 to-purple-900
h-20 w-full "
    >
      <div className="flex justify-center">
        <div className="flex justify-center items-center flex-row gap-20  font-medium   text-blue-200 mt-5">
          <p className="text-4xl cursor-pointer"><FaReact /></p>
          <p>Copyright © 2025</p>
          <p className="text-4xl cursor-pointer"><FaReact /></p>
        </div>

        <div className="flex justify-center items-center flex-row gap-35"> 
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
