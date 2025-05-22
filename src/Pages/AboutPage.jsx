import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader';
import Tiger from "../assets/tiger.png";
import Footer from '../Components/Footer';
import Image from "../assets/about.jpg";
import { CgInsights } from "react-icons/cg";
import { CiStreamOn } from "react-icons/ci";
import { IoIosPricetag } from "react-icons/io";
import { AiOutlineSolution } from "react-icons/ai";
import { SiGamedeveloper } from "react-icons/si";
import { MdManageAccounts, MdOutlinePayment } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import Amarkantak from "../assets/amarkantak.jpg";
import Chitrakoot from "../assets/amarkantak.jpg";
import Maheshwar from "../assets/maheshwar.jpg";
import Pushpagiri from "../assets/pushpagiri.jpg";

const AboutPage = () => {
    const [loading, setLoading] = useState(true);

    const partner = [
        {
            icon: CgInsights,
            name: "Local Expertise & Insight",
            description:
                "We provide B2B partners with invaluable insights and resources by leveraging our deep knowledge of Madhya Pradesh and strong local networks.",
        },
        {
            icon: CiStreamOn,
            name: "Streamlined Operations",
            description:
                "We handle logistics, accommodation, and transportation to ensure smooth travel experiences while you focus on your business.",
        },
        {
            icon: IoIosPricetag,
            name: "Competitive Pricing",
            description:
                "We negotiate the best rates with our trusted vendors, helping you deliver excellent value to your clients.",
        },
        {
            icon: AiOutlineSolution,
            name: "Tailored Solutions",
            description:
                "We create customized solutions based on your brand and business needs for maximum satisfaction.",
        },
    ];

    const B2B = [
        {
            icon: SiGamedeveloper,
            title: "Customized Itinerary Development",
            details:
                "We design unique itineraries tailored to your client's preferences, interests, and budgets.",
        },
        {
            icon: MdManageAccounts,
            title: "Dedicated Account Management",
            details:
                "Get personalized support with a dedicated manager to handle all your queries and concerns.",
        },
        {
            icon: MdOutlinePayment,
            title: "Flexible Payment Options",
            details:
                "We provide multiple payment methods with transparency and ease of transaction.",
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            <Navbar />

            {/* About Section */}
            <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-10">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        At MP Holidays Private Limited, customer satisfaction isn't just a promise—it's our foundation. We craft extraordinary holiday experiences with personalized solutions, premium services, and competitive pricing. Based in Madhya Pradesh, we connect travelers with unforgettable destinations that inspire and captivate.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src={Tiger}
                        alt="Tiger"
                        className="w-full h-64 md:h-auto object-cover rounded-xl shadow-md"
                    />
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            {/* Partner Section */}
            <section className="px-6 md:px-20 py-12 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
                    Why Partner with Us?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partner.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 text-center">
                                <Icon className="text-green-800 w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-green-600 mb-2">{item.name}</h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* B2B Services Section */}
            <section className="px-6 md:px-20 py-12 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
                    Our B2B Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {B2B.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 text-center">
                                <Icon className="text-green-800 w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-green-600 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.details}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Explore Madhya Pradesh Section */}
            <section className="w-full px-6 md:px-20 py-12">
                <h2 className="text-3xl font-bold text-center md:text-left mb-10">
                    Explore Madhya Pradesh.
                </h2>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2">
                        <img src={Image} alt="Explore MP" className="rounded-xl w-full h-64 object-cover mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 hover:text-green-800 transition cursor-pointer">
                            Explore Wildlife, Heritage, Spirituality & Nature in One Destination
                        </h3>
                        <p className="text-gray-700 mt-2">
                            Madhya Pradesh, the heart of India, offers a captivating blend of wildlife, heritage, spirituality, nature, and culture. It’s home to renowned national parks like Kanha, Bandhavgarh, and Pench where visitors can witness majestic tigers and diverse flora and fauna.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Architectural marvels like Gwalior Fort and the UNESCO-listed Khajuraho Temples reflect the region's rich history.
                        </p>
                        <div className="flex items-center gap-2 text-green-600 mt-6 cursor-pointer hover:underline">
                            <span>Read Full Article</span>
                            <FaChevronRight />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <p className="text-gray-700">
                            Additionally, the state's vibrant markets, colorful festivals, and warm hospitality add charm to the experience. From Diwali and Holi to handmade crafts and traditional food, Madhya Pradesh offers a deeply immersive cultural journey for all visitors.
                        </p>
                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[Amarkantak, Chitrakoot, Maheshwar, Pushpagiri].map((src, i) => (
                                <img key={i} src={src} alt={`MP Place ${i}`} className="rounded-xl h-40 w-full object-cover" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AboutPage;
