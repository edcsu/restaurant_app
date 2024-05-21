import Image from 'next/image';
import React from 'react';

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-6rem] md:h-[calc(100vh-9rem] flex flex-col text-orange-500 lg:flex-row'>
            {/* products container */}
            <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
                {/* single item */}
                <div className='flex items-center justify-between mb-4'>
                    <Image src={"/temporary/p1.png"} alt='' width={100} height={100} className='object-contain' />
                    <div className=''>
                        <h1 className='uppercase text-xl font-bold'>sample pizza</h1>
                        <span>Large</span>
                    </div>
                    <h2>Shs 24999</h2>
                    <button className='rounded-md'>
                        <Image src={"/close-circle.png"} alt='order now' width={32} height={32} className=''/>
                    </button>
                </div>
            </div>
            {/* payments container */}
            <div className="h-1/2 p-4 bg-gray-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-4">
                    <div className='flex justify-between'>
                        <span>Subtotal (3 items)</span>
                        <span>Shs 24999.00</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Service Cost</span>
                        <span>Shs 0.00</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Delivery cost </span>
                        <span className='text-green-400 uppercase'>Free!</span>
                    </div>
                    <hr className='my-2'/>
                    <div className='flex justify-between'>
                        <span className='uppercase'>Total (VAT inclusive) </span>
                        <span className='font-bold'>Shs 89999.00</span>
                    </div>
                    <button className='bg-green-500 text-white p-3 rounded-md flex gap-2 uppercase w-1/2 justify-center self-end'>
                        <span className='text-xl'>
                            Checkout
                        </span>
                        <Image src={"/cart_check.png"} alt='order now' width={28} height={28} className=''/>
                    </button>
                </div>
        </div>
    )
}

export default CartPage;