import React from 'react';
import { FaSquareFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <nav className="bg-white border-b w-full">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-2 gap-2">
          {/* Social Media and Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm justify-center md:justify-start">
            <a href="#" title="Facebook" aria-label="Facebook"><FaSquareFacebook /></a>
            <a href="#" title="Twitter" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" title="Instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" title="LinkedIn" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="tel:9319184060" className="font-semibold">9319184060</a>
            <a href="mailto:welcome@mpholidays.in" className="font-semibold">welcome@mpholidays.in</a>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5 font-semibold text-sm text-center">
            {["Home", "About", "About Madhya Pradesh", "Blog", "Gallery", "Vehicle", "Contact Us"].map((item, idx) => (
              <li key={idx}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-green-50 py-4 px-4 md:px-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img src={Logo} alt="MP Holidays Logo" className="w-36 md:w-40 h-auto" />
          </div>

          {/* Dropdowns */}
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
                <optgroup label="Heritage">
                  <option value="khajuraho">Khajuraho</option>
                  <option value="gwalior">Gwalior</option>
                  <option value="orccha">Orccha</option>
                  <option value="chanderi">Chanderi</option>
                  <option value="datia">Datia</option>
                  <option value="sanchi">Sanchi</option>
                  <option value="bhimbetka">Bhimbetka</option>
                  <option value="islamnagar">Islamnagar</option>
                  <option value="mandu">Mandu</option>
                  <option value="burhanpur">Burhanpur</option>
                  <option value="vidisha">Vidisha</option>
                </optgroup>
                <optgroup label="Pilgrimage">
                  <option value="maheshwar">Amarkantak</option>
                  <option value="chitrakoot">Chitrakoot</option>
                  <option value="sonagiri">Sonagiri</option>
                  <option value="pushpagiri">Pushpagiri</option>
                </optgroup>
                <optgroup label="Leisure">
                  <option value="bhopal">Bhopal</option>
                  <option value="shivpuri">Shivpuri</option>
                  <option value="jabalpur">Jabalpur</option>
                  <option value="pachmarhi">Pachmarhi</option>
                  <option value="marble-rocks">Marble Rocks</option>
                </optgroup>
                <optgroup label="Wildlife">
                  <option value="bandhavgarh-national-park">Bandhavgarh National Park</option>
                  <option value="kanha-national-park">Kanha National Park</option>
                  <option value="panna-national-park">Panna National Park</option>
                  <option value="pench-national-park">Pench National Park</option>
                  <option value="satpura-tiger-reserve">Satpura Tiger Reserve</option>
                </optgroup>
              </select>
            </div>

            {/* Best Hotels */}
            <div className="w-full sm:w-72 border border-green-800 rounded-xl">
              <select defaultValue="" className="w-full h-12 px-3 font-semibold text-sm cursor-pointer">
                <option value="" disabled>Best Hotels</option>
                <optgroup label="Hotels">
                  {["Ujjain", "Omkareshwar", "Indore", "Bhopal", "Pachmarhi", "Khajuraho", "Gwalior", "Orccha", "Panna", "Bandhavgarh", "Kanha", "Pench", "Satpura"].map((place, idx) => (
                    <option key={idx} value={place.toLowerCase()}>{place}</option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
