import React from "react";

const EnergyTradingSection = () => {
    return (
        <div className="container mx-auto py-16  ">
            <div className=" mb-12">
                <h2 className="text-2xl md:text-3xl font-bold ">
                    ENERGY TRADING SPREAD / CONDITION
                </h2>
                <p className="text-secondary mt-2">List/Table of products and spread</p>
            </div>

            <div className="md:flex md:space-x-8">
                <div className="md:w-3/5 space-y-6">
                    <h1 className="text-2xl lg:text-3xl font-medium ">
                        WHAT IS <b >ENERGY TRADING?</b>
                    </h1>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                        ENERGY TRADING INVOLVES THE BUYING AND SELLING OF ENERGY COMMODITIES, SUCH AS OIL,
                        NATURAL GAS, AND ELECTRICITY, IN FINANCIAL MARKETS. ENERGY MARKETS ARE HIGHLY
                        DYNAMIC AND INFLUENCED BY A COMBINATION OF GEOPOLITICAL, ENVIRONMENTAL, AND
                        ECONOMIC FACTORS. GLOBAL ECONOMIC ACTIVITY SIGNIFICANTLY AFFECTS ENERGY
                        DEMAND—BOOMING ECONOMIES DRIVE CONSUMPTION HIGHER, WHILE ECONOMIC
                        DOWNTURNS TEND TO LOWER IT.
                    </p>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                        EXTREME WEATHER CONDITIONS, SUCH AS HURRICANES OR COLD WINTERS, CAN DISRUPT THE
                        PRODUCTION AND SUPPLY CHAINS OF KEY ENERGY RESOURCES LIKE CRUDE OIL, NATURAL GAS,
                        AND HEATING OIL. THESE DISRUPTIONS CAN ALTER MARKET DYNAMICS AND IMPACT THE
                        DEMAND FOR RELATED CONSUMER SERVICES. ADDITIONALLY, GEOPOLITICAL STABILITY IN
                        MAJOR NATURAL GAS-PRODUCING REGIONS CAN HAVE A NOTABLE IMPACT ON GLOBAL
                        ENERGY PRICES.
                    </p>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                        OIL TRADING, IN PARTICULAR, OPERATES AROUND THE CLOCK DUE TO THE GLOBAL NATURE OF
                        THE MARKET, RESULTING IN CONSTANT FLUCTUATIONS IN PRICES. THIS VOLATILITY MAKES IT
                        APPEALING FOR DAY TRADERS WHO AIM TO CAPITALIZE ON RAPID PRICE MOVEMENTS,
                        ESPECIALLY WHEN TRADING OIL THROUGH CFDS, WHICH OFFER A SIMPLIFIED APPROACH TO
                        PARTICIPATING IN THE MARKET.
                    </p>
                    <p className="text-justify text-sm md:text-base leading-relaxed">
                        ACCESS TO REAL-TIME MARKET DATA, IN-DEPTH ANALYSIS, AND A WIDE RANGE OF TRADING
                        TOOLS EQUIPS TRADERS WITH THE INSIGHTS NEEDED TO MAKE WELL-INFORMED DECISIONS
                        AND TAKE ADVANTAGE OF EMERGING OPPORTUNITIES IN ENERGY MARKETS.
                    </p>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
                    <img
                        src="/energy-img1.webp"
                        alt="Oil Trading"
                        className="w-3/4 md:w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default EnergyTradingSection;
