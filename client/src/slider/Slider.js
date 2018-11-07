import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import data from './data';
import { Container } from '../shared/style';
import Exit from '../images/Exit';


const OuterWrapper = styled.div`
  transition: 500ms;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  overflow: hidden;
  position: relative;

  ${props => props.showSlider && css`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `};
`;

const Single = styled.div`
  cursor: grab;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.darker};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Article = styled.article`
  display: flex;
  padding: 2rem;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }

  & > * {
    flex-basis: 50%;
  }
`;

const ImagePart = styled.div`
  padding: 2rem;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const DescriptionPart = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  & > span {
    line-height: 1.5;
  }
`;



const Slide = ({ slide, hideSlider }) => {
  return (
    <Single>
      <Container>
      <Article>
        <ImagePart>
          <img src={slide.imageUrl} alt={slide.title}/>
        </ImagePart>
        <DescriptionPart>
          <h1>{slide.title}</h1>
          <span>{slide.description}</span>
        </DescriptionPart>
      </Article>
      </Container>
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
        <Exit onClick={this.hideSlider}/>

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
