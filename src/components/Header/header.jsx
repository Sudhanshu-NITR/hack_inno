import React from 'react';

function Header() {
    return (
        // <div className='w-full'>
            <div className='w-full h-20 bg-[#393E46] flex justify-center'>
                <a href="./"><img src="/header_logo.png" alt="Header Logo" className="h-16 mx-4 flex absolute left-0 top-1"/></a>
                <h1 className='flex text-[50px] text-white font-[georgia]'>Club Space</h1>
            </div>
        // </div>
    );
}

export default Header;
