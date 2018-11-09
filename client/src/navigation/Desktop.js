import React from 'react';
import styled, { css } from 'styled-components';
import Hash from '../images/Hash';
import Hamburger from './Hamburger';
import { moveToSection } from '../helpers'
import { dfns } from '../navigation/items'
import { FormattedMessage } from 'react-intl';

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.position === 'left' && '0'};
  right: ${props => props.position === 'right' && '0'};
  z-index: 999;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const Nav = styled.nav`
  position: relative;
  width: 280px;
  height: 100vh;
  transition: all 400ms;
  transition-delay: 100ms;
  transition-timing-function: cubic-bezier(0.75, 0.02, 0.33, 1);
  ${props =>
    props.position === 'left' &&
    css`
      transform: translateX(-100%);
    `};

  ${props =>
    props.position === 'right' &&
    css`
      transform: translateX(calc(100%));
    `};

  ${props =>
    props.isMenuOpen &&
    css`
      transform: translateX(0);
    `};

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 3px;
    background-color: ${props => props.theme.cyan2};
    top: 0;
    left: ${props => props.position === 'right' && '0'};
    right: ${props => props.position === 'left' && '0'};
    position: absolute;
    z-index: 9999;
  }
`;

const Outer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  position: absolute;
  top: 20%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.position === 'left' && '0'};
  right: ${props => props.position === 'right' && '0'};
  padding: 0.5rem;
  width: 280px;
  height: 100vh;
  background-color: ${props => props.theme.darker};
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  text-align: center;
`;

const Item = styled.li`
  color: ${props => props.theme.white};
  padding: 4px 0.5rem;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: ${props => props.theme.cyan};
  }
`;

const SideButton = styled.a`
  position: absolute;
  top: 0;
  left: ${props => props.position === 'left' && '100%'};
  right: ${props => props.position === 'right' && '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100vh;
  background-color: transparent;
  color: #333;
  z-index: 999;
  cursor: pointer;

  opacity: 1;
  visibility: visible;
  transition: 300ms;
  transition-delay: 100ms;

  ${props =>
    props.isMenuOpen &&
    css`
      opacity: 0;
      visibility: hidden;
    `};
`;

const Icons = styled.div`
  & > a {
    color: #fff;
    font-size: 18px;
    padding: 0.5rem;
    margin: 0 4px;
    cursor: pointer;
    text-decoration: none;
  }

  & a:hover {
    color: ${props => props.theme.cyan};
  }

  @media screen and (max-width: 400px) {
    & > a {
      margin: 0;
      padding: 0.6rem;
    }
  }
`;

// LOCALLE BUTONS
const LanguageWrapper = styled.div`
  position: absolute;
  top: 1rem;
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


const Desktop = props => {
  const { fpState, setLocale, lang, navigationUILogic: { isMenuOpen, position, handleEnter, handleLeave } } = props;

  const socials = [
    { icon: 'fa fa-facebook', link: 'https://www.facebook.com/hashpixel.xyz/' },
    { icon: 'fa fa-instagram', link: 'https://www.instagram.com/hash_pixel/' },
    { icon: 'fa fa-behance', link: 'https://www.behance.net/hespiksel40a2' },
    { icon: 'fa fa-github', link: 'https://github.com/dankobgd/hashpixel' },
    { icon: 'fa fa-linkedin', link: '#' },
  ]


  return (
    <NavigationWrapper position={position}>
      <Nav isMenuOpen={isMenuOpen} position={position} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <Outer>
          <Menu position={position}>
            <LanguageWrapper>
	            <Eng lang={lang} onClick={() => setLocale('en')}>ENG</Eng>
	            <Srb lang={lang} onClick={() => setLocale('sr')}>SRB</Srb>
            </LanguageWrapper>

            <Header>
              <Hash />
            </Header>

            <Main>
              <List>
                {dfns.map((item, indx) => {
                    return (
                      <Item key={indx} onClick={() => moveToSection(props, indx)}>
                        <FormattedMessage id={item.id} defaultMessage={item.defaultMessage}/>
                      </Item>
                    )
                  })}
              </List>
            </Main>

            <Footer>
              <Icons>
                {socials.map(({ icon, link }) => (
                  <a href={link} target='_blank' rel='noopener noreferrer' key={icon}>
                    <li className={icon}/>
                  </a>
                ))}
              </Icons>
            </Footer>
          </Menu>

          <SideButton isMenuOpen={isMenuOpen} position={position}>
            <Hamburger isMenuOpen={isMenuOpen} position={position} vertical fpState={fpState}/>
          </SideButton>
        </Outer>
      </Nav>
    </NavigationWrapper>
  );
};

export default Desktop;
