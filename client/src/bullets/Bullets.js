import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import items from '../navigation/items';
import './BulletStyles.css';
import { moveToSection } from '../helpers';
import styled from 'styled-components';

const DotsWrapper = styled.div`
  @media screen and (max-width: 980px) {
    display: none;
  }

  li:last-child {
    position: absolute;
    left: 0;
    margin: 0;
    height: 48px;
    width: 48px;
    transition: transform 0.3s ease;
  }

  li:last-child::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 14px;
    width: 20px;
    height: 20px;
    background: #00bcd4;
    transform: translateY(-50%);
  }

  li.active:first-child ~ li:last-child {
    transform: translateY(0%);
  }

  li.active:nth-child(2) ~ li:last-child {
    transform: translateY(100%);
  }

  li.active:nth-child(3) ~ li:last-child {
    transform: translateY(200%);
  }

  li.active:nth-child(4) ~ li:last-child {
    transform: translateY(300%);
  }

  li.active:nth-child(5) ~ li:last-child {
    transform: translateY(400%);
  }

  li.active:nth-child(6) ~ li:last-child {
    transform: translateY(500%);
  }

  li a {
    transition: background-color 0.3s ease;
  }
`;

const DotsList = styled.ul`
  position: fixed;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;

const Item = styled.li`
  position: relative;
  display: block;
  float: left;
  margin: 16px 16px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const A = styled.a`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  background-color: #d7d7d7;
  border: 1px solid #d1d1d1;
  text-indent: -999em;
  cursor: pointer;
  position: absolute;

  &:focus {
    outline: none;
  }

  &:hover,:focus {
    background-color: #fff;
  }
`;



class Bullets extends Component {
  render() {
    /* eslint jsx-a11y/click-events-have-key-events: 0 */
    /* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
    /* eslint jsx-a11y/anchor-is-valid: 0 */
    return ReactDOM.createPortal(
      <DotsWrapper>
        <DotsList className="dots-list">
        {items.map((item, indx) => (
            <Item
              key={item.name}
              data-menuanchor={item.name}
              onClick={() => moveToSection(this.props, indx)}
            >
              <A>{item.name}</A>
            </Item>
          ))}
          <Item />
        </DotsList>
      </DotsWrapper>,
      document.getElementById('nav')
    );
  }
}

export default Bullets;
