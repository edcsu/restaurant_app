import React from "react";
import { pizzas } from "../../../../data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
    return (
        <div className="flex flex-wrap text-orange-500">
            {pizzas.map(pizza => (
                <Link href={`/product/${pizza.id}`} key={pizza.id} className="w-full h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-gray-50">
                    {/* image */}
                    {pizza.img && (
                        <div className="relative h-[80%]">
                            <Image src={pizza.img} alt={pizza.title} fill className="object-contain"/>
                        </div>
                    )}
                    {/* container */}
                    <div className="flex items-center justify-between font-bold">
                        <h1 className="text-2xl uppercase p-2">{pizza.title}</h1>
                        <h2 className="group-hover:hidden text-xl">Shs {pizza.price}</h2>
                        <button className='bg-green-500 text-white p-2 rounded-md group-hover:flex gap-2 uppercase hidden'>
                            <span className=''>
                                Add to cart
                            </span>
                            <Image src={"/add_to_cart.png"} alt='order now' width={20} height={20} className=''/>
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryPage;