import React from 'react'
import "./Technique.css"
import { Link } from "react-router-dom"

const Cardtest = () => {
  return (
    <>
      <section className='features top' id="features">
            <div className='container'>
                <div className='heading'>
                    <h4>Marquage textile</h4>
                    <h1>Nos services</h1>
                </div>

                <div className='content grid' id="gridtechnique">
                <Link to="/infographie"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/ios-filled/50/000000/workstation.png"alt=""/>
                        <h2>Infographie</h2>
                       <p id="desctruncate">L'infographie est la création d'images numériques nécessaires à la production...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                   <Link to="/serigraphie"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/screen-printing.png" alt=""/>
                        <h2>Sérigraphie</h2>
                       <p id="desctruncate">La sérigraphie est la technique de marquage préconisée pour des volumes importants...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/broderie"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/ios-filled/48/000000/hand-holding-needle.png" alt=""/>
                        <h2>Broderie</h2>
                       <p id="desctruncate">La broderie offre une image trés qualitative et durable dans le temps...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/impression-numerique"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/ios-filled/50/000000/feed-paper.png" alt=""/>
                        <h2>Impression numérique</h2>
                       <p id="desctruncate">Pour des petites à moyennes séries ou pour des visuels complexes...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/sublimation"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/50/000000/external-mug-mother-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt=""/>
                        <h2>Sublimation</h2>
                       <p id="desctruncate">La sublimation est la technique de marquage la plus adaptée pour les...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/signaletique"><div className='box btn_shadow'>
                        {/* <img src="https://img.icons8.com/ios-filled/50/000000/under-construction.png" alt=""/> */}
                        <img src="https://img.icons8.com/ios-filled/50/undefined/open-sign--v1.png" alt=""/>
                        <h2>Signalétique</h2>
                       <p id="desctruncate">Pour tous vos objets et panneaux publicitaires qui servent à refleter...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                </div>
                
            </div>
        </section>
        
    </>
  )
}

export default Cardtest