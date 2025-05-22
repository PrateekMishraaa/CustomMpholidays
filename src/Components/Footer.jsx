import React from 'react';
import { FaPhone, FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import ImageOne from "../assets/holiday1.jpg";
import ImageTwo from "../assets/holiday2.jpg";
import ImageThree from "../assets/holiday3.jpg";
import ImageFour from "../assets/holiday4.jpg";

const Footer = () => {
  return (
    <footer className='w-full px-6 py-10 md:py-14 bg-white'>
      <div className='flex flex-col md:flex-row flex-wrap justify-between gap-10'>

        {/* Contact With Us */}
        <div className='w-full md:w-[22%]'>
          <p className='font-bold text-xl text-green-900 mb-2'>Contact With Us</p>
          <hr className='border-t-2 border-green-900 w-28 mb-4' />
          <div className='text-sm space-y-4'>
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <FaPhone className='text-green-900' />
                <span className='font-bold'>Phone:</span>
              </div>
              <a href="tel:+919319184060" className='text-green-800 hover:underline font-medium'>+91 9319184060</a>
            </div>
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <SiGmail className='text-green-900' />
                <span className='font-bold'>Email:</span>
              </div>
              <a href="mailto:welcome@mpholidays.in" className='text-green-800 hover:underline font-medium'>welcome@mpholidays.in</a>
            </div>
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <IoLocationSharp className='text-green-900' />
                <span className='font-bold'>Address:</span>
              </div>
              <p className='text-green-800 font-medium'>G10, near Nawada Metro Station, Shyam Park, Nawada Majra Village Nawada, New Delhi India 110059</p>
            </div>
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <RiLinksFill className='text-green-900' />
                <span className='font-bold'>Social Links:</span>
              </div>
              <ul className='flex gap-4 text-green-900 text-lg'>
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaLinkedinIn /></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Madhya Pradesh Guide */}
        <div className='w-full md:w-[22%]'>
          <p className='font-bold text-xl text-green-900 mb-2'>Madhya Pradesh Guide</p>
          <hr className='border-t-2 border-green-900 w-28 mb-4' />
          <ul className='text-sm space-y-2'>
            <li><a href="#" className='hover:underline text-green-800'>About Us</a></li>
            <li><a href="#" className='hover:underline text-green-800'>About Madhya Pradesh</a></li>
            <li><a href="#" className='hover:underline text-green-800'>How To Reach</a></li>
            <li><a href="#" className='hover:underline text-green-800'>Contact</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className='w-full md:w-[22%]'>
          <p className='font-bold text-xl text-green-900 mb-2'>Our Services</p>
          <hr className='border-t-2 border-green-900 w-28 mb-4' />
          <ul className='text-sm space-y-2'>
            <li><a href="#" className='hover:underline text-green-800'>Holiday Packages</a></li>
            <li><a href="#" className='hover:underline text-green-800'>Hotel Booking</a></li>
            <li><a href="#" className='hover:underline text-green-800'>Car Rentals</a></li>
            <li><a href="#" className='hover:underline text-green-800'>Flight Tickets</a></li>
          </ul>
        </div>

        {/* Attractions */}
        <div className='w-full md:w-[30%]'>
          <p className='font-bold text-xl text-green-900 mb-2'>Madhya Pradesh Attractions</p>
          <hr className='border-t-2 border-green-900 w-28 mb-4' />
          <div className='grid grid-cols-2 gap-4'>
            <img src={ImageOne} alt="Attraction 1" className='w-full h-24 object-cover rounded-sm' />
            <img src={ImageTwo} alt="Attraction 2" className='w-full h-24 object-cover rounded-sm' />
            <img src={ImageThree} alt="Attraction 3" className='w-full h-24 object-cover rounded-sm' />
            <img src={ImageFour} alt="Attraction 4" className='w-full h-24 object-cover rounded-sm' />
          </div>
        </div>
            {/* <div className='h-20 w-full bg-green-900'></div> */}
      </div>
     
    </footer>
  );
}

export default Footer;
