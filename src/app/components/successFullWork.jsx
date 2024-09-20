import Image from "next/image";

const SuccessFullWork = () => {
    return (
        <div className="py-10 container">
            <div className="max-w-3xl mx-auto text-center">
                {/* Image and Text Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="relative w-full h-24 md:h-64">
                        <Image 
                            src="/home/number.webp" 
                            fill 
                            alt="Number of Successful Years" 
                            className="object-contain" 
                        />
                    </div>
                    <div className="text-left">
                        <h2 className="text-success text-2xl">
                            Years of Successful Work
                        </h2>
                        <p className="text-xs mt-3">
                            Since our establishment, we've firmly established our expertise in the trading arena. 
                            Throughout our journey, we've been trailblazers in shaping the financial services industry, 
                            consistently innovating exceptional products, services, and trading platforms that set new standards.
                        </p>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="mt-8 border border-white grid md:grid-cols-4 grid-cols-2 bg-gradient-to-r from-[#0C2951] to-[#0C122A]">
                    {[
                        { value: "+10", text: "Tiers Market Depth", bg: "circle1.svg" },
                        { value: "+27K", text: "Trading Instruments", bg: "circle2.svg" },
                        { value: "10ms", text: "Fast & Secure Execution", bg: "circle3.svg" },
                        { value: "8", text: "Financial Markets", bg: "circle4.svg" }
                    ].map((stat, index) => (
                        <div 
                            key={index} 
                            className={`px-4 md:py-10 py-6 ${index < 3 ? "border-r border-r-white" : ""}`}
                        >
                            <div className={`mx-auto text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl bg-[url(/home/circle/${stat.bg})] bg-center bg-no-repeat`}>
                                {stat.value}
                            </div>
                            <p className="text-white mt-6">
                                {stat.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessFullWork;
