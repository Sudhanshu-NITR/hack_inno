import React from 'react'

function Navbar() {
    return (
        <div className="mt-4">
            <div className="mx-48 bg-[#393E46] h-16 rounded-2xl flex justify-center items-center shadow-xl shadow-black p-2">

                <div className="mx-4 rounded-2xl p-1 hover:bg-white bg-black transform transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="./" className=" text-white hover:text-black text-[16px] p-2 font-semibold">
                    Technical
                </a>
                </div>

                <div className="mx-4 rounded-2xl p-1 hover:bg-yellow-200 bg-black transform transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="" className=" text-white hover:text-black text-[16px] p-2 font-semibold">
                    Literary & Cultural
                </a>
                </div>

                <div className="mx-4 rounded-2xl p-1 hover:bg-blue-500 bg-black transform transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="" className=" text-white hover:text-black text-[16px] p-2 font-semibold">
                    Games & Sports
                </a>
                </div>

                <div className="mx-4 rounded-2xl p-1 hover:bg-green-300 bg-black transform transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="" className=" text-white hover:text-black text-[16px] p-2 font-semibold">
                    Film & Music
                </a>
                </div>

                <div className="mx-4 rounded-2xl p-1 hover:bg-red-300 bg-black transform transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="" className=" text-white hover:text-black text-[16px] p-2 font-semibold">
                    Events
                </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
