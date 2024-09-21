
const TechnologySolution = () => {
    return (
        <div className="  ">
            <div className="md:py-12 py-4 container   max-w-7xl text-center">
                <h2 className="Heading2">Technology Solutions</h2>
                <p className="text my-2">Empower your trading with our cutting-edge technology platforms designed <br/>
                to optimize performance and manage risks.</p>
                <div className="mt-10 grid md:grid-cols-5 grid-cols-2 text-center gap-8">
                    <div>
                        <img className=" h-10 mx-auto" src="/pamm.svg" alt="" />
                        <h3 className=" font-bold mt-8">PAMM</h3>
                        <p className=" mt-4 text-xs"> Utilize our Percent Allocation Management Module for efficient account management.</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/mamm.svg" alt="" />
                        <h3 className=" font-bold mt-8">MAM</h3>
                        <p className=" mt-4 text-xs">
                        Leverage Multi-Account Manager 
                        tools for enhanced trading operations.</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/copy-trading.svg" alt="" />
                        <h3 className=" font-bold mt-8">COPY TRADING</h3>
                        <p className=" mt-4 text-xs">Enable seamless copying of successful trading strategies</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/prop-trading.svg" alt="" />
                        <h3 className=" font-bold mt-8">PROP TRADING</h3>
                        <p className=" mt-4 text-xs">Access advanced solutions for
                        proprietary trading.</p>
                    </div>
                    <div>
                        <img className=" h-10 mx-auto" src="/vips.svg" alt="" />
                        <h3 className=" font-bold mt-8">VPS</h3>
                        <p className=" mt-4 text-xs">Enhance your trading 
                        speed and reliability with our Virtual Private Server hosting.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TechnologySolution