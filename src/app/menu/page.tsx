import React from "react";
import { menu } from "../../../data";
import Link from "next/link";
import Image from 'next/image';

const MenuPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center">
            {menu.map( category => (
                <Link href={category.slug} key={category.id} className="w-full h-1/3 bg-cover p-8 md:h-1/2" style={{ backgroundImage: `url(${category.img})`}}>
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                        <p className="text-sm my-8">{category.desc}</p>
                    </div>
                    <button className={`hidden 2xl:flex bg-${category.color} text-${category.color === "black" ? "white" : "orange"} py-3 px-4 rounded-md gap-2`}>
                        <span>
                            Explore
                        </span>
                        <Image src={`${category.color === "black" ? "/food-white.png" : "/food.png"}`} alt='explore' width={20} height={20} className=''/>
                    </button>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage;