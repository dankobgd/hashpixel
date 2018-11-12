import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  & > path {
    fill: url(#visid_1_);
  }
`;

const Identity = () => (
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
    <linearGradient id="visid_1_" gradientUnits="userSpaceOnUse" x1="84.275" y1="280.575" x2="260.525" y2="104.325">
      <stop offset="0" style={{ stopColor: '#1E0633' }} />
      <stop offset="0.5" style={{ stopColor: '#00448D' }} />
      <stop offset="1" style={{ stopColor: '#1E0633' }} />
    </linearGradient>
    <path
      id="visid"
      d="M149.7,197.6h80.5V74H105.4v119.3l5.2-11.1l15-13.3L125,189l-19.6,42v24.6h44.3V197.6z M176.8,89.1
	h34.5v2.3h-34.5V89.1z M176.8,101.4h34.5v2.3h-34.5V101.4z M176.8,113.8h34.5v2.3h-34.5V113.8z M176.8,126h34.5v2.3h-34.5V126z
	 M124.3,89.1h39.2v39.2h-39.2V89.1z M124.3,138.3h87v2.3h-87V138.3z M124.3,150.6h87v2.3h-87C124.3,152.9,124.3,150.6,124.3,150.6z
	 M124.3,165.2V163h87v2.3h-87V165.2z M127.3,125.3h33.2V92.1h-33.2V125.3L127.3,125.3z M133.9,110.3h4.2v-3.2h-4.2v-3.8h4.2v-4.2
	h3.8v4.2h3.3v-4.2h3.8v4.2h4.1v3.8H149v3.2h4.1v3.8H149v4.2h-3.8V114h-3.3v4.2h-3.8V114h-4.2V110.3z M145.2,110.3h-3.3v-3.2h3.3
	V110.3z M115,183.2l6.6-5.8l-0.2,8.7L115,183.2z M113.5,184.5L73.7,270l7.6,3.7l39.9-85.5L113.5,184.5z M171.2,236.7l18.3,18.3
	l18.3-18.3l-18.3-18.3L171.2,236.7z M194.9,227.1v4.2h4.2v3.8h-4.2v3.2h4.2v3.8h-4.2v4.2h-3.8V242h-3.3v4.2H184V242h-4v-3.8h4.1V235
	H180v-3.8h4.1V227h3.8v4.2h3.3V227L194.9,227.1L194.9,227.1z M187.8,235.1h3.3v3.2h-3.3V235.1z M151.6,199.5V274h124.7v-74.5H151.6
	L151.6,199.5z M189.5,259.1l-22.3-22.3l22.3-22.3l22.3,22.3L189.5,259.1z M260.9,264h-34.5v-2.3h34.5V264z M260.9,251.7h-34.5v-2.3
	h34.5V251.7z M260.9,239.4h-34.5v-2.3h34.5V239.4z M260.9,228.1h-34.5v-2.3h34.5V228.1z M260.9,215.8h-34.5v-2.3h34.5V215.8z"
    />
  </Svg>
);

export default Identity;
