import React, { useState } from 'react';
import { FaSquareFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <nav className="bg-white border-b w-full">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-2 gap-2">
          <div className="flex flex-wrap items-center gap-4 text-sm justify-center md:justify-start">
            <a href="#" title="Facebook" aria-label="Facebook"><FaSquareFacebook /></a>
            <a href="#" title="Twitter" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" title="Instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" title="LinkedIn" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="tel:9319184060" className="font-semibold">9319184060</a>
            <a href="mailto:welcome@mpholidays.in" className="font-semibold">welcome@mpholidays.in</a>
          </div>

          <ul className="hidden md:flex flex-wrap justify-center md:justify-end gap-5 font-semibold text-sm text-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about-mp">About Madhya Pradesh</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Vehicle</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden flex justify-end w-full">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-green-50 px-4 py-4 space-y-3">
            <ul className="space-y-2 font-semibold text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/about-mp">About Madhya Pradesh</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Vehicle</a></li>
              <li><a href="">Contact</a></li>
            </ul>

            {/* Select Dropdowns in Mobile */}
            <div className="space-y-2 pt-2">
              <select className="w-full h-10 px-3 border border-green-900 rounded-md text-sm font-semibold">
                <option disabled selected>MP Tour Packages</option>
                <option>Hot-Selling Packages</option>
                <option>Short Packages</option>
                <option>Long-Haul Packages</option>
                <option>Honeymoon Packages</option>
              </select>

              <select className="w-full h-10 px-3 border border-green-900 rounded-md text-sm font-semibold">
                <option disabled selected>Tour Destinations</option>
                <optgroup label="Heritage">
                  <option>Khajuraho</option>
                  <option>Gwalior</option>
                  <option>Orccha</option>
                  <option>Chanderi</option>
                  <option>Datia</option>
                  <option>Sanchi</option>
                  <option>Bhimbetka</option>
                  <option>Islamnagar</option>
                  <option>Mandu</option>
                  <option>Burhanpur</option>
                  <option>Vidisha</option>
                </optgroup>
                <optgroup label="Pilgrimage">
                  <option>Amarkantak</option>
                  <option>Chitrakoot</option>
                  <option>Sonagiri</option>
                  <option>Pushpagiri</option>
                </optgroup>
                <optgroup label="Leisure">
                  <option>Bhopal</option>
                  <option>Shivpuri</option>
                  <option>Jabalpur</option>
                  <option>Pachmarhi</option>
                  <option>Marble Rocks</option>
                </optgroup>
                <optgroup label="Wildlife">
                  <option>Bandhavgarh National Park</option>
                  <option>Kanha National Park</option>
                  <option>Panna National Park</option>
                  <option>Pench National Park</option>
                  <option>Satpura Tiger Reserve</option>
                </optgroup>
              </select>

              <select className="w-full h-10 px-3 border border-green-800 rounded-md text-sm font-semibold">
                <option disabled selected>Best Hotels</option>
                {["Ujjain", "Omkareshwar", "Indore", "Bhopal", "Pachmarhi", "Khajuraho", "Gwalior", "Orccha", "Panna", "Bandhavgarh", "Kanha", "Pench", "Satpura"].map((place, idx) => (
                  <option key={idx}>{place}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </nav>

      {/* Logo and Desktop Dropdowns */}
      <header className="bg-green-50 py-4 px-4 md:px-20 w-full hidden md:block">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img src={Logo}  alt="MP Holidays Logo" className="w-36 md:w-40 h-auto" />
          </div>

          {/* Desktop Selects */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto justify-center lg:justify-end">
            {/* MP Tour Packages */}
            <div className="w-full sm:w-72 border border-green-900 rounded-xl">
              <select defaultValue="" className="w-full h-12 px-3 font-semibold text-sm cursor-pointer">
                <option value="" disabled>MP Tour Packages</option>
                <option value="hot-selling-packages">Hot-Selling Packages</option>
                <option value="short-selling-packages">Short Packages</option>
                <option value="long-haul-packages">Long-Haul Packages</option>
                <option value="honeymoon-packages">Honeymoon Packages</option>
              </select>
            </div>

            {/* Tour Destinations */}
            <div className="w-full sm:w-72 border border-green-900 rounded-xl">
              <select defaultValue="" className="w-full h-12 px-3 font-semibold text-sm cursor-pointer">
                <option value="" disabled>Tour Destinations</option>
                {/* [same optgroups as above] */}
              </select>
            </div>

            {/* Best Hotels */}
            <div className="w-full sm:w-72 border border-green-800 rounded-xl">
              <select defaultValue="" className="w-full h-12 px-3 font-semibold text-sm cursor-pointer">
                <option value="" disabled>Best Hotels</option>
                {["Ujjain", "Omkareshwar", "Indore", "Bhopal", "Pachmarhi", "Khajuraho", "Gwalior", "Orccha", "Panna", "Bandhavgarh", "Kanha", "Pench", "Satpura"].map((place, idx) => (
                  <option key={idx} value={place.toLowerCase()}>{place}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
