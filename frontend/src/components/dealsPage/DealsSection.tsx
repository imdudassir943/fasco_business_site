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
  const [currentSlide, setCurrentSlide] = useState(0);
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
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % slides.length;
      visible.push({ ...slides[index], position: i });
    }
    return visible;
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
        <div className="relative flex items-center">
          {/* Navigation Arrows - Vertically stacked on the far left of the images */}
          <div className="flex flex-col gap-4 mr-4 self-end mb-12">
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
          <div className="flex gap-6 flex-1 items-start">
            {getVisibleSlides().map((slide, idx) => {
              const isFirst = idx === 0;
              const isSecond = idx === 1;

              return (
                <div
                  key={`${slide.id}-${currentSlide}`}
                  className={`relative flex-shrink-0 transition-all duration-500 ${isFirst ? "w-[320px]" : "w-[240px]"
                    }`}
                >
                  <div className={`relative overflow-hidden bg-gray-100 ${isFirst ? "h-[480px]" : "h-[420px]"
                    }`}>
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
                          onClick={() => setCurrentSlide(index)}
                          className={`rounded-full transition-all ${index === currentSlide
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
    </section>
  );
};

export default DealsOfTheMonth;