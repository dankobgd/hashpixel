import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  & > path {
    fill: url(#simplify_1_);
  }
`;

const Simplicity = () => (
  <Svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="150px"
    height="150px"
    viewBox="0 0 301.7 300"
    style={{ enableBackground: 'new 0 0 301.7 300' }}
  >
    <linearGradient id="simplify_1_" gradientUnits="userSpaceOnUse" x1="49.175" y1="251.675" x2="252.525" y2="48.325">
      <stop offset="0" style={{ stopColor: '#1E0633' }} />
      <stop offset="0.5" style={{ stopColor: '#00448D' }} />
      <stop offset="1" style={{ stopColor: '#1E0633' }} />
    </linearGradient>
    <path
      id="simplify"
      d="M254.3,127.7V50.1H231v70h-12.5v-70h-107v35.3v12.5H98.9H62V85.4h36.9V50.1H47.4v77.6H254.3z
	 M135.9,83.2V70.7h12.5h48.8v12.5h-48.8v36.9h-12.5V83.2L135.9,83.2z M260.7,165.7v-10.2H14.4v-10.1h246.4v-11.3l26.6,15.7
	L260.7,165.7z M254.3,217.3v-45.1H47.4v77.7h28.8v-69.5h12.5v69.5h165.6v-20.1h-38.5h-12.5h-40.8v-12.5h40.8v-37h12.5v36.9
	L254.3,217.3L254.3,217.3z M170.6,192.9h-36.9v36.9h-12.5v-36.9v-12.6h12.5h36.9V192.9z"
    />
  </Svg>
);

export default Simplicity;
