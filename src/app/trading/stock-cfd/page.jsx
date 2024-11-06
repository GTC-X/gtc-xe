import HeroBanner from "../commonComponents/banner";
import StockCFDsSection from "./components/stockCFDSection";
// import MetalsTradingInfo from "./components/metalsInfo";

export const metadata = {
    title: '',
    description: '',
}

export default function StockCFD() {
    const cardData = [
        {
            title: `TIGHTEST SPREADS`,
            icon: "/trade-icon1.webp"
        },
        {
            title: `ZERO COMMISSION`,
            icon: "/stock-icon2.webp"
        },
        {
            title: `LOWEST MARGIN <br /> ON ALL COMMODITIES`,
            icon: "/stock-icon3.webp"
        },
        {
            title: `SWAP FREE`,
            icon: "/stock-icon4.webp"
        },

    ]
    return (
        <>
            <HeroBanner
                title="STOCK CFDs"
                para={`"Our platform offers a <b>profitable edge,</b> enabling you to capitalize on both rising and falling stock prices during market volatility."`}
                bannerImg={"/stock-banner.webp"}
                cardTitle="Our Trading Advantages"
                bgImg={false}
                cards={cardData}
                footer={`<b>Trading Hours<br/>(GMT + 2 time zone, please note DST may apply)</b><br/>Monday - Friday: 00:05 - 23:50`}
            />
            <div className=" bg-white">
                <StockCFDsSection />
            </div>
        </>
    );
}
