import React from 'react';

function Header() {
    return (
        <div className='w-full'>
            <div className='w-full h-24 flex justify-center items-center'>
                <a href=""><img src="/header_logo.png" alt="Header Logo" className="h-12 md:h-16 lg:h-20 mx-4 flex absolute left-0 top-4"/></a>
                <h1 className='flex text-[30px] lg:text-[60px] md:text-[44px] font-exo2 text-white font-semibold'>CampusCrew</h1>
            </div>
        </div>
    );
}

export default Header;