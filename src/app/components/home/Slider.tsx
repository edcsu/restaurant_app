import Image from 'next/image';
import React from 'react';

const Slider = () => {
    const slides = []
    return ( 
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
            <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
                <h1 className='text-5xl md:text-6xl xl:text-7xl text-center uppercase p-4'>Text</h1>
                <button className='bg-green-500 text-white py-4 px-8 rounded-md'>Order now</button>
            </div>
            <div className='w-full h-1/2 relative'>
                <Image src={"/slide1.png"} alt='order now' fill className='object-cover'/>
            </div>
        </div>
     );
}
 
export default Slider;