import React, { useState } from "react";

export default function MechanicalClub() {
  const [showInductionOptions, setShowInductionOptions] = useState(false);
  const toggleInductionOptions = () => {
    setShowInductionOptions(!showInductionOptions);
  };

  return (
    <div className="relative z-10 bg-black bg-opacity-95 p-8 rounded-xl shadow-2xl m-6 max-w-[80%] mx-auto border-2 border-yellow-600">
      <h2 className="text-4xl font-bold font-serif text-red-400 mb-6 border-b-2 border-red-100 pb-2 text-center">
        Technical Society: Mechanical Club
      </h2>
      <div className="flex justify-center items-center">
        <div className="">
          <h3 className="text-2xl font-semibold text-white mb-4">About: </h3>
          <p className="text-white text-1xl mb-6">
            The Mechanical Club of NIT Rourkela is dedicated to providing a
            platform for students to enhance their technical and practical
            skills in the field of mechanical engineering. The club organizes
            workshops, technical talks, and projects that help students gain
            hands-on experience and prepare them for the challenges of the
            industry.
          </p>
        </div>
        <div className="club-logo float-right ml-4">
          <img
            src="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679094978/Group_18128_yjg90h.png"
            alt="Mechanical Club Logo"
            className="h-28 w-80 border-gray-200 border-2 rounded-md"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4">Events:</h3>
      <ul className="list-disc list-inside text-1xl text-white space-y-2 pl-4">
        <li className="hover:text-red-600 transition-colors duration-200">
          Orientation program for 1st year
        </li>
        <li className="hover:text-red-600 text-1xl transition-colors duration-200">
          Exciting Mechanical Projects
        </li>
        <li className="hover:text-red-600 text-1xl transition-colors duration-200">
          Year-long induction for sophomores
        </li>
      </ul>

      <div className="mt-8">
        <button
          onClick={toggleInductionOptions}
          className="text-2xl font-semibold text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg shadow-md transform transition-transform duration-400 ease-in-out hover:scale-110"
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
          href="https://www.instagram.com/mechanical.club/"
          target="_blank"
          className="transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png"
            className="w-12 h-12"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/company/mechanical-club/"
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
