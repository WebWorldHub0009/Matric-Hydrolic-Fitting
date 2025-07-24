import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import p1 from '../assets/images/products/p1.jpg';
import p2 from '../assets/images/products/p2.jpg';
import p3 from '../assets/images/products/p3.jpg';
import p4 from '../assets/images/products/p4.jpg';
import p5 from '../assets/images/products/p5.jpg';
import p6 from '../assets/images/products/p6.jpg';
import p7 from '../assets/images/products/p7.jpg';
import p8 from '../assets/images/products/p8.jpg';
import p9 from '../assets/images/products/p9.jpg';
import p10 from '../assets/images/products/p10.jpg';
import p11 from '../assets/images/products/p11.jpg';
import p12 from '../assets/images/products/p12.jpg';


const services = [
  { img: p1, title: "Stainless Steel Sheet/Plate" },
  { img: p2, title: "Stainless Steel Pipe/Tube" },
  { img: p3, title: "Stainless Steel Coil/Strip" },
  { img: p4, title: "Stainless Steel Bar/Rod" },
  { img: p5, title: "Steel Sheet/Plate" },
  { img: p6, title: "Steel Pipe/Tube" },
  { img: p7, title: "Steel Coil/Strip" },
  { img: p8, title: "Steel Profile" },
  { img: p9, title: "Galvanized Steel Sheet" },
  { img: p10, title: "Galvanized Steel Coil" },
  { img: p11, title: "PPGI Coil" },
  { img: p12, title: "Aluminum Sheet" },
];


const OurServices = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8f6f2] to-[#f4f2ee] py-16 relative">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-[#0057A8] mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          "Delivering precision-engineered metal solutions with premium quality and durability."
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#0057A8",
          "--swiper-pagination-color": "#0057A8",
        }}
        speed={800}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="max-w-6xl mx-auto px-6"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative rounded-xl overflow-hidden group bg-white/20 backdrop-blur-lg shadow-lg border border-white/30 transition-all duration-300 hover:shadow-[#b58a6b]/40 hover:scale-[1.03]"
              data-swiper-parallax="-100"
            >
              {/* Image with overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.img || "https://via.placeholder.com/400x300"}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>

              {/* Title */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#b58a6b] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurServices;
