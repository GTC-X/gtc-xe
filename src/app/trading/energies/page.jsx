import HeroBanner from "../commonComponents/banner";
import EnergyTradingSection from "./components/energyInfo";

export const metadata = {
    title: '',
    description: '',
}

export default function Energies() {
    const cardData = [
        {
            title: `High Volatility - Greater Movement`,
        },
        {
            title: `Trade Oil - The Most Actively Traded Commodity Worldwide`,
        },
        {
            title: `Go Short / Long According to Market Moves`,
        },
        {
            title: `Trade on a Margin`,
        },
        {
            title: `No Overnight Financing on Oil CFDs`,
        },
        {
            title: `No Extra Fees Applicable`,
        },
    ]
    return (
        <>
            <HeroBanner
                title="TRADE ENERGY"
                para={` "Experience a competitive advantage when trading energy markets with us"`}
                bannerImg={"/energy-banner.webp"}
                bgImg={false}
                cards={cardData}
            />
            <div className=" bg-white">
                <EnergyTradingSection />
            </div>
        </>
    );
}
