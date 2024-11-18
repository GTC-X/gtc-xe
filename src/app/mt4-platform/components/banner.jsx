'use client'
import React from "react";
import parse from 'html-react-parser';
import { useTranslation } from "react-i18next";


const CardIcon = ({ title, img }) => {
    return (
        <div className={`bg-neutral items-center grid grid-cols-3 gap-3 py-2 px-4 rounded-lg`}>
            {img &&
                <div>
                    <img className="mx-auto h-14" src={img} alt={title} />
                </div>
            }
            <h3
                className="text-left text-base leading-5 col-span-2"
            >{parse(title)}</h3>
        </div>
    );
};

const TradeForexSection = ({
    title = "",
    para = "",
    footer = "",
    cardTitle = "",
    bannerImg,
    bgImg = true,
    cards = [],
}) => {
    const { t } = useTranslation()
    return (
        <div className="container mx-auto">
            <section className="  pt-16 pb-10">
                <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Section */}
                    <div className="md:w-1/2 space-y-4 text-center md:text-left">
                        <h1 className="text-4xl font-bold">MT4 / MT5</h1>
                        <p
                            className="text-base"
                        >Powerful Trading Platforms</p>
                    </div>
                    <div
                        className={`relative md:w-1/2 flex bg-no-repeat justify-center mt-8 md:mt-0 bg-contain ${bgImg ? "bg-[url('/home-hero-bg.png')]" : ""
                            }`}
                    >
                        <img
                            src={"/mt4-banner.webp" || ""}
                            alt="Laptop Trading"
                            className="w-3/5"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-base">
                        MetaTrader 4 (MT4) and MetaTrader 5 (MT5) are two of the most widely used trading platforms in the world, offoring traders access to financial markets and advanced tools and features.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TradeForexSection;
