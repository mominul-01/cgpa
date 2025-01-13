import React from "react";
import logo from "../assets/cselogo.png";

const Banner = () => {
  return (
    <div
      className="relative flex items-center bg-blue-100 bg-center">
      <div>
        <img src={logo} alt="" className="object-fill" />
      </div>
      <div>
        <h1 className="text-6xl font-bold">
          First Capital University of Bangladesh
        </h1>
        <p className="mt-3 text-4xl">Chuadanga</p>
      </div>
    </div>
  );
};

export default Banner;
