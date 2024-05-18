import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
    const user = false
    return ( 
        <div className='h-12 md:h-24 lg:px-29 xl:px-40 text-blue-500 p-4 flex items-center justify-between gap-2 border-b-2 border-b-blue-500 uppercase'>
            {/* left links */}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href={"/"}> Home</Link>
                <Link href={"/menu"}> Menu</Link>
                <Link href={"/contact"}> Contact</Link>
            </div>
            <div className='text-xl md:font-bold md:text-center'>
                <Link href={"/"}> Ske Restaurant</Link>
            </div>
            {/* mobile menu */}
            <div className='md:hidden flex-1'>
                <Menu />
            </div>
            {/* right links */}
            <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
                <div className='bg-orange-300 p-1 rounded-md md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer'>
                    <Image src={"phone.svg"} width={20} height={20} alt='phone' />
                    <span>+256701123123</span>
                </div>
                {!user ? (<Link href={"/login"}> Login</Link>)
                :(<Link href={"/orders"}> Orders</Link>)}
                <CartIcon />
            </div>
        </div>
     );
}
 
export default Navbar;