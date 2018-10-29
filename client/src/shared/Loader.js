import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export default styled.div`
  color: cyan;
  font-size: 10px;
  margin: auto;
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;


  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: ${loading} 1.8s infinite ease-in-out;
  animation: ${loading} 1.8s infinite ease-in-out;

  &::before, ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: ${loading} 1.8s infinite ease-in-out;
    animation: ${loading} 1.8s infinite ease-in-out;
  }

  &::before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    left: 3.5em;
  }
`;
