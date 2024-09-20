const solutions = [
    {
      title: "Aggregation & Distribution",
      description: "Integrate and distribute liquidity across multiple sources.",
      imgSrc: "/agg.png",
      imgAlt: "Aggregation & Distribution",
    },
    {
      title: "Bridges",
      description: "Connect seamlessly to liquidity providers with our advanced bridging technology.",
      imgSrc: "/bridges.svg",
      imgAlt: "Bridges",
    },
    {
      title: "Algo Hosting Service",
      description: "Host your algorithmic trading systems with our secure and high-performance infrastructure.",
      imgSrc: "/algo.svg",
      imgAlt: "Algo Hosting Service",
    },
    {
      title: "Forex Broker",
      description: "Benefit from our comprehensive services tailored for Forex brokers.",
      imgSrc: "/forex.svg",
      imgAlt: "Forex Broker",
    },
    {
      title: "Crypto Broker",
      description: "Explore our specialized services designed for cryptocurrency brokers.",
      imgSrc: "/crypto.svg",
      imgAlt: "Crypto Broker",
    },
  ];
  
  const SolutionItem = ({ imgSrc, imgAlt, title, description }) => (
    <div className="text-center md:text-left">
      <img className="h-10 mx-auto md:mx-0" src={imgSrc} alt={imgAlt} />
      <h3 className="text-white font-bold mt-4 md:mt-8">{title}</h3>
      <p className="text-white text-xs mt-2 md:mt-4">{description}</p>
    </div>
  );
  
  const Solution = () => {
    return (
      <section className="bg-gradient-to-r from-[#0C2951] to-[#0C122A]">
        <div className="container py-12 text-center max-w-7xl">
          <h2 className="text-2xl text-white">All-Inclusive Solutions</h2>
          <p className="text-xs mt-2 text-white">
            We provide end-to-end solutions to streamline your trading operations and enhance efficiency.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {solutions.map((solution, index) => (
              <SolutionItem
                key={index}
                imgSrc={solution.imgSrc}
                imgAlt={solution.imgAlt}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Solution;
  