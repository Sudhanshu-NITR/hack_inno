import React, { useState } from 'react';

function Navbar({ setShowCarousel }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const clubs = {
    Technical: ['APS', 'CYBORG', 'OPEN CODE', 'GDSC'],
    'Literary & Cultural': ['Debate Club', 'Drama Club', 'Photography Club'],
    'Games & Sports': ['Football Club', 'Cricket Club', 'Chess Club'],
    'Film & Music': ['Music Club', 'Film Club', 'Dance Club'],
  };

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      setShowCarousel(true);
    } else {
      setActiveCategory(category);
      setShowCarousel(false);
    }
  };

  return (
    <div className='mb-8'>
      <div className="mt-4">
        <div className="mx-48 bg-[#393E46] h-16 rounded-2xl  flex justify-center items-center shadow-xl shadow-black p-2">
          {['Technical', 'Literary & Cultural', 'Games & Sports', 'Film & Music'].map((category) => (
            <div
              key={category}
              className="mx-4 rounded-2xl p-1 bg-black hover:bg-yellow-400  transform transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={() => handleCategoryClick(category)}
            >
              <span className="text-white hover:text-black text-[16px] p-2 font-semibold cursor-pointer">
                {category}
              </span>
            </div>
          ))}

          <div
            className="mx-4 relative rounded-2xl p-1 hover:bg-red-300 text-black bg-black transform transition-transform duration-300 ease-in-out hover:scale-110 z-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-white hover:text-black text-[16px] p-2 font-semibold cursor-pointer">
              Events
            </span>
            {isHovered && (
              <div
                className="absolute mt-1 w-60 bg-black shadow-lg rounded-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ul className="text-black">
                  <li className="px-2 py-2 text-white hover:text-black hover:bg-red-300 text-[16px] p-2 font-semibold">
                    <a href="./">Hack Innovison 1.0 <br /> August 24th-25th, 2024</a>
                  </li>
                  <li className="px-2 py-2 text-white hover:text-black hover:bg-red-300 text-[16px] p-2 font-semibold">
                    <a href="./">Inter NIT Sports<br />September 18th-20th, 2024</a>
                  </li>
                  <li className="px-2 py-2 text-white hover:text-black hover:bg-red-300 text-[16px] p-2 font-semibold">
                    <a href="./">HackNITR 6.0 <br /> November 16th-17th, 2024</a>
                  </li>
                  <li className="px-2 py-2 text-white hover:text-black hover:bg-red-300 text-[16px] p-2 font-semibold">
                    <a href="./">AlgoUtsav <br /> February 1st, 2025</a>
                  </li>
                  <li className="px-2 py-2 text-white hover:text-black hover:bg-red-300 text-[16px] p-2 font-semibold">
                    <a href="./">NitrUtsav <br /> February 7th-9th, 2025</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {activeCategory && (
        <div className="mt-4 mx-48 bg-gray-700 rounded-2xl p-4 text-white shadow-xl shadow-black">
          <h2 className="text-2xl font-bold mb-4">{activeCategory} Clubs</h2>
          <div className="grid grid-cols-3 gap-4">
            {clubs[activeCategory].map((club, index) => (
              <div
                key={index}
                className="bg-[#393E46] p-20 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{club}</h3>
                <p className="text-sm">Description of {club}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
