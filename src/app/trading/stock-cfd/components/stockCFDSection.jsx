import React from "react";
import Image from "next/image";

const StockCFDsSection = () => {
    return (
        <section className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-2xl font-bold">
                        WHAT IS <span className="text-secondary">STOCK CFDs</span> TRADING?
                    </h2>
                    <p >
                        <strong>Stock CFD (Contract for Difference)</strong> trading allows
                        investors to speculate on the price movements of stocks without
                        actually owning the underlying shares. Instead, traders enter into
                        an agreement to exchange the difference in the stock's price between
                        the opening and closing of the trade.
                    </p>
                    <p >
                        <strong>Dividend Adjustments for Stock CFDs</strong>
                    </p>
                    <p >
                        Since CFD traders do not own the underlying stocks, they are not
                        eligible for dividends directly. However, when a company pays
                        dividends, it reduces the stock's value by the dividend amount,
                        which is reflected in a lower share price when the market opens on
                        the ex-dividend date.
                    </p>
                    <p >
                        To maintain the balance of CFD positions, a dividend adjustment is
                        made for clients holding relevant CFD positions. This ensures that
                        traders’ open positions are not negatively impacted by the drop in
                        the share price due to dividend payouts.
                    </p>
                    <p >
                        The trading hours for each stock CFD vary and can be found in the
                        table above.
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src="/stock-banner.webp"
                        alt="Stock CFD Icons"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center  justify-between gap-8 mt-12">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-2xl font-bold">
                        <span className="text-secondary">STOCK CFDs</span> TRADING WITH US:
                    </h2>
                    <p >
                        Trading Stock CFDs with our company offers a range of benefits for
                        both investors and traders. It provides access to a broad selection
                        of stocks from international markets, making it easy to create a
                        diversified portfolio. Our competitive pricing and transparent fee
                        structure ensure that you can trade efficiently, without hidden
                        costs.
                    </p>
                    <p >
                        With leverage options, you can enhance your trading potential while
                        maintaining control over your risk exposure. Our platform also
                        provides in-depth research tools and access to expert trading tips,
                        giving you well-informed trading decisions.
                    </p>
                    <p >
                        We prioritize the safety of your investments by offering robust
                        client protection, including insurance for client funds, ensuring
                        you can trade confidently and securely.
                    </p>
                    <p >
                        Partnering with us for Stock CFD trading equips you with the
                        resources and support you need to achieve your financial objectives
                        with efficiency and confidence.
                    </p>
                </div>

                {/* Right Section - Image */}
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

export default StockCFDsSection;
