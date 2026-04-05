'use client';
import dealImage1 from "@/assets/dealSlider/dealslider1st.png"
import dealImage2 from "@/assets/dealSlider/dealslider2nd.png"
import dealImage3 from "@/assets/dealSlider/dealslider3rd.png"
import dealImage4 from "@/assets/dealSlider/dealslider4th.jpg"

import React, { useState, useEffect } from "react";

interface DealSlide {
  id: number;
  image: string;
  title: string;
  discount: string;
}

const DealsOfTheMonth: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30,
  });

  const slides: DealSlide[] = [
    {
      id: 1,
      image: dealImage1,
      title: "Spring Sale",
      discount: "30% OFF",
    },
    {
      id: 2,
      image: dealImage2,
      title: "Summer Collection",
      discount: "25% OFF",
    },
    {
      id: 3,
      image: dealImage3,
      title: "Winter Sale",
      discount: "40% OFF",
    },
    {
      id: 4,
      image: dealImage4,
      title: "Autumn Deals",
      discount: "35% OFF",
    },
  ];

  // Large enough array to prevent hitting the end in normal use
  const extendedSlides = Array(20).fill(slides).flat();
  const [currentSlide, setCurrentSlide] = useState(slides.length * 10); // Start nicely in the middle
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Seamless infinite reset
    if (currentSlide >= slides.length * 15) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide - slides.length * 10);
    } else if (currentSlide <= slides.length * 5) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide + slides.length * 10);
    }
  };

  // Restore transition after seamless reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    const currentActual = currentSlide % slides.length;
    const diff = index - currentActual;
    setCurrentSlide(currentSlide + diff);
  };

  return (
    <section className="w-full bg-white py-16 pl-4 md:pl-8 lg:pl-16 overflow-hidden">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                Deals Of The Month
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
                sollicitudin
              </p>
            </div>

            <button className="bg-black text-white px-12 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg w-fit">
              Buy Now
            </button>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Hurry, Before It&apos;s Too Late!
              </h3>
              <div className="flex gap-3">
                {[
                  { label: "Days", val: timeLeft.days },
                  { label: "Hr", val: timeLeft.hours },
                  { label: "Mins", val: timeLeft.minutes },
                  { label: "Sec", val: timeLeft.seconds },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 min-w-[60px] shadow-sm">
                      <span className="text-3xl font-['DS-Digital'] tracking-wider text-gray-800 flex items-center justify-center">
                        {formatNumber(item.val)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Image Slider */}
        <div className="relative flex items-center min-w-0">
          {/* Navigation Arrows - Vertically stacked on the far left of the images */}
          <div className="flex flex-col gap-4 mr-4 self-end mb-12 relative z-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Images Container */}
          <div className="flex-1 overflow-hidden">
            <div 
              className={`flex gap-6 items-start w-max ${isTransitioning ? "transition-transform duration-[800ms] ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentSlide * 264}px)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSlides.map((slide, idx) => {
                const isFirst = idx === currentSlide;
                const isSecond = idx === currentSlide + 1;

                return (
                  <div
                    key={`${slide.id}-${idx}`}
                    className={`relative flex-shrink-0 transition-all duration-[800ms] ease-in-out ${isFirst ? "w-[320px]" : "w-[240px]"}`}
                  >
                    <div className={`relative overflow-hidden bg-gray-100 transition-all duration-[800ms] ease-in-out ${isFirst ? "h-[480px]" : "h-[420px]"}`}>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Sales Card on First Image */}
                      {isFirst && (
                        <div className="absolute bottom-6 left-6 bg-white px-5 py-4 rounded-sm shadow-xl z-10 min-w-[160px]">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-400 font-medium">{String(slide.id).padStart(2, "0")}</span>
                            <span className="text-gray-300">—</span>
                            <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">{slide.title}</span>
                          </div>
                          <p className="text-xl font-bold text-gray-900">{slide.discount}</p>
                        </div>
                      )}
                    </div>

                    {/* Dots Indicator - Centered under the Second Image only */}
                    {isSecond && (
                      <div className="flex justify-center gap-2 mt-6">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`rounded-full transition-all ${index === (currentSlide % slides.length)
                                ? "bg-gray-900 w-2.5 h-2.5"
                                : "bg-gray-300 w-2 h-2"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheMonth;