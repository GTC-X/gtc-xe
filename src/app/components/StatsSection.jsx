import React from 'react'

const StatsSection = () => {
    return (
      <section className="bg-[#101d23] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          
          {/* Stat 1 */}
          <div className="text-white">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center border-2 border-green-500 rounded-full">
              <span className="text-green-500 text-3xl font-bold">+10</span>
            </div>
            <p className="mt-4 text-white">Tiers Market Depth</p>
          </div>
  
          {/* Stat 2 */}
          <div className="text-white">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center border-2 border-green-500 rounded-full">
              <span className="text-green-500 text-3xl font-bold">+27K</span>
            </div>
            <p className="mt-4 text-white">Trading Instruments</p>
          </div>
  
          {/* Stat 3 */}
          <div className="text-white">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center border-2 border-green-500 rounded-full">
              <span className="text-green-500 text-3xl font-bold">10ms</span>
            </div>
            <p className="mt-4 text-white">Fast & Secure Execution</p>
          </div>
  
          {/* Stat 4 */}
          <div className="text-white">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center border-2 border-green-500 rounded-full">
              <span className="text-green-500 text-3xl font-bold">8</span>
            </div>
            <p className="mt-4 text-white">Financial Markets</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  