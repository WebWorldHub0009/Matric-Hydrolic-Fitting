import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from '../assets/images/logo3d.png';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="border-t border-[#FFD700] bg-[#F5F5F5] text-[#1A1A1A] px-6 md:px-16 pt-20 pb-10 relative overflow-hidden"
    >
      {/* Glowing Backgrounds */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-[#FFD700] blur-[130px] opacity-20 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-[#FFD700] blur-[150px] opacity-20 rounded-full -z-10" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm z-10 relative">
        {/* About Section */}
        <div className="transition duration-500 ease-in-out hover:scale-[1.01] flex flex-col space-y-3">
          <div className="flex justify-start">
            <img
              src={logo}
              alt="Matrics Hydraulic Fittings"
              className="w-[140px] md:w-[160px]"
            />
          </div>
          <div>
            <h4 className="text-[#1A1A1A] font-semibold mb-4 text-base">
              About Matrics Hydraulic Fittings
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              We specialize in precision-engineered hydraulic and pneumatic
              solutions, delivering high-performance components like oil
              coolers, cylinders, power packs, and presses to power industries
              with reliability and innovation.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/matrichydraulicfittingss/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#0057A8] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com/FittingsMa35941"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#0057A8] transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/matrichydraulicfittings/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#0057A8] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/matrichydraulicfittings/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#0057A8] transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://in.pinterest.com/matrichydraulicfittings/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#0057A8] transition"
            >
              <FaPinterestP size={20} />
            </a>
            <a
              href="https://www.youtube.com/@MatricHydraulicFittings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#0057A8] transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://join.skype.com/invite/szS4JJloPWu4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#0057A8] transition"
            >
              <FaSkype size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="transition duration-500 ease-in-out hover:scale-[1.01]">
          <h4 className="text-[#1A1A1A] font-semibold mb-4 text-base">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
              ["Certificates", "/certificates"]
            ].map(([text, link], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="hover:text-[#0057A8] transition duration-300"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-6 text-[#1A1A1A] text-base font-semibold">
            Email:
          </h2>
          <ul className="space-y-2 mt-2">
            <li>
              <a
                href="mailto:matrichydraulicfittings@gmail.com"
                className="flex items-center space-x-2 hover:text-[#0057A8] transition duration-300"
              >
                <FaEnvelope className="text-[#001aff]" />
                <span>matrichydraulicfittings@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@matrichydraulicfittings.com"
                className="flex items-center space-x-2 hover:text-[#0057A8] transition duration-300"
              >
                <FaEnvelope className="text-[#2600ff]" />
                <span>info@matrichydraulicfittings.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="transition duration-500 ease-in-out hover:scale-[1.01]">
          <h4 className="text-[#1A1A1A] font-semibold mb-4 text-base">
            Our Services
          </h4>
          <ul className="space-y-2">
            {[
              "Hydraulic Fittings",
              "SS Fittings",
              "Equal Tee",
              "Swivel Elbow",
              "Male Connector",
              "Stainless Steel Pipe",
              "Galvanized Steel Coil",
              "Galvanized Steel Sheet",
              "Hydrulic PVC Clamp",
              "Split Type Clamp",
            ].map((service, i) => (
              <li key={i}>
                <Link
                  to="/products"
                  className="text-sm hover:text-[#0057A8] transition duration-300"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Translator */}
        <div className="transition duration-500 ease-in-out hover:scale-[1.01]">
          <h4 className="text-[#1A1A1A] font-semibold mb-4 text-base">
            Our Office
          </h4>
          <p className="text-sm text-gray-700">
            Metro Pillar No. 742, A-83, Gulab Bagh, Nawada,
            <br />
            Uttam Nagar, New Delhi, Delhi 110059
          </p>

          <h2 className="text-[#1A1A1A] mt-6 text-base font-semibold">
            Contact :
          </h2>
          
          <p className="mt-2 text-sm text-gray-700">
            +91 99585 60708 <br /> +91 78382 77868
          </p>

          <h2 className="text-[#1A1A1A] mt-6 text-base font-semibold">
            Translator
          </h2>
          <div className="flex">
            <Translator />
            <div className="w-32 md:w-18"></div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 text-center text-xs text-[#1A1A1A] border-t border-[#FFD700] pt-4 space-y-1">
        <VisitorCounter />
        <p>© 2025 Matrics Hydraulic Fittings. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0057A8] hover:text-[#FFD700] font-semibold transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
