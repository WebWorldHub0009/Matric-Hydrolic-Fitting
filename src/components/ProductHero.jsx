import React from "react";
import heroImage from "../assets/images/product-bg.png"; // Floating product image
import bgImage from "../assets/images/about-bg1.jpg";    // Background
import { Link } from "react-router-dom";

const ProductHero = () => {
  return (
    <section
      className="w-full text-white py-16 px-6 md:px-10 lg:px-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content (Text) */}
        <div className="flex-1 order-1 md:order-none">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight mb-6">
            Precision in Every{" "}
            <span className="text-[#ffffff]">Connection</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Discover a full range of{" "}
            <span className="text-[#2515b9] font-medium">
              Hydraulic Fittings, Pipes, Hoses
            </span>{" "}
            and industrial solutions designed to perform under pressure. Built
            for durability, engineered for reliability.
          </p>
          <Link to='/gallery'>
            <button className="cursor-pointer bg-white text-[#1A1A1A] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
            Explore Gallery
          </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Hydraulic Products"
            className="w-full max-w-md mx-auto md:mx-0 animate-float"
          />
        </div>
      </div>

      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ProductHero;
