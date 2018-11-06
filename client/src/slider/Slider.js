import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import data from './data';



const OuterWrapper = styled.div`
  transition: 500ms;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);

  ${props => props.showSlider && css`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `};
`;

const Single = styled.div`
  height: 100vh;
  background-color: darkred;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    max-width: 420px;
    max-height: 320px;
    object-fit: cover;
  }
`;


const Slide = ({ slide, hideSlider }) => {
  return (
  <Single>
    <button onClick={hideSlider}>CLOSE</button>
    <h1>{slide.title}</h1>
    <span>{slide.description}</span>
    <img src={slide.imageUrl} alt={slide.title}/>
  </Single>
  )
}


export default class SimpleSlider extends Component {
  state = {
    slides: data,
    showSlider: false,
  }

  openSlider = (e) => {
    const num = Number.parseInt(e.target.getAttribute('data-number'));
    this.slider.slickGoTo(num);
    this.setState({ showSlider: true })
  }

  hideSlider = () => {
    this.setState({ showSlider: false })
  }


  render() {
    const { showSlider, slides } = this.state;

    const settings = {
      speed: 500,
      infinite: true,
      dots: true,
      arrows: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      swipe: true,
    };

    return (
      <>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='0'>1</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='1'>2</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='2'>3</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='3'>4</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='4'>5</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='5'>6</button>


      <OuterWrapper showSlider={showSlider}>
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          {slides.map(slide => (
            <Slide key={slides} slide={slide} hideSlider={this.hideSlider}/>
          ))}
        </Slider>
      </OuterWrapper>
      </>
    );
  }
}
