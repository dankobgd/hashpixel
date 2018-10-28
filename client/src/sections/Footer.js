import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import styled, { css } from 'styled-components';
import MediaQuery from 'react-responsive';
import { Container } from '../shared/style';
import Logo from '../images/Logo';
import FooterHashBackground from './FooterHashBackground';

const Wrapper = styled.footer`
  background: -webkit-linear-gradient(-90deg, rgba(30, 6, 51, 1) 0%, rgba(14, 6, 20, 1) 60%);
  background: -moz-linear-gradient(-90deg, rgba(30, 6, 51, 1) 0%, rgba(14, 6, 20, 1) 60%);
  background: -o-linear-gradient(-90deg, rgba(30, 6, 51, 1) 0%, rgba(14, 6, 20, 1) 60%);
  width: 100%;
  height: 75%;
  top: 100%;
  transition: all 500ms;
  font-size: 24px;
  font-weight: 400;
  position: relative;
  z-index: 999;
  visibility: visible;
  opacity: 1;

  > * {
    font-family: 'Josefin Sans';
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1080px;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    z-index: 5;
    transition: opacity 300ms 300ms;
  }

  ${props =>
    props.isFooterOpen && (!props.isResponsive) &&
    css`
      transition: all 500ms;
      transform: translateY(-100%);

      &::before {
        top: -1080px;
        display: block;
        opacity: 1;
      }
    `};
`;

const ArrowTop = () => (
  <svg
    id="Layer_1"
    version="1.0"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    width="100%"
    height="50px"
    style={{ cursor: 'pointer' }}
  >
    <polyline fill="none" points="3,15.5 12,6.5 21,15.5 " stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
  </svg>
);

const BackToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.cyan};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media screen and (max-width: 400px) {
    padding: 0.5rem;
  }
`;

const LogoBox = styled.div`
  width: 300px;
  height: 80px;

  @media screen and (max-width: 400px) {
    width: 200px;
    height: 60px;
  }
`;

const SquareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  @media screen and (max-width: 400px) {
    margin: 0.3rem 0;
  }
`;

const Square = styled.span`
  width: 6px;
  height: 6px;
  color: #fff;
  background-color: #fff;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 400px) {
    margin: 0.3rem 0;
  }
`;

const Icons = styled.div`
  & > i {
    color: #fff;
    font-size: 32px;
    padding: 0.5rem;
    margin: 0 0.625rem;
    cursor: pointer;
  }

  & i:hover {
    color: ${props => props.theme.cyan};
  }

  @media screen and (max-width: 400px) {
    & > i {
      margin: 0;
      padding: 0.6rem;
    }
  }
`;

const InfoText = styled.p`
  color: #fff;
  padding: 0.5rem;
  font-size: 26px;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const Copyright = styled(InfoText)`
  font-size: 20px;

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

const LineSeparator = styled.hr`
  color: #fff;
  width: 100%;
  margin: 1rem 0 1.5rem 0;

  @media screen and (max-width: 400px) {
    margin: 1rem 0;
  }
`;

const Squares = ({ num }) => {
  const boxes = [];

  for (let i = 0; i < num; i += 1) {
    boxes.push(<Square key={i} />);
  }

  return <SquareWrapper>{boxes}</SquareWrapper>;
};

const Footer = ({ fpState, fpApi, isFooterOpen }) => (
  <Wrapper isFooterOpen={isFooterOpen} isResponsive={fpState.isResponsive}>
    <FooterHashBackground />

    <BackToTop onClick={() => fpApi.moveTo(1)}>
      <ArrowTop />
    </BackToTop>

    <Container>
      <Info>
        <LogoBox>
          <Logo />
        </LogoBox>

        <MediaQuery query="(max-width: 400px)">
          <Squares num={1} />
        </MediaQuery>
        <MediaQuery query="(min-width: 400px)">
          <Squares num={4} />
        </MediaQuery>

        <InfoText>Boris@hashpixel.com</InfoText>
        <MediaQuery query="(max-width: 400px)">
          <Squares num={1} />
        </MediaQuery>
        <MediaQuery query="(min-width: 400px)">
          <Squares num={3} />
        </MediaQuery>

        <InfoText>+381 555 333</InfoText>
        <MediaQuery query="(max-width: 400px)">
          <Squares num={1} />
        </MediaQuery>
        <MediaQuery query="(min-width: 400px)">
          <Squares num={2} />
        </MediaQuery>

        <Icons>
          <i className="fa fa-facebook" />
          <i className="fa fa-instagram" />
          <i className="fa fa-behance" />
          <i className="fa fa-github" />
          <i className="fa fa-linkedin" />
        </Icons>

        <LineSeparator />
        <Copyright>©2018 HASH PIXEL</Copyright>
      </Info>
    </Container>
  </Wrapper>
);


export default Footer;
