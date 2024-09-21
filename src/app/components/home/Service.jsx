import Image from "next/image"

const Card = ({ title, icon, para }) => {
    return (
        <div className="border border-[#0000000D] rounded-md shadow-xl p-3 pb-8">
            <img className="mx-auto h-12" src={icon} alt="" />
            <h2 className="text-lg text-black mt-2 font-medium uppercase">{title}</h2>
            <p className="mt-3 text-xs">{para}</p>
        </div>
    )
}
const Service = () => {
    return (
        <div className="container py-10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="Heading2">Our Services</h2>
                <p className="text mt-2">We offer a broad range of liquidity services across various asset classes to ensure optimal
                    trading conditions and market depth.</p>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card icon="/home/icons/icon1.svg" title="Forex" para="Access deep pools of liquidity in major and minor currency pairs." />
                    <Card icon="/home/icons/icon2.svg" title="METALS" para="Trade precious metals like gold and silver with robust liquidity." />
                    <Card icon="/home/icons/icon3.svg" title="INDICES" para="Comprehensive liquidity for major global indices." />
                    <Card icon="/home/icons/icon4.svg" title="Energy" para="Reliable liquidity for energy products like crude oil and natural gas" />
                    <Card icon="/home/icons/icon5.svg" title="cRYPTO - cfds" para="Navigate the growing crypto market with confidence" />
                    <Card icon="/home/icons/icon6.svg" title="Equities" para="Access deep pools of liquidity in major and minor currency pairs" />
                    <Card icon="/home/icons/icon7.svg" title="ETFs" para="Seamlessly trade a diverse range of ETFs." />
                    <Card icon="/home/icons/icon8.svg" title="NDFs CFDs" para="Efficiently manage your non-deliverable forward contracts" />
                </div>
                <div className="mt-6 grid sm:grid-cols-2 grid-cols-1 items-center gap-3">
                    <div className="relative w-full h-[500px]">
                        <Image src="/home/laptop.svg" fill alt="" className="object-contain" />
                    </div>
                    <div className=" text-left">
                        <div className="flex gap-2 items-center">
                            <p className="text">Why GTC XE? </p>
                            <div className=" w-10 h-[1px] bg-success"></div>
                        </div>
                        <h2 className="Heading2">Your trusted Partner in Financial Markets</h2>
                        <p className="text mt-3">At Premier Liquidity Services, we provide top-tier liquidity solutions tailored to meet the diverse needs of brokers, institutional investors, and financial institutions.
                        </p>
                        <p className="text my-3">Our comprehensive suite of services ensures you have the support
                            and technology required to excel in today's fast-paced financial
                            environment.</p>
                        <button className="mt-3 shadow-large text-white bg-success hover:bg-black py-2 px-6 rounded-[25px] text-xs font-bold">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service