'use client'
import Carousel from "react-multi-carousel";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const HeroBanner = () => {
  return (
    <section
      className="bg-black text-white"
    >
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 2"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="transition-transform duration-1000 ease-in-out carousel-item-padding-40-px"
        >
        <div className="container relative z-10 flex items-center justify-between h-[600px] md:h-[700px]">
          <div className="text-center md:text-left space-y-6 max-w-md">
            <h1 className="text-4xl font-bold leading-snug">
              Maximize Your <br /> Forex Trading Potential
            </h1>

            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Leverage up to 500:1
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Instant & Fast Execution
              </li>
              <li className="flex items-center">
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
        <div className="container relative z-10 flex items-center justify-between h-[600px] md:h-[700px]">
          <div className="text-center md:text-left space-y-6 max-w-md">
            <h1 className="text-4xl font-bold leading-snug">
              GTCFX
            </h1>

            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Leverage up to 500:1
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Instant & Fast Execution
              </li>
              <li className="flex items-center">
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
    </section >
  );
};

export default HeroBanner;
