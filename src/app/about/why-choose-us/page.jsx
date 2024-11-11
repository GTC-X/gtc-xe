'use client'
import { useTranslation } from "react-i18next";
import { LuCheckCircle } from "react-icons/lu";

const WhyChooseUs = () => {
    const { t } = useTranslation()
    return (
        <div className=" bg-white">
            <div className="container mx-auto py-10 md:pt-24 pt-10">
                {/* Title Section */}
                <h1 className="text-3xl font-bold  mb-4">{t("aboutUs.whyUs.section1.title")}</h1>
                <p className="text-lg mb-2"
                    dangerouslySetInnerHTML={{ __html: t("aboutUs.whyUs.section1.subTitle") }}
                />
                <p className=" mb-4"
                    dangerouslySetInnerHTML={{ __html: t("aboutUs.whyUs.section1.para1") }}
                />
                <p className=" mb-8">
                    {t("aboutUs.whyUs.section1.para2")}
                </p>

                {/* First Section */}
                <h2 className="text-2xl mb-4"
                    dangerouslySetInnerHTML={{ __html: t("aboutUs.whyUs.section2.title") }}
                />
                <div className="flex items-center  gap-2 mb-4">
                    <img src="/why-choose-us-icon1.jpg" alt="Reliability Icon" className="h-8" />
                    <p className="text-lg"
                        dangerouslySetInnerHTML={{ __html: t("aboutUs.whyUs.section2.subTitle") }}
                    />
                </div>
                <ul className="space-y-3 mb-8">
                    {t("aboutUs.whyUs.section2.options", { returnObjects: true })?.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <LuCheckCircle className="text-green-500 mr-2 mt-1" />
                            <span className="mx-2">{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Second Section */}
                <div className="flex items-center space-x-2 mb-4">
                    <img src="/why-choose-us-icon2.jpg" alt="Reliability Icon" className="h-8" />
                    <h3 className="text-lg "
                        dangerouslySetInnerHTML={{ __html: t("aboutUs.whyUs.section3.title") }}
                    />
                </div>
                <ul className="space-y-3">
                    {t("aboutUs.whyUs.section3.options", { returnObjects: true })?.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <LuCheckCircle className="text-green-500 mr-2 mt-1" />
                            <span className="mx-2">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WhyChooseUs;
