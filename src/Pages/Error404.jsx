import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <img src="https://i.ibb.co.com/YQb5kfv/6578-3840x2160-desktop-4k-assassins-creed-wallpaper-image.jpg" alt="" className='h-screen w-full' />

            <div className='absolute z-10 top-[30%] left-[16%] space-y-4 bg-opacity-50'>
                <h1 className='text-6xl font-extrabold text-gray-700 drop-shadow-lg'>404 - Page Not Found</h1>
                <p className='text-lg text-gray-700 drop-shadow-lg'>Oops! It looks like the page you’re searching for has gone missing or never existed.</p>
                <Link to='/' className='btn bg-transparent hover:bg-white text-black font-bold'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error404;