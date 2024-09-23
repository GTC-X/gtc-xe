import Image from 'next/image';

// Dynamic Card Component
const AboutCard = ({ title, description, icon, active }) => {
  return (
    <div className="bg-white shadow-2xl border border-gray-100 p-3 md:p-6 rounded-lg relative flex items-start space-x-6 md:pt-12 px-5">
    {/* Icon */}
    <div className="absolute -left-10 top-10 flex-shrink-0 bg-[#C7E5D7] p-5 rounded-full shadow-lg">
      <Image src={icon} alt={`${title} icon`} width={50} height={50} />
    </div>

    {/* Content */}
    <div className="pl-4 md:pl-12 text-left py-5 md:py-0">
      <h3 className="text-lg md:text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-4 text">{description}</p>
    </div>
  </div>
  );
};

// Main Component
const AboutUsSection = () => {
  const cardsData = [
    {
      title: 'PROFESSIONAL',
      description:
        'At Max Tech, we take delight in our position as a leading global provider of liquidity solutions for financial services and institutional clients. With over a decade of experience and a strong commitment to excellence, we have solidified our position as a trusted provider of premium financial services. Since our establishment in 2012, we have been a cornerstone in the financial industry. our wide array of services and products reflects our financial strength and our unwavering dedication to meeting the evolving needs of our vast client base. Serving customers and partners across 100 countries worldwide, we are dedicated to serving a diverse range of clients.',
      icon: '/about/icon1.svg',
      active: false,
    },
    {
      title: 'EXPERIENCED',
      description:
        'Since our inception, we have honed our expertise in the trading realm. Over the years, wehave led the way in revolutionizing the financial services landscape, pioneering innovative products, services, and trading platforms, setting industry standards, and delivering exceptional value to our clients.',
      icon: '/about/icon2.svg',
      active: true, // This will add the blue border
    },
    {
      title: 'TRUSTED',
      description:
        'With our steadfast commitment to customer satisfaction and continual expansion, we have become a trusted partner for those seeking top-tier liquidity solutions in the financial derivatives market. Explore our comprehensive range of offerings and discover the excellence that has solidified our position as a global leader in the industry.',
      icon: '/about/icon3.svg',
      active: false,
    },
    {
      title: 'LIQUIDITY SERVICES',
      description:
        'Specializing in liquidity provision, we leverage cutting-edge technology to offer unparalleled liquidity solutions to our clients. Our deep pool of resources ensures optimal trading experiences, while our commitment to transparency and reliability sets us apart from the competition. Experience transparency, reliability, and superior service with our liquidity solutions',
      icon: '/about/icon4.svg',
      active: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto text-center px-5 md:px-0">
        <h2 className="Heading2 mb-8">ABOUT US</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
          {cardsData.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              active={card.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
