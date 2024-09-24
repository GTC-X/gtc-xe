import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-[#244f62] to-[#181818] text-white" 
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-[url(/home/eye-tech.webp)] bg-contain bg-bottom bg-no-repeat opacity-30 pointer-events-none" 
      />

      {/* Content Section */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-[600px] md:h-[800px]">
        {/* Left Text Section */}
        <div className="w-full lg:w-[600px] text-center lg:text-left">
          <h1 className="text-3xl md:text-[45px] font-bold mb-4 leading-tight">
            PREMIER <br/> LIQUIDITY PROVIDER
          </h1>
          <div className='md:w-[450px]'>
            <p className="text-md md:text-lg text-gray-300 flex flex-col md:flex-row justify-between">
              <span>Deep Pool Of Liquidity</span>
              <span>Competitive Spreads</span>
            </p>
            <p className="text-md md:text-lg text-gray-300 mb-5  flex flex-col md:flex-row justify-between">
              <span>Advanced Technology</span>
              <span>Global Reach</span>
            </p>
          </div>
          <Link href="/liquidity" className="inline-block bg-[#65bc7b] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#fff] hover:text-primary transition">
            Learn More
          </Link>
        </div>
      </div>

      {/* SVG Shape at the bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-[180px] fill-current text-[#ffffff]"
        >
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
