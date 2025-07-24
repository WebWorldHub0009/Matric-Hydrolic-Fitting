import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutHero from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import StatsCounter from '../components/StatsCounter'
import OurServices from '../components/OurServices'
import ThoughtAndContact from '../components/ThoughtAndConnect'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <AboutHero/>
   <WhyChooseUs/>
   <OurServices/>
   <StatsCounter/>
   <ThoughtAndContact/>
   </>
  )
}

export default Home
