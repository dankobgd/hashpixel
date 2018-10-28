import React from 'react';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger';
import items from './items';

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
  background-color: #23577d;
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
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  opacity: 0.7;
  margin-top: 0.5rem;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    opacity: 1;
  }
`;

const Mobile = ({ isMenuOpen, handleClick }) => (
  <>
    <ToggleBox isMenuOpen={isMenuOpen} onClick={handleClick}>
      <Hamburger isMenuOpen={isMenuOpen} horizontal animated />
    </ToggleBox>

    <Overlay isMenuOpen={isMenuOpen}>
      <Nav>
        <List isMenuOpen={isMenuOpen}>
          {items.map(i => (
            <Item key={i.page}>{i.page}</Item>
          ))}
        </List>
      </Nav>
    </Overlay>
  </>
);

export default Mobile;
