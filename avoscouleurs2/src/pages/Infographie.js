import React from 'react'
import HeroSection from "../components/Infographie/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
// import Listings from '../components/Infographie/Listings'
// import Features from '../components/Infographie/Features'
import ContactZone from '../components/ContactZone/ContactZone'
// import Avantages from "../components/Infographie/Avantages"
import { InfoInfographie1, InfoInfographie2 } from '../components/InfoData'




function Infographie() {
  return (
    <>
      <HeroSection />
      <InfoSection {...InfoInfographie1}/>
      <InfoSection {...InfoInfographie2} />
      {/* <Avantages /> */}
      {/* <Features /> */}
      {/* <Listings /> */}
      <ContactZone />
      
    </>
  )
}

export default Infographie