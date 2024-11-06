import { LuCheckCircle } from "react-icons/lu";

const WhyChooseUs = () => {
    return (
        <div className=" bg-white">
            <div className="container mx-auto py-10 pt-24">
                {/* Title Section */}
                <h1 className="text-3xl font-bold  mb-4">Why Choose The East Trade?</h1>
                <p className="text-lg mb-2">
                    <span className=" font-medium">"Unlock Profitable Opportunities: </span> Start Your Best Investment Journey with Us”
                </p>
                <p className=" mb-4">
                    Trading with <span className="font-semibold">The East Trade</span> offers the ideal path to invest your capital wisely and profitably.
                    Our platform ensures a secure and efficient trading environment, leveraging advanced technology and expert support to back your investment decisions.
                </p>
                <p className=" mb-8">
                    With our commitment to providing an exceptional trading experience, we empower you to navigate financial markets with ease and confidence.
                    Make well-informed decisions that can pave the way to attractive returns. Join us today to unlock your potential for financial growth and
                    achieve success on your investment journey.
                </p>

                {/* First Section */}
                <h2 className="text-2xl mb-4"><span className="font-semibold ">Trade </span> with the <span className="text-blue-600 font-semibold">Best Broker</span></h2>
                <div className="flex items-center space-x-2 mb-4">
                    <img src="/why-choose-us-icon1.jpg" alt="Reliability Icon" className="h-8" />
                    <p className="text-lg">Enjoy the <span className="font-semibold">Ultimate Trading Experience</span> with <span className="font-semibold">Industry-Leading Features:</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                    {[
                        "Tightest Spreads in the market for maximum profitability",
                        "Most Stable Trading Platforms for uninterrupted trading",
                        "Competitive Rebates & Commissions tailored to your needs",
                        "Secure, Instant, and Fast Execution for seamless transactions",
                        "MT4 / MT5 Trading Platforms with advanced features",
                        "Access to 7 Markets with over 27,000 trading instruments",
                        "Leverage up to 500:1 to maximize your trading potential",
                        "Negative Balance Protection for risk management",
                        "No Restrictions on EA (Expert Advisors) usage",
                        "No Price Slippage to ensure precise trading",
                        "No Commissions, Requotes, or Rejections",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <LuCheckCircle className="text-green-500 mr-2 mt-1" />
                            <span className="text-gray-800">{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Second Section */}
                <div className="flex items-center space-x-2 mb-4">
                    <img src="/why-choose-us-icon2.jpg" alt="Reliability Icon" className="h-8" />
                    <h3 className="text-lg "><span className="font-semibold">Cutting-Edge Technology</span> and <span className="font-semibold">Direct Market Access:</span></h3>
                </div>
                <ul className="space-y-3">
                    {[
                        "Direct Access to Top-Tier Banks for superior pricing",
                        "No Dealing Desk Intervention for transparent execution",
                        "Tier 1 Liquidity Pricing for competitive rates",
                        "Real-Time Market Analysis to stay ahead",
                        "Instant and Fast Execution for optimal results",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <LuCheckCircle className="text-green-500 mr-2 mt-1" />
                            <span className="text-gray-800">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WhyChooseUs;
