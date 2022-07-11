import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logoavc2.png";
// import logoseul from "../../images/logoo.png";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className="logo">
            <img className ='logo2022' src={logo} alt='logo2022' width={400} height={60} />
            {/* <img className ='logo2022' src={logoseul} alt='logo2022' width={400} height={60} /> */}
            {/* <img className ='logoseul' src={logoseul} alt='logoseul' width={45} height={40} /> */}
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Accueil</a>
              </li>
              <li>
                <a href='/infographie'>Infographie</a>
              </li>
              <li>
                <a href='/serigraphie'>Serigraphie</a>
              </li>
              <li>
                <a href='/broderie'>Broderie</a>
              </li>
              <li>
                <a href='/impression-numerique'>Impréssion numérique</a>
              </li>
              <li>
                <a href='/sublimation'>Sublimation</a>
              </li>
              <li>
                <a href='/signaletique'>Signalétique</a>
              </li>
              
              <li>
                <a href='/contact'><button className='home-btn'>CONTACT</button></a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header