'use client'
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const MetalsTradingInfo = () => {
    const { t } = useTranslation()

    return (
        <section className="container mx-auto py-16">
            {/* Section: What is Metals Trading? */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-medium mb-4">{parse(t('trading.metalPage.metalInfo.section1.title'))}</h2>
                    <p className="text-justify mb-4">
                        {parse(t('trading.metalPage.metalInfo.section1.para1'))}
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center ">
                    <Image
                        src="/metal-img1.webp"
                        alt="Trading Platform"
                        width={400}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Section: How to Trade Metals */}
            <div className="flex flex-col lg:flex-row items-center gap-8 ">
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-3xl font-medium mb-4">
                        {parse(t('trading.metalPage.metalInfo.section2.title'))}
                    </h2>
                    <p className="text-justify mb-4">
                        {parse(t('trading.metalPage.metalInfo.section2.subTitle'))}
                    </p>
                    <p className="text-justify mb-4">
                        {parse(t('trading.metalPage.metalInfo.section2.para1'))}
                    </p>
                    <p className="text-justify">
                        {parse(t('trading.metalPage.metalInfo.section2.para2'))}
                    </p>
                </div>
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

export default MetalsTradingInfo;
