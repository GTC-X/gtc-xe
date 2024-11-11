'use client'
import React from "react";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';


const EnergyTradingSection = () => {
    const { t } = useTranslation()
    return (
        <div className="container mx-auto py-16  ">
            <div className=" mb-12">
                <h2 className="text-2xl md:text-3xl font-bold ">
                    {t('trading.energiesPage.energiesInfo.section1.title')}
                </h2>
                <p className="text-secondary mt-2">
                    {t('trading.energiesPage.energiesInfo.section1.desc')}
                </p>
            </div>

            <div className="md:flex md:space-x-8">
                <div className="md:w-3/5 space-y-6">
                    <h1 className="text-2xl lg:text-3xl font-medium ">
                        {parse(t('trading.energiesPage.energiesInfo.section1.subTitle'))}
                    </h1>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                        {t('trading.energiesPage.energiesInfo.section1.para1')}
                    </p>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                    {t('trading.energiesPage.energiesInfo.section1.para2')}
                    </p>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                    {t('trading.energiesPage.energiesInfo.section1.para3')}
                    </p>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                    {t('trading.energiesPage.energiesInfo.section1.para4')}
                    </p>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
                    <img
                        src="/energy-img1.webp"
                        alt="Oil Trading"
                        className="w-3/4 md:w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default EnergyTradingSection;
