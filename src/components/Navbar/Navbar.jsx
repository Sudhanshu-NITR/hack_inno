import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ setShowCarousel }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const clubs = {
    'Technical': [
      { name: 'APS', path: '/Clubs/APS', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679086069/aps_logo_1_nqjlq0.jpg' },
      { name: 'CYBORG', path: '/Clubs/Cyborg', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679160025/Group_14_zfj3sc.png' },
      { name: 'OPEN CODE', path: '/Clubs/Opencode', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968578/opencode_logo_-_Swatishree_Mahapatra_axvklg.jpg' },
      { name: 'ASME', path: '/Clubs/ASME', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679094978/Group_18128_yjg90h.png' },
      { name: 'Axiom', path: '/Clubs/Axiom', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/v1679095362/Group_18131_x6oegc.png' }
    ],
    'Literary & Cultural': [
      { name: 'Cognizen', path: '/Clubs/Cognizen', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968572/cognizen_logo-1_-_Akankshya_Dash_yfwktv.png' },
      { name: 'Kalaam', path: '/Clubs/Kalaam', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679086183/Group_18117_nwcsv7.png' },
      { name: 'Chitraang', path: '/Clubs/Chitraang', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968569/AAA01_4x_-_Prachi_pratikshya_Dansana_eejj45.png' },
      { name: 'Aspirants-NITR', path: '/Clubs/Aspirants', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679085811/Group_18116_1_rdqcd4.png' }
    ],
    'Games & Sports': [
      { name: 'Knights', path: '/Clubs/Knights', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679160025/knight_club_-_Shourya_Gyanvarsha_bodjoh.png' },
      { name: 'Cricket Club', path: '/Clubs/Cricket', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679160025/knight_club_-_Shourya_Gyanvarsha_bodjoh.png' },
      { name: 'Football Club', path: '/Clubs/Chess', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679160025/knight_club_-_Shourya_Gyanvarsha_bodjoh.png' }
    ],
    'Film & Music': [
      { name: 'Pantomine', path: '/Clubs/Music', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679095515/Group_18132_utauci.png' },
      { name: 'Mavericks', path: '/Clubs/Mavericks', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968577/MicrosoftTeams-image_-_Krithika_Mudavath_i49hoo.jpg' },
      { name: 'Ritivc', path: '/Clubs/Ritvic', logo: 'https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1678968579/RITVIC_color-01_-_RITVIC_-_NIT_Rourkela_guyr4n.png' }
    ],
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

  useEffect(() => {
    setShowCarousel(true);
  }, [location, setShowCarousel]);

  return (
    <div className='relative z-50 mb-8 opacity-95'>
      <div className="mt-4 font-exo2">
        <div className="mx-auto bg-[#393E46] h-16 rounded-xl flex justify-center items-center shadow-xl shadow-black p-2 max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          {Object.keys(clubs).map((category) => (
            <div
              key={category}
              className="mx-2 sm:mx-4 rounded-md px-1 bg-black hover:bg-yellow-400 transform transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={() => handleCategoryClick(category)}
            >
              <span className="text-white hover:text-black text-[12px] sm:text-[16px] grid md:grid-cols-1 p-2 font-semibold cursor-pointer">
                {category}
              </span>
            </div>
          ))}

          <div
            className="mx-2 sm:mx-4 relative rounded-2xl p-1 hover:bg-red-300 text-black bg-black transform transition-transform duration-300 ease-in-out hover:scale-110 z-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-white hover:text-black text-[12px] sm:text-[16px] p-2 font-semibold cursor-pointer">
              Events
            </span>
            {isHovered && (
              <div
                className="absolute mt-1 w-40 sm:w-60 bg-black shadow-lg rounded-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ul className="text-black">
                  <li className="px-2 py-1 sm:py-2 text-red-500 hover:bg-black-300 text-[12px] sm:text-[16px] font-semibold">
                    <a href="https://lu.ma/vgl8k90q" target='_blank'>Hack Innovison 1.0 <br /> Aug 31st- Sep 1st, 2024</a>
                  </li>
                  <li className="px-2 py-1 sm:py-2 text-white hover:text-black hover:bg-red-300 text-[12px] sm:text-[16px] font-semibold">
                    <a href="/events/inter-nit-sports" target='_blank'>Inter NIT Sports<br />Sep 18th-20th, 2024</a>
                  </li>
                  <li className="px-2 py-1 sm:py-2 text-white hover:text-black hover:bg-red-300 text-[12px] sm:text-[16px] font-semibold">
                    <a href="https://hacknitr.com/" target='_blank'>HackNITR 6.0 <br /> Nov 16th-17th, 2024</a>
                  </li>
                  <li className="px-2 py-1 sm:py-2 text-white hover:text-black hover:bg-red-300 text-[12px] sm:text-[16px] font-semibold">
                    <a href="https://unstop.com/hackathons/algoutsav-2024-nit-rourkela-905708" target='_blank'>AlgoUtsav <br /> Feb 1st, 2025</a>
                  </li>
                  <li className="px-2 py-1 sm:py-2 text-white hover:text-black hover:bg-red-300 text-[12px] sm:text-[16px] font-semibold">
                    <a href="https://www.nitrutsav.com/" target='_blank'>NitrUtsav <br /> Feb 7th-9th, 2025</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {activeCategory && (
        <div className="mt-4 mx-auto bg-gray-700 rounded-2xl p-4 text-white shadow-xl shadow-black max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{activeCategory} Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {clubs[activeCategory].map((club, index) => (
              <Link to={club.path} key={index}>
                <div className="bg-[#393E46] p-4 sm:p-6 rounded-lg text-center shadow-md hover:shadow-2xl transition-shadow duration-300 h-28 sm:h-40 flex items-center justify-center">
                  <img
                    src={club.logo}
                    alt={`${club.name} logo`}
                    className="w-16 sm:w-24 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{club.name}</h3>
                    <p className="text-xs sm:text-sm">Description of {club.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
