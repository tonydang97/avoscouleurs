import React from 'react'
import HeroSection from "../components/Broderie/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
import Listings from '../components/Broderie/Listings'
import Features from '../components/Broderie/Features'
import ContactZone from '../components/ContactZone/ContactZone'
import Avantages from '../components/Broderie/Avantages'
import TableauComparatif from '../components/TableauComparatif/TableauComparatif'
import { InfoBroderie1, InfoBroderie2 } from '../components/InfoData'




function Broderie() {
  return (
    <>
      <HeroSection />
      <InfoSection {...InfoBroderie1}/>
      <InfoSection {...InfoBroderie2} />
      <Avantages />
      <Features />
      <TableauComparatif />
      <Listings />
      <ContactZone />
      
    </>
  )
}

export default Broderie