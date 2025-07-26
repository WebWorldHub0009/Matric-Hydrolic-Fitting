import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace these with your product images
import img1 from "../assets/images/hero/herofittings.png";
import img2 from "../assets/images/hero/h3.jpg";
import img3 from "../assets/images/hero/h4.avif";
import img4 from "../assets/images/hero/h2.avif";
import { Link } from "react-router-dom";

const images = [img1, img2, img3, img4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row bg-gradient-to-r from-[#F5F5F5] to-white relative">
      {/* Floating Circular SVG */}
      {/* <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-[#00257463] to-[#E6C200]/20 rounded-full blur-2xl opacity-70 animate-pulse"></div> */}
      <div className="absolute bottom-10 left-20 w-40 h-40 border-4 border-[#00257413] rounded-full animate-spin-slow"></div>

      {/* Left Side Content */}
      <div className="w-full md:w-[40vw] flex flex-col justify-center px-10 md:px-16 py-12 relative z-10">
        {/* Company Name */}
        <motion.span
          className="uppercase tracking-widest text-sm text-[#1A1A1A] font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Matrics Hydraulic Fittings
        </motion.span>

        {/* Decorative Line */}
        <span className="absolute top-10 left-0 w-1 h-20 bg-gradient-to-b from-[#1100ff] to-[#100055] rounded-full"></span>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#0057A8] leading-snug mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Precision in{" "}
          <span className="bg-gradient-to-r from-[#181818] to-[#646464] bg-clip-text text-transparent">
            Every Fitting
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-700 text-sm md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Elevating hydraulic solutions with unmatched quality and durability.
          Our products are crafted with the finest engineering precision, ensuring
          reliability in every industrial application.
        </motion.p>

        <Link to='/products'>
        <motion.button
          className="cursor-pointer mt-8 px-7 py-3 text-lg font-semibold rounded-lg bg-white/20 backdrop-blur-md border border-[#0300b8] text-[#1A1A1A] shadow-md hover:shadow-[#FFD700]/50 hover:bg-blue-800 hover:text-black transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Explore Products
        </motion.button>
        </Link>
      </div>

      {/* Right Side Slider */}
      <div className="w-full md:w-[60vw] relative h-[50vh] md:h-[90vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={current}
            src={images[current]}
            alt="Hydraulic Products"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* Slider Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === current
                  ? "bg-[#0400ff] shadow-lg shadow-[#FFD700]/70 scale-110"
                  : "bg-white/50"
              }`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
