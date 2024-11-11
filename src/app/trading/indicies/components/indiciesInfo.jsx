'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';


const EquityIndicesInfo = () => {
    const { t } = useTranslation()
    return (
        <section className="container mx-auto px-4 py-10 space-y-10">
            <div className="space-y-6">
                <div className='flex flex-col-reverse md:flex-row gap-4 items-center'>
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-medium mb-6">{t('trading.indiciesPage.indiciesInfo.section1.title')}</h1>
                        <div>
                            {parse(t('trading.indiciesPage.indiciesInfo.section1.para1'))}
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-4">
                        <img src="/forex-img1.webp" alt="Equity Indices Trading" className="object-contain" />
                    </div>
                </div>
                <div>
                    {parse(t('trading.indiciesPage.indiciesInfo.section1.para2'))}
                </div>
            </div>

            {/* Section 2: What Are Equity Indices */}
            <div className="space-y-6">
                <h1 className="text-2xl lg:text-3xl font-medium mb-6">{t('trading.indiciesPage.indiciesInfo.section2.title')}</h1>
                {parse(t('trading.indiciesPage.indiciesInfo.section2.para1'))}

                <div className="flex justify-end py-6">
                    <img src="/forex-img2.webp" alt="Stock Indices" className="w-1/3 object-contain" />
                </div>
            </div>
        </section>
    );
};

export default EquityIndicesInfo;
