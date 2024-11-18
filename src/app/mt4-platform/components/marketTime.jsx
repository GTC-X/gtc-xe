const MarketTime = () => {
    return (
        <div className="py-12 container mx-auto space-y-12">
            {/* Market's Time Section */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Market's Time</h2>
                <p className="  leading-relaxed  text-justify">
                    The continuous liquidity of the forex market is based on the fact that the markets are operated for 24 hours a day in any part of the world. From the New Zealand open, going through Asia and until the New York closing, traders can benefit by 24h from following various real-time insights. There are three main sessions throughout most of the market running, the most important is the time when the two open ends of the session overlap, creating increased volatility. These sessions repeat daily during business hours. These three times are often referred to as the most active market hours and usually bring the best opportunities. This screen would help you find these layouts.
                </p>
                <div className="mt-6">
                    <img
                        src="/mt4-img3.png"
                        alt="Market's Time Chart"
                        className="w-full max-w-3xl mx-auto"
                    />
                </div>
            </div>

            {/* Market's Holiday Section */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Market's Holiday</h2>
                <div className="overflow-x-auto max-w-3xl mx-auto">
                    <table className="min-w-full border-collapse border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border border-gray-300 font-semibold">Holiday</th>
                                <th className="p-2 border border-gray-300 font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { holiday: "New Year's Day", date: "1st January" },
                                { holiday: "Martin Luther King Day", date: "15th January" },
                                { holiday: "President's Day", date: "19th February" },
                                { holiday: "Good Friday", date: "29th March" },
                                { holiday: "Labour Day", date: "7th May" },
                                { holiday: "Independence Day", date: "4th July" },
                                { holiday: "Labour Day", date: "3rd September" },
                                { holiday: "Columbus Day", date: "8th October" },
                                { holiday: "Veterans Day", date: "11th November" },
                                { holiday: "Thanksgiving Day", date: "22nd November" },
                                { holiday: "Christmas Day", date: "25th December" },
                            ].map((item, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-100">
                                    <td className="p-2 border border-gray-300">{item.holiday}</td>
                                    <td className="p-2 border border-gray-300">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default MarketTime