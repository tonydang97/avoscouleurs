import React, { useState }from 'react'
import { Data } from "./Data";
import styled from "styled-components"
import { IconContext } from 'react-icons';
import {FiPlus, FiMinus} from "react-icons/fi"

const FAQSection = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 15%;
`

const Container = styled.div`
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.5rem;
`

const Wrap = styled.div`
background: #272727;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;

h1 {
    padding: 2rem;
    font-size: 2rem;
}

span {
    margin-right: 1.5rem;
}

@media screen and (max-width : 1444px){
    h1 {
        font-size: 1rem;
    }
}
`
const Dropdown = styled.div`
background: #1c1c1c,
color: #00ffb9;
width: 100%;
height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// border-bottom: 1px solid #00ffb9;
// border-top: 1px solid #00ffb9;

p {
    width: 90%
    font-size: 1rem;
}
`



const FAQ = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            
            return setClicked(null)
        }

        setClicked(index)
    }


  return (
    <IconContext.Provider value={{ color: "#00FB9", size: '25px' }}>
        <FAQSection>
            <Container>
                {Data.map((item, index) =>{
                    return (
                        <>
                        <Wrap onClick={() => toggle(index)} key={index}>
                        <h1>{item.question}</h1>
                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                        </Wrap>
                        {clicked === index ? (
                          <Dropdown>
                        <p>{item.answer}</p>
                        </Dropdown>  
                        ) : null}
                        </>
                    )
                })}
            </Container>
        </FAQSection>
    </IconContext.Provider>
  )
}

export default FAQ