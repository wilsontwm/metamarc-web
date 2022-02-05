import { useEffect, useState, useRef } from "react";
import Swipe from "react-easy-swipe";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Carousel(props) {
  const slides = useRef(props.slides);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slides.current?.length > 0 && isPaused === false) {
        setCurrentSlide((prev) => {
          return prev === slides.current.length - 1 ? 0 : prev + 1;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    let newSlide = currentSlide === slides.current?.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide = currentSlide === 0 ? slides.current?.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="w-full h-64 sm:h-80 md:h-128 flex overflow-hidden relative">
      {slides.current?.map((slide, index) => {
        return (
          <div key={index} className={`w-full h-auto ${index === currentSlide ? "block" : "hidden"}`}>
            <span className="mt-8 md:mt-16 lg:mt-32 ml-6 sm:ml-16 text-white absolute justify-center w-1/2 sm:w-1/3">
              <h4 className="text-lg sm:text-xl font-bold">Featured Artist of the month</h4>
              <hr className="my-2 md:my-6" />
              <span className="mt-16 md:mt-32 text-2xl sm:text-6xl font-extrabold">{slide.name}</span>
              <div>
                <a href={slide.redirectUrl} className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-8 py-1 border border-transparent shadow-sm text-white font-medium text-white bg-black hover:bg-gray-600">
                  Explore
                </a>
              </div>
            </span>
            <img
              src={slide.imageUrl}
              alt={slide.name}
              className="w-full h-full object-cover"
              onMouseEnter={() => {
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
              }}
            />
          </div>
        );
      })}

      <div className="absolute w-full flex justify-center bottom-0">
        {slides.current?.map((element, index) => {
          return (
            <div
              className={`h-1 w-16 mx-2 mb-2 sm:mb-4 lg:mb-8 cursor-pointer ${index === currentSlide ? "bg-primary-600 " : "bg-white"}`}
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
