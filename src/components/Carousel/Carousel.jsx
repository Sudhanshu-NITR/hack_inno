import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/800x400?text=First+Slide",
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
    <div className="carousel z-10"x>
      <div className="carousel-inner ">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
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
