import React from 'react';
import styled from 'styled-components';
import Quality from './icons/Quality';
import Security from './icons/Security';
import Simplify from './icons/Simplify';
import { Container, Section } from '../shared/style';
import bgImage from '../images/bg-whoarewe.jpg'

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
  color: ${props => props.theme.primary};
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0;
`;

const Subtext = styled.span`
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.primary};
  margin: 1rem 0;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.825rem;

  & > h1 {
    color: ${props => props.theme.primary};
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }

  & > span {
    color: ${props => props.theme.primary};
    padding: 0.5rem;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
`;

const AboutSection = () => (
  <SectionWrapper>
    <Container style={{ maxWidth: '980px' }}>
      <TopBox>
        <Title>Ko smo mi?</Title>
        <Subtext>
        #Pixel je start-up osnovan 2018. godine od strane mladih IT stručnjaka sa misijom da na domaćem tržištu obezbedi najbolja i najnovija rešenja u oblasti IT tehnologija. Mi pretvaramo Vaše ideje u realnost na pravi način i u pravo vreme. Koristeći najsavremenije programe, inovativan pristup i adekvatne tehnologije odgovaramo na gotovo sve potrebe svojih klijenata pružajući im pomoć i podršku kroz:
        </Subtext>
      </TopBox>

      <MainBox>
        <Card>
          <Quality />
          <h1>Kvalitet</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nisi quos architecto consequatur
            laudantium exercitationem, adipisci exercitationem, adipisci adipisci exercitationem, adipisci.
          </span>
        </Card>

        <Card>
          <Security />
          <h1>Sigurnost</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nisi quos architecto consequatur
            laudantium exercitationem, adipisci exercitationem, adipisci adipisci exercitationem, adipisci.
          </span>
        </Card>

        <Card>
          <Simplify />
          <h1>Jednostavnost</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nisi quos architecto consequatur
            laudantium exercitationem, adipisci exercitationem, adipisci adipisci exercitationem, adipisci.
          </span>
        </Card>
      </MainBox>
    </Container>
  </SectionWrapper>
);

export default AboutSection;
