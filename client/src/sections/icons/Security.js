import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  & > path {
    fill: url(#security_1_);
  }
`;

const Security = () => (
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
    <linearGradient
      id="security_1_"
      gradientUnits="userSpaceOnUse"
      x1="75.2219"
      y1="253.5969"
      x2="226.5594"
      y2="102.2594"
    >
      <stop offset="0" style={{ stopColor: '#1E0633' }} />
      <stop offset="0.5" style={{ stopColor: '#00448D' }} />
      <stop offset="1" style={{ stopColor: '#1E0633' }} />
    </linearGradient>
    <path
      id="security"
      d="M135.1,183.1c0-8.7,7.1-15.8,15.8-15.8s15.8,7.1,15.8,15.8c0,5.8-3.2,11-7.9,13.7v10.1
	c0,4.3-3.6,7.9-7.9,7.9s-7.9-3.6-7.9-7.9v-10.1C138.3,194,135.1,188.9,135.1,183.1z M235.8,131.1v109.3c0,5.3-4.2,9.5-9.5,9.5H75.5
	c-5.3,0-9.5-4.2-9.5-9.5V131.1c0-5.3,4.2-9.5,9.5-9.5h18.8v-15c0-31.3,25.4-56.6,56.6-56.6s56.6,25.4,56.6,56.6v15h18.8
	C231.6,121.7,235.8,125.9,235.8,131.1z M109.1,121.7h83.6v-15c0-23-18.7-41.8-41.8-41.8c-23,0-41.8,18.7-41.8,41.8L109.1,121.7
	L109.1,121.7z M216.9,140.6h-132V231h131.9L216.9,140.6L216.9,140.6z"
    />
  </Svg>
);

export default Security;
