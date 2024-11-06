import HeroBanner from "../commonComponents/banner";
import MetalsTradingInfo from "./components/metalsInfo";

export const metadata = {
    title: '',
    description: '',
}

export default function PreciousMetals() {
    const cardData = [
        {
            title: `Tightest Spread on <b>Gold</b> <br /> Starting from 4 Cents`,
            icon: "/trade-icon1.webp"
        },
        {
            title: `Leverage <br /> Up to 1000:1`,
            icon: "/trade-icon2.webp"
        },
        {
            title: `Instant and <br /> Fast Execution`,
            icon: "/trade-icon3.webp"
        },
        {
            title: `Negative<br /> Balance Protection`,
            icon: "/trade-icon4.webp"
        },
        {
            title: `Trade <b>Gold</b> & <b>Silver</b><br /> with No Requotes`,
            icon: "/metal-icon5.webp"
        },
        {
            title: `No Rejections`,
            icon: "/trade-icon6.webp"
        }
    ]
    return (
        <>
            <HeroBanner
                title="PRECIOUS METALS"
                para={`"MAXIMIZE YOUR PROFIT POTENTIAL WITH OUT ULTRA-COMPETITIVE <b class="text-[#b58756]">GOLD</b> SPREADS"`}
                bannerImg={"/metals-banner.webp"}
                cardTitle="Our Trading Advantages"
                bgImg={false}
                cards={cardData}
                footer={`<b>Silver & Gold Trading Hours<br/>(GMT + 2 time zone, please note DST may apply)</b><br/>Monday - Thursday : 01:05 - 23:55 <br/>Friday : 01:35 - 23:50`}
            />
            <div className=" bg-white">
                <MetalsTradingInfo />
            </div>
            {/* <div className=" bg-white">
                <Service />
                <div className=" h-2 w-full bg-primary" />
                <Solution />
                <div className=" bg-black">
                    <TechnologySolution />
                </div>
                <SuccessFullWork />
            </div> */}
        </>
    );
}
