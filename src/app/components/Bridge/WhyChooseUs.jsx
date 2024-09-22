import React from 'react';

const services = [
  {
    title: "EXPERTISE",
    description:
      "With years of experience in the financial markets, GTC XE is a trusted provider of bridge solutions. Our team of experts is committed to delivering reliable and efficient connectivity solutions to our clients.",
    icon: "/home/icons/icon1.svg", // replace with actual icon path
  },
  {
    title: "GLOBAL CONNECTIVITY",
    description:
      "GTC XE bridges offer global connectivity, allowing traders to access liquidity from markets around the world. Whether you're trading forex, stocks, commodities, or cryptocurrencies, our bridges can connect you to the markets you need.",
    icon: "/home/icons/icon2.svg",
  },
  {
    title: "CUSTOMIZATION",
    description:
      "We understand that every trader has unique needs and preferences. That's why we offer customizable bridge solutions that can be tailored to suit your specific trading requirements.",
    icon: "/home/icons/icon3.svg",
  },
  {
    title: "SUPPORT",
    description:
      "Our dedicated support team is available to assist you with any questions or issues you may encounter. Whether you need technical assistance or advice on optimizing your trading setup, we're here to help.",
    icon: "/home/icons/icon4.svg",
  },
  {
    title: "EXPERIENCE",
    description:
      "Seamless connectivity with GTC XE bridges and unlock new opportunities in your trading journey. Contact us today to learn more about our bridge solutions and how they can benefit your trading operations.",
    icon: "/home/icons/icon6.svg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-black">
          WHY CHOOSE <span className="text-primary">GTC XE</span> BRIDGES?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-center text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
