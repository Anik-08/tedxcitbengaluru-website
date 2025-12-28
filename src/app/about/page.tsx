import React from 'react'
import Header from '../../components/layout/header'
import Hero from './hero'
import AboutUs from './aboutus'
import Mission from './mission'
import Team from './team'
import Footer from './footer'

const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Mission />
      <Team />
      <Footer />
    </div>
  )
}

export default page
