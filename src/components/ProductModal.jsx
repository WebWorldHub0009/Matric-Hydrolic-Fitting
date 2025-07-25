// components/ProductModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const { name, description, features, image } = product;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl z-10"
        >
          <FaTimes />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-100 p-4 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full max-w-xs h-auto object-contain"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 p-5 overflow-y-auto">
          <div className="pr-4">
            <h2 className="text-2xl font-bold text-[#0010f3] mb-3">{name}</h2>
            <p className="text-gray-700 text-sm mb-5 leading-relaxed">
              {description}
            </p>

            {/* Feature Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg"
                >
                  <span className="text-[#FFD700] text-xl">{<f.icon />}</span>
                  <div className="text-sm font-medium text-gray-700">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-6 bg-[#FFD700] text-[#1A1A1A] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#ffe866] transition">
              Get Enquiry
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;
