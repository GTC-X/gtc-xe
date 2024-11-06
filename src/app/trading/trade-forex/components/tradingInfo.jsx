import Image from 'next/image';
import React from 'react';

const ForexTradingInfo = () => {
    return (
        <section className="container mx-auto py-16 ">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">What is Forex Trading?</h2>
                    <p className="text-justify mb-4">
                        Forex trading, also known as foreign exchange or FX trading, involves the exchange of one currency for another with the goal of making a profit from changes in exchange rates. The forex market is among the largest and most liquid financial markets globally, allowing participants to trade various currency pairs, such as EUR/USD (Euro against US Dollar) or USD/JPY (US Dollar against Japanese Yen).
                    </p>
                    <p className="text-justify">
                        In forex trading, traders anticipate the movement of currency prices. They can take a long position, meaning they buy a currency pair hoping its value will rise, or a short position, meaning they sell a pair expecting its value to decline. Profits or losses arise from the difference between the bid (buy) and ask (sell) prices of the currency pairs involved.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <Image src="/forex-img1.webp" alt="Forex Trading Mobile" width={300} height={600} className="object-contain" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
                    <Image src="/forex-img2.webp" alt="Forex Trading Analysis" width={300} height={600} className="object-contain" />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">How to Trade Forex</h2>
                    <p className="text-justify mb-4">
                        Forex traders rely on different approaches to analyze the market. One common method is technical analysis, which focuses on examining price charts and identifying patterns to predict future movements. Another approach is fundamental analysis, which evaluates economic, political, and financial events that may impact currency prices.
                    </p>
                    <p className="text-justify">
                        Managing risk effectively is essential in forex trading, as the market can be highly volatile. With leverage, traders can control large positions using only a small portion of capital, which amplifies both potential profits and losses. To succeed in forex trading, traders must develop a deep understanding of the market, implement sound trading strategies, and apply effective risk management practices.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">Trade Forex with Us</h2>
                    <p className="text-justify mb-4">
                        Forex traders rely on different approaches to analyze the market. One common method is technical analysis, which focuses on examining price charts and identifying patterns to predict future movements. Another approach is fundamental analysis, which evaluates economic, political, and financial events that may impact currency prices.
                    </p>
                    <p className="text-justify">
                        Managing risk effectively is essential in forex trading, as the market can be highly volatile. With leverage, traders can control large positions using only a small portion of capital, which amplifies both potential profits and losses. To succeed in forex trading, traders must develop a deep understanding of the market, implement sound trading strategies, and apply effective risk management practices.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <Image src="/forex-img3.webp" alt="Forex Trading with Us" width={500} height={300} className="object-contain" />
                </div>
            </div>
        </section>
    );
};

export default ForexTradingInfo;
