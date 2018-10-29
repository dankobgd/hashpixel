import React from 'react';
import styled from 'styled-components';
import Marketing from './icons/Marketing';
import Design from './icons/Design';
import Development from './icons/Development';
import Hosting from './icons/Hosting';
import Seo from './icons/Seo';
import Identity from './icons/Identity';
import { Container, Section } from '../shared/style';
import bgImage from '../images/bg-whatwedo.jpg'

const SectionWrapper = styled(Section)`
  background-image: url(${bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: ${props => props.theme.primary};;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    flex: 1;
  }

  @media screen and (max-width: 800px) {
    & > div {
      flex-basis: auto;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.825rem;

  & > h1 {
    color: ${props => props.theme.primary};;
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }

  & > span {
    color: ${props => props.theme.primary};;
    padding: 0.5rem;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
`;

const ServicesSection = () => (
  <SectionWrapper>
    <Container style={{ maxWidth: '980px' }}>
      <TopBox>
        <Title>Čime se bavimo</Title>
      </TopBox>

      <MainBox>
        <Card>
          <Design />
          <h1>Web Dizajn</h1>
          <span>
          Na brz, jednostavan i kvalitetan način kreiramo sajtove pristupačnog i interaktivnog sadražaja u skladu sa Vašim potrebama.
          </span>
        </Card>

        <Card>
          <Identity />
          <h1>Vizuelni identitet</h1>
          <span>
          Koristeći najsavremenije tehnologije, uz saradnju i konsultacije zajednički stvaramo idejno rešenje koje će doprineti prepoznatljivosti i autentičnosti Vašeg proizvoda.
          </span>
        </Card>

        <Card>
          <Development />
          <h1>Web development</h1>
          <span>
          Održavanje internet stranica, unapređenje i reorganizacija postojećih i osmišljavanje inovativnih strategija za poboljšanje deo su našeg širokog portfolija kada je u pitanju web development.
          </span>
        </Card>
      </MainBox>

      <MainBox>
        <Card>
          <Hosting />
          <h1>Web hosting</h1>
          <span>
          Održavanje internet stranica, unapređenje i reorganizacija postojećih i osmišljavanje inovativnih strategija za poboljšanje deo su našeg širokog portfolija kada je u pitanju web development.
          </span>
        </Card>

        <Card>
          <Marketing />
          <h1>Digialni marketing</h1>
          <span>
          Održavanje internet stranica, unapređenje i reorganizacija postojećih i osmišljavanje inovativnih strategija za poboljšanje deo su našeg širokog portfolija kada je u pitanju web development.
          </span>
        </Card>

        <Card>
          <Seo />
          <h1>SEO Optimizacija</h1>
          <span>
          Održavanje internet stranica, unapređenje i reorganizacija postojećih i osmišljavanje inovativnih strategija za poboljšanje deo su našeg širokog portfolija kada je u pitanju web development.
          </span>
        </Card>
      </MainBox>
    </Container>
  </SectionWrapper>
);

export default ServicesSection;
