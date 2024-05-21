"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartIcon from './CartIcon';

const links = [
    { id: 1, title: "Home", url: "/"},
    { id: 2, title: "Menu", url: "/menu"},
    { id: 3, title: "Working Hours", url: "/"},
    { id: 4, title: "Contact", url: "/contact"}
]

const Menu = () => {
    const [open, setOpen] = useState(false)
    const user = false

    return ( 
        <div>
            {!open ? (<Image src={"/open-in-app.png"} alt='open menu' width={20} height={20}onClick={() => setOpen(true)} />) :
            (<Image src={"/close-circle.png"} alt='open menu' width={20} height={20} onClick={() => setOpen(false)}/>)}
            { open && <div className=' text-white bg-orange-500 absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                {links.map(link => <Link key={link.id} href={link.url} onClick={()=> setOpen(false)} >{link.title}</Link>)}
                { user ? (<Link href={"/login"} onClick={()=> setOpen(false)} >Login</Link>)
                 : (<Link href={"/orders"} onClick={()=> setOpen(false)} >Orders</Link>) }
                <CartIcon />
            </div> }
        </div>
     );
}
 
export default Menu;