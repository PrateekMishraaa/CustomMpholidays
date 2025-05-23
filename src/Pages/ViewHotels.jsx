import React from 'react';
import Navbar from '../Components/Navbar';
import { TbHandFingerLeft } from "react-icons/tb";
import Ujjain from "../assets/ujjain1.jpg";
import UjjainTwo from "../assets/ujjain2.jpg";
import UjjainThree from "../assets/ujjain3.jpg";
import OmkareshwarOne from "../assets/omkareshwar.jpg";
import OmkareshwarTwo from "../assets/omkareshwar2.jpg";
import OmkareshwarThree from "../assets/omkareshwar3.jpg";
import OmkareshwarFour from "../assets/omkareshwar4.jpg";
import IndoreOne from "../assets/indore1.jpg"
import IndoreTwo from "../assets/indore2.jpg"
import IndoreThree from "../assets/indore3.jpg"
import Footer from '../Components/Footer';
import { useState } from 'react';
import Loader from "../Components/Loader.jsx"
import { useEffect } from 'react';
import BhopalOne from "../assets/bhopal.jpg"
import BhopalTwo from "../assets/bhopal2.jpg"
import BhopalThree from "../assets/bhopal3.jpg"
import Pachmarhi from "../assets/pachmarhi1.jpg"
import PachmarhiTwo from "../assets/pachmarhi2.jpg"
import PachmarhiThree from "../assets/pachmarhi3.jpg"
import PachmarhiFour from "../assets/pachmarhi4.jpg"
import KhajurahoOne from "../assets/khajuraho1.jpg"
import KhajurahoTwo from "../assets/khajuraho2.jpg"
const ViewHotels = () => {
    const [loading, setLoading] = useState(true)
    const ujjainHotels = [
        {
            image: Ujjain,
            title: "Rudraksh Club & Resort",
            details: "Experience luxury and serenity at Rudraksh Hotel & Club Resort in Indore. Indulge in exquisite accommodations, delectable cuisine, and rejuvenating amenities amidst picturesque surroundings.",
            ratings: 4.6,
        },
        {
            image: UjjainTwo,
            title: "MPT Shipra Residency",
            details: "Discover comfort and hospitality at MPT Shipra Residency. Nestled in the heart of Indore, enjoy modern amenities, delectable dining, and warm service in a serene atmosphere.",
            ratings: 4.9,
        },
        {
            image: UjjainThree,
            title: "MPT Ujjaini",
            details: "Experience tranquility and comfort at MPT Ujjaini. Located in the historic city of Ujjain, our hotel offers modern amenities, delightful dining, and a serene ambiance for a memorable stay.",
            ratings: 4.8,
        },
    ];

    const omkareshwarHotels = [
        {
            image: OmkareshwarOne,
            title: "MPT Temple View",
            details: "A tranquil retreat overlooking ancient marvels, offering serenity, comfort, and a glimpse into India's rich cultural heritage.",
            ratings: 4.5,
        },
        {
            image: OmkareshwarTwo,
            title: "MPT Sailani Resort",
            details: "An idyllic haven nestled amidst nature's beauty, offering tranquility, comfort, and memorable experiences for every guest.",
            ratings: 4.7,
        },
        {

            image: OmkareshwarThree,
            title: "Vanasthali Resort",
            details: "A sanctuary amidst divine landscapes, where serenity meets spirituality, offering rejuvenation and blissful experiences.",
            ratings: 4.4,
        },
        {
            image: OmkareshwarFour,
            title: "Narmada Hills Resort",
            details: "A tranquil haven atop scenic hills, offering panoramic views, serenity, and spiritual rejuvenation in nature's embrace.",
            ratings: 4.4,
        },
    ];

    const indoreHotels = [
        {
            image: IndoreOne,
            title: "Hotel Sayaji Indore",
            details: "Experience luxury at Hotel Sayaji Indore: Elegant rooms, fine dining, spa indulgence, and impeccable service in the heart of Indore.",
            ratings: 4.0
        },
        {
            image: IndoreTwo,
            title: "Hotel Effotel by SayaJi",
            details: "Effotel by Sayaji Indore: Modern comfort meets convenience. Stylish rooms, delectable dining, and warm hospitality await in vibrant Indore.",
            ratings: 4.9
        },
        {
            image: IndoreThree,
            title: "Hotel Bellevue",
            details: "Hotel Bellevue Indore: Where comfort meets elegance. Serene ambiance, personalized service, and culinary delights await amidst the charm of Indore.",
            ratings: 4.8
        }
    ]
    const bhopalHotels = [
        {
            image: BhopalOne,
            title: "Hertha Berlin Hotel",
            details: "Hertha, Berliner Sport-Club e. V., commonly known as Hertha BSC (German pronunciation: [ˈhɛʁtaː beː ʔɛs t͡seː]) or Hertha Berlin, is a German professional football club based in Berlin",
            rating: 4.9
        },
        {
            image: BhopalTwo,
            title: "Hertha Berlin Hotel",
            details: "Hertha, Berliner Sport-Club e. V., commonly known as Hertha BSC (German pronunciation: [ˈhɛʁtaː beː ʔɛs t͡seː]) or Hertha Berlin, is a German professional football club based in Berlin",
            rating: 4.9
        },
        {
            image: BhopalThree,
            title: "Hertha Berlin Hotel",
            details: "Hertha, Berliner Sport-Club e. V., commonly known as Hertha BSC (German pronunciation: [ˈhɛʁtaː beː ʔɛs t͡seː]) or Hertha Berlin, is a German professional football club based in Berlin",
            rating: 4.9
        },
        {
            image: BhopalTwo,
            title: "Hertha Berlin Hotel",
            details: "Hertha, Berliner Sport-Club e. V., commonly known as Hertha BSC (German pronunciation: [ˈhɛʁtaː beː ʔɛs t͡seː]) or Hertha Berlin, is a German professional football club based in Berlin",
            rating: 4.9
        }
    ]
    const pachmarhiHotel =[
        {
            image:Pachmarhi,
            title:"The Summer House, Pachmarhi",
            details:"The Summer House Pachmarhi: A tranquil retreat nestled amidst verdant landscapes, offering serenity, comfort, and cherished memories in abundance.",
            ratings:4.0
        },
          {
            image:PachmarhiTwo,
            title:"MPT Champak Bunglow",
            details:"Discover tranquility at MPT Champak Bungalow: Where nature's beauty meets comfort, creating cherished memories amidst lush surroundings.",
            ratings:4.9
        },
        {
            image:PachmarhiThree,
            title:"WelcomHeritage Golf View",
            details:"WelcomHeritage Golf View: A picturesque haven blending heritage charm with modern comforts, offering scenic vistas and gracious hospitality.",
            ratings:4.2
        },
        {
            image:PachmarhiFour,
            title:"Ark Residency",
            details:"A charming retreat amidst nature's embrace, offering serene surroundings, cozy accommodation, and unforgettable experiences in Pachmarhi.",
            ratings:4.9
        },
    ]

    const khajurahoHotel =[
        {
            image:KhajurahoOne,
            title:"The Chandela Hotel Khajuraho",
            details:"Where timeless elegance meets modern luxury, offering impeccable service and a glimpse into India's rich cultural heritage",
            ratings:4.7
        },
         {
            image:KhajurahoTwo,
            title:"Greenwood Resort",
            details:"A tranquil oasis surrounded by lush greenery, offering relaxation, adventure, and unforgettable experiences in a natural paradise.",
            ratings:4.9
        },
    ]
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <Loader />
    return (
        <>
            <Navbar />
            <section className="min-h-screen w-full bg-white py-10">
                <div className="w-[90%] mx-auto">
                    <a href="/" className="text-2xl text-green-800 hover:text-green-600 mb-4 inline-block">
                        <TbHandFingerLeft className="inline mr-2" /> Back
                    </a>

                    {/* Ujjain Section */}
                    <div className="mb-8">
                        <h2 className="font-bold text-green-900 text-3xl">Best Hotels in Ujjain</h2>
                        <p className="text-sm text-gray-800 mt-2 w-full md:w-[60%]">
                            Discover the heart of MP Holidays — a team driven by passion, dedicated to delivering unforgettable travel experiences. Explore our story, our values, and the people who make your journeys truly special.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {ujjainHotels.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
                            >
                                <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-t-2xl" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Ratings: <span className="font-medium text-yellow-500">{item.ratings} ★★★★★</span>
                                    </p>
                                    <a
                                        href="/book-now"
                                        className="inline-block px-4 py-2 text-sm text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Omkareshwar Section */}
                    <div className="mb-8">
                        <h2 className="font-bold text-green-900 text-3xl">Best Hotels in Omkareshwar</h2>
                        <p className="text-sm text-gray-800 mt-2 w-full md:w-[60%]">
                            Explore the spiritual charm and scenic beauty of Omkareshwar. Our curated hotels promise peace, comfort, and proximity to sacred sites.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {omkareshwarHotels.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
                            >
                                <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-t-2xl" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Ratings: <span className="font-medium text-yellow-500">{item.ratings} ★★★★★</span>
                                    </p>
                                    <a
                                        href="/book-now"
                                        className="inline-block px-4 py-2 text-sm text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="mb-8 py-8">
                        <h2 className="font-bold text-green-900 text-3xl">Top Hotels in Indore - Best Budget & Luxury Stays</h2>
                        <p className="text-sm text-gray-800 mt-2 w-full md:w-[60%]">
                            Looking for the best hotels in Indore? Explore luxury hotels, affordable budget stays, and top-rated accommodations near Indore Railway Station, Rajwada, and the city center. Perfect for business trips, family vacations, or solo travel in Madhya Pradesh’s cleanest city.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {indoreHotels.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
                            >
                                <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-t-2xl" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Ratings: <span className="font-medium text-yellow-500">{item.ratings} ★★★★★</span>
                                    </p>
                                    <a
                                        href="/book-now"
                                        className="inline-block px-4 py-2 text-sm text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mb-4 py-8">
                        <h2 className="font-bold text-green-900 text-3xl">Top Hotels in Bhopal – Book Budget & Luxury Stays</h2>
                        <p className="text-sm text-gray-800 mt-2 w-full md:w-[60%]">
                            Discover the best hotels in Bhopal with top amenities, great locations, and competitive prices. Whether you’re visiting for business or leisure, find luxury hotels near Bhopal Railway Station, lakeside stays, and affordable accommodations close to popular attractions like Upper Lake, Van Vihar, and the Taj-ul-Masajid.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bhopalHotels.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
                            >
                                <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-t-2xl" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Ratings: <span className="font-medium text-yellow-500">{item.ratings} ★★★★★</span>
                                    </p>
                                    <a
                                        href="/book-now"
                                        className="inline-block px-4 py-2 text-sm text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>



                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {indoreHotels.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
                            >
                                <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-t-2xl" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Ratings: <span className="font-medium text-yellow-500">{item.ratings} ★★★★★</span>
                                    </p>
                                    <a
                                        href="/book-now"
                                        className="inline-block px-4 py-2 text-sm text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <div className="mb-4 py-8">
                        <h2 className="font-bold text-green-900 text-3xl">Book Best Hotels in Pachmarhi Top Resorts, Cottages & Budget Stays</h2>
                        <p className="text-sm text-gray-800 mt-2 w-full md:w-[60%]">
                           Explore and book from a curated list of the best hotels in Pachmarhi, Madhya Pradesh’s most beautiful hill station. Whether you're looking for luxury resorts in Pachmarhi, scenic cottages near waterfalls, or budget-friendly hotels near tourist attractions like Bee Falls, Dhoopgarh, and Jata Shankar Caves — we’ve got you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pachmarhiHotel.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
                            >
                                <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-t-2xl" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Ratings: <span className="font-medium text-yellow-500">{item.ratings} ★★★★★</span>
                                    </p>
                                    <a
                                        href="/book-now"
                                        className="inline-block px-4 py-2 text-sm text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>


                     <div className="mb-4 py-8">
                        <h2 className="font-bold text-green-900 text-3xl">Best Hotels in Khajuraho & Luxury, Budget & Heritage Stays</h2>
                        <p className="text-sm text-gray-800 mt-2 w-full md:w-[60%]">
                         Discover top-rated hotels in Khajuraho near the world-famous UNESCO World Heritage temples. Book your stay at luxurious resorts, budget guesthouses, and heritage hotels offering comfort and convenience for travelers exploring Khajuraho's temples, museums, and cultural sites. Whether you're looking for romantic stays, family-friendly options, or accommodations near Western Group of Temples, we have the perfect options for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {khajurahoHotel.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden bg-white"
                            >
                                <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-t-2xl" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 mb-3">{item.details}</p>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Ratings: <span className="font-medium text-yellow-500">{item.ratings} ★★★★★</span>
                                    </p>
                                    <a
                                        href="/book-now"
                                        className="inline-block px-4 py-2 text-sm text-green-800 border-2 border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ViewHotels;
