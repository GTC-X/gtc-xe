'use client'
import { useTranslation } from "react-i18next";
import HeroBanner from "../commonComponents/banner";
import StockCFDsSection from "./components/stockCFDSection";
import MetaData from "@/app/components/metaData";
// import MetalsTradingInfo from "./components/metalsInfo";


export default function StockCFD() {
    const { t } = useTranslation()

    const cardData = [
        {
            title: t('trading.stockPage.cards.card1'),
            icon: "/trade-icon1.webp"
        },
        {
            title: t('trading.stockPage.cards.card2'),
            icon: "/stock-icon2.webp"
        },
        {
            title: t('trading.stockPage.cards.card3'),
            icon: "/stock-icon3.webp"
        },
        {
            title: t('trading.stockPage.cards.card4'),
            icon: "/stock-icon4.webp"
        },

    ]
    return (
        <>
            <MetaData title={t("trading.stockPage.metaData.title")} description={t("trading.stockPage.metaData.desc")} />

            <HeroBanner
                title={t('trading.stockPage.title')}
                para={t('trading.stockPage.para')}
                bannerImg={"/stock-banner.webp"}
                cardTitle={t('common.cardTitle')}
                bgImg={false}
                cards={cardData}
                footer={t('trading.stockPage.footer')}
            />
            <div className=" bg-white">
                <StockCFDsSection />
            </div>
        </>
    );
}
