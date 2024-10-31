import React from 'react';

const GetStartedSection = () => {
    return (
        <div className="container py-16 px-4 text-center">
            {/* Title and Subtitle */}
            <h2 className="text-2xl font-semibold text-black mb-2">Ready to get started</h2>
            <p className="  mb-10">Start trading in 3 easy steps</p>

            {/* Steps */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
                {/* Step 1 */}
                <div className="flex flex-col max-w-48 items-center">
                    <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12 mb-4 text-lg font-bold">1</div>
                    <h3 className="text-lg font-medium">Register</h3>
                    <p className="  text-sm mt-1">Apply for a Live Account in less than 2 minutes</p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col max-w-48 items-center">
                    <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12 mb-4 text-lg font-bold">2</div>
                    <h3 className="text-lg font-medium">Deposit funds</h3>
                    <p className="  text-sm mt-1">Fund your account via your chosen method</p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col max-w-48 items-center">
                    <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12 mb-4 text-lg font-bold">3</div>
                    <h3 className="text-lg font-medium">Trade</h3>
                    <p className="  text-sm mt-1">Start trading with a reliable broker</p>
                </div>
            </div>

            {/* Get Started Button */}
            <button className="bg-secondary text-white py-1 px-10 rounded-lg font-semibold hover:bg-secondary transition duration-300">
                Get started
            </button>
        </div>
    );
};

export default GetStartedSection;
