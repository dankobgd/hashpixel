import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../images/Logo';
import { Container, Section } from '../shared/common';
import bgImage from '../images/section_home.png';
import { FormattedMessage } from 'react-intl';

const SectionWrapper = styled(Section)`
  background-image: url(${bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const LogoWrap = styled.div`
  z-index: 9999;
  position: relative;
  width: 510px;

  @media screen and (max-width: 600px) {
    width: 80vw;
  }
`;

const Slogan = styled.span`
  color: #fff;
  font-size: 1.6em;
  z-index: 999;
  position: absolute;
  top: 85%;
  right: 0;
  transition: all 500ms;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: 1rem;
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  cursor: pointer;
  z-index: 9999;
  transition: opacity 300ms;

  &:hover {
    opacity: 1;
  }

  & > span {
    color: #ccc;
    font-size: 10px;
    text-transform: uppercase;
    margin-top: 8px;
    letter-spacing: 1px;
  }
`;

const scrollAnimation = keyframes`
  0% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(50px);
	}
`;

const Svg = styled.svg`
  & path#wheel {
    animation: ${scrollAnimation} 2s ease infinite;
  }
`;

const Mouse = () => (
  <Svg
    width="30px"
    height="100%"
    viewBox="0 0 247 390"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: '1.5',
    }}
  >
    <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
    <path
      id="mouse"
      d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
      style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }}
    />
  </Svg>
);

const HeroSection = ({ fpApi }) => (
  <SectionWrapper>
    <Container>
      <Banner>
        <LogoWrap>
          <Logo />
          <Slogan>
            <FormattedMessage id="Hero.Slogan" defaultMessage="Pixel your vision" />
          </Slogan>
        </LogoWrap>
      </Banner>

      <ScrollDown onClick={() => fpApi.moveSectionDown()}>
        <Mouse />
        <span>
          <FormattedMessage id="Hero.Scroll" defaultMessage="scroll" />
        </span>
      </ScrollDown>
    </Container>
  </SectionWrapper>
);

export default HeroSection;
