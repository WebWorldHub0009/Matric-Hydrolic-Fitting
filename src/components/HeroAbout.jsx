import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/aboutbg3.jpg";
import foregroundImage from "../assets/images/steel-worker.png";
import { Link } from "react-router-dom";

const headings = [
  { main: "Precision in ", highlight: "Every Fit" },
  { main: "Strength Meets ", highlight: "Craftsmanship" },
  { main: "Built for ", highlight: "Lasting Impact" },
];


const HeroAbout = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = headings[currentHeadingIndex].main + headings[currentHeadingIndex].highlight;
  const splitIndex = headings[currentHeadingIndex].main.length;

  useEffect(() => {
    if (isTyping) {
      if (charIndex < fullText.length) {
        const typingTimeout = setTimeout(() => {
          setCurrentText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(typingTimeout);
      } else {
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), 1000);
      }
    } else {
      const nextIndex = (currentHeadingIndex + 1) % headings.length;
      setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentHeadingIndex(nextIndex);
      }, 1000);
    }
  }, [charIndex, isTyping, currentHeadingIndex, fullText]);

  // Split typed text into normal and highlighted parts
  const normalPart = currentText.slice(0, Math.min(splitIndex, currentText.length));
  const highlightedPart = currentText.length > splitIndex ? currentText.slice(splitIndex) : "";

  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000054] z-0" />

      {/* Text Section */}
      <div className="w-full md:w-[50%] px-8 md:px-16 py-20 flex flex-col justify-center z-10 relative">
        <motion.span
          className="uppercase tracking-widest text-sm text-[#ffffff] font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Matrics Hydraulic Fittings
        </motion.span>

<h1 className="text-3xl md:text-6xl font-extrabold text-[#0057A8] leading-14 mt-4 min-h-[110px] md:min-h-[130px]">
  {normalPart}
  <span className="bg-gradient-to-r from-[#ffffff] to-[#bbbbbb] bg-clip-text text-transparent">
    {highlightedPart}
  </span>
  <span className="text-[#ffffff] animate-pulse inline-block w-[1ch]">|</span>
</h1>

        <motion.p
          className="mt-6 text-gray-200 text-sm md:text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our legacy is forged in steel. We deliver precision-engineered metal
          components that power industries—from stainless steel pipes to
          galvanized coils—with unmatched reliability and quality.
        </motion.p>

        <Link to='/products'>
        <motion.button
          className="cursor-pointer mt-8 px-7 py-3 text-lg font-semibold rounded-lg bg-white/20 backdrop-blur-md border border-[#1c42c0] text-white shadow-md hover:shadow-[#FFD700]/50 hover:bg-[#001aff] hover:text-black transition-all duration-300 w-fit"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Explore Products
        </motion.button>
        </Link>
      </div>

      {/* Static Floating Image */}
      <div className="w-full md:w-[50%] relative flex items-end justify-center md:justify-end px-6 pb-10 md:pb-0 z-10">
        <motion.img
          src={foregroundImage}
          alt="Steel Worker"
          className="w-full max-w-md md:max-w-lg h-auto object-contain float-image"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </section>
  );
};

export default HeroAbout;
