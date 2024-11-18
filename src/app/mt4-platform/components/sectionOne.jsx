const SectionOne = () => {
    return (
        <div className="container gap-10 mt-10 md:pb-10">
            {/* MT4 Section */}
            <div className="sm:flex pb-10 sm:space-x-8">
                <div className="sm:w-3/5 space-y-6">
                    <h2 className="text-xl font-semibold">MT4 - Trusted & Reliable</h2>
                    <p className=" mt-2">
                        MT4 is known for its simplicity and efficiency, making it a favorite among forex traders. It offers:
                    </p>
                    <ul className="mt-4 space-y-2 ">
                        <li>● <span className="font-semibold text-sm">User-Friendly Interface:</span> Easy for beginners and professionals alike.</li>
                        <li>● <span className="font-semibold text-sm">Advanced Charting Tools:</span> Analyze market trends with multiple chart types and technical indicators.</li>
                        <li>● <span className="font-semibold text-sm">Automated Trading:</span> Supports Expert Advisors (EAs) to automate trades.</li>
                        <li>● <span className="font-semibold text-sm">High Security:</span> Ensures data encryption and safety during transactions.</li>
                    </ul>
                </div>
                <div className="sm:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
                    <img
                        src="/mt4-img1.webp"
                        alt="Oil Trading"
                        className=" mx-auto sm:w-full object-contain"
                    />
                </div>
            </div>

            {/* MT5 Section */}
            <div className="sm:flex py-10 sm:space-x-8">
                <div className="sm:w-3/5 space-y-6">
                    <h2 className="text-xl font-semibold">MT5 - Enhanced & Versatile</h2>
                    <p className=" mt-2">
                        MT5 builds on MT4's success, introducing advanced features and broader market access. It offers:
                    </p>
                    <ul className="mt-4 space-y-2 ">
                        <li>● <span className="font-semibold text-sm">User-Friendly Interface:</span> Easy for beginners and professionals alike.</li>
                        <li>● <span className="font-semibold text-sm">Advanced Charting Tools:</span> Analyze market trends with multiple chart types and technical indicators.</li>
                        <li>● <span className="font-semibold text-sm">Automated Trading:</span> Supports Expert Advisors (EAs) to automate trades.</li>
                        <li>● <span className="font-semibold text-sm">High Security:</span> Ensures data encryption and safety during transactions.</li>
                    </ul>
                </div>
                <div className="sm:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
                    <img
                        src="/mt4-img2.webp"
                        alt="Oil Trading"
                        className=" mx-auto sm:w-full object-contain"
                    />
                </div>
            </div>
        </div>

    )
}

export default SectionOne