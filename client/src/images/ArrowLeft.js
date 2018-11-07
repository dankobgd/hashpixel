import React from 'react';
import styled from 'styled-components'


const Svg = styled.svg`
  position: absolute;
  top: 100%;
  left: 2rem;
`;

const ArrowLeft = ({ onClick }) => (
  <Svg onClick={onClick} id="Layer_1" version="1.1" viewBox="0 0 512 512" width="60px" height="60px">
    <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256"/>
  </Svg>
);

export default ArrowLeft;