import React from "react";

const ServicesSection = ({ services }) => {
    
  return (
    <section className="py-12 lg:py-14 3xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="Heading2">
          Max Tech SERVICES
        </h2>
        <p className="text max-w-5xl mx-auto">
          Max Tech is your premier destination for cutting-edge financial services
          and solutions. With a commitment to excellence and a focus on
          innovation, we offer a comprehensive range of services designed to
          meet the diverse needs of our clients in the ever-evolving financial
          landscape.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-green-500 text-2xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
