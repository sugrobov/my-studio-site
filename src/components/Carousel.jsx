import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1200x600/355EFC/FFFFFF?text=Financial+Services',
      title: 'Your Financial Status Is Our Goal',
      subtitle: 'Welcome to Finanza',
      button: 'Explore More'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1200x600/E93C05/FFFFFF?text=Financial+Support',
      title: 'True Financial Support For You',
      subtitle: 'Welcome to Finanza',
      button: 'Explore More'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          {slides.map((slide, index) => (
            <div class={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
              <img class="w-100" src={slide.image} alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-lg-8">
                      <p class="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                        {slide.subtitle}
                      </p>
                      <h1 class="display-1 mb-4 animated slideInDown">{slide.title}</h1>
                      <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">{slide.button}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div class="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              class={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}