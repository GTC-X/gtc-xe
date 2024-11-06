import React from "react";

const CardIcon = ({ title, img }) => {
    return (
        <div className={`${img ? "bg-neutral" : ""} items-center grid grid-cols-3  gap-3 py-2 px-4 rounded-lg`}>
            <div>
                <img className="mx-auto h-14" src={img} alt={title} />
            </div>
            <h3
                className="text-left text-base leading-5 col-span-2"
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
    );
};

const TradeForexSection = ({
    title = "",
    para = "",
    footer = "",
    cardTitle = "",
    bannerImg,
    bgImg = true,
    cards = [],
}) => {
    return (
        <div className="container mx-auto">
            <section className="bg-black text-white pt-16 pb-10">
                <div className=" mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
                    {/* Left Section */}
                    <div className="md:w-1/2 space-y-4 text-center md:text-left">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p
                            className="text-base"
                            dangerouslySetInnerHTML={{ __html: para }}
                        />
                        <button className="bg-secondary text-white py-1 px-10 rounded-lg font-medium hover:bg-secondary transition duration-300">
                            Open Live Account
                        </button>
                    </div>
                    <div
                        className={`relative md:w-1/2 flex bg-no-repeat justify-center mt-8 md:mt-0 bg-contain ${bgImg ? "bg-[url('/home-hero-bg.png')]" : ""
                            }`}
                    >
                        <img
                            src={bannerImg || ""}
                            alt="Laptop Trading"
                            className=" w-4/5"
                        />
                    </div>
                </div>

                <div className=" text-primary mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg text-center">
                    {cardTitle && (
                        <div className=" md:col-span-3 col-span-1">
                            <p className="text-xl font-medium">{cardTitle}</p>
                        </div>
                    )}
                    {cards?.map((single, index) => (
                        <CardIcon key={index} title={single?.title} img={single?.icon} />
                    ))}
                </div>

                <div className="mt-6">
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: footer }} />
                </div>
            </section>
        </div>
    );
};

export default TradeForexSection;
