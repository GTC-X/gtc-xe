import React from 'react';

const bridgeData = [
  {
    title: "Multi-Platform Connectivity",
    description: "Our bridges seamlessly connect traders to a wide range of trading platforms and liquidity providers, enabling access to diverse liquidity pools and trading opportunities."
  },
  {
    title: "Optimized Performance",
    description: "Max Tech bridges are optimized for performance, ensuring fast and reliable order execution. With minimal latency, traders can capitalize on market opportunities with precision and efficiency."
  },
  {
    title: "Tailored Solutions",
    description: "We understand that every trader has unique needs. That's why we offer tailored bridge solutions that can be customized to suit your specific trading requirements and preferences."
  },
  {
    title: "Secure Transmission",
    description: "Our bridges prioritize the security of traders' data and transactions. Built with robust security protocols, our bridges ensure the confidentiality and integrity of trading data."
  }
];

const BridgeData = () => {
  return (
    <section className="bg-gradient-to-b from-[#0c2448] via-[#0c1d3d] to-[#0c122a] text-white py-12 lg:py-16 3xl:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className='text-center max-w-4xl mx-auto pb-10'>
        <h2 className="Heading2">HOW OUR BRIDGES WORK
        </h2>
        <p className="text-center text">
          Our bridge solutions act as a conduit between different trading platforms and liquidity providers, ensuring smooth transmission of trade orders.
        </p>
        </div>
       
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {bridgeData.map((item, index) => (
            <div key={index} className="bg-gradient-to-t from-[#0c2448] via-[#0c1d3d] to-[#0c122a] p-6 rounded-lg shadow-md border border-primary">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BridgeData