import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Слайды с градиентами вместо внешних изображений
  const slides = [
    {
      id: 1,
      gradient: 'linear-gradient(135deg, #355EFC 0%, #5A8DFF 100%)',
      title: 'Your Financial Status Is Our Goal',
      subtitle: 'Welcome to Finanza',
      button: 'Explore More'
    },
    {
      id: 2,
      gradient: 'linear-gradient(135deg, #E93C05 0%, #FF6B35 100%)',
      title: 'True Financial Support For You',
      subtitle: 'Welcome to Finanza',
      button: 'Explore More'
    },
    {
      id: 3,
      gradient: 'linear-gradient(135deg, #00B894 0%, #00D8A7 100%)',
      title: 'Innovative IT Solutions',
      subtitle: 'RS-SOFT Technologies',
      button: 'Learn More'
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
    <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ background: slide.gradient }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-8">
              <p className="inline-block border border-white/50 rounded-full text-white font-medium py-1 px-4 mb-4 title-font">
                {slide.subtitle}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl title-font">
                {slide.title}
              </h1>
              <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 title-font">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Навигационные кнопки */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}