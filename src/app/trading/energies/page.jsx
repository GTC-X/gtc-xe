'use client'
import { useTranslation } from "react-i18next";
import HeroBanner from "../commonComponents/banner";
import EnergyTradingSection from "./components/energyInfo";
import MetaData from "@/app/components/metaData";

export default function Energies() {
    const { t } = useTranslation()

    const cardData = [
        {
            title: t('trading.energiesPage.cards.card1'),
        },
        {
            title: t('trading.energiesPage.cards.card2'),
        },
        {
            title: t('trading.energiesPage.cards.card3'),
        },
        {
            title: t('trading.energiesPage.cards.card4'),
        },
        {
            title: t('trading.energiesPage.cards.card5'),
        },
        {
            title: t('trading.energiesPage.cards.card6'),
        },
    ]
    return (
        <>
            <MetaData title={t("trading.energiesPage.metaData.title")} description={t("trading.energiesPage.metaData.desc")} />
            <HeroBanner
                title={t('trading.energiesPage.title')}
                para={t('trading.energiesPage.para')}
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
