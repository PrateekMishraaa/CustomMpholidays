import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import Navbar from '../Components/Navbar'

const AboutMadhyaPradesh = () => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    if (loading) return <Loader />
    return (
        <>
            <Navbar />
        </>
    )
}

export default AboutMadhyaPradesh
