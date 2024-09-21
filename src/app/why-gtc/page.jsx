import React from 'react'
import BannerSection from '../components/aboutUs/AboutUsBanner'
import WhyCard from '../components/aboutUs/WhyCard'
const page = () => {
  return (
    <>
    <BannerSection
        title="multitude of reasons that set us apart as 
a premier provider of financial solutions."
        subtitle=""
        breadcrumbLink="/"
        breadcrumbText="Why GTC"
        imageUrl="/why/why.svg"
      />
      <WhyCard />
    </>
  )
}

export default page