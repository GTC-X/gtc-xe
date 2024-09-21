import Image from "next/image"

const SuccessFullWork = () => {
    return (
        <div className="py-10 container">
            <div className="max-w-3xl mx-auto text-center">
                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="relative w-full h-64">
                        <Image src="/home/number.webp" fill alt="" className=" object-contain"
 />                       
                    </div>
                    <div className=" text-left">
                        <h2 className="text-success HeadingH2">Years of successful work</h2>
                        <p className="text mt-3">Since our establishment, we've firmly established our expertise in the trading arena.
                            Throughout our journey, we've been trailblazers in shaping the financial services industry,
                            consistently innovating exceptional products, services, and trading platforms that set new standards.
                        </p>
                    </div>
                </div>
                <div className="mt-8 border border-white grid md:grid-cols-4 grid-cols-2 bg-gradient-to-r from-[#0C2951] to-[#0C122A]">
                    <div className=" px-4 md:py-10 py-6 border-r border-r-white">
                        <div className="mx-auto text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl bg-[url(/home/circle/circle1.svg)] bg-center bg-no-repeat">
                            +10
                        </div>
                        <p className=" text-white mt-6">Tiers Market Depth</p>
                    </div>
                    <div className=" px-4 md:py-10 py-6 border-r border-r-white">
                        <div className=" mx-auto  text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl bg-[url(/home/circle/circle2.svg)] bg-center bg-no-repeat">
                        +27k
                        </div>
                        <p className=" text-white mt-6">Tiers Market Depth</p>
                    </div>
                    <div className=" px-4 md:py-10 py-6 border-r border-r-white">
                        <div className=" mx-auto text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl bg-[url(/home/circle/circle3.svg)] bg-center bg-no-repeat">
                        10ms
                        </div>
                        <p className=" text-white mt-6">Tiers Market Depth</p>
                    </div>
                    <div className=" px-4 md:py-10 py-6">
                        <div className="  mx-auto  text-success flex justify-center items-center rounded-full h-32 w-32 font-semibold text-2xl bg-[url(/home/circle/circle4.svg)] bg-center bg-no-repeat">
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