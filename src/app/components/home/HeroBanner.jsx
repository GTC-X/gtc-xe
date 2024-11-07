'use client'
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HeroBanner = () => {
  const slides = [{}, {}];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to manually navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-black text-white pb-8">
      <Carousel
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 1s ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="transition-transform duration-1000 ease-in-out carousel-item-padding-40-px"
        afterChange={() => {

          setCurrentSlide(currentSlide == 1 ? 0 : 1)
        }} // Update current slide state on change
      >
        <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-[450px]">
          <div className="text-center md:text-left space-y-6 max-w-md">
            <h1 className="md:text-4xl text-2xl font-bold leading-snug">
              Maximize Your <br /> Forex Trading Potential
            </h1>
            <ul className="space-y-2 text-lg">
              <li className="flex justify-center md:justify-start items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Leverage up to 500:1
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Instant & Fast Execution
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Negative Balance Protection
              </li>
            </ul>
            <button className="bg-secondary text-white py-1 px-10 rounded-lg font-medium hover:bg-secondary transition duration-300">
              Get started
            </button>
          </div>
          <div className="relative bg-contain bg-[url('/home-hero-bg.png')]">
            <img src="/03.png" alt="Trading Platform" className="w-full max-w-lg shadow-lg rounded-lg" />
          </div>
        </div>

        <div className="container relative z-10 flex items-center flex-col-reverse md:flex-row justify-between min-h-[450px]">
          <div className="text-center md:text-left space-y-6 max-w-md">
            <h1 className="md:text-4xl text-2xl font-bold leading-snug">GTCFX</h1>
            <ul className="space-y-2 text-lg">
              <li className="flex justify-center md:justify-start items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Leverage up to 500:1
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Instant & Fast Execution
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Negative Balance Protection
              </li>
            </ul>
            <button className="bg-secondary text-white py-1 px-10 rounded-lg font-medium hover:bg-secondary transition duration-300">
              Get started
            </button>
          </div>
          <div className="relative bg-contain bg-[url('/home-hero-bg.png')]">
            <img src="/home-hero.png" alt="Trading Platform" className="w-full max-w-lg shadow-lg rounded-lg" />
          </div>
        </div>
      </Carousel>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-secondary' : 'bg-gray-300'
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
