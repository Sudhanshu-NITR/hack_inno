import React, { useState } from 'react';
import './Carousel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/kp/c7291e7f-f7cf-4a0d-bc16-a3098a1bdcc7",
    "https://via.placeholder.com/800x400?text=Second+Slide",
    "https://via.placeholder.com/800x400?text=Third+Slide"
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel z-10 bg-[#393E46]">
      <div className="carousel-inner">
        <div className="image-container">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image h-60" />
        </div>
        <div className="text-container font-serif">
          <h2 className="text-4xl font-bold mb-2">HackInnovision</h2>
          <ol>
            <li className="text-xl  "><i class="fa-regular fa-calendar mr-2"></i>Saturday, Aug 31</li>
            <div className='flex '>
              <i class="fa-solid fa-location-dot mt-2 ml-1 mr-2"></i>
              <li className="text-xl">National Institute of Technology, Rourkela, Odisha</li>
            </div>
          </ol>
          <p className="text-lg text-red-500 font-semibold mt-4">Registrations Closed</p>
        </div>
      </div>
      <button className="carousel-control-prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-control-next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
