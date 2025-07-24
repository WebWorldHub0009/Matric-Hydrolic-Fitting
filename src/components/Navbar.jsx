import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF, FaYoutube, FaInstagram, FaSearch, FaBars, FaTimes,
  FaHome, FaInfoCircle, FaCogs, FaPhoneAlt, FaVideo, FaSignOutAlt
} from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import logo from "../assets/images/logo.png";

const MatricNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    {
      name: "Products", dropdown: true, icon: <FaCogs />,
      items: [
        { name: "Hydraulic Fittings", path: "/product/hydraulic-fittings" },
        { name: "Pipes & Hoses", path: "/product/pipes-hoses" },
        { name: "Valves & Connectors", path: "/product/valves-connectors" },
        { name: "Adapters & Couplings", path: "/product/adapters-couplings" },
        { name: "Seals & Rings", path: "/product/seals-rings" },
        { name: "Pressure Gauges", path: "/product/pressure-gauges" },
      ],
    },
    { name: "Showcase", path: "/video", icon: <FaVideo /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-[#1A1A1A] text-xs text-[#FFD700] py-1 px-4 text-center tracking-wide font-semibold">
        ⚙️ Matric Hydraulic Fittings | Reliable Industrial Solutions | Call +91 9876543210
      </div>

      {/* Main Navbar */}
      <header className=" w-full z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Left Social Links */}
          <div className="hidden md:flex gap-4 text-[#0057A8] text-lg">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="hover:text-[#FFD700] transition">
                {item.icon}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Matric Logo" className="w-16 md:w-20 object-contain" />
            <span className="text-[#0057A8] font-extrabold text-xl md:text-2xl uppercase">
              Matric <span className="text-[#FFD700]">Hydraulic</span>
            </span>
          </div>

          {/* Search + Mobile Menu */}
          <div className="flex gap-4 items-center">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm rounded-full border border-gray-300 shadow-inner focus:ring-2 focus:ring-[#FFD700] outline-none transition"
              />
              <FaSearch className="absolute right-4 top-3 text-[#0057A8]" />
            </div>
            <div className="md:hidden text-2xl text-[#0057A8]" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-10 py-3 text-[#0057A8] font-semibold text-sm uppercase border-t border-gray-200">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#FFD700] transition">
                  {link.icon} {link.name}
                  <IoChevronDownOutline className="text-xs group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-lg shadow-lg border border-gray-100 z-20 transition-all ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {link.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-[#0057A8] hover:bg-[#F5F5F5] hover:text-[#FFD700] transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center gap-2 hover:text-[#FFD700] transition"
              >
                {link.icon} {link.name}
              </Link>
            )
          )}
          {isAdmin && (
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 font-bold hover:text-red-800 transition">
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-[85%] max-w-xs h-screen z-50 bg-white transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out shadow-2xl overflow-y-auto p-6`}
        >
          <ul className="space-y-5 text-[#0057A8] font-medium text-base">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <div
                    onClick={toggleDropdown}
                    className="flex justify-between items-center cursor-pointer hover:text-[#FFD700]"
                  >
                    <span className="flex items-center gap-2">{link.icon} {link.name}</span>
                    <IoChevronDownOutline
                      className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  {dropdownOpen && (
                    <ul className="pl-4 mt-2 space-y-2 text-gray-700 text-sm">
                      {link.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="block hover:text-[#FFD700]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="flex gap-2 items-center hover:text-[#FFD700]"
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              )
            )}
            {isAdmin && (
              <li>
                <button onClick={handleLogout} className="flex gap-2 items-center text-red-600 font-bold hover:text-red-800 w-full">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            )}
          </ul>
          <div className="my-4 border-t border-gray-200" />
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Email:</strong> contact@matrichydraulic.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
          <div className="flex gap-4 mt-6 text-xl text-[#0057A8]">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="hover:text-[#FFD700]">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default MatricNavbar;
