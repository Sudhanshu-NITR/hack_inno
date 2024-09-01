import React, { useState } from "react";

export default function Cognizen() {
  const [showInductionOptions, setShowInductionOptions] = useState(false);
  const toggleInductionOptions = () => {
    setShowInductionOptions(!showInductionOptions);
  };

  return (
    <div className="bg-black p-8 rounded-xl shadow-2xl m-6 max-w-[80%]  mx-auto border-2 border-yellow-600">
      <h2 className="text-4xl font-bold font-serif text-yellow-600 mb-6 border-b-2 border-blue-200 pb-2 text-center">
      Literary & Cultural: Cognizen
      </h2>
      <div className="flex justify-center items-center">
        <div className="">
          <h3 className="text-2xl font-semibold text-white mb-4">About: </h3>
          <p className="text-white text-1xl mb-6">
Kalaam is the poetry club of NIT Rourkela which promotes poetry in all it's forms and languages. It began with a team of poets, writers and story tellers with a vision to have a platform for nurturing the blissful poetry culture. We at Kalaam believe that through poetry one can bring life to emotions and can express without any fear of judgements. We are a team of writers, poets, designers and instrumentalists with a passion of creating magic through poetry, expressing freely and instilling the same within the audience.
          </p>
        </div>
        <div className="club-logo float-right">
          <img
            src="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679086183/Group_18117_nwcsv7.png"
            alt="" className="h-28 w-96 border-yellow-400 border-2 rounded-md"  
          />  
        </div>
      </div>
        
      <h3 className="text-2xl font-semibold text-white mb-4">Events:</h3>
      <ul className="list-disc list-inside text-1xl text-white space-y-2 pl-4">
        <li className="hover:text-yellow-600 transition-colors duration-200">
          Orientation program for 1st year
        </li>
        <li className="hover:text-yellow-600 text-1xl transition-colors duration-200">
          Poetry Competions
        </li>
        <li className="hover:text-yellow-600 text-1xl transition-colors duration-200">
          Writing Competitions
        </li>
        <li className="hover:text-yellow-600 text-1xl transition-colors duration-200">
          Year-long induction for sophomores
        </li>
      </ul>

      <div className="mt-8">
        <button
          onClick={toggleInductionOptions}
          className="text-2xl font-semibold text-white bg-yellow-600 py-2 px-4 rounded-lg shadow-md transform transition-transform duration-400 ease-in-out hover:scale-110"
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
          href="https://www.instagram.com/kalaam_nitr/"
          target="_blank"
          className="transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png"
            className="w-12 h-12"
          ></img>
        </a>
      </div>
    </div>
  );
}