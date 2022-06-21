import React from 'react'
import styled from "styled-components"
import { Button } from '@mui/material'
import {Link} from "react-router-dom"
// import Button from "./Button"

const ContactZone = () => {
  return (
    <ContactContainer>
        <ContactContent>
            <h1>Vous avez un projet à nous confier ?</h1>
            
            <Link to="/contact"><Button variant="contained">Contactez-nous</Button></Link>
            {/* <Button to="/contact" /> */}
        </ContactContent>
    </ContactContainer>
  )
}

export default ContactZone

const ContactContainer = styled.div `
background-color: #48ADA9;
background-size: cover;
height: 450px;
width: 100%;
padding: 5rem calc((100vw - 1300px) / 2);
color: #fff;
display: flex;
justify-content: center;
align-items: center;
`

const ContactContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
}

@media screen and (max-width: 1080) {
  h1 {
    width: 90%
  }
}
`



