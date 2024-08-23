const SuccessFullWork = () => {
    return (
        <div className="py-10 container">
            <div className="max-w-3xl mx-auto text-center">
                <div className=" grid sm:grid-cols-2 grid-cols-1 items-end gap-3">
                    <div>
                        <img className=" h-48" src="/13.png" alt="" />
                    </div>
                    <div className=" text-left">
                        <h2 className="text-success text-2xl">Years of successful work</h2>
                        <p className="text-xs mt-3">Since our establishment, we've firmly established our expertise in the trading arena.
                            Throughout our journey, we've been trailblazers in shaping the financial services industry,
                            consistently innovating exceptional products, services, and trading platforms that set new standards.
                        </p>
                    </div>
                </div>
                <div className="mt-8 border border-white grid md:grid-cols-4 grid-cols-2 bg-gradient-to-r from-[#0C2951] to-[#0C122A]">
                    <div className=" px-4 md:py-10 py-6 border-r border-r-white">
                        <div className=" border mx-auto border-success text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl">
                            +10
                        </div>
                        <p className=" text-white mt-6">Tiers Market Depth</p>
                    </div>
                    <div className=" px-4 md:py-10 py-6 border-r border-r-white">
                        <div className=" border mx-auto border-success text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl">
                        +27k
                        </div>
                        <p className=" text-white mt-6">Tiers Market Depth</p>
                    </div>
                    <div className=" px-4 md:py-10 py-6 border-r border-r-white">
                        <div className=" border mx-auto border-success text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl">
                        10ms
                        </div>
                        <p className=" text-white mt-6">Tiers Market Depth</p>
                    </div>
                    <div className=" px-4 md:py-10 py-6">
                        <div className=" border mx-auto border-success text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl">
                            8
                        </div>
                        <p className=" text-white mt-6">Tiers Market Depth</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuccessFullWork