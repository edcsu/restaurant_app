"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const links = [
    { id: 1, title: "Home", url: "/"},
    { id: 2, title: "Menu", url: "/menu"},
    { id: 3, title: "Working Hours", url: "/"},
    { id: 4, title: "Contact", url: "/contact"}
]

const Menu = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <div>
            {!open ? (<Image src={"/open-in-app.svg"} alt='open menu' width={20} height={20}onClick={() => setOpen(true)} />) :
            (<Image src={"/close-circle.svg"} alt='open menu' width={20} height={20} onClick={() => setOpen(false)}/>)}
            <div className='bg-brown-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                {links.map(link => <Link key={link.id} href={link.url}>{link.title}</Link>)}
                <Link href={"/login"}>Login</Link>
                <Link href={"/cart"}>Cart</Link>
            </div>
        </div>
     );
}
 
export default Menu;