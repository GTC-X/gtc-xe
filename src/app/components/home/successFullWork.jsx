'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';

const GetStartedSection = () => {
    const { t } = useTranslation();

    return (
        <div className="container py-16 px-4 text-center">
            {/* Title and Subtitle */}
            <h2 className="text-2xl font-semibold text-black mb-2">{t("HomePage.getingStarted.title")}</h2>
            <p className="  mb-10">{t("HomePage.getingStarted.para")}</p>

            {/* Steps */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
                {/* Step 1 */}
                <div className="flex flex-col max-w-48 items-center">
                    <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12 mb-4 text-lg font-bold">1</div>
                    <h3 className="text-lg font-medium">{t("HomePage.getingStarted.step1.title")}</h3>
                    <p className="  text-sm mt-1">{t("HomePage.getingStarted.step1.para")}</p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col max-w-48 items-center">
                    <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12 mb-4 text-lg font-bold">2</div>
                    <h3 className="text-lg font-medium">{t("HomePage.getingStarted.step2.title")}</h3>
                    <p className="  text-sm mt-1">{t("HomePage.getingStarted.step2.para")}</p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col max-w-48 items-center">
                    <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12 mb-4 text-lg font-bold">3</div>
                    <h3 className="text-lg font-medium">{t("HomePage.getingStarted.step3.title")}</h3>
                    <p className="  text-sm mt-1">{t("HomePage.getingStarted.step3.para")}</p>
                </div>
            </div>

            {/* Get Started Button */}
            <button className="bg-secondary text-white py-1 px-10 rounded-lg font-semibold hover:bg-secondary transition duration-300">
                {t("common.gettingStarted")}
            </button>
        </div>
    );
};

export default GetStartedSection;
