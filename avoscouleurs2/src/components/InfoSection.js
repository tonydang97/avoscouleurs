import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  // padding: 4rem 0rem;
  padding-top: none;

  @media screen and (max-width: 1024px) {
    margin: none;
  }
`;

const Container = styled.div`
  padding: 3rem;
  padding-bottom: 0px;
  // calc((100vw - 1300px) /2)
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 500px;
    display: initial;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1024px) {
    padding-top: none;
    margin-top: none;
    height: 50%;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  reverse,
  image,
  delay,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft
          reverse={reverse}
          // data-aos='fade-up'
          // data-aos-duration='1000'
          // data-aos-once='true'
          // data-aos-delay={delay}
          // data-aos-anchor-placement='center-bottom'
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img
            src={image}
            alt="home"
            // data-aos='zoom-out'
            // data-aos-duration='1000'
            // data-aos-once='true'
            // data-aos-delay={delay}
            // data-aos-anchor-placement='center-bottom'
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
