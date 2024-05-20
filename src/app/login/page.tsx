import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
            {/* Box */}
            <div className='h-full shadow-xl rounded-md flex flex-col md:flex-row'>
                {/* image container */}
                <div className='relative'>
                    <Image src={"/login.svg"} alt='login' fill />
                </div>
                {/* form container */}
                <div className=''>
                    <h1>Welcome</h1>
                    <p>
                        Log into your account or create a new one using the social buttons
                    </p>
                    <button className='flex gap-4 ring-1 ring-orange-100 rounded-md'>
                        <Image src={"/google.svg"} alt='login' height={20} width={20} className='onject-contain'/>
                        <span>Sign in with Google</span>
                    </button>
                    <button className='flex gap-4 ring-1 ring-orange-100 rounded-md'>
                        <Image src={"/facebook.svg"} alt='login' height={20} width={20} className='onject-contain'/>
                        <span>Sign in with Facebook</span>
                    </button>
                    <p>Have a problem? <Link href={"/"} className='text-underline'>Contact us</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage