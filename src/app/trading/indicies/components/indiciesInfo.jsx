import React from 'react';

const EquityIndicesInfo = () => {
    return (
        <section className="container mx-auto px-4 py-10 space-y-10">
            <div className="space-y-6">
                <div className='flex flex-col-reverse md:flex-row gap-4 items-center'>
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-medium mb-6">What is Equity Indices Trading?</h1>
                        <p className=" text-justify">
                            Equity indices trading involves speculating on the price movements of stock market indices, such as the S&P 500, NASDAQ 100, or FTSE 100. These indices represent the performance of a group of stocks, allowing traders the ability to invest in the overall market or specific sectors without buying individual shares.
                        </p>
                        <p className=" text-justify">
                            Dividend adjustments on Cash Indices Cash Index CFDs are subject to dividend adjustments. When a company listed within an index pays dividends, its share price decreases by the amount of the dividend on the ex-dividend date. To replicate this price change, dividend adjustments are applied to Cash Index CFDs to reflect these changes.
                        </p>

                        <p className=' text-justify'>To protect positions from the impact of dividend payments, dividend adjustments will be applied to the account of clients who hold index positions at 00:00 GMT+2, compensating partially for the price change on the ex-dividend date.</p>
                        <p>Dividend Adjustments on Long and Short Positions</p>
                    </div>
                    <div className="w-full flex justify-center py-4">
                        <img src="/forex-img1.webp" alt="Equity Indices Trading" className="object-contain" />
                    </div>
                </div>

                <p>
                    For long positions, dividend adjustments are credited to client accounts after deducting any applicable withholding taxes. The tax rate may vary depending on the specific underlying instrument. Short positions, however, are not subject to withholding tax deductions, so no such adjustments are applied.
                </p>
                <p>
                    Additionally, CFDs on Germany 40 (GER40Cash) are exempt from dividend adjustments. This is because the dividends of the constituent stocks are reinvested directly into the index, eliminating any dividend impact from withdrawals.
                </p>

                <p>Additional Information on Dividend Adjustments</p>
                <p className="">
                    CFDs on Futures indices are not subject to dividend adjustments. This exemption exists because futures contracts are structured differently from cash indices and do not generate dividend income for the underlying assets.
                </p>

                <p>For Cash Index CFDs, dividend adjustments are applied as follows:</p>
                <ul className="list-disc list-inside space-y-2 ">
                    <li>Buy Trades:<br /> Clients holding buy positions will receive a credit calculated using the following formula:<br /> Dividend Adjustment = Index Dividend Declared x Position Size (in lots)</li>
                </ul>
            </div>

            {/* Section 2: What Are Equity Indices */}
            <div className="space-y-6">
                <h1 className="text-2xl lg:text-3xl font-medium mb-6">What Are Equity Indices?</h1>
                <div className=" space-y-4">
                    <p><strong>NASDAQ 100:</strong> <br /> The NASDAQ Composite is the main NASDAQ index, with the NASDAQ 100 consisting of 107 equity securities.</p>
                    <p><strong>DAX 40:</strong> <br /> The Deutscher Aktienindex, it represents the 40 major companies trading on the Frankfurt Stock Exchange.</p>
                    <p><strong>S&P 500:</strong> <br /> Standard & Poor's Standard & Poor's Financial Services, Inc. is a leading indicator of U.S. equities.</p>
                    <p><strong>ASX 200:</strong> <br /> The capitalization-weighted index of stocks listed on the Australian Securities Exchange.</p>
                    <p><strong>Nikkei 225:</strong> <br /> The Nikkei 225 is the stock index of the Tokyo Stock Exchange.</p>
                    <p><strong>Hang Seng:</strong> <br /> The Hang Seng Index tracks 50 major companies listed on the Hong Kong Stock Market.</p>
                    <p><strong>FTSE 100:</strong> <br /> Managed by the Times Stock Exchange 100 Index, it encompasses the top 100 companies by market capitalization listed on the London Stock Exchange.</p>
                    <p><strong>Dow Jones:</strong> <br /> The oldest stock index, U.S.-based, tracks the performance of 30 major American companies.</p>
                    <p><strong>CAC 40:</strong> <br /> The French CAC 40 index includes the top 40 values of the 100 highest market-capitalization company stocks traded on Euronext Paris.</p>
                </div>

                <div className="flex justify-end py-6">
                    <img src="/forex-img2.webp" alt="Stock Indices" className="w-1/3 object-contain" />
                </div>
            </div>
        </section>
    );
};

export default EquityIndicesInfo;
