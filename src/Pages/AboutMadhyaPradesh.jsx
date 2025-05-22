import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import Navbar from '../Components/Navbar'
import Map from "../assets/map.png"
import Map2 from "../assets/map2.png"
import Footer from '../Components/Footer'
const AboutMadhyaPradesh = () => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);
    if (loading) return <Loader />
    return (
        <>
            <Navbar />
            <section className='min-h-screen w-full p-18'>
                <p className='font-semibold text-4xl font-bold'>MADHYA PRADESH</p>
                <p className='py-4 text-sm font-semibold text-green-900'>"Discover a raw and rich way of life, where Tradition, Mother Nature, and Hospitality welcome you."</p>
                <p className='text-slate-800'>The elevation of Madhya Pradesh ranges from 300 to 3,900 feet (90 to 1,200 metres). In the northern part of the state the land rises generally from south to north, while in the southern part it increases in elevation toward the west. Important ranges of hills are the Vindhya Range, in the west, and its northern branch, the Kaimur Hills, both of which reach elevations of 1,500 feet (460 metres), and the Satpura, Mahadeo, and Maikala ranges, in the south, which have elevations of more than 3,000 feet (900 metres). The Dhupgarh Peak (4,429 feet [1,350 metres]), near Pachmarhi in south-central Madhya Pradesh, is the state’s highest point. Northwest of the Vindhya Range is the Malwa Plateau (1,650 to 2,000 feet [500 to 600 metres]). Other features include the Rewa Plateau, in the rugged eastern region of the Vindhya Range, the Bundelkhand Upland, north of the Vindhyas, the Madhya Bharat Plateau, in the extreme northwest, and the Baghelkhand Plateau, in the northeast.</p>
                <div className='h-72 w-full p-4 flex justify-between gap-4 '>
                    <img src={Map} alt="" className='h-full w-full' />
                    <img src={Map2} alt="" className='h-full w-full' />
                </div>
                <p className='text-slate-800'>Madhya Pradesh is nature’s canvas, painted in a stunning array of colors. Explore the Vindhya and Satpura mountain ranges, which offer breathtaking scenery at every turn. Cruise along the Narmada River and take in the mesmerizing views of the Bhedaghat marble rocks. Rich in biodiversity, the state is home to national parks like Bandhavgarh and Kanha, where you can witness majestic tigers in their natural habitat. Immerse yourself in Madhya Pradesh’s rich cultural tapestry, where local crafts, folk music, and traditional dances offer a window into its vibrant heritage. Festivals such as the Orchha Utsav and the Khajuraho Dance Festival provide a colorful celebration of art and culture.</p>
                <p className='text-slate-800'>The climate in Madhya Pradesh is governed by a monsoon weather pattern. The distinct seasons are summer (March through May), winter (November through February), and the intervening rainy months of the southwest monsoon (June through September). The summer is hot, dry, and windy; in Bhopal, low temperatures average in the upper 70s F (about 25 °C), while high temperatures typically reach the low 100s F (about 40 °C). Winters are usually pleasant and dry, with daily temperatures normally rising from about 50° (about 10 °C) into the upper 70s F (about 25 °C). Temperatures during the monsoon season usually range from the low 70s F (low 20s C) to the upper 80s F (low 30s C).

                    The average annual rainfall is about 44 inches (1,100 mm). In general, precipitation decreases westward and northward, from 60 inches (1,500 mm) or more in the east to about 32 inches (800 mm) in the west. The Chambal valley in the north averages less than 30 inches (750 mm) of rainfall per year. Most parts of Madhya Pradesh receive almost all of their precipitation in the monsoon months; however, there is considerable rainfall over the northern part of the state in December and January.</p>
                <p className='font-bold text-xl p-4'>Historical Wonders of Madhya Pradesh</p>
                <p className='text-slate-800 px-4'>Drainage and soils</p>
            </section>
            <Footer/>
        </>
    )
}

export default AboutMadhyaPradesh
