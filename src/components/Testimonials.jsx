import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaUserCircle } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroImage from "../assets/images/man22.png";

const testimonials = [
  {
    name: "Aman Joshi",
    feedback:
      "Pramod Travels made our family trip smooth and memorable. Their punctuality and driver professionalism stood out!",
  },
  {
    name: "Divya Singh",
    feedback:
      "Best travel service I’ve used in North India! Clean cars, friendly drivers, and easy booking process.",
  },
  {
    name: "Harsh Mehta",
    feedback:
      "Great experience for a last-minute airport transfer. The car arrived within 15 minutes. Highly recommended!",
  },
  {
    name: "Neha Kapoor",
    feedback:
      "Loved the outstation tour! The driver was polite, well-versed with the route, and drove safely all the way.",
  },
  {
    name: "Rahul Taneja",
    feedback:
      "Very professional and courteous service. Would definitely book again for my next business trip.",
  },
  {
    name: "Sanya Bhardwaj",
    feedback:
      "The team helped plan my entire trip to Agra and Jaipur. Truly seamless and enjoyable. 5 stars!",
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#fffef5] to-[#fdfae6] text-gray-800 py-20 px-4 md:px-12 overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.4), rgba(230,194,0,0.1))",
          animation: "spinSlow 20s linear infinite",
        }}
      />
      <div className="absolute bottom-0 -right-24 w-[250px] h-[250px] rounded-full blur-2xl z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.2), rgba(255,255,255,0.05))",
          animation: "bounceSlow 6s ease-in-out infinite",
        }}
      />

      {/* Heading */}
      <div className="text-center mb-12 space-y-3 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-700">
          What <span className="text-yellow-600">They Say</span> About Us
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Genuine stories from riders who’ve experienced seamless travel with Pramod Travels.
        </p>
      </div>

      {/* Content layout */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch relative z-10">
        {/* Left: Fully visible image */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <motion.div
            className="w-full max-w-[90%] overflow-hidden"
            initial={{ scale: 1 }}
            animate={{ scale: 1.04 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          >
            <img
              src={heroImage}
              alt="Testimonial"
              className="w-full h-400px md:h-[550px] object-contain"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute top-6 left-6 bg-white/80 text-black px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-md border border-gray-200 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trusted By 10,000+ Riders
          </motion.div>
        </div>

        {/* Right: Testimonials */}
        <div className="w-full md:w-1/2">
          <Slider {...sliderSettings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-yellow-100 p-6 rounded-3xl shadow-sm hover:shadow-yellow-100/40 transition-all duration-500 flex flex-col gap-4 min-h-[180px]"
                >
                  <div className="flex gap-1 text-blue-600 animate-glowStars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{t.feedback}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <FaUserCircle className="text-blue-600 text-2xl" />
                    <h4 className="font-semibold">{t.name}</h4>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glowStars {
          0% { filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.3)); }
          50% { filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.6)); }
          100% { filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.3)); }
        }
        .animate-glowStars {
          animation: glowStars 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
