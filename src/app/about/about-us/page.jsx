import React from 'react';

const AboutUs = () => {
    return (
        <div className=' bg-white'>
            <div className="container mx-auto">
                {/* Logo and Header */}
                <div className=' grid md:grid-cols-2 grid-cols-1 min-h-96 items-center gap-2'>
                    <div className="flex flex-col  order-2 md:order-1 ">
                        <h1 className="text-3xl font-bold mt-2">About Us</h1>
                        <p className="text-sm">Discover The East Trade – Your Global Financial Partner</p>
                        <p className="text-lg font-semibold mt-2">EXPERTISE &nbsp;|&nbsp; RELIABILITY&nbsp; |&nbsp; INNOVATION</p>
                    </div>

                    {/* Globe Image */}
                    <div className="flex flex-col justify-center mt-6 order-1 md:order-2">
                        <div>
                            <img src="/logo-about.jpg" alt="The East Trading Co. Logo" className="h-16 mx-auto mb-1" />
                        </div>
                        <div>
                            <img src="/globe.jpg" alt="Globe Background" className="opacity-50 w-11/12 mx-auto h-52" />
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="pt-8 pb-20 space-y-10">
                    {/* Expertise Section */}
                    <div className="flex flex-col  ">
                        <div className="flex items-center space-x-2">
                            <img src="/about-icon1.jpg" alt="Expertise Icon" className="h-8" />
                            <h2 className="text-lg font-semibold  ">EXPERTISE</h2>
                        </div>
                        <p className="mt-4   ">
                            At The East Trade, we are recognized as a global leader in financial derivatives. With over a decade of experience, we have built a reputation for excellence in delivering premium financial services.
                        </p>
                        <p className="mt-2   ">
                            Our broad portfolio of products and services highlights our financial strength and commitment to providing world-class support to a growing client base of more than 180,000 customers worldwide. We take pride in serving partners and clients across over 25 countries.
                        </p>
                    </div>

                    {/* Reliability Section */}
                    <div className="flex flex-col  ">
                        <div className="flex items-center space-x-2">
                            <img src="/about-icon2.jpg" alt="Reliability Icon" className="h-8" />
                            <h2 className="text-lg font-semibold  ">RELIABILITY</h2>
                        </div>
                        <p className="mt-4  ">
                            We are dedicated to maintaining trust through consistent growth and customer-centric solutions. Our focus on delivering high-quality financial derivatives services ensures that we remain a reliable partner for clients seeking outstanding trading experiences. Discover our wide range of offerings and see why we continue to lead the industry.
                        </p>
                    </div>

                    {/* Innovation Section */}
                    <div className="flex flex-col  ">
                        <div className="flex items-center space-x-2">
                            <img src="/about-icon3.jpg" alt="Innovation Icon" className="h-8" />
                            <h2 className="text-lg font-semibold  ">INNOVATION</h2>
                        </div>
                        <p className="mt-4  ">
                            Since our inception, we have been innovators, consistently setting benchmarks in the financial sector. Our journey has been marked by the creation of cutting-edge products, services, and trading platforms that elevate industry standards and empower our clients to thrive in dynamic markets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
