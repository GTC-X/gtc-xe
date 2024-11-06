import Image from "next/image";
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
    const cards = [
        {
            title: "24/7 Customer Support",
            id: 1,
            icon: <FaHeadset className="text-secondary text-4xl mb-4" />,
        },
        {
            title: "Tailored Solutions for Every Business",
            id: 2,
            icon: <FaCogs className="text-secondary text-4xl mb-4" />,
        },
        {
            title: "Trusted Global Partners",
            id: 3,
            icon: <FaGlobe className="text-secondary text-4xl mb-4" />,
        },
        {
            title: "100% Secure Transactions",
            id: 4,
            icon: <FaShieldAlt className="text-secondary text-4xl mb-4" />,
        },
        {
            title: "Fast & Transparent Processes",
            id: 5,
            icon: <FaClock className="text-secondary text-4xl mb-4" />,
        },
    ];
    return (
        <div className="container py-14 ">
            <div className=" text-center">
                {/* Title and Description */}
                <h2 className="text-3xl font-semibold text-secondary mb-4">
                    Invest with the World’s Leading Online Trading Platform
                </h2>
                <p className="text-lg  mx-auto">
                    Access over 27,000 financial instruments on the most reliable platform
                    available. Our MetaTrader platform ensures stable performance and
                    competitive spreads, giving you the advantage you need to make the
                    most of every trade.
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
