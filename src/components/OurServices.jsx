import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import p1 from "../assets/images/ferule.jpg";
import p2 from "../assets/images/products/p2.jpg";
import p3 from "../assets/images/products/p3.jpg";
import p4 from "../assets/images/elbow.jpg";
import p5 from "../assets/images/products/p5.jpg";
import p6 from "../assets/images/products/p6.jpg";
import p7 from "../assets/images/products/p7.jpg";
import p8 from "../assets/images/products/p8.jpg";
import p9 from "../assets/images/products/p9.jpg";
import p10 from "../assets/images/products/p10.jpg";
import p11 from "../assets/images/products/p11.jpg";
import p12 from "../assets/images/hydraulic-clamp.jpg";

const services = [
  { img: p1, title: "Hydraulic Ferule Fittings" },
  { img: p2, title: "Stainless Steel Pipe/Tube" },
  { img: p3, title: "Stainless Steel Coil/Strip" },
  { img: p4, title: "Swivel Elbow" },
  { img: p5, title: "Steel Sheet/Plate" },
  { img: p6, title: "Steel Pipe/Tube" },
  { img: p7, title: "Steel Coil/Strip" },
  { img: p8, title: "Steel Profile" },
  { img: p9, title: "Galvanized Steel Sheet" },
  { img: p10, title: "Galvanized Steel Coil" },
  { img: p11, title: "PPGI Coil" },
  { img: p12, title: "Stainless Steel Hose Clamp" },
];

const OurServices = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eef4fc] to-white py-16">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0057A8] mb-4">
          “Precision. Strength. Excellence.”
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At Matric Hydraulic Fittings, we craft and supply top-tier industrial metal solutions — engineered to perform, built to last.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          style={{
            "--swiper-navigation-color": "#0057A8",
            "--swiper-pagination-color": "#0057A8",
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all hover:scale-105 duration-300 border border-gray-200">
                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#0057A8] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurServices;
