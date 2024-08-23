
const Solution = () => {
    return (
        <div className=" bg-gradient-to-r from-[#0C2951] to-[#0C122A]">
            <div className="py-12 container solution-img max-w-7xl text-center">
                <h2 className="text-2xl text-white">All-Inclusive Solutions</h2>
                <p className="text-xs mt-2 text-white">We provide end-to-end solutions to streamline your trading operations and enhance efficiency.</p>
                <div className="mt-10 grid md:grid-cols-5 grid-cols-2 md:text-left md:gap-8 gap-4">
                    <div>
                        <img className=" h-10 mx-auto" src="/agg.png" alt="" />
                        <h3 className="text-white font-bold md:mt-8 mt-4">Aggregation & Distribution</h3>
                        <p className="text-white md:mt-4 mt-2 text-xs"> Integrate and distribute liquidity
                            across multiple sources.</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/bridges.svg" alt="" />
                        <h3 className="text-white font-bold md:mt-8 mt-4">Bridges</h3>
                        <p className="text-white md:mt-4 mt-2 text-xs">
                            Connect seamlessly to liquidity
                            providers with our advanced
                            bridging technology.</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/algo.svg" alt="" />
                        <h3 className="text-white font-bold md:mt-8 mt-4">Algo Hosting Service
                        </h3>
                        <p className="text-white md:mt-4 mt-2 text-xs">
                            Host your algorithmic trading
                            systems with our secure and
                            high-performance infrastructure.</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/forex.svg" alt="" />
                        <h3 className="text-white font-bold md:mt-8 mt-4">Forex Broker</h3>
                        <p className="text-white md:mt-4 mt-2 text-xs">

                            Benefit from our
                            comprehensive services
                            tailored for Forex brokers.</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/crypto.svg" alt="" />
                        <h3 className="text-white font-bold md:mt-8 mt-4">Crypto Broker</h3>
                        <p className="text-white md:mt-4 mt-2 text-xs">
                            Explore our specialized
                            services designed for
                            cryptocurrency brokers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Solution