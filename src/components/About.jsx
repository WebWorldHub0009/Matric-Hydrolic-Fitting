import React from "react";
import { FaStar, FaPlus, FaUser, FaCheckCircle } from "react-icons/fa";
import mainPortrait from "../assets/images/hero/h1.avif";
import promoVideo from "../assets/vid.mp4";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#EDEDED] font-poppins py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* LEFT TEXT SECTION */}
        <div>
          <div className="flex flex-wrap items-center text-[13px] sm:text-sm leading-none mb-4">
            <span className="text-gray-600">Welcome To&nbsp;</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#FFD700]/10 text-[#000000] font-medium">
              Matric
            </span>
            <span className="text-gray-600 ml-1">Hydraulic Fittings</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight text-[#0057A8] leading-tight">
            Engineering Excellence
            <br />
            <span className="text-[#000000]">in Every Connection</span>
            <br />
            Built for Durability
          </h1>

          <p className="mt-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
            We manufacture high-quality hydraulic fittings and components designed
            for maximum strength, reliability, and industrial performance — ensuring
            your systems run seamlessly.
          </p>

          {/* VIDEO PREVIEW */}
          <div className="mt-8 w-full max-w-xs sm:max-w-sm mx-auto sm:mx-0">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md">
              <video
                src={promoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-[#8f8f8f] text-center">
              Watch Our Product Showcase
            </p>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="mx-auto max-w-[360px] sm:max-w-[400px] order-first lg:order-none">
          <div className="rounded-[28px] overflow-hidden shadow-xl shadow-gray-900/10 ring-1 ring-gray-200 bg-white">
            <img
              src={mainPortrait}
              alt="Matric Hydraulic Fittings"
              className="w-full h-auto object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* RIGHT STACKED CARDS */}
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          {/* Rating */}
          <div className="rounded-3xl px-6 py-8 bg-gradient-to-b from-[#D6E6FA] to-[#F1F5FF] shadow-lg text-center">
            <div className="text-2xl font-bold text-[#1C1C1C]">4.9/5</div>
            <p className="mt-1 text-sm text-gray-700">
              Trusted by leading industries & manufacturing units.
            </p>
            <div className="mt-3 flex justify-center gap-1 text-[#000000]">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Team CTA */}
          <div className="rounded-3xl px-6 py-6 bg-white shadow-lg border border-gray-100 text-center">
            <div className="flex justify-center -space-x-2 mb-3">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-10 w-10 rounded-full ring-2 ring-white bg-[#0014c6] text-white flex items-center justify-center text-lg"
                >
                  <FaUser />
                </div>
              ))}
              <div className="h-10 w-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-semibold ring-2 ring-white">
                <FaPlus className="h-3 w-3" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#1C1C1C]">
              Join Our Dealer Network
            </h3>
            <Link to="/contact">
              <button
                type="button"
                className="cursor-pointer mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#4b4b4b] hover:text-[#1A1A1A] transition"
              >
                Connect With Us →
              </button>
            </Link>
          </div>

          {/* Feature */}
          <div className="rounded-3xl px-6 py-5 bg-gradient-to-b from-[#D6E6FA] to-[#F1F5FF] shadow-lg text-center">
            <FaCheckCircle className="text-[#0056c6] text-3xl mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">
              Premium Quality Guarantee
            </h3>
            <p className="text-sm text-gray-700">
              Our fittings are tested for strength & durability, with full after-sales support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
