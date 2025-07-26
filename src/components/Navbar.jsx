import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaPhoneAlt,
  FaCamera,
  FaFile,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaSkype,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const MatricNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    setIsAdmin(adminStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/");
    setIsAdmin(false);
    setMenuOpen(false);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Products", path: "/products", icon: <FaCogs /> },
    { name: "Showcase", path: "/showcase", icon: <FaCamera /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Certificates", path: "/certificates", icon: <FaFile /> },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/matrichydraulicfittingss/" },
    { icon: <FaSkype />, url: "https://join.skype.com/invite/szS4JJloPWu4" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@MatricHydraulicFittings" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/matrichydraulicfittings/" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/matrichydraulicfittings/" },
    { icon: <FaTwitter />, url: "https://x.com/FittingsMa35941" },
    { icon: <FaPinterestP />, url: "https://in.pinterest.com/matrichydraulicfittings/" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-[#1A1A1A] text-xs text-white py-1 px-2 text-center font-semibold">
        ⚙️ Matric Hydraulic Fittings | Reliable Industrial Solutions | Call +91 9958560708
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white shadow-lg border-b border-gray-200 z-50 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
          {/* Desktop Social */}
          <div className="hidden md:flex gap-4 text-[#0057A8] text-lg">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000] transition"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Matric Logo" className="w-16 md:w-20 object-contain" />
          </div>

          {/* Search + Mobile Toggle */}
          <div className="flex gap-4 items-center">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm rounded-full border border-gray-300 shadow-inner focus:ring-1 focus:ring-[#0057A8] outline-none transition"
              />
              <FaSearch className="absolute right-4 top-3 text-[#0057A8]" />
            </div>

            <div className="md:hidden text-2xl text-[#0057A8]" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex justify-center gap-10 py-3 text-[#0057A8] font-semibold text-sm uppercase border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-2 hover:text-[#000] transition"
            >
              {link.icon} {link.name}
            </Link>
          ))}
          {isAdmin && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 font-bold hover:text-red-800 transition"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </nav>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity"
          ></div>
        )}
        <aside
          ref={menuRef}
          className={`fixed top-0 left-0 w-[75%] max-w-xs h-full bg-white z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out shadow-2xl`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <img src={logo} alt="Matric Logo" className="w-20 object-contain" />
            <button onClick={toggleMenu} className="text-2xl text-[#0057A8]">
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <nav className="px-6 py-8 space-y-6 font-medium text-base text-[#0057A8]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 hover:text-[#0057A8]/80 transition"
              >
                {link.icon} {link.name}
              </Link>
            ))}
            {isAdmin && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-600 font-bold hover:text-red-800 w-full"
              >
                <FaSignOutAlt /> Logout
              </button>
            )}
          </nav>

          <hr className="border-gray-200 mx-6" />

          <div className="px-6 py-4 text-sm text-gray-600 space-y-1">
            <p><strong>Email:</strong> info@matrichydraulicfittings.com</p>
            <p><strong>Phone:</strong> +91 9958560708</p>
          </div>

          <div className="px-6 mt-6 flex gap-4 text-xl text-[#0057A8]">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000] transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </aside>
      </header>
    </>
  );
};

export default MatricNavbar;
