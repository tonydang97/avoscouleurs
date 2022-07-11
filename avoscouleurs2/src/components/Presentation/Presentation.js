import React from "react"
import "../Presentation/Presentation.css"
import hero from "../../images/herojulix.jpg"
import { Typewriter } from "react-simple-typewriter"
// import { Link } from "react-router-dom"
import logo from "../../images/logoseul.png"



const Presentation = () => {

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top1' id="pres">
          <div className='left top1'>
            <h3>Bienvenue chez</h3>
            <h1>
            <span>A VOS COULEURS</span>
            <img id="logo" src={logo} alt="" />
            </h1>
            <h2>
              Spécialiste en 
              <span id="typewriter">
                <Typewriter words={[" broderie.", " sérigraphie.", " sublimation.", " transferts.", " signalétique."]} 
                loop 
                cursor 
                cursorStyle='|' 
                typeSpeed={70} 
                deleteSpeed={50} 
                delaySpeed={1000} />
              </span>
            </h2>

            <p>
              Depuis 29 ans, nous accompagnons les professionnels dans leurs projets de marquage textile.
              Riches de plusieurs années d’expériences, nous vous orientons vers 
              les produits et procédés d’impression les plus adaptés à vos besoins.
            </p>
            {/* <div id="numero">
                <p id="tel"><a href="tel:0561915246">05.61.91.52.46</a></p>
            </div> */}
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>TROUVEZ-NOUS</h4>
                <div className='button'>
                  <a href="//www.facebook.com/avoscouleurs31" rel="noopener noreferrer" target="_blank">
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  </a>
                  <a href="//www.instagram.com/avoscouleurs/?hl=fr" rel="noopener noreferrer" target="_blank">
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  </a>
                  <a href="//www.linkedin.com/company/eurl-a-vos-couleurs/" rel="noopener noreferrer" target="_blank">
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Presentation