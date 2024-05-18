import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return ( 
        <footer className="bg-white">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <Link href="/">
                    <Image className="w-auto h-10 md:h-20 xl:h-20" src={"/logo.jpeg"} width={100} height={100} alt="logo" />
                </Link>

                <p className="text-sm text-gray-600">© Copyright 2023. All Rights Reserved.</p>

                <div className="flex -mx-2">
                <Link href="https://github.com/edcsu" className='mx-2'>
                        <Image className="w-auto h-7" src={"/github.svg"} width={100} height={100} alt="github" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129/" className='mx-2'>
                        <Image className="w-auto h-7" src={"/linkedin.svg"} width={100} height={100} alt="linkedin" />
                    </Link>
                    <Link href="https://sewaportfolio.web.app" className='mx-2'>
                        <Image className="w-auto h-7 fill-current" src={"/web.svg"} width={100} height={100} alt="website" />
                    </Link>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;