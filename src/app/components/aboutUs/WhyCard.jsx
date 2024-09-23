import Image from "next/image";

const services = [
  {
    title: "Versatile Offerings",
    description:
      "From traditional investment options to alternative assets, we offer a versatile range of offerings to suit every investor's needs and preferences.",
    icon: "/why/icon/icon1.svg",
  },
  {
    title: "Trusted Partner",
    description:
      "Our commitment to integrity, transparency, and reliability has earned us the trust of countless clients, making us their preferred partner in their financial journey.",
    icon: "/why/icon/icon2.svg",
  },
  {
    title: "Best Liquidity",
    description:
      "Max Tech is renowned for offering the best liquidity solutions in the market, ensuring that our clients have access to ample liquidity to execute their trades efficiently and seamlessly.",
    icon: "/why/icon/icon3.svg",
  },
  {
    title: "Innovative Solutions",
    description:
      "We are at the forefront of innovation, constantly striving to develop and implement cutting-edge solutions that meet the evolving needs of our clients.",
    icon: "/why/icon/icon4.svg",
  },
  {
    title: "Deep Pool of Liquidity",
    description:
      "With a deep pool of liquidity at our disposal, we provide our clients with unparalleled access to a wide range of financial instruments and markets, allowing them to capitalize on opportunities and manage risk effectively.",
    icon: "/why/icon/icon5.svg",
  },
  {
    title: "Industry Standards",
    description:
      "As industry leaders, we set the standards for excellence in the financial sector, consistently raising the bar for ourselves and our competitors.",
    icon: "/why/icon/icon6.svg",
  },
  // Add more services here...
  {
    title: "Precise Solutions",
    description:
      "From traditional investment options to cutting-edge financial products, we offer a diverse range  of offerings to cater to the diverse needs of our clients.",
    icon: "/why/icon/icon7.svg",
  },
  {
    title: "Premium Service",
    description:
      "Our dedication to providing top-tier service ensures that every client receives personalized attention and support, no matter the size of their investment.",
    icon: "/why/icon/icon8.svg",
  },
  {
    title: "Advanced Technology",
    description:
      "Our liquidity solutions are powered by advanced technology, including algorithmic trading systems and high-speed connectivity, ensuring optimal execution and minimal slippage.",
    icon: "/why/icon/icon9.svg",
  },
  {
    title: "Reputation & Reliability",
    description:
      "With a solid track record of delivering results and exceeding expectations, we have built a reputation for reliability and trustworthiness in the industry.",
    icon: "/why/icon/icon10.svg",
  },
  {
    title: "Competitive Spreads",
    description:
      "We offer competitive spreads on our liquidity solutions, enabling our clients to trade with tight spreads and maximize their profitability.",
    icon: "/why/icon/icon11.svg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "We are committed to excellence in everything we do, from customer service to product development, ensuring that our clients always receive the best possible experience.",
    icon: "/why/icon/icon12.svg",
  },
  {
    title: "Global Reach",
    description:
      "With a presence spanning across continents, we offer our services to clients worldwide, ensuring accessibility and support wherever you are.",
    icon: "/why/icon/icon13.svg",
  },
  {
    title: "Pioneering Technology",
    description:
      "Leveraging the latest advancements in technology, we offer state-of-the-art solutions that empower our clients to achieve their financial goals with confidence.",
    icon: "/why/icon/icon14.svg",
  },
  {
    title: "Expertise and Excellence",
    description:
      "Backed by a team of seasoned professionals, we bring decades of combined experience to the table, ensuring excellence in every aspect of our service delivery.",
    icon: "/why/icon/icon15.svg",
  },
  {
    title: "Low Latency Execution",
    description:
      "Leveraging cutting-edge technology and high-speed infrastructure, we offer low-latency execution on our liquidity solutions, enabling our clients to execute trades with minimal delay and slippage.",
    icon: "/why/icon/icon16.svg",
  },
];

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-md flex gap-4 md:gap-8 ">
      <div className="flex-none flex items-center justify-center">
        <Image src={icon} alt={title} width={100} height={100} />
      </div>
      <div>
        <h3 className="text-lg md:text-2xl font-medium text-primary">{title}</h3>
        <p className="text mt-2">{description}</p>
      </div>
    </div>
  );
};

const WhyCard = () => {
  return (
    <section className="py-12 md:py-16 3xl:py-20">
    
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyCard