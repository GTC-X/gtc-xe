import HeroBanner from "../commonComponents/banner";
import EquityIndicesInfo from "./components/indiciesInfo";

export const metadata = {
    title: '',
    description: '',
}

export default function EquityIndicies() {
    const cardData = [
        {
            title: `ACCESS TO THE GLOBAL MARKETS`,
            icon: "/indicies-icon1.webp"
        },
        {
            title: `LOWEST MARGIN ON ALL EQUITY INDICIES`,
            icon: "/indicies-icon2.webp"
        },
        {
            title: `SWAP FREE*`,
            icon: "/indicies-icon3.webp"
        },
        {
            title: `DYNAMIC LEVERAGE`,
            icon: "/indicies-icon4.webp"
        },
        {
            title: `FAST EXECUTIONS`,
            icon: "/indicies-icon5.webp"
        },
    ]
    return (
        <>
            <HeroBanner
                title="Equity Indices"
                para={` "Unlock a world of profitable opportunities trading cash indices with us, offering the tools and market access for a rewarding experience."`}
                bannerImg={"/indicies-banner.webp"}
                cardTitle="Our Trading Advantages"
                bgImg={false}
                cards={cardData}
            />
            <div className=" bg-white">
                <EquityIndicesInfo />
            </div>
        </>
    );
}
