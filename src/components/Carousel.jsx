import React, { useState } from 'react';
import '../styles/Carousel.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {pictures.length > 1 && (
        <>
          <button className="carousel-button left" onClick={prevSlide}>
            <FaChevronLeft className="chevron" />
          </button>
          <button className="carousel-button right" onClick={nextSlide}>
            <FaChevronRight className="chevron" />
          </button>
          <div className="carousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
