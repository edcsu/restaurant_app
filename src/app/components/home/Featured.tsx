import Image from 'next/image';
import React from 'react';

const Featured = () => {
    return ( 
        <div className='w-screen overflow-x-auto text-red-500'>
            {/* wrapper */}
            <div className='w-max flex'>
                {/* single item */}
                <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
                    {/* image container */}
                    <div className='relative flex-1 w-full'>
                        <Image src={"/temporary/p1.png"} alt='' fill className=' object-contain'/>
                    </div>
                    {/* text container */}
                    <div className=' flex-1 flex flex-col gap-4'>
                        <h1 className='text-xl font-bold uppercase'>Title</h1>
                        <p className=''>Desc</p>
                        <span className='tex-xl font-bold'>shs 25000</span>
                        <button className='bg-green-500 text-white p-3 rounded-md flex gap-2'>
                        <span className=''>
                            Add to cart
                        </span>
                        <Image src={"/add_to_cart.png"} alt='order now' width={20} height={20} className=''/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Featured;