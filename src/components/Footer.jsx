import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 flex justify-center w-full gap-4 p-4 mt-10 text-center text-white bg-gray-800">
      <div className="text-center text-gray-500 text-md">
        All rights reserved © 2024 BookSwap
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://www.instagram.com/m.mominull/"
          target="_blank"
          className=" hover:text-gray-900"
        >
          <FaInstagram className="w-6 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
