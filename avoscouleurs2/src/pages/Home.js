import React from 'react'
import Presentation from '../components/Presentation/Presentation'
import Exemple from '../components/Exemple/Exemple'
import Testimonial from '../components/Testimonial/Testimonial'
import Stats from '../components/Stats/Stats'
import ContactZone from '../components/ContactZone/ContactZone'
import Technique from '../components/Technique/Technique'

const Home = () => {
  return (
    <>
    <Presentation />
    <Technique />
    <Stats />
    <Exemple />
    <Testimonial />
    <ContactZone />
    </>
  )
}

export default Home