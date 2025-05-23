import React, { useState } from 'react';
import { FaSquareFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaBars, FaTimes,FaPinterest } from "react-icons/fa";
import Logo from "../assets/circle-logo.png";
import Form from '../Components/Form';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // state for form visibility

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {/* Top Bar */}
      <nav className="bg-white border-b w-full">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-2 gap-2">
          <div className="flex flex-wrap items-center gap-2 text-sm justify-center md:justify-start">
            <img src={Logo} alt="" className='h-16 object-contain' />
            <a href="https://www.facebook.com/MPHOLIDAYSPVTLTD/"><FaSquareFacebook /></a>
            <a href="https://x.com/MPHolidays1/status/1920728689081290810"><FaXTwitter /></a>
            <a href="https://www.instagram.com/mpholidayspvtltd/"><FaInstagram /></a>
            <a href="https://in.pinterest.com/mpholidaysofficial/"><FaPinterest /></a>
            <a href="tel:9319184060" className="font-semibold">9319184060</a>
            <a href="mailto:welcome@mpholidays.in" className="font-semibold">welcome@mpholidays.in</a>
          </div>

          <ul className="hidden md:flex gap-5 font-semibold text-sm text-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about-mp">About Madhya Pradesh</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Vehicle</a></li>
            <li><a href="#">Contact</a></li>
            {/* ✅ Button to toggle the form */}
            <li>
              <button
                className="bg-green-800 text-white px-4 py-1 rounded-md cursor-pointer"
                onClick={toggleForm}
              >
                Send Query
              </button>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden flex justify-end w-full">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Conditionally Render Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg relative w-11/12 max-w-lg">
            <button onClick={toggleForm} className="absolute top-2 right-2 text-xl font-bold text-red-600">×</button>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
