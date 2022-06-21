import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import "./PageContact.css"


const PageContact = () => {
  return (
    <>
        <section className='contact'>
            <div className='content1'>
                <h2>Nous contacter</h2>
                <p>Nous sommes ouverts du lundi au jeudi de 8h30 à 17h00 et le vendredi de 8h30 à 13h30</p>
            </div>
            <div className='conteneur'>
                <div className='contactInfo'>
                    <div className='box'>
                        <div className='icon'><FaMapMarkerAlt /></div>
                        <div className='text'>
                        <h3>Adresse</h3>
                        <p><a href="http://maps.google.com/?q=5 rue jacques guignard, 31820 Pibrac" target="_blank" rel='noreferrer'>5 rue Jacques Guignard, Parc de l'escalette, 31820 Pibrac</a></p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><BsFillTelephoneFill /></div>
                        <div className='text'>
                        <h3>Téléphone</h3>
                        <p><a href="tel:0561915246">05.61.91.52.46</a></p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><GrMail /></div>
                        <div className='text'>
                        <h3>Email</h3>
                        <p><a href="mailto:contact@avoscouleurs.com">contact@avoscouleurs.com</a></p>
                        </div>
                    </div>
                    
                </div>
                <div className='map'>
                    <iframe  
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.0501603599655!2d1.263428312503927!3d43.60549719504768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb44b2604624b%3A0x640927dc4999e52d!2sA%20vos%20couleurs!5e0!3m2!1sfr!2sfr!4v1651059130324!5m2!1sfr!2sfr" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title='myframe'
                    >
                    </iframe>
                    </div>
            </div>
        </section>
    </>
  )
}

export default PageContact