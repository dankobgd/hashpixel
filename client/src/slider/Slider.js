import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import data from './data';
import { Container } from '../shared/style';
import Exit from '../images/Exit';
import ArrowLeft from '../images/ArrowLeft';
import ArrowRight from '../images/ArrowRight';


const OuterWrapper = styled.div`
  transition: 500ms;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  position: relative;
  transform: translateY(-100%);
  height: 0;

  ${props => props.showSlider && css`
    transition-delay: 100ms;
    height: auto;
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
  position: relative;
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
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: left;
  position: relative;

  & > span {
    line-height: 1.5;
  }
`;


const Text = styled.div``;

const Arrows = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Slide = ({ slide, hideSlider, sliderAPI }) => {

  return (
    <Single>
      <Container>
      <Article>
        <ImagePart>
          <img src={slide.imageUrl} alt={slide.title}/>
        </ImagePart>
        <DescriptionPart>
          <Text>
            <h1>{slide.title}</h1>
            <span>{slide.description}</span>
          </Text>
          <Arrows>
            <ArrowLeft onClick={() => sliderAPI.slickPrev()}/>
            <ArrowRight onClick={() => sliderAPI.slickNext()}/>
          </Arrows>
        </DescriptionPart>
      </Article>
      </Container>
    </Single>
  )
}


export default class SimpleSlider extends Component {
  state = {
    slides: data,
  }

  render() {
    const { slides } = this.state;
    const { hideSlider, showSlider, setRef, sliderAPI } = this.props;

    const settings = {
      speed: 500,
      infinite: true,
      dots: true,
      arrows: false,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      swipe: true,
    };

    return (
      <OuterWrapper showSlider={showSlider}>
        <Exit onClick={hideSlider}/>

        <Slider {...settings} ref={slider => (setRef(slider))}>
          {slides.map(slide => (
            <Slide key={slides} slide={slide} hideSlider={hideSlider} sliderAPI={sliderAPI}/>
          ))}
        </Slider>
      </OuterWrapper>
    );
  }
}
