'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <div className=' bg-white'>
            <div className="container mx-auto">
                {/* Logo and Header */}
                <div className=' grid md:grid-cols-2 grid-cols-1 min-h-96 items-center gap-2'>
                    <div className="flex flex-col  order-2 md:order-1 ">
                        <h1 className="text-3xl font-bold mt-2">{t("aboutUs.aboutEast.heading")}</h1>
                        <p className="text-sm">{t("aboutUs.aboutEast.desc")}</p>
                        <p className="text-lg font-semibold mt-2">{t("aboutUs.aboutEast.subHeading")}</p>
                    </div>

                    {/* Globe Image */}
                    <div className="flex flex-col justify-center mt-6 order-1 md:order-2">
                        <div>
                            <img src="/logo-about.jpg" alt="The East Trading Co. Logo" className="h-16 mx-auto mb-1" />
                        </div>
                        <div>
                            <img src="/globe.jpg" alt="Globe Background" className="opacity-50 w-11/12 mx-auto h-52" />
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="pt-8 pb-20 space-y-10">
                    {/* Expertise Section */}
                    <div className="flex flex-col  ">
                        <div className="flex items-center gap-2">
                            <img src="/about-icon1.jpg" alt="Expertise Icon" className="h-8" />
                            <h2 className="text-lg font-semibold  ">{t("aboutUs.aboutEast.section1.heading")}</h2>
                        </div>
                        <p className="mt-4   ">
                            {t("aboutUs.aboutEast.section1.para1")}
                        </p>
                        <p className="mt-2   ">
                            {t("aboutUs.aboutEast.section1.para2")}
                        </p>
                    </div>

                    {/* Reliability Section */}
                    <div className="flex flex-col  ">
                        <div className="flex items-center gap-2">
                            <img src="/about-icon2.jpg" alt="Reliability Icon" className="h-8" />
                            <h2 className="text-lg font-semibold  ">{t("aboutUs.aboutEast.section2.heading")}</h2>
                        </div>
                        <p className="mt-4  ">
                            {t("aboutUs.aboutEast.section2.para1")}
                        </p>
                    </div>

                    {/* Innovation Section */}
                    <div className="flex flex-col  ">
                        <div className="flex items-center gap-2">
                            <img src="/about-icon3.jpg" alt="Innovation Icon" className="h-8" />
                            <h2 className="text-lg font-semibold  ">{t("aboutUs.aboutEast.section3.heading")}</h2>
                        </div>
                        <p className="mt-4  ">
                            {t("aboutUs.aboutEast.section3.para1")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
