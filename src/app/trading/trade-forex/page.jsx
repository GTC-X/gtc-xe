import HeroBanner from "../commonComponents/banner";
import ForexTradingInfo from "./components/tradingInfo";

export const metadata = {
    title: "",
    description: "",
};

export default function TradeForex() {
    const cardData = [
        {
            title: `Tightest Spread <br /> Starting from 0.0 Pips`,
            icon: "/trade-icon1.webp"
        },
        {
            title: `Leverage <br /> Up to 1:2000`,
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
            title: `No Trading<br /> Restrictions`,
            icon: "/trade-icon5.webp"
        },
        {
            title: `No Requotes and<br /> Rejections`,
            icon: "/trade-icon6.webp"
        }
    ]
    return (
        <>
            <HeroBanner
                title="TRADE FOREX"
                para={`With a Tightest Spread Starting from 0 PIPS Offering Leverage upto 1:2000 & No restriction`}
                bannerImg={"/forex-banner.webp"}
                bgImg={true}
                cards={cardData}
                footer={`  Forex Trading Hours (Local = Server time zone, please note DST may
                        apply)
                        <br />
                        Monday - Friday: 00:05 - 23:50`}
            />
            <div className=" bg-white">
                <ForexTradingInfo />
            </div>

        </>
    );
}
