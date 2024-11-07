'use client'
import Image from "next/image";
import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HeroBanner = () => {
  const slides = [
    {
      img: "/03.png",
      heading: `Maximize Your <br /> Forex Trading Potential`,
      para: `
         <ul class="space-y-2 mt-6 text-lg">
              <li class="flex justify-center md:justify-start items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-2"></span>
                Leverage up to 500:1
              </li>
              <li class="flex justify-center md:justify-start items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-2"></span>
                Instant & Fast Execution
              </li>
              <li class="flex justify-center md:justify-start items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-2"></span>
                Negative Balance Protection
              </li>
            </ul>`
    },
    {
      img: "/banner2.webp",
      heading: "STOCK TRADING:",
      heading2: `<h1 class="text-2xl">Grow Your Investments</h1>`,
    },
    {
      img: "/banner3.webp",
      heading: "INDICES TRADING",
      heading2: `<h1 class="text-2xl">Trade The world's Market</h1>`,
    },
    {
      img: "/banner4.webp",
      heading: "ENERGY TRADING",
      heading2: `<h1 class="text-2xl">Power Your Portfolio with<br/> Dynamic Opportunities<h1>`
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const carouselRef = useRef(null); // Create a ref for the carousel

  // Function to manually navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
  };

  return (
    <section className="bg-black text-white pb-8">
      <Carousel
        ref={carouselRef} // Attach ref to the carousel
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
        afterChange={(previousSlide, { currentSlide }) => {
          setCurrentSlide(previousSlide); // Update current slide state on change
        }}
      >
        {slides.map((single, index) => (
          <div key={index} className="container relative z-10 grid gap-4 md:grid-cols-2 grid-cols-1 items-center justify-between min-h-[450px]">
            <div className="text-center md:text-left    order-2 md:order-1  ">
              <h1 className="md:text-4xl mb-2 text-2xl font-bold leading-snug"
                dangerouslySetInnerHTML={{ __html: single?.heading }}
              />

              <div dangerouslySetInnerHTML={{ __html: single?.para }} />
              <div className="md:!mb-16 !mb-4" dangerouslySetInnerHTML={{ __html: single?.heading2 }} />

              <button className="bg-secondary text-white py-1 px-10 rounded-lg font-medium hover:bg-secondary transition duration-300">
                Get started
              </button>
            </div>
            <div className="relative order-1 md:order-2 bg-no-repeat bg-contain bg-[url('/home-hero-bg.png')]"
              style={{ backgroundPosition: "right" }}
            >
              <Image
                src={single?.img}
                alt="Trading Platform"
                width={400}    // Set appropriate width for your image
                height={260}   // Set appropriate height for your image
                className="mx-auto"
              />
            </div>
          </div>
        ))}
      </Carousel>

      <div className="flex justify-center mt-4 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${currentSlide === index + 1 ? 'bg-secondary' : 'bg-gray-300'
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
