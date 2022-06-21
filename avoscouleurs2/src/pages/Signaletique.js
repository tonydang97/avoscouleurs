import React from 'react'
import HeroSection from "../components/Signaletiques/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
// import Listings from '../components/Signaletiques/Listings'
// import Features from '../components/Signaletiques/Features'
import ContactZone from '../components/ContactZone/ContactZone'
// import Avantages from "../components/Signaletiques/Avantages"
import { InfoSignaletiques1, InfoSignaletiques2 } from '../components/InfoData'
// import TableauComparatif from "../components/TableauComparatif/TableauComparatif"




function Signaletique() {
  return (
    <>
      <HeroSection />
      <InfoSection {...InfoSignaletiques1}/>
      <InfoSection {...InfoSignaletiques2} />
      {/* <Avantages /> */}
      {/* <Features /> */}
      {/* <Listings /> */}
      <ContactZone /> 
      {/* <TableauComparatif /> */}
      
    </>
  )
}

export default Signaletique