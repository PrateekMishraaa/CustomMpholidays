import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Video from '../assets/mpvideo.mp4';
import Loader from '../Components/Loader';
import { FaPlay, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { FaArrowTrendUp } from "react-icons/fa6";
import FirstItn from "../assets/itenenaries.jpg";
import SecondItn from "../assets/itenenaries2.jpg";
import ThirdItn from "../assets/itenenaries3.jpg";
import ForthItn from "../assets/itenenaries4.jpg";
import FifthItn from "../assets/itenenaries5.jpg";
import SixthItn from "../assets/itenenaries6.jpg";
import SeventhItn from "../assets/itenenaries7.jpg";
import EightItn from "../assets/itenenaries8.jpg";
import NinethItn from "../assets/itenenaries9.jpg";

import HolidayOne from "../assets/holiday1.jpg";
import HolidayTwo from "../assets/holiday2.jpg";
import HolidayThree from "../assets/holiday3.jpg";
import HolidayFour from "../assets/holiday4.jpg";
import HolidayFive from "../assets/holiday5.jpg";
import HolidaySix from "../assets/holiday6.jpg";
import HolidaySeven from "../assets/holiday7.jpg";
import Footer from '../Components/Footer';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);

  const itineraries = [
    { image: FirstItn, description: "Explore the serene charm of Madhya Pradesh, where culture and nature unite beautifully." },
    { image: SecondItn, description: "Witness the intricate carvings of Khajuraho and the grandeur of royal forts." },
    { image: ThirdItn, description: "Embark on a safari adventure in Bandhavgarh or Kanha’s wild jungles." },
    { image: ForthItn, description: "Dive into spirituality at Ujjain and Omkareshwar, sacred places of peace." },
    { image: FifthItn, description: "Experience vibrant traditions, tribal arts, and majestic festivals." },
    { image: SixthItn, description: "Savor local cuisine and explore bustling markets filled with culture." },
    { image: SeventhItn, description: "Trek through Satpura’s forests and explore breathtaking waterfalls." },
    { image: EightItn, description: "Discover ancient caves, palaces, and natural wonders in one trip." },
    { image: NinethItn, description: "Let Madhya Pradesh leave you with memories of majestic India’s heart." }
  ];

  const toursHolidays = [
    {
      image: HolidayOne,
      title: "Jyotirlingas Tour of Madhya Pradesh",
      duration: "03 Nights/04 Days",
      description: "Madhya Pradesh is home to two of the twelve sacred Jyotirlingas...",
      inclusion: "Hotel Accommodation, Private Transport, Private Sightseeing & Excursion, Specified Meals"
    },
    {
      image: HolidayTwo,
      title: "Jyotirlingas Tour with Mandu Heritage",
      duration: "04 Nights/05 Days Tour",
      description: "Madhya Pradesh is home to two of the twelve sacred Jyotirlingas...",
      inclusion: "Hotel Accommodation, Private Transport, Private Sightseeing & Excursion, Specified Meals"
    },
    {
      image: HolidayThree,
      title: "Exotic Pachmarhi Tour",
      duration: "03 Nights/04 Days",
      description: "Madhya Pradesh is home to two of the twelve sacred Jyotirlingas...",
      inclusion: "Hotel Accommodation, Private Transport, Private Sightseeing & Excursion, Specified Meals"
    },
    {
      image: HolidayFour,
      title: "Golden Triangle of Madhya Pradesh",
      duration: "05 Nights/06 Days Tour",
      description: "Madhya Pradesh is home to two of the twelve sacred Jyotirlingas...",
      inclusion: "Hotel Accommodation, Private Transport, Private Sightseeing & Excursion, Specified Meals"
    },
    {
      image: HolidayFive,
      title: "Wilderness of MP",
      duration: "05 Nights/06 Days Tour",
      description: "Madhya Pradesh is home to two of the twelve sacred Jyotirlingas...",
      inclusion: "Hotel Accommodation, Private Transport, Private Sightseeing & Excursion, Specified Meals"
    },
    {
      image: HolidaySix,
      title: "Panch Jyotirlinga Tour",
      duration: "07 Nights/08 Days Tour",
      description: "Madhya Pradesh is home to two of the twelve sacred Jyotirlingas...",
      inclusion: "Hotel Accommodation, Private Transport, Private Sightseeing & Excursion, Specified Meals"
    },
    {
      image: HolidaySeven,
      title: "Jewel of Madhya Pradesh",
      duration: "04 Nights/05 Days Tour",
      description: "Madhya Pradesh is home to two of the twelve sacred Jyotirlingas...",
      inclusion: "Hotel Accommodation, Private Transport, Private Sightseeing & Excursion, Specified Meals"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[75vh] overflow-hidden">
        <video
          src={Video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute bottom-20 left-10 w-[90%] max-w-2xl z-10">
          <p className="text-4xl font-semibold font-serif text-white drop-shadow">
            Explore the Heart of India{' '}
            <span className="text-green-800 bg-green-300 font-bold rounded-2xl text-3xl px-3 py-1 inline-block cursor-pointer">
              - Madhya Pradesh
            </span>
          </p>
          <p className="text-sm text-gray-200 py-6">
            Madhya Pradesh is a land where history whispers through ancient temples, culture thrives in vibrant festivals, and nature captivates with its untamed beauty. Explore the stunning Khajuraho Temples, known for their intricate carvings, and the majestic forts of Orchha and Gwalior, which echo the glory of India’s royal past.
          </p>
          <div
            className="h-14 w-14 rounded-full flex items-center justify-center bg-white cursor-pointer hover:scale-105 transition"
            onClick={() => setShowPopup(true)}
          >
            <FaPlay className="text-2xl text-green-700" />
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-2xl relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-black text-xl hover:text-red-500"
              onClick={() => setShowPopup(false)}
            >
              <RxCross2 />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center text-green-800">Welcome to MP-Holidays!</h2>
            <div className="w-full aspect-video mb-4 rounded-md overflow-hidden">
              <video src={Video} className="w-full h-full object-cover" controls autoPlay />
            </div>
            <p className="text-gray-700 text-sm text-justify">
              This is a beautiful popup where you can showcase more info, images, or even a video about Madhya Pradesh!
            </p>
          </div>
        </div>
      )}

      <section className="h-20 w-full bg-green-800 text-white">
        <div className="w-[90%] mx-auto py-2 text-sm font-medium">
          <p>
            Dive into the serene charm of Marble Rocks at Bhedaghat or the spiritual tranquility of Ujjain and Omkareshwar, sacred to seekers of peace. Embark on thrilling safaris in Bandhavgarh and Kanha, breathtaking landscapes, rich heritage, and unique traditions.</p>
        </div>
      </section>

      <section className="w-full py-10 bg-gray-50">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-3xl font-semibold text-gray-800">Top Itineraries</p>
              <div className="h-1 w-20 bg-green-700 mt-2" />
            </div>
            <div className="flex gap-3">
              <button
                className="h-10 w-10 rounded-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                onClick={() => handleScroll('left')}
                aria-label="Scroll Left"
              >
                <FaArrowLeft />
              </button>
              <button
                className="h-10 w-10 rounded-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                onClick={() => handleScroll('right')}
                aria-label="Scroll Right"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {itineraries.map((item, index) => (
              <div key={index} className="min-w-[300px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer">
                <img src={item.image} alt="Itinerary" className="w-full h-48 object-cover" />
                <div className="p-4 text-sm text-gray-700">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-white">
        <div className="w-[90%] mx-auto">
          <div className='flex justify-between p-10 h-20 w-full mb-10'>
            <p className="text-3xl font-semibold text-gray-800 ">Tours & Holidays</p>
            <a href="" className='h-10 text-2xl font-sans text-green-700 w-40 '>See All<FaArrowTrendUp className='relative left-20 cursor-pointer bottom-6' /></a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toursHolidays.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-md"
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.duration}</p>
                  <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                  <p className="text-xs text-gray-500">Inclusions: {item.inclusion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default HomePage;
