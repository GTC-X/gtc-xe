import React from 'react'
import BannerSection from '../components/aboutUs/AboutUsBanner'
import BridgeData from '../components/Bridge/BridgeData'
import WhyChooseUs from '../components/Bridge/WhyChooseUs'

const page = () => {



  return (
    <>
    <BannerSection
        title="Connecting Markets
with Max Tech Bridges
"
        subtitle=""
        breadcrumbLink="/"
        breadcrumbText="Bridges"
        imageUrl="/service/bridge.webp"
        svgColor="#0c2448"
      />
      <BridgeData />
      <WhyChooseUs />
  
    </>
  )
}

export default page