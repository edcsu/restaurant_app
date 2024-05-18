"use client"

import Image from 'next/image';
import React, { useEffect, useState} from 'react';

const slides = [
    {
        id: "33508f2e-5f18-43df-b503-1ec0c22b42ad",
        title: "always fresh and always crispy and always hot",
        image: "/slide1.png"
    },
    {
        id: "c299cf06-3f71-4bf6-a699-f4fd81997a16",
        title: "we deliver your order wherever you are in Kampala",
        image: "/slide2.png"
    },
    {
        id: "510ac943-6d49-4bb7-b154-c2983c11fc67",
        title: "the best pizza to share with your family",
        image: "/slide3.jpg"
    }
]

const Slider = () => {    
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => 
            setCurrentSlide((previous) => (previous === slides.length - 1 ? 0 : previous + 1)), 2000)
        return () => clearInterval(interval)
    })

    return ( 
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-gray-100'>
            <div className='h-1/2 lg:h-full  lg:w-1/2 flex items-center justify-center flex-col gap-8 text-orange-500 font-bold'>
                <h1 className='text-5xl md:text-6xl xl:text-7xl text-center uppercase p-4 md:p-10'>
                    {slides[currentSlide].title}
                </h1>
                <button className='bg-green-500 text-white py-4 px-8 rounded-md flex gap-2'>
                <span>
                    Order now
                </span>
                <Image src={"/order.png"} alt='order now' width={20} height={20} className=''/>
                </button>
            </div>
            <div className='w-full lg:w-1/2 h-1/2 lg:h-full relative'>
                <Image src={slides[currentSlide].image} alt='slide image' fill className='object-cover'/>
            </div>
        </div>
     );
}
 
export default Slider;