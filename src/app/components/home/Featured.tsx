import Image from 'next/image';
import React from 'react';
import { featuredProducts } from '../../../../data';

const Featured = () => {
    return ( 
        <div className='w-screen overflow-x-auto text-red-500'>
            {/* wrapper */}
            <div className='w-max flex'>
                {/* single item */}
                {   
                    featuredProducts.map(product => (
                    <div key={product.id} className='w-screen h-[60vh] flex flex-col items-center text-center justify-around p-4 hover:bg-gray-100 trnasition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                        {/* image container */}
                        {product.img && <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                            <Image src={product.img} alt='' fill className=' object-contain'/>
                        </div>}
                        {/* text container */}
                        <div className=' flex-1 flex flex-col items-center justify-center gap-4'>
                            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{product.title}</h1>
                            <p className='p-4 2xl:p-8'>{product.desc}</p>
                            <span className='tex-xl font-bold'>shs {product.price}</span>
                            <button className='bg-green-500 text-white p-3 rounded-md flex gap-2'>
                            <span className=''>
                                Add to cart
                            </span>
                            <Image src={"/add_to_cart.png"} alt='order now' width={20} height={20} className=''/>
                            </button>
                        </div>
                    </div>))
                }
            </div>
        </div>
     );
}
 
export default Featured;