'use client'
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ForexTradingInfo = () => {
    const { t } = useTranslation()

    return (
        <section className="container mx-auto py-16 ">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t('trading.forexPage.forexInfo.section1.title')}</h2>
                    <p className="text-justify mb-4">
                        {t('trading.forexPage.forexInfo.section1.para1')}
                    </p>
                    <p className="text-justify">
                        {t('trading.forexPage.forexInfo.section1.para2')}
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <Image src="/forex-img1.webp" alt="Forex Trading Mobile" width={300} height={600} className="object-contain" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
                    <Image src="/forex-img2.webp" alt="Forex Trading Analysis" width={300} height={600} className="object-contain" />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t('trading.forexPage.forexInfo.section2.title')}</h2>
                    <p className="text-justify mb-4">
                        {t('trading.forexPage.forexInfo.section2.para1')}
                    </p>
                    <p className="text-justify">
                        {t('trading.forexPage.forexInfo.section2.para2')}
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t('trading.forexPage.forexInfo.section3.title')}</h2>
                    <p className="text-justify mb-4">
                        {t('trading.forexPage.forexInfo.section3.para1')}
                    </p>
                    <p className="text-justify">
                        {t('trading.forexPage.forexInfo.section3.para2')}
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <Image src="/forex-img3.webp" alt="Forex Trading with Us" width={500} height={300} className="object-contain" />
                </div>
            </div>
        </section>
    );
};

export default ForexTradingInfo;
