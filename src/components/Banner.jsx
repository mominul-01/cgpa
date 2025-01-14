import React from "react";
import logo from "../assets/cselogo.png";

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-blue-100 bg-center md:flex-row md:justify-around md:p-10 bg-opacity-50 z-10  bg-[url('https://i.pinimg.com/564x/cb/be/72/cbbe720dfad485f4aa2f561959abb7b8.jpg')]">
      <div className="mb-6 md:mb-0">
        <img
          src={logo}
          alt="University Logo"
          className="object-fill max-w-xs md:max-w-md"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold md:text-6xl">
          First Capital University of Bangladesh
        </h1>
        <p className="mt-3 text-2xl md:text-4xl">Chuadanga</p>
      </div>
    </div>
  );
};

export default Banner;
