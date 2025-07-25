import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { FaWrench, FaCogs, FaCheckCircle } from "react-icons/fa";

import g1 from "../assets/images/showcase/g11.png";
import g2 from "../assets/images/showcase/g22.png";
import g3 from "../assets/images/showcase/g33.png";
import g5 from "../assets/images/showcase/g55.png";
import g6 from "../assets/images/showcase/g66.png";
import g7 from "../assets/images/showcase/g77.png";
import g8 from "../assets/images/showcase/g88.png";
import g9 from "../assets/images/showcase/g99.png";
import g10 from "../assets/images/showcase/g1010.png";
import g12 from "../assets/images/showcase/g66.png";
import g13 from "../assets/images/showcase/g1010.png";

const galleryImages = [
  { src: g1 },
  { src: g2 },
  { src: g3 },
  { src: g5 },
  { src: g6 },
  { src: g7 },
  { src: g8 },
  { src: g9 },
  { src: g10 },
  { src: g12 },
  { src: g13 },
];

const PremiumGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-6 text-[#1A1A1A] font-sans">
      {/* Hero-like Heading */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0057A8] mb-5 tracking-tight leading-tight">
          Precision In Every Component
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          Explore our portfolio of <span className="text-[#0057A8] font-semibold">fittings, clamps, and valves</span> —
          engineered for <span className="text-[#0004ff] font-semibold">durability</span> and unmatched performance.
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mb-20 max-w-6xl mx-auto">
        {[
          { icon: FaWrench, label: "Engineered for Performance" },
          { icon: FaCogs, label: "Versatile Applications" },
          { icon: FaCheckCircle, label: "Trusted by Industries" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-white rounded-xl px-6 py-5 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-[#0057A8]/10 p-3 rounded-full">
              <item.icon className="text-3xl text-[#0026ff]" />
            </div>
            <span className="text-md md:text-lg font-semibold text-gray-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl shadow-md shadow-[#0057A8]/20 break-inside-avoid relative group cursor-pointer border border-[#E5E7EB]"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={`Product Showcase ${i + 1}`}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0057A8]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={galleryImages}
          index={index}
          plugins={[Captions]}
        />
      )}

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1A1A1A]">
          Want to Know More About Our Product Range?
        </h3>
        <a
          href="tel:+917838277868"
          className="inline-flex items-center gap-3 bg-[#0057A8] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#00457f] hover:scale-105 transition-all duration-300 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <FaWrench className="text-xl" />
          <span>Talk to Our Expert</span>
        </a>
      </div>
    </section>
  );
};

export default PremiumGallery;
