import React from 'react';
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
    return ( 
        <div className='h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-blue-500 uppercase'>
            <div className='text-xl'>
                <Link href={"/"}> Ske Restaurant</Link>
            </div>
            <div>
                <Menu />
            </div>
        </div>
     );
}
 
export default Navbar;