'use client'
import { useTranslation } from "react-i18next";
import HeroBanner from "../commonComponents/banner";
import EquityIndicesInfo from "./components/indiciesInfo";
import MetaData from "@/app/components/metaData";

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
            <MetaData title={t("trading.indiciesPage.metaData.title")} description={t("trading.indiciesPage.metaData.desc")} />
            <HeroBanner
                title={t('trading.indiciesPage.title')}
                para={t('trading.indiciesPage.para')}
                bannerImg={"/indicies-banner.webp"}
                cardTitle={t('common.cardTitle')}
                bgImg={false}
                cards={cardData}
            />
            <div className=" bg-white">
                <EquityIndicesInfo />
            </div>
        </>
    );
}
