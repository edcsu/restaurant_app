import Image from 'next/image';
import React from 'react';
import CountDown from '../CountDown';

const Offer = () => {
    return ( 
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            {/* text container */}
            <div className='flex-1 flex flex-col justify-center items-center gap-8 p-6 text-center'>
                <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French fries</h1>
                <p className='text-white xl:text-xl'>
                    Hurry while stock lasts!!!!!
                </p>
                <CountDown />
                <button className='bg-green-500 text-white py-4 px-8 rounded-md flex gap-2'>
                    <span>
                        Order now
                    </span>
                    <Image src={"/order.png"} alt='order now' width={20} height={20} className=''/>
                </button>
            </div>
            {/* image container */}
            <div className='flex-1 w-full relative'>
                <Image src={"/offerProduct.png"} alt='' fill className='object-contain'/>
            </div>
        </div>
     );
}
 
export default Offer;