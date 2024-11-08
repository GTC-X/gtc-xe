'use client';
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaBuilding, FaBalanceScale, FaBolt } from 'react-icons/fa';
import { LuCheckCircle } from 'react-icons/lu';

const Solution = () => {
  const { t } = useTranslation();

  const options = [
    "option1",
    "option2",
    "option3",
    "option4"
  ];

  const cards = [
    { icon: <FaChartLine className="text-3xl mb-2" />, title: "card1.title", para: "card1.para" },
    { icon: <FaBuilding className="text-3xl mb-2" />, title: "card2.title", para: "card2.para" },
    { icon: <FaBalanceScale className="text-3xl mb-2" />, title: "card3.title", para: "card3.para" },
    { icon: <FaBolt className="text-3xl mb-2" />, title: "card4.title", para: "card4.para" },
  ];

  return (
    <div className="container py-10 md:py-14 xl:py-16 text-center">
      {/* Title Section */}
      <h2 className="text-xl md:text-3xl font-medium capitalize text-black mb-4">
        {t("HomePage.tradeSection.title")}
      </h2>

      {/* Options Section */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-10 text-sm font-medium">
        {options.map((option, index) => (
          <span key={index} className="flex gap-2 items-center">
            <LuCheckCircle className="text-green-600" /> {t(`HomePage.tradeSection.${option}`)}
          </span>
        ))}
      </div>

      {/* Trading Categories */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-16">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            {card.icon}
            <h3 className="text-base font-medium text-secondary">
              {t(`HomePage.tradeSection.cards.${card.title}`)}
            </h3>
            <p className="text-sm">{t(`HomePage.tradeSection.cards.${card.para}`)}</p>
          </div>
        ))}
      </div>

      {/* Platform Section */}
      <h3 className="text-3xl font-medium text-black mb-6">
        <strong>{t("HomePage.platformSection.title")}</strong>{" "}
        <span>{t("HomePage.platformSection.title2")}</span>
      </h3>

      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-black text-white py-1 px-4 rounded-full focus:outline-none hover:bg-gray-800">
          {t("HomePage.platformSection.mt4")}
        </button>
        <button className="bg-gray-200 text-black py-1 px-4 rounded-full focus:outline-none hover:bg-gray-300">
          {t("HomePage.platformSection.mt5")}
        </button>
      </div>

      {/* MetaTrader 4 Description */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="text-left max-w-md">
          <h4 className="text-lg font-medium">{t("HomePage.platformSection.mt4")}</h4>
          <p className="text-xs">{t("HomePage.platformSection.desc")}</p>
          <p className="mt-3 text-sm">{t("HomePage.platformSection.mt4Para")}</p>
        </div>
        <div>
          <img src="/03.png" alt="MetaTrader 4" className="w-full max-w-md rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
