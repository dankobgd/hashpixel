import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Triangle404Svg from './Triangle404Svg';
import { FormattedMessage } from 'react-intl';
import { Container } from '../shared/common';

const Wrapper = styled.div`
  background: #136a8a;
  background: -webkit-linear-gradient(to top, #267871, #136a8a);
  background: linear-gradient(to top, #267871, #136a8a);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  position: relative;
  z-index: 999;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;
  width: auto;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 10em;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Small = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #f8f8f8;
`;

const Svg = styled.svg`
  position: absolute;
  width: 1.1em;
  left: 0;
  opacity: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  transition: all 300ms ease-out;
  will-change: left, opacity;

  & > * {
    stroke-width: 5;
    stroke: transparent;
  }
`;

const Btn = styled.button`
  margin-top: 1rem;
  border: none;
  font-size: 1rem;
  background-color: #f8f8f8;
  color: #333;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 1rem;
  border: 2px solid #1d1d1d;
  display: inline-block;
  width: 150px;
  outline: none;
  vertical-align: middle;
  text-align: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  transition: color 0.1s cubic-bezier(0.16, 0.08, 0.355, 1), background 0.1s cubic-bezier(0.16, 0.08, 0.355, 1);

  & > span {
    display: inline-block;
    position: relative;
    transition: all 300ms ease-out;
    will-change: transform;
  }

  &:hover {
    ${Svg} {
      opacity: 1;
      left: -1.5rem;
    }
  }

  &:hover > span {
    -webkit-transform: translate3d(1rem, 0, 0);
    transform: translate3d(1rem, 0, 0);
  }
`;

const GoBack = () => (
  <Btn>
    <span>
      <FormattedMessage id="PageNotFound.GoBack" defaultMessage="Go Back" />
      <Svg height="512px" id="Layer_1" version="1.0" viewBox="0 0 512 512" width="512px">
        <g>
          <g>
            <polygon points="242.2,66.8 284.6,109.2 137.8,256 284.6,402.8 242.2,445.2 53,256   " />
          </g>
        </g>
        <g>
          <g>
            <polygon points="416.6,66.8 459,109.2 312.2,256 459,402.8 416.6,445.2 227.4,256   " />
          </g>
        </g>
      </Svg>
    </span>
  </Btn>
);

const PageNotFound = () => (
  <Wrapper>
    <Container>
      <MessageBox>
        <Title>
          <FormattedMessage id="PageNotFound.Title" defaultMessage="404" />
        </Title>
        <Paragraph>
          <FormattedMessage id="PageNotFound.Paragraph" defaultMessage="oops, sorry we can't find the page!" />
        </Paragraph>
        <Small>
          <FormattedMessage
            id="PageNotFound.Small"
            defaultMessage="Either something went wrong or the page doesn’t exist anymore"
          />
        </Small>
      </MessageBox>

      <Link to="/">
        <GoBack />
      </Link>

      <Triangle404Svg />
    </Container>
  </Wrapper>
);

export default PageNotFound;
