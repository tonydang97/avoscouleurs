import React from 'react'
import HeroSection from "../components/Sublimation/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
import Listings from '../components/Sublimation/Listings'
import Features from '../components/Sublimation/Features'
import ContactZone from '../components/ContactZone/ContactZone'
import Avantages from "../components/Sublimation/Avantages"
import { InfoSublimation1, InfoSublimation2 } from '../components/InfoData'
import TableauComparatif from "../components/TableauComparatif/TableauComparatif"

function Sublimation() {
  return (
    <div>
      <HeroSection />
      <InfoSection {...InfoSublimation1}/>
      <InfoSection {...InfoSublimation2} />
      <Avantages />
      <Features />
      <TableauComparatif />
      <Listings />
      <ContactZone />

    </div>
  )
}

export default Sublimation