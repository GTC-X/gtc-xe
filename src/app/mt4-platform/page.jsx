'use client'
import { useTranslation } from "react-i18next";
import HeroBanner from "./components/banner";
import SectionOne from "./components/sectionOne";
import MarketTime from "./components/marketTime";

export default function EquityIndicies() {
    const { t } = useTranslation()

    const cardData = [
        {
            title: t('trading.indiciesPage.cards.card1'),
            icon: "/indicies-icon1.webp"
        },
        {
            title: t('trading.indiciesPage.cards.card2'),
            icon: "/indicies-icon2.webp"
        },
        {
            title: t('trading.indiciesPage.cards.card3'),
            icon: "/indicies-icon3.webp"
        },
        {
            title: t('trading.indiciesPage.cards.card4'),
            icon: "/indicies-icon4.webp"
        },
        {
            title: t('trading.indiciesPage.cards.card5'),
            icon: "/indicies-icon5.webp"
        },
    ]
    return (
        <>
            <div className=" bg-white">
                <HeroBanner
                    title={t('trading.indiciesPage.title')}
                    para={t('trading.indiciesPage.para')}
                    bannerImg={"/indicies-banner.webp"}
                    cardTitle={t('common.cardTitle')}
                    bgImg={false}
                    cards={cardData}
                />
                <SectionOne />
            </div>
            <div className="bg-black text-white  text-center md:text-left py-6">
                <p className="text-sm md:text-base container mx-auto leading-relaxed">
                    Both platforms are available on desktop, web, and mobile devices, ensuring you can trade anytime, anywhere with real-time data and analysis. Whether you prefer the simplicity of MT4 or the advanced tools of MT5, these platforms provide everything needed to succeed in dynamic financial markets.
                </p>
            </div>
            <div className=" bg-white">
                <MarketTime />
            </div>
        </>
    );
}
