import React from 'react'
import HeroSection from "../components/Numerique/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
import Listings from '../components/Numerique/Listings'
import Avantages from '../components/Numerique/Avantages'
// import Features from '../components/Numerique/Features'
import ContactZone from '../components/ContactZone/ContactZone'
import { InfoTransfertNum, InfoTransfertDTF, InfoNumeriqueDTG, InfoFlex } from '../components/InfoData'
import TableauComparatif from '../components/TableauTransferts/TableauTransfert'


const list = [
  {technique: "Transfert numérique", Qualité: "3 étoiles"},
  {technique: "Transfert sérigraphique", Qualité: "Élevée", Tenu:"Bonne", Choix:"Large", Prix:"Moyen"},
  {technique: "Transfert DTF", Qualité: "3 étoiles"},
]

const colNames = ['Technique', 'Qualité', 'Tenu dans le temps', 'Choix de coloris', 'Prix' ]


function Numerique() {
  return (
    <div>
      <HeroSection />
      <InfoSection {...InfoTransfertNum} />
      <InfoSection {...InfoTransfertDTF} />
      <InfoSection {...InfoFlex} />
      <InfoSection {...InfoNumeriqueDTG} />
      <Avantages />
      <TableauComparatif list={list} colNames={colNames} />
      {/* <Features /> */}
      <Listings />
      <ContactZone />

    </div>
  )
}

export default Numerique