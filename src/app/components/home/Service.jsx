'use client'
import { useTranslation } from "react-i18next";
import {
    FaHeadset,
    FaCogs,
    FaGlobe,
    FaShieldAlt,
    FaClock,
} from "react-icons/fa";

const Card = ({ title, icon, isLast }) => {
    return (
        <div className={` ${isLast ? " col-span-2 md:col-span-1" : " col-span-1"} flex flex-col items-center bg-black text-white rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 shadow-lg hover:shadow-xl`}>
            <div>{icon}</div>
            <h3 className="text-base font-medium">{title}</h3>
        </div>
    );
};

const Service = () => {
    const { t } = useTranslation();

    const cards = [
        {
            title: t("HomePage.investSection.card1"),
            id: 1,
            icon: <FaHeadset className="text-secondary text-3xl mb-4" />,
        },
        {
            title: t("HomePage.investSection.card2"),
            id: 2,
            icon: <FaCogs className="text-secondary text-3xl mb-4" />,
        },
        {
            title: t("HomePage.investSection.card3"),
            id: 3,
            icon: <FaGlobe className="text-secondary text-3xl mb-4" />,
        },
        {
            title: t("HomePage.investSection.card4"),
            id: 4,
            icon: <FaShieldAlt className="text-secondary text-3xl mb-4" />,
        },
        {
            title: t("HomePage.investSection.card5"),
            id: 5,
            icon: <FaClock className="text-secondary text-3xl mb-4" />,
        },
    ];
    return (
        <div className="container pt-10 md:pt-12 2xl:pt-16">
            <div className=" text-center">
                {/* Title and Description */}
                <h2 className="text-xl md:text-3xl font-medium text-secondary mb-4">
                    {t("HomePage.investSection.title")}
                </h2>
                <p className="text-lg  mx-auto max-w-5xl">
                    {t("HomePage.investSection.para")}

                </p>

                {/* Features */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-5 md:-6 gap-2">
                    {cards?.map((single, index) => (
                        <Card key={single?.id} title={single?.title} icon={single?.icon} isLast={cards?.length - 1 == index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Service;
