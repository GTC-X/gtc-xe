
const HeroBanner = () => {
  return (
    <section
      className="bg-black text-white"
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
          <img src="/home-hero.png" alt="Trading Platform" className="w-full max-w-lg shadow-lg rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
