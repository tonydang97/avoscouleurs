import React from 'react';
import styled from "styled-components/macro";
import ImageOne from "../../images/assetSublimation/microfibre.jpg"
import ImageTwo from "../../images/assetSublimation/lmcracing.jpg"
import ImageThree from "../../images/assetSublimation/camo.jpg"
import ImageFour from "../../images/assetSublimation/tasse.jpg"

const Section = styled.section`
width: 100%;
height: 100%;
padding: 10rem calc((100vw - 1300px) /2);

@media screen and (max-width: 1024px) {
    width: 100%;
}
`;

const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem 1rem;
`;

const Heading = styled.div`
font-size: 1.5rem;
padding: 2rem 1rem;
margin-bottom: 40px;

@media screen and (max-width: 1024px) {
    text-align: start
    animation-play-state: paused;
}
`;

const InfoRow = styled.div`
display: flex;
flex-direction: row;

@media screen and (max-width: 1024px) {
    flex-direction: column;
}
`;

const InfoWrap = styled.div`
padding: 0rem 1rem;
min-height: 550px;
height: 100%;

h2 {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 1rem;
}

@media screen and (max-width: 1024px) {
    margin-bottom: 1rem;
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
max-width: 600px;
max-height: 400px;
object-fit: cover;
margin-bottom: 1rem;

@media screen and (max-width: 1024px) {
    // max-width: 700px;
    max-width: 100%;
    max-height: 100%;
}
`;


const Listings = () => {
  return (
   <Section>
       <Container>
            <Heading>
                <h1
                // data-aos="fade-right"
                // data-aos-diration="1000"
                // data-aos-once="true"
                // data-aos-anchor-placement="center-bottom"
                >Nos créations</h1>
            </Heading>
            <InfoRow>
                <InfoWrap
                // data-aos="zoom-out-up"
                // data-aos-diration="1200"
                // data-aos-once="true"
                // data-aos-anchor-placement="center-bottom"
                >
                    <Image src={ImageOne} alt="broderie" />
                    
                   
                </InfoWrap>
                <InfoWrap
                // data-aos="zoom-out-down"
                // data-aos-diration="1200"
                // data-aos-once="true"
                // data-aos-anchor-placement="center-bottom"
                >
                    <Image src={ImageTwo} alt="broderie" css={`margin-top: 120px; @media screen and (max-width: 768px) {
                        margin-top: 0px;
                    }`}/>
                 
                    
                </InfoWrap>
                <InfoWrap
                // data-aos="zoom-out-up"
                // data-aos-diration="1200"
                // data-aos-once="true"
                // data-aos-anchor-placement="center-bottom"
                >
                    <Image src={ImageThree} alt="broderie" />
                 
                   
                </InfoWrap>
                <InfoWrap
                // data-aos="zoom-out-down"
                // data-aos-diration="1200"
                // data-aos-once="true"
                // data-aos-anchor-placement="center-bottom"
                >
                    <Image src={ImageFour} alt="broderie" css={`margin-top: 120px; @media screen and (max-width: 768px) {
                        margin-top: 0px;
                    }`}/>
                   
                    
                </InfoWrap>
            </InfoRow>
       </Container>
   </Section>
  )
}

export default Listings