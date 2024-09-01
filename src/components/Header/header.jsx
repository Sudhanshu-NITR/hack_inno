import React from 'react';

function Header() {
    return (
        <div className='w-full'>
            <div className='w-full h-24 flex justify-center items-center'>
                <a href=""><img src="/header_logo.png" alt="Header Logo" className="h-16 mx-4 flex absolute left-0 top-4"/></a>
                <h1 className='flex text-[60px] font-exo2 text-white font-semibold'>Club Space</h1>
            </div>
        </div>
    );
}

// bg-[#393E46]

export default Header;