'use client'
import { useTranslation } from "react-i18next";
import HeroBanner from "../commonComponents/banner";
import ForexTradingInfo from "./components/tradingInfo";
import MetaData from "@/app/components/metaData";

export default function TradeForex() {
    const { t } = useTranslation()
    const cardData = [
        {
            title: t('trading.forexPage.cards.card1'),
            icon: "/trade-icon1.webp"
        },
        {
            title: t('trading.forexPage.cards.card2'),
            icon: "/trade-icon2.webp"
        },
        {
            title: t('trading.forexPage.cards.card3'),
            icon: "/trade-icon3.webp"
        },
        {
            title: t('trading.forexPage.cards.card4'),
            icon: "/trade-icon4.webp"
        },
        {
            title: t('trading.forexPage.cards.card5'),
            icon: "/trade-icon5.webp"
        },
        {
            title: t('trading.forexPage.cards.card6'),
            icon: "/trade-icon6.webp"
        }
    ]
    return (
        <>
            <MetaData title={t("trading.forexPage.metaData.title")} description={t("trading.forexPage.metaData.desc")} />
            <HeroBanner
                title={t('trading.forexPage.title')}
                para={t('trading.forexPage.para')}
                bannerImg={"/forex-banner.webp"}
                bgImg={true}
                cards={cardData}
                footer={t('trading.forexPage.footer')}
            />
            <div className=" bg-white">
                <ForexTradingInfo />
            </div>

        </>
    );
}
