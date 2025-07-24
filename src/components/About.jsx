import React from "react";
import { FaStar, FaPlus, FaUser, FaCheckCircle } from "react-icons/fa";
import mainPortrait from "../assets/images/hero/h1.avif";

const AboutHero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#F5F5F5] via-[#FAFAFA] to-[#EDEDED] font-poppins">
      <div
        className="
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
          pt-6 sm:pt-20 lg:pt-10
          pb-10 lg:pb-10
          grid grid-cols-1
          lg:grid-cols-[minmax(0,520px)_minmax(auto,380px)_minmax(0,280px)]
          lg:items-start
          gap-y-16 lg:gap-y-0
          relative
        "
      >
        {/* LEFT TEXT */}
        <div className="max-w-xl lg:max-w-none">
          <div className="flex flex-wrap items-center text-[13px] sm:text-sm leading-none mb-4 sm:mb-5">
            <span className="text-gray-600">Welcome To&nbsp;</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#FFD700]/10 text-[#C6A300] font-medium">
              Matric
            </span>
            <span className="text-gray-600 ml-1">Hydraulic Fittings</span>
          </div>

          <h1 className="text-[clamp(3rem,3vw,3rem)] px-3 font-extrabold tracking-tight text-[#0057A8] leading-[1.05]">
            Engineering Excellence
            <br className="hidden sm:block" />
            <span className="text-[#C6A300]">in Every Connection</span>
            <br className="hidden sm:block" />
            Built for Durability
          </h1>

          <p className="mt-5 max-w-md text-[15px] sm:text-base text-gray-700 leading-relaxed">
            We manufacture high-quality hydraulic fittings and components designed
            for maximum strength, reliability, and industrial performance — ensuring
            your systems run seamlessly.
          </p>

          {/* Video Section (Placeholder) */}
          <div className="mt-9 sm:mt-10 w-full max-w-xs sm:max-w-sm relative group">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md flex items-center justify-center">
              <p className="text-gray-500 text-sm">[ Video Placeholder ]</p>
            </div>
            <p className="mt-3 text-sm sm:text-base font-semibold text-[#C6A300] text-center">
              Watch Our Product Showcase
            </p>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div
          className="order-first lg:order-none w-full mx-auto max-w-[360px] sm:max-w-[400px] relative lg:translate-y-2"
        >
          <div
            className="rounded-[32px] overflow-hidden shadow-xl shadow-gray-900/10 ring-1 ring-gray-200 bg-white"
          >
            <img
              src={mainPortrait}
              alt="Matrics Hydraulic Fittings"
              className="w-full h-auto object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="w-full max-w-[280px] mx-auto lg:mx-0 flex flex-col gap-6 relative left-14 lg:-translate-x-4 xl:-translate-x-6">
          
          {/* Rating Card */}
          <div className="w-full rounded-3xl px-6 py-8 bg-gradient-to-b from-[#FFD700]/20 to-[#C6A300]/20 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#1C1C1C]">4.9/5</div>
            <p className="mt-1 text-sm text-gray-700">
              Trusted by leading industries & manufacturing units.
            </p>
            <div className="mt-3 flex justify-center gap-1 text-[#C6A300]">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Team CTA */}
          <div className="w-full rounded-3xl px-6 py-6 bg-white shadow-lg border border-gray-100 text-center">
            <div className="flex justify-center -space-x-2 mb-3">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-10 w-10 rounded-full ring-2 ring-white bg-[#C6A300] text-white flex items-center justify-center text-lg"
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
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#C6A300] hover:text-[#1A1A1A] transition"
            >
              Connect With Us →
            </button>
          </div>

          {/* Feature Card */}
          <div className="w-full rounded-3xl px-6 py-4 bg-gradient-to-b from-[#FFD700]/20 to-[#C6A300]/20 shadow-lg text-center">
            <FaCheckCircle className="text-[#C6A300] text-3xl mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">
              Premium Quality Guarantee
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Our fittings are tested for strength & durability, with full after-sales support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
