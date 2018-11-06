import React from 'react';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger';
import items from './items';
import { moveToSection } from '../helpers'
import { dfns } from './items';
import { FormattedMessage } from 'react-intl';


const ToggleBox = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  @media screen and (min-width: 981px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.darker};
  z-index: 555;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  visibility: hidden;
  transition: opacity 500ms, visibility 500ms;

  ${props =>
    props.isMenuOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `};

  @media screen and (min-width: 980px) {
    display: none;
  }
`;

const Nav = styled.nav`
  perspective: 1200px;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  opacity: 0.4;
  -webkit-transform: translateY(-25%) rotateX(35deg);
  transform: translateY(-25%) rotateX(35deg);
  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s;

  ${props =>
    props.isMenuOpen &&
    css`
      opacity: 1;
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
    `};
`;

const Item = styled.li`
  color: ${props => props.theme.white};
  font-size: 32px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${props => props.theme.cyan};
  }
`;


// LOCALE BUTTONS
const LanguageWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  & > * {
    color: #fff;
  }
`;

const Eng = styled.a`
  padding: 0px 4px;
  cursor: pointer;
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  color: ${props => props.lang === 'en' ? props.theme.cyan : 'fff'};

  &:hover {
    color: ${props => props.lang === 'sr' && props.theme.grey};
  }

`;

const Srb = styled.a`
  padding: 0px 4px;
  cursor: pointer;
  color: ${props => props.lang === 'sr' ? props.theme.cyan : 'fff'};

  &:hover {
    color: ${props => props.lang === 'en' && props.theme.grey};
  }
`;


const Mobile = props => {
  const { setLocale, lang, navigationUILogic: { isMenuOpen, handleClick } } = props;

  return (
    <>
      <ToggleBox isMenuOpen={isMenuOpen} onClick={handleClick}>
        <Hamburger isMenuOpen={isMenuOpen} horizontal animated />
      </ToggleBox>

      <Overlay isMenuOpen={isMenuOpen}>
        <LanguageWrapper>
          <Eng lang={lang} onClick={() => setLocale('en')}>ENG</Eng>
          <Srb lang={lang} onClick={() => setLocale('sr')}>SRB</Srb>
        </LanguageWrapper>

        <Nav>
          <List isMenuOpen={isMenuOpen}>
            {dfns.map((item, indx) => (
              <Item key={item.id} onClick={() => {
                moveToSection(props, indx)
                handleClick();
              }}>
                <FormattedMessage id={item.id} defaultMessage={item.defaultMessage}/>
              </Item>
            ))}
          </List>
        </Nav>
      </Overlay>
    </>
  );
}

export default Mobile;
