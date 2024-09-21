const WhiteLabel = () => {
    return (
        <div className="white-label-img1">
            <div className="py-12 md:pb-36 pb-12 container">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="HeadingH2">White Label Trading Platforms</h2>
                    <p className="text mt-2 ">
                        Expand your business with our customizable white label solutions, allowing you to offer<br />
                        branded trading platforms to your clients.</p>
                    <div className="bg-[#5E849F] inner-shadow-card p-6 grid md:grid-cols-4 gap-4 grid-cols-1 mt-16 min-h-28 rounded-md">
                        <div>
                            <h2 className=" text-white text-xl font-semibold">cTrader White Label</h2>
                            <p className="text-xs mt-3 text-white ">
                                Provide an intuitive and powerful<br/>
                                trading experience with cTrader.</p>
                            <img className="mt-3 mx-auto" src="trader-logo.svg" alt="" />
                        </div>
                        <div className=" relative col-span-2">
                            <img className=" md:absolute -top-24" src="/white-label-screen.svg" alt="" />
                        </div>
                        <div>
                            <h2 className=" text-white text-xl font-semibold">Custom Trading Solutions </h2>
                            <p className="text-xs mt-3 text-white ">
                            Tailor trading platforms to meet<br/>
                            your specific business needs.</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhiteLabel