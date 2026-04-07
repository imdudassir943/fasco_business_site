import React, { useState } from 'react';
import Testimonial1 from "../assets/Carousel/Carousel1st.png";
import Testimonial2 from "../assets/Carousel/Carousel2nd.png";
import Testimonial3 from "../assets/Carousel/Carousel3rd.png";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'James K.',
      role: 'Traveler',
      image: Testimonial1,
      rating: 5,
      text: '"You won\'t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"'
    },
    {
      id: 2,
      name: 'John W.',
      role: 'Designer',
      image: Testimonial2,
      rating: 5,
      text: '"I was looking for, thank you for making it hassle free and most of all hassle free! All we great."'
    },
    {
      id: 3,
      name: 'Sarah M.',
      role: 'Entrepreneur',
      image: Testimonial3,
      rating: 5,
      text: '"Amazing experience! The product exceeded all my expectations. Highly recommended to everyone!"'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-[#FAFAFA] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#484848] mb-4">
            This Is What Our Customers Say
          </h2>
          <p className="text-[#535353] text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-[500px] md:h-[400px] flex justify-center items-center overflow-hidden mb-8">
          {testimonials.map((testimonial, index) => {

            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + testimonials.length) % testimonials.length;
            const isNext =
              index === (currentIndex + 1) % testimonials.length;

            let positionClass =
              "z-0 opacity-0 scale-50 pointer-events-none hidden md:flex";

            if (isActive) {
              positionClass =
                "z-20 scale-100 translate-x-0 opacity-100 shadow-[0_15px_50px_rgba(0,0,0,0.1)]";
            } else if (isPrev) {
              positionClass =
                "z-10 scale-[0.75] -translate-x-[37%] opacity-100 shadow-md cursor-pointer";
            } else if (isNext) {
              positionClass =
                "z-10 scale-[0.75] translate-x-[53%] opacity-100 shadow-md cursor-pointer";
            }

            return (
              <div
                key={testimonial.id}
                onClick={() => !isActive && handleCardClick(index)}
                className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-md p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center w-[90%] md:w-[650px] transition-all duration-700 ease-in-out ${positionClass}`}
              >

                {/* Image - Updated: Solid box removed, shadow added to image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-md shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-grow text-left">

                  <p className="text-gray-600 text-sm md:text-[15px] mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-orange-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <div className="w-full h-px bg-gray-200 mb-6"></div>

                  <h3 className="text-xl md:text-2xl font-serif text-[#484848] mb-1">
                    {testimonial.name}
                  </h3>

                  <p className="text-[#535353] text-xs tracking-wider uppercase">
                    {testimonial.role}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsCarousel;