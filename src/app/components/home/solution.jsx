import { FaChartLine, FaBuilding, FaBalanceScale, FaBolt } from 'react-icons/fa';
import { LuCheckCircle } from "react-icons/lu";


const Solution = () => {
  return (
    <div className="container py-16 text-center">
      {/* Title Section */}
      <h2 className="text-3xl font-medium text-black mb-4">
        Trade and Invest Across 8 Markets with Access to 27,000+
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-10  text-sm font-medium">
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' /> Forex Trading</span>
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' /> Stock Trading</span>
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' /> Indices Trading</span>
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' /> Energy Trading</span>
      </div>

      {/* Trading Categories */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <div className="flex flex-col items-center">
          <FaChartLine className=" text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">Forex Trading</h3>
          <p className=" text-sm">All global currency pairs</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBuilding className="  text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">Stocks</h3>
          <p className=" text-sm">Over 600 companies</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBalanceScale className="  text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">Equity Indices</h3>
          <p className=" text-sm">Major global indices</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBolt className="  text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">CFDs on Energy</h3>
          <p className=" text-sm">Oil, Gas & all major energies</p>
        </div>
      </div>

      {/* Platform Section */}
      <h3 className="text-3xl font-medium text-black mb-6">
        <strong>Powerful </strong> <span  >Trading Platform</span>
      </h3>
      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-black text-white py-1 px-4 rounded-full focus:outline-none hover:bg-gray-800">MetaTrader 4</button>
        <button className="bg-gray-200 text-black py-1 px-4 rounded-full focus:outline-none hover:bg-gray-300">MetaTrader 5</button>
      </div>

      {/* MetaTrader 4 Description */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="text-left max-w-md">
          <h4 className="text-lg font-medium">MetaTrader 4</h4>
          <p className="text-xs ">Powered by GTCFX</p>
          <p className=" mt-3 text-sm">
            Established as the industry standard, it contains everything a trader needs. It offers many features like advanced technical analysis, flexible trading systems, Expert Advisors, as well as a mobile app.
          </p>
        </div>
        <div>
          <img src="/03.png" alt="MetaTrader 4" className="w-full max-w-md  rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
