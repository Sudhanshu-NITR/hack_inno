import React, { useState } from "react";

export default function Pantomine() {
  const [showInductionOptions, setShowInductionOptions] = useState(false);
  const toggleInductionOptions = () => {
    setShowInductionOptions(!showInductionOptions);
  };

  return (
    <div className="relative z-10 bg-black bg-opacity-95 p-8 rounded-xl shadow-2xl m-6 max-w-[80%] mx-auto border-2 border-yellow-600">
      <h2 className="text-4xl font-bold font-serif text-orange-600 mb-6 border-b-2 border-blue-200 pb-2 text-center">
      Film & Music: Pantomine
      </h2>
      <div className="flex justify-center items-center">
        <div className="">
          <h3 className="text-2xl font-semibold text-white mb-4">About: </h3>
          <p className="text-white text-1xl mb-6">
          Pantomime, founded in 2008, is the official dramatics club of National Institute of Technology, Rourkela. Started by some of the dramatic enthusiasts alumni of the institute, it has grown over the years to be one of the most vigorous, vital, dynamic, and successful club of the institute. The working area of the club spans a variety of theatrical and street forms. Mimes, short films, stage plays, and street plays (Nukkad) are some of the art forms performed by the club in various festivals, functions, and competitions. Meaning of the word "PANTOMIME" in Latin means "imitator," and even this meaning stands close to the actual working of the club as drama is nothing but the imitation of actual human life.
          </p>
        </div>
        <div className="club-logo float-right">
          <img
            src="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679095515/Group_18132_utauci.png"
            alt="" className="h-28 w-[450px]"  
          />  
        </div>
      </div>
        
      <h3 className="text-2xl font-semibold text-white mb-4">Events:</h3>
      <ul className="list-disc list-inside text-1xl text-white space-y-2 pl-4">
        <li className="hover:text-orange-600 transition-colors duration-200">
          Orientation program for 1st year
        </li>
        <li className="hover:text-orange-600 text-1xl transition-colors duration-200">
          Street Plays
        </li>
        <li className="hover:text-orange-600 text-1xl transition-colors duration-200">
          Public Performance
        </li>
        <li className="hover:text-orange-600 text-1xl transition-colors duration-200">
          Short Films
        </li>
      </ul>

      <div className="mt-8">
        <button
          onClick={toggleInductionOptions}
          className="text-2xl font-semibold text-white bg-orange-600 py-2 px-4 rounded-lg shadow-md transform transition-transform duration-400 ease-in-out hover:scale-110"
        >
          Induction
        </button>

        {showInductionOptions && (
          <div className="mt-4 space-y-2">
            <button className="w-full text-lg font-medium text-white bg-green-500 hover:bg-green-600 transition-colors duration-300 py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-300">
              1st Year
            </button>
            <button className="w-full text-lg font-medium text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-300 py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300">
              2nd Year
            </button>
          </div>
        )}
      </div>

      <div className="mt-9 flex items-center">
        <a
          href="https://www.instagram.com/knights_club_nitr/"
          target="_blank"
          className="transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png"
            className="w-12 h-12"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/company/knights-club-nitr/"
          target="_blank"
          className="transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            className="w-12 h-12 ml-7"
          ></img>
        </a>
      </div>
    </div>
  );
}