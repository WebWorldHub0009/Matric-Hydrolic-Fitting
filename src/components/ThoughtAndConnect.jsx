import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/images/hero/bg.avif"; 

const ThoughtAndContact = () => {
  return (
    <section
      className="w-full py-16 px-4 md:px-10 font-[Poppins] relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >     
      <motion.div
        className="relative z-10 max-w-6xl mx-auto  backdrop-blur-md rounded-2xl shadow-2xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-[#b58a6b]/20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Thought Card */}
        <motion.div
          className="flex-1 w-full rounded-2xl p-8 text-center border border-[#b58a6b]/30 bg-white/90 shadow-lg hover:shadow-2xl transition duration-500 relative"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-[#0057A8] text-4xl">
            <FaUserTie />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold  mb-3">
            A Thought from Our Founders
          </h2>
          <p className="text-gray-700 text-base md:text-lg italic mb-5 leading-relaxed">
            "Precision and durability are not just promises — they are our foundation."
          </p>
          <p className="text-[#0057A8] font-bold uppercase text-sm tracking-wide mb-2">
            — Navin Kumar Gola & Manoj Kumar Gola (Owners)
          </p>
          <div className="text-gray-700 text-sm md:text-base space-y-1 mt-3">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#b58a6b]" /> +91 99585 60708 / +91 78382 77868
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#b58a6b]" /> matrichydraulicfittings@gmail.com
            </p>
          </div>

          {/* Glow */}
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#b58a6b]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
          <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-[#b58a6b]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0057A8] mb-4">
            Let’s Build Reliable Connections
          </h2>
          <p className="text-white text-base md:text-lg mb-6">
            Need high-quality hydraulic fittings? Connect with us for durable and precision-engineered solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 text-white bg-[#0057A8] rounded-full text-base md:text-lg font-semibold group hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Contact Us
              <span className="absolute -inset-1 rounded-full border border-[#b58a6b]/30 opacity-0 group-hover:opacity-100 transition"></span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative glowing circles */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#b58a6b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#b58a6b]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ThoughtAndContact;
