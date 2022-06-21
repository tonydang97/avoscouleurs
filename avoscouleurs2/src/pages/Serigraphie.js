import React from 'react'
import HeroSection from "../components/Serigraphie/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
import Listings from '../components/Serigraphie/Listings'
import Features from '../components/Serigraphie/Features'
import ContactZone from '../components/ContactZone/ContactZone'
import Avantages from "../components/Serigraphie/Avantages"
import { InfoSerigraphie1, InfoSerigraphie2, InfoTransfertSer } from '../components/InfoData'
import TableauComparatif from "../components/TableauComparatif/TableauComparatif"




function Serigraphie() {
  return (
    <>
      <HeroSection />
      <InfoSection {...InfoSerigraphie1}/>
      <InfoSection {...InfoSerigraphie2} />
      <InfoSection {...InfoTransfertSer} />
      <Avantages />
      <Features />
      <TableauComparatif />
      <Listings />
      <ContactZone />
      
    </>
  )
}

export default Serigraphie