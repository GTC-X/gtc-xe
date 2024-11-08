'use client'
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaBuilding, FaBalanceScale, FaBolt } from 'react-icons/fa';
import { LuCheckCircle } from "react-icons/lu";


const Solution = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-16 text-center">
      {/* Title Section */}
      <h2 className="text-3xl font-medium text-black mb-4">
        {t("HomePage.tradeSection.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-10  text-sm font-medium">
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' /> {t("HomePage.tradeSection.option1")}</span>
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' />{t("HomePage.tradeSection.option2")}</span>
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' />{t("HomePage.tradeSection.option3")}</span>
        <span className='flex gap-2 items-center'><LuCheckCircle className='text-green-600' />{t("HomePage.tradeSection.option4")}</span>
      </div>

      {/* Trading Categories */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <div className="flex flex-col items-center">
          <FaChartLine className=" text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">{t("HomePage.tradeSection.cards.card1.title")}</h3>
          <p className=" text-sm">{t("HomePage.tradeSection.cards.card1.para")}</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBuilding className="  text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">{t("HomePage.tradeSection.cards.card2.title")}</h3>
          <p className=" text-sm">{t("HomePage.tradeSection.cards.card2.para")}</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBalanceScale className="  text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">{t("HomePage.tradeSection.cards.card3.title")}</h3>
          <p className=" text-sm">{t("HomePage.tradeSection.cards.card3.para")}</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBolt className="  text-3xl mb-2" />
          <h3 className="text-base font-medium text-secondary">{t("HomePage.tradeSection.cards.card4.title")}</h3>
          <p className=" text-sm">{t("HomePage.tradeSection.cards.card4.para")}</p>
        </div>
      </div>

      {/* Platform Section */}
      <h3 className="text-3xl font-medium text-black mb-6">
        <strong> {t("HomePage.platformSection.title")}
        </strong> <span  >{t("HomePage.platformSection.title2")}
        </span>
      </h3>
      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-black text-white py-1 px-4 rounded-full focus:outline-none hover:bg-gray-800">{t("HomePage.platformSection.mt4")}</button>
        <button className="bg-gray-200 text-black py-1 px-4 rounded-full focus:outline-none hover:bg-gray-300">{t("HomePage.platformSection.mt5")}</button>
      </div>

      {/* MetaTrader 4 Description */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="text-left max-w-md">
          <h4 className="text-lg font-medium">{t("HomePage.platformSection.mt4")}</h4>
          <p className="text-xs ">{t("HomePage.platformSection.desc")}</p>
          <p className=" mt-3 text-sm">
            {t("HomePage.platformSection.mt4Para")}
          </p>
        </div>
        <div>
          <img src="/03.png" alt="MetaTrader 4" className="w-full max-w-md  rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
