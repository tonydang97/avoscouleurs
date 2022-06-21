import React from 'react'
import styled from "styled-components"
import ImageOne from "../../images/assetBroderie/bobinerose.jpg"

const Section = styled.section`
background: #042A2B;
padding: 12rem 0rem;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 1024px) {
    
}
`;

const Container = styled.div`
background: #eefbef;
padding: 3rem 2rem;
position: relative;
`;

const Wrap = styled.div`
max-width: 1200px;
margin-auto: 0 auto;
`;

const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0px -15px;
justify-content: flex-start;
padding: 1rem;
`;
const Content = styled.div`
flex: 0 0 50%;
text-align: justify;

@media screen and (max-width: 1024px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
}

h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
}

p {
    margin-bottom: 1rem;
    line-height: 1.5;
}
`;

const ColumnRight = styled.div`
position: absolute;
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;

@media screen and (max-width: 1024px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
}
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;



const Features = () => {
  return (
   <Section>
       <Container>
           <Wrap>
               <ColumnLeft>
                <Content 
                // data-aos="fade-right"
                // data-aos-duration="1200"
                // data-aos-delay="300"
                // data-aos-once="true"
                // data-aos-anchor-placement="center-bottom"
                >
                    <h1>Un large choix ...</h1>
                    <p>Chez A vos couleurs, nous recherchons le fil se rapprochant le plus des couleurs du motif que vous souhaitez. 
                        Nous utilisons les références Pantone, CMJN, ou échantillons que nous comparons aux références de fil de notre fournisseur.</p>
                    <p>Nous sommes équipés de 2 machines à broder composées de 6 têtes. Ces machines ont la possibilité de broder des motifs composés de 12 couleurs au maximum. Nous sommes donc en capacité de produire des gros volumes de textile.
                    </p>
                </Content>
               </ColumnLeft>
               <ColumnRight>
                <Image src={ImageOne} 
                // data-aos="fade-left"
                // data-aos-duration="1200"
                // data-aos-once="true"
                // data-aos-anchor-placement="center-bottom"
                />
               </ColumnRight>
           </Wrap>
       </Container>
   </Section>
  )
}

export default Features