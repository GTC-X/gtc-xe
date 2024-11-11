'use client'
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';

const StockCFDsSection = () => {
    const { t } = useTranslation()

    return (
        <section className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-2xl font-bold">
                        {parse(t('trading.stockPage.stockInfo.section1.title'))}
                    </h2>
                    <p >
                        {parse(t('trading.stockPage.stockInfo.section1.para1'))}
                    </p>
                    <p >
                        {parse(t('trading.stockPage.stockInfo.section1.para2'))}
                    </p>
                    <p >
                        {parse(t('trading.stockPage.stockInfo.section1.para3'))}
                    </p>
                    <p >
                        {parse(t('trading.stockPage.stockInfo.section1.para4'))}
                    </p>
                    <p >
                        {parse(t('trading.stockPage.stockInfo.section1.para5'))}
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src="/stock-banner.webp"
                        alt="Stock CFD Icons"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center  justify-between gap-8 mt-12">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-2xl font-bold">
                    {parse(t('trading.stockPage.stockInfo.section2.title'))}
                    </h2>
                    <p >
                    {parse(t('trading.stockPage.stockInfo.section2.para1'))}
                    </p>
                    <p >
                    {parse(t('trading.stockPage.stockInfo.section2.para2'))}
                    </p>
                    <p >
                    {parse(t('trading.stockPage.stockInfo.section2.para3'))}
                    </p>
                    <p >
                    {parse(t('trading.stockPage.stockInfo.section2.para4'))}
                    </p>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-1/2 flex justify-center ">
                    <Image
                        src="/stock-img1.webp"
                        alt="Trading Platform"
                        width={500}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default StockCFDsSection;
