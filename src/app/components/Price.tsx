"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Price = ({price, id, options}: Props) => {
    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        )
    }, [quantity, selected, options, price])

    return ( 
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Shs {total.toFixed(2)}</h2>
            {/* optios container */}
            <div className="flex gap-4">
                {options?.map((option, index) =>(
                    <button key={option.title} className='min-w-[6rem] text-orange-500 p-2 rounded-md gap-2 uppercase ring-1 ring-orange-400' 
                        style={{ background: selected === index ? "rgb(251 146 60)" : "white", color: selected === index ? "white" : "orange", }}
                        onClick={() => setSelected(index)}>
                        {option.title}
                    </button>
                ))}
            </div>
            {/* quantity and add button container */}
            <div className="flex justify-between items-center">
                <div className="flex justify-between w-full p-3 ring-1 ring-orange-500">
                    <span>Quantity</span>
                    <div className="flex gap-4">
                        <button className='uppercase font-bold' onClick={() => setQuantity(previous =>  (previous > 1 ? previous - 1 : 1))}>
                            -
                        </button>
                        <span className="" >{quantity}</span>
                        <button className='uppercase font-bold' onClick={() => setQuantity(previous => (previous < 100 ? previous + 1 : 100))}>
                            +
                        </button>
                    </div>
                </div>
                <button className='bg-green-500 w-56 text-white p-3 flex gap-2 uppercase'>
                    <span className=''>
                        Add to cart
                    </span>
                    <Image src={"/add_to_cart.png"} alt='order now' width={20} height={20} className=''/>
                </button>
            </div>
        </div>
     );
}
 
export default Price;