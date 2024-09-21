import React from 'react'
import BannerSection from '../components/aboutUs/AboutUsBanner'
import AboutUsSection from '../components/aboutUs/AboutCards'
import MissionVision from '../components/aboutUs/MissionVision'
import Service from '../components/home/Service'
const page = () => {
  return (
    <>
    <BannerSection
        title="Innovating technology to shape the future of the finance industry"
        subtitle=""
        breadcrumbLink="/"
        breadcrumbText="About Us"
        imageUrl="/about/about-banner.svg"
      />
      <AboutUsSection />
      <MissionVision />
      <Service />
    </>
  )
}

export default page