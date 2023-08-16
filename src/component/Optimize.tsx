import React from "react";
import { Link } from "react-router-dom";

function Optimize() {
  return (
    <div className="w-full flex flex-col justify-center items-center optimize p-5 md:p-10">
      <div className="mt-20">
        <h1 className="text-2xl md:text-4xl font-semibold text-white text-center">
          Revolutionizing Link Optimization
        </h1>
      </div>

      <div className="flex mt-5 mb-10">
        <Link
          to="/signup"
          className="bg-[#005AE2] hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-8 rounded-full">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Optimize;
