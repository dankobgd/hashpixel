import React from 'react';
import styled from 'styled-components'


const Svg = styled.svg`
  position: absolute;
  top: 100%;
  right: 2rem;
`;

const ArrowRight = ({ onClick }) => (
  <Svg onClick={onClick} id="Layer_1" version="1.1" viewBox="0 0 512 512" width="60px" height="60px">
    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256"/>
  </Svg>
);

export default ArrowRight;