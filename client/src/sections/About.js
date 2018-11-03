import React from 'react';
import styled from 'styled-components';
import Quality from './icons/Quality';
import Security from './icons/Security';
import Simplicity from './icons/Simplicity';
import { Container, Section } from '../shared/style';
import bgImage from '../images/bg-whoarewe.jpg';
import { FormattedMessage } from 'react-intl';

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
  line-height: 1.75;
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
    color: ${props => props.theme.primary};
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
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
        <Title><FormattedMessage id='About.Title' defaultMessage='Who are we?'/></Title>
        <Subtext>
        <FormattedMessage id='About.Subtext' defaultMessage='#Pixel is a start-up founded in 2018. by young IT experts with the mission of providing the best new solutions in the area of IT. We turn Your ideas into reality in the right way at the right time. By using modern programs, innovative approach and adequate technologies, we answer on just about every need of our clients, offering them help and support through:'/>
        </Subtext>
      </TopBox>

      <MainBox>
        <Card>
          <Quality />
          <h1><FormattedMessage id='About.Quality' defaultMessage='Quality'/></h1>
        </Card>

        <Card>
          <Security />
          <h1><FormattedMessage id='About.Security' defaultMessage='Security'/></h1>
        </Card>

        <Card>
          <Simplicity />
          <h1><FormattedMessage id='About.Simplicity' defaultMessage='Simplicity'/></h1>
        </Card>
      </MainBox>
    </Container>
  </SectionWrapper>
);

export default AboutSection;
