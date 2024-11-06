import Image from 'next/image';
import React from 'react';

const MetalsTradingInfo = ({

}) => {
    return (
        <section className="container mx-auto py-16">
            {/* Section: What is Metals Trading? */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-medium mb-4">What is <span className="text-[#b58756]">Metals</span> Trading?</h2>
                    <p className="text-justify mb-4">
                        <b>Metals </b> trading involves the exchange of different types of metals within the financial markets. This includes precious metals such as <b>gold, silver, platinum,</b> and <b>palladium,</b> which are sought after for their intrinsic value and are used as safe-haven assets. Base metals like <b>copper, aluminum, </b> and <b> steel,</b> which are essential for various industries and economic activities, are also traded.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center ">
                    <Image
                        src="/metal-img1.webp"
                        alt="Trading Platform"
                        width={400}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Section: How to Trade Metals */}
            <div className="flex flex-col lg:flex-row items-center gap-8 ">
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-3xl font-medium mb-4">How to Trade <span className="text-[#b58756]">Metals</span>?</h2>
                    <p className="text-justify mb-4">
                        <span className="font-semibold">Forms of Metals Trading</span>
                    </p>
                    <p className="text-justify mb-4">
                        <span className="font-semibold">Spot Trading: <br /></span> Spot trading involves the immediate purchase or sale of physical metals at the current market price. This type of trading is popular among those who wish to own metals for personal use or investment purposes. Some traders capitalize on fluctuations in price to buy at a low price and sell at a higher price for short-term profits.
                    </p>
                    <p className="text-justify">
                        <span className="font-semibold">Futures & Options Trading:<br /></span> Futures and options allow traders to speculate on the future prices of metals without the need to own the physical asset. This approach enables traders to use leverage as a way to manage risk and maximize potential returns. Futures contracts obligate traders to buy or sell a specified amount of metals at a predetermined price in the future, widely used in industrial metal markets to hedge against potential price fluctuations.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center ">
                    <Image
                        src="/stock-img1.webp"
                        alt="Trading Platform"
                        width={500}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default MetalsTradingInfo;
