import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';



const StyledSlide = styled.div`
  height: 500px;
  width: 500px;
  background-color: ${props => props.bg};
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}



class CustomSlide extends Component {
  render() {
    const { index, bg, ...props } = this.props;

    return (
      <StyledSlide bg={bg} {...props}>
        <h3>{index}</h3>
      </StyledSlide>
    );
  }
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      infinite: true,
      dots: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <Slider {...settings}>
        <CustomSlide bg='green' index={1} />
        <CustomSlide bg='orange' index={2} />
        <CustomSlide bg='palevioletred' index={3} />
        <CustomSlide bg='rebeccapurple' index={4} />
        <CustomSlide bg='darkred' index={5} />
        <CustomSlide bg='lightblue' index={6} />
      </Slider>
    );
  }
}
