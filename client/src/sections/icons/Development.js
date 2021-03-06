import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  & > path {
    fill: url(#wdev_1_);
  }
`;

const Development = () => (
  <Svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="150px"
    height="150px"
    viewBox="0 0 350 348"
    style={{ enableBackground: 'new 0 0 350 348' }}
  >
    <linearGradient id="wdev_1_" gradientUnits="userSpaceOnUse" x1="104.325" y1="244.725" x2="245.775" y2="103.275">
      <stop offset="0" style={{ stopColor: '#1E0633' }} />
      <stop offset="0.5" style={{ stopColor: '#00448D' }} />
      <stop offset="1" style={{ stopColor: '#1E0633' }} />
    </linearGradient>
    <path
      id="wdev"
      d="M275,188.6v-29.2h-26.2c-2-9.9-5.8-19.1-11.3-27.2l18.6-18.6L235.4,93l-18.6,18.6
	c-8.1-5.4-17.3-9.3-27.2-11.3V74h-29.2v26.2c-9.9,2-19.1,5.8-27.2,11.3L114.6,93L94,113.6l18.6,18.6c-5.4,8.1-9.3,17.3-11.3,27.2H75
	v29.2h26.2c2,9.9,5.8,19.1,11.3,27.2L94,234.4l20.6,20.6l18.6-18.6c8.1,5.4,17.3,9.3,27.2,11.3V274h29.2v-26.2
	c9.9-2,19.1-5.8,27.2-11.3l18.6,18.6l20.6-20.6l-18.6-18.6c5.4-8.1,9.3-17.3,11.3-27.2L275,188.6L275,188.6z M175,221.4
	c-26.2,0-47.4-21.2-47.4-47.4s21.2-47.4,47.4-47.4s47.4,21.2,47.4,47.4S201.2,221.4,175,221.4z M142.1,173.3l22.4-10.4v5l-17,7.4
	v0.1l17,7.4v5l-22.4-10.4V173.3z M168,189.6l10-33.9h4.7l-10,33.9H168z M207.9,177.4l-22.4,10.3v-5l17.3-7.4v-0.1l-17.3-7.4v-5
	l22.4,10.3V177.4z"
    />
  </Svg>
);

export default Development;
