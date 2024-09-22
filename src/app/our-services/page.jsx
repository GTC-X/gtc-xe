import React from 'react'
import BannerSection from '../components/aboutUs/AboutUsBanner'
import ServicesSection from '../components/Services/ServicesSection'
const page = () => {

    const servicesData = [
        {
          title: "Liquidity Solutions",
          description:
            "At GTC XE, we specialize in providing top-tier liquidity solutions to financial institutions and institutional clients worldwide. Our deep pool of liquidity and advanced technology ensure optimal execution and minimal slippage on every trade.",
        },
        {
          title: "Trading Platforms",
          description:
            "We offer a range of sophisticated trading platforms designed to meet the needs of traders at every level. From intuitive web-based platforms to advanced desktop applications, our trading platforms provide access to global markets and a wide range of financial instruments.",
        },
        {
          title: "Technology Solutions",
          description:
            "We leverage cutting-edge technology to develop innovative solutions that empower our clients to succeed in the digital age. From high-speed trading infrastructure to advanced data analytics tools, our technology solutions enable our clients to stay ahead of the curve and capitalize on market opportunities.",
        },
        {
          title: "Consulting Services",
          description:
            "Our team of financial experts offers consulting services to help our clients navigate regulatory challenges, optimize their trading strategies, and maximize their returns. From compliance advisory to strategic planning, we provide tailored solutions to meet our clients' specific needs",
        },
        {
          title: "Innovative Solutions",
          description:
            "We are committed to innovation, constantly pushing the boundaries of what's possible to deliver cutting-edge solutions that meet the evolving needs of our clients.",
        },
        {
            title: "Customized Service",
            description:
              "Our comprehensive risk management solutions help our clients identify, assess, and mitigate market risk effectively. From algorithmic trading systems to advanced risk analytics tools, we offer a range of solutions to help our clients manage risk and protect their investments.",
          },
      ];
      

  return (
    <>
    <BannerSection
        title="We provide you a premier destination for cutting-edge financial services 
and solutions.
"
        subtitle=""
        breadcrumbLink="/"
        breadcrumbText="Our Services"
        imageUrl="/service/services-bg.webp"
      />
      <ServicesSection services={servicesData}  />
    </>
  )
}

export default page