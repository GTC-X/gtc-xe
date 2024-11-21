'use client'
import { useTranslation } from "react-i18next";
import HeroBanner from "../commonComponents/banner";
import MetalsTradingInfo from "./components/metalsInfo";
import MetaData from "@/app/components/metaData";

export default function PreciousMetals() {
    const { t } = useTranslation()

    const cardData = [
        {
            title: t('trading.metalPage.cards.card1'),
            icon: "/trade-icon1.webp"
        },
        {
            title: t('trading.metalPage.cards.card2'),
            icon: "/trade-icon2.webp"
        },
        {
            title: t('trading.metalPage.cards.card3'),
            icon: "/trade-icon3.webp"
        },
        {
            title: t('trading.metalPage.cards.card4'),
            icon: "/trade-icon4.webp"
        },
        {
            title: t('trading.metalPage.cards.card5'),
            icon: "/metal-icon5.webp"
        },
        {
            title: t('trading.metalPage.cards.card6'),
            icon: "/trade-icon6.webp"
        }
    ]
    return (
        <>
            <MetaData title={t("trading.metalPage.metaData.title")} description={t("trading.metalPage.metaData.desc")} />
            <HeroBanner
                title={t('trading.metalPage.title')}
                para={t('trading.metalPage.para')}
                bannerImg={"/metals-banner.webp"}
                cardTitle={t('common.cardTitle')}
                bgImg={false}
                cards={cardData}
                footer={t('trading.metalPage.footer')}
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
