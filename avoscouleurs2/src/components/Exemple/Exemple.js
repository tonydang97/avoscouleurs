import React from "react"
import "./Exemple.css"
import Card from "./Card"
import Exemple_data from "./Exemple_data"

const Exemple = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading'>

            <h1>Nos créations</h1>
          </div>

          <div className='content grid'>
            {Exemple_data.map((value, index) => {
              return <Card 
              key={index} 
              image={value.image} 
              category={value.category} 
              title={value.title} 
              description={value.description}
              description2={value.description2}
              />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Exemple