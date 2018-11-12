import React from 'react';
import styled from 'styled-components';
import Quality from './icons/Quality';
import Security from './icons/Security';
import Simplicity from './icons/Simplicity';
import bgImage from '../images/section_about.jpg';
import { FormattedMessage } from 'react-intl';
import { Container, Section, Heading, ContentWrapper, Content, Header, CardIcon } from '../shared/common';

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

const AboutSection = () => (
  <SectionWrapper>
    <Container style={{ maxWidth: '980px' }}>
      <ContentWrapper>
        <Header>
          <Heading>
            <FormattedMessage id="About.Title" defaultMessage="Who are we?" />
          </Heading>
        </Header>

        <Content>
          <TopBox>
            <Subtext>
              <FormattedMessage
                id="About.Subtext"
                defaultMessage="#Pixel is a start-up founded in 2018. by young IT experts with the mission of providing the best new solutions in the area of IT. We turn Your ideas into reality in the right way at the right time. By using modern programs, innovative approach and adequate technologies, we answer on just about every need of our clients, offering them help and support through:"
              />
            </Subtext>
          </TopBox>

          <MainBox>
            <CardIcon>
              <Quality />
              <h1>
                <FormattedMessage id="About.Quality" defaultMessage="Quality" />
              </h1>
            </CardIcon>

            <CardIcon>
              <Security />
              <h1>
                <FormattedMessage id="About.Security" defaultMessage="Security" />
              </h1>
            </CardIcon>

            <CardIcon>
              <Simplicity />
              <h1>
                <FormattedMessage id="About.Simplicity" defaultMessage="Simplicity" />
              </h1>
            </CardIcon>
          </MainBox>
        </Content>
      </ContentWrapper>
    </Container>
  </SectionWrapper>
);

export default AboutSection;
