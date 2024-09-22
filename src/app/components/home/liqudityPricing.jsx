
const Cards = ({ text }) => {
    return (
        <div className=" text-white text-sm inner-shadow-card bg-[#D9D9D92E]  px-6 py-3 rounded-2xl">{text}</div>
    )
}
const LiquidityPricing = () => {
    return (
        <div className=" bg-gradient-to-r from-[#0C2951] to-[#0C122A]">
            <div className="py-12 container">
                <div className=" grid md:grid-cols-2 grid-cols-1 items-center md:gap-2 gap-6">
                    <div>
                        <h2 className="text-2xl text-success">Liquidity Pricing Channels and Hubs</h2>
                        <p className="text mt-2 text-white">
                            Maximize your trading efficiency with our advanced pricing<br />
                            channels and hubs, designed to provide optimal pricing and execution.</p>
                        <div className=" grid grid-cols-2 gap-4 mt-10">
                        <Cards text="GTC Aggregation Technology" />
                            <Cards text="GTC MT5 Aggregation" />
                            <Cards text="PrimeXM XCORE" />
                            <Cards text="OneZero Hub" />
                            <Cards text="Centroid Hub" />
                            <Cards text="CMC" />
                        </div>
                    </div>
                    <div>
                        <img src="/liqudity.svg" className="mx-auto" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default LiquidityPricing