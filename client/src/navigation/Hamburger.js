import React from 'react';
import styled, { css } from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  height: 60px;
  cursor: pointer;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transform: ${props => props.position === 'right' && 'rotate(-180deg)'};
  transform: ${props => props.horizontal && 'rotate(0deg)'};
  transform: ${props => props.vertical && 'rotate(90deg)'};
  z-index: 999;
  transition: stroke 500ms;
  ${props => (props.isMenuOpen && props.animated ? defaultPathCSS : animatedPathCSS)};
  stroke: ${props => (props.pageIndx % 2 !== 0 ? props.theme.darkBlue : props.theme.cyan)};
  stroke: ${props => props.pageIndx === 5 && props.theme.cyan};

  @media screen and (max-width: 980px) {
    stroke: ${props => props.theme.cyan};
  }
`;

const Path = styled.path`
  fill: none;
  -webkit-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
    stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  -moz-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
    stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  -o-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
    stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  -ms-transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
    stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
    stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  stroke-width: 60px;
  stroke-linecap: round;
  stroke-dashoffset: 0px;
`;

const PathTop = styled(Path)`
  stroke-dasharray: 240px 950px;
`;

const PathMiddle = styled(Path)`
  stroke-dasharray: 240px 240px;
`;

const PathBottom = styled(Path)`
  stroke-dasharray: 240px 950px;
`;

const defaultPathCSS = css`
  ${PathTop}, ${PathBottom} {
    stroke-dashoffset: -650px;
  }
  ${PathMiddle} {
    stroke-dashoffset: -115px;
    stroke-dasharray: 1px 220px;
  }
`;

const animatedPathCSS = css`
  ${PathTop}, ${PathBottom} {
    stroke-dasharray: 240px 950px;
  }
  ${PathMiddle} {
    stroke-dasharray: 240px 240px;
  }
`;
const Hamburger = props => {
  const { isMenuOpen, position, horizontal, vertical, animated, fpState } = props;

  let pageIndx = 0;

  if (fpState) {
    if (fpState.initialized && fpState.destination) {
      pageIndx = fpState.destination.index;
    } else {
      pageIndx = 0;
    }
  }

  return (
    <Svg
      isMenuOpen={isMenuOpen}
      position={position}
      horizontal={horizontal}
      vertical={vertical}
      animated={animated}
      viewBox="0 0 800 600"
      pageIndx={pageIndx}
    >
      <PathTop d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" />
      <PathMiddle d="M300,320 L540,320" />
      <PathBottom
        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
        transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
      />
    </Svg>
  );
};

export default Hamburger;
