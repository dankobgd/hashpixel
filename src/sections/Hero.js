import React from 'react';
import styled from 'styled-components';
import Logo from '../images/Logo';
import { Container, Section } from '../shared/style';
import bgImage from '../images/bg-home.png'

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
  font-size: 1.5em;
  z-index: 999;
  position: absolute;
  top: 100%;
  right: 0;
  transition: all 500ms;

  @media screen and (max-width: 600px) {
    top: 140%;
    text-align: center;
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
    margin-top: 4px;
    letter-spacing: 1px;
  }
`;

const ArrowDown = () => (
  <svg version="1.1" id="Layer_1" x="0px" y="0px" width="15.672px" height="12.406px" viewBox="0 0 15.672 12.406">
    <polyline fill="none" stroke="#6A8080" strokeMiterlimit="10" points="0.344,5.406 7.844,11.406 15.344,5.406 " />
    <polyline fill="none" stroke="#6A8080" strokeMiterlimit="10" points="15.344,0.406 7.844,6.406 0.344,0.406 " />
  </svg>
);


const HeroSection = ({ fpApi }) => (
  <SectionWrapper>
    <Container>
      <Banner>
        <LogoWrap>
          <Logo />
          <Slogan>Pixel your vision!</Slogan>
        </LogoWrap>
      </Banner>

      <ScrollDown onClick={() => fpApi.moveSectionDown()}>
        <ArrowDown />
        <span>scroll</span>
      </ScrollDown>
    </Container>
  </SectionWrapper>
);

export default HeroSection;
