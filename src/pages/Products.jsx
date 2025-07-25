import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs, FaToolbox, FaWrench, FaBolt, FaWater,
  FaLayerGroup, FaChevronRight, FaTimesCircle, FaCheckCircle
} from "react-icons/fa";

import ProductHero from "../components/ProductHero";
import productDetails from "../data/productDetails";
import p1 from "../assets/images/productsPage/p1.png";
import p2 from "../assets/images/productsPage/p2.png";
import p3 from "../assets/images/productsPage/p3.png";
import p4 from "../assets/images/productsPage/p4.png";
import p5 from "../assets/images/productsPage/p5.png";
import p6 from "../assets/images/productsPage/p6.png";
import p7 from "../assets/images/productsPage/p7.png";
import p8 from "../assets/images/productsPage/p8.png";
import p9 from "../assets/images/productsPage/p9.png";
import p10 from "../assets/images/productsPage/p10.png";
import p11 from "../assets/images/productsPage/p11.png";
import p12 from "../assets/images/productsPage/p12.png";
import p13 from "../assets/images/productsPage/p13.png";
import p14 from "../assets/images/productsPage/p14.png";
import p15 from "../assets/images/productsPage/p15.png";
import p16 from "../assets/images/productsPage/p16.png";
import p17 from "../assets/images/productsPage/17.png";
import p18 from "../assets/images/productsPage/18.png";
import p19 from "../assets/images/productsPage/19.png";
import p20 from "../assets/images/productsPage/20.png";
import p21 from "../assets/images/productsPage/21.png";
import { Link } from "react-router-dom";
// import WhyUs from "../components/WhyUs";

const allProducts = [
  {
    name: "Hydraulic Ferule Fittings",
    category: "Fittings",
    tags: ["Robust", "Leak-Free"],
    icons: [FaToolbox, FaWater],
    image: p1,
    shortDescription: "High-pressure ferrule fittings for leak-free hydraulic systems...",
  },
  {
    name: "Hydraulic Fittings",
    category: "Fittings",
    tags: ["Durable", "Precision"],
    icons: [FaWrench, FaCogs],
    image: p2,
    shortDescription: "Engineered for heavy-duty performance in fluid power systems...",
  },
  {
    name: "SS Fittings",
    category: "Fittings",
    tags: ["Rustproof", "Compact"],
    icons: [FaBolt, FaLayerGroup],
    image: p3,
    shortDescription: "Stainless steel connectors for corrosion-resistant applications...",
  },
  {
    name: "Equal Elbow",
    category: "Fittings",
    tags: ["Smooth Flow", "Reliable"],
    icons: [FaWater, FaToolbox],
    image: p4,
    shortDescription: "Used to divert flow in hydraulic lines with minimal loss...",
  },
  {
    name: "Equal Tee",
    category: "Fittings",
    tags: ["3-Way Fit", "Durable"],
    icons: [FaCogs, FaToolbox],
    image: p5,
    shortDescription: "Connects three pipes with balanced flow in hydraulic systems...",
  },
  {
    name: "Dowty Seal",
    category: "Fittings",
    tags: ["High Pressure", "No-Leak"],
    icons: [FaBolt, FaWater],
    image: p6,
    shortDescription: "Reliable bonded seal for oil and fluid pressure systems...",
  },
  {
    name: "Swivel Elbow",
    category: "Fittings",
    tags: ["Flexible", "Secure"],
    icons: [FaWrench, FaLayerGroup],
    image: p7,
    shortDescription: "Rotating elbow allows movement under vibration or rotation...",
  },
  {
    name: "Bulkhead Union",
    category: "Fittings",
    tags: ["Threaded", "Resilient"],
    icons: [FaToolbox, FaCogs],
    image: p8,
    shortDescription: "Connect pipes across panels for pressurized sealing systems...",
  },
  {
    name: "Male Connector",
    category: "Fittings",
    tags: ["Threaded", "Rustproof"],
    icons: [FaBolt, FaToolbox],
    image: p9,
    shortDescription: "Threaded male end connector for hydraulic pipe junctions...",
  },
  {
    name: "Stainless Steel Pipe",
    category: "Sheets & Coils",
    tags: ["304 Grade", "Corrosion-Free"],
    icons: [FaLayerGroup, FaWrench],
    image: p10,
    shortDescription: "Industrial stainless pipe for transport and structural use...",
  },
  {
    name: "Stainless Steel Coil",
    category: "Sheets & Coils",
    tags: ["Flexible", "Rustproof"],
    icons: [FaCogs, FaBolt],
    image: p11,
    shortDescription: "Flexible stainless coil for forming and fabrication tasks...",
  },
  {
    name: "Galvanized Steel Coil",
    category: "Sheets & Coils",
    tags: ["Zinc-Coated", "Tough"],
    icons: [FaLayerGroup, FaToolbox],
    image: p12,
    shortDescription: "Weatherproof zinc-coated steel for external applications...",
  },
  {
    name: "Galvalnized Steel Sheet",
    category: "Sheets & Coils",
    tags: ["Weatherproof", "Smooth Finish"],
    icons: [FaBolt, FaWrench],
    image: p13,
    shortDescription: "Flat steel sheet with zinc coating for anti-corrosion duty...",
  },
  {
    name: "PPGI Coil",
    category: "Sheets & Coils",
    tags: ["Color Coated", "High Strength"],
    icons: [FaLayerGroup, FaCogs],
    image: p14,
    shortDescription: "Pre-painted coil for construction and industrial roofing...",
  },
  {
    name: "Aluminium Sheet",
    category: "Sheets & Coils",
    tags: ["Lightweight", "Shiny"],
    icons: [FaBolt, FaLayerGroup],
    image: p15,
    shortDescription: "Rust-resistant and light sheet for packaging and cladding...",
  },
  {
    name: "Hydraulic PVC Clamp",
    category: "Clamps",
    tags: ["Noise-Free", "Anti-Vibe"],
    icons: [FaWrench, FaToolbox],
    image: p16,
    shortDescription: "Silent pipe clamp with smooth rubber insulation for grip...",
  },
  {
    name: "PVC Heavy Clamp",
    category: "Clamps",
    tags: ["Heavy Duty", "Secure"],
    icons: [FaCogs, FaLayerGroup],
    image: p17,
    shortDescription: "Built for strong hold in large industrial piping systems...",
  },
  {
    name: "Rubber Coated Clamp",
    category: "Clamps",
    tags: ["Noise-Free", "Rustproof"],
    icons: [FaWater, FaBolt],
    image: p18,
    shortDescription: "Rubber-coated clamp provides grip and anti-corrosion layer...",
  },
  {
    name: "U-Bolt Clamp",
    category: "Clamps",
    tags: ["Tight Grip", "Durable"],
    icons: [FaToolbox, FaCogs],
    image: p19,
    shortDescription: "Secures piping with U-bolt design and vibration resistance...",
  },
  {
    name: "Heavy Duty Pipe Clamp",
    category: "Clamps",
    tags: ["Strong", "Anti-Vibe"],
    icons: [FaLayerGroup, FaWrench],
    image: p20,
    shortDescription: "Absorbs vibration in large pipes using robust construction...",
  },
  {
    name: "Split Type Clamp",
    category: "Clamps",
    tags: ["Easy Install", "Secure"],
    icons: [FaToolbox, FaWrench],
    image: p21,
    shortDescription: "Two-part clamp for rapid pipe installation and maintenance...",
  },
];
const categories = ["All", "Fittings", "Sheets & Coils", "Clamps"];

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const closeModal = () => setSelectedProduct(null);

  return (
    <>
      <ProductHero />

      <section className="w-full min-h-screen bg-[#F7F8FA] text-[#1A1A1A] px-4 py-20 md:px-10 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#4400ff]">
            Premium <span className="bg-gradient-to-r from-[#181818] to-[#646464] bg-clip-text text-transparent">
              Industrial Components
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Explore our high-performance hydraulic and metal solutions built for durability and reliability.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border
                  ${
                    activeCategory === cat
                      ? "bg-blue-200 text-[#1A1A1A] border-transparent"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-blue-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, i) => {
            const [Tag1Icon, Tag2Icon] = product.icons;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                onClick={() => setSelectedProduct(product.name)}
                className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg p-5 flex flex-col items-center text-center transition duration-300 hover:scale-[1.02]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-1">
                  {product.shortDescription}
                </p>
                <div className="flex gap-2 text-sm text-gray-600 mb-5">
                  <span className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <Tag1Icon /> {product.tags[0]}
                  </span>
                  <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-full">
                    <Tag2Icon /> {product.tags[1]}
                  </span>
                </div>
                <button className="mt-auto flex items-center gap-2 text-white bg-[#0010f3] px-4 py-2 rounded-full font-semibold hover:bg-blue-300 hover:text-black transition">
                  View Details <FaChevronRight className="text-sm" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      
       
      

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0  bg-opacity-50 backdrop-blur-lg z-50 flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg relative grid md:grid-cols-2 sm:grid-cols-1"
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl z-10"
                onClick={closeModal}
              >
                <FaTimesCircle />
              </button>

              <div className="bg-[#F7F8FA] flex justify-center items-center p-6">
                <img
                  src={productDetails[selectedProduct]?.image}
                  alt={selectedProduct}
                  className="w-full max-w-xs object-contain"
                />
              </div>

              <div className="p-6 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  {productDetails[selectedProduct]?.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {productDetails[selectedProduct]?.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {productDetails[selectedProduct]?.features?.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md text-sm text-gray-700"
                    >
                      <f.icon className="text-black" />
                      {f.label}
                    </div>
                  ))}
                </div>
                <Link to='/contact'>
                <button className="cursor-pointer bg-[#0044ff] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-300 hover:text-black transition-all">
                  Get Enquiry
                </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductPage;
