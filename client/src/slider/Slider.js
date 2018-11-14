import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import data from './data';
import Exit from '../images/Exit';
import Arrow from '../images/Arrow';
import { FormattedMessage } from 'react-intl';

const OuterWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  position: relative;
  height: 0;
  transition: 500ms;
  transform: translateY(-100%);

  ${props =>
    props.showSlider &&
    css`
      height: 100vh;
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: 500ms;
      transition-delay: 100ms;
    `};
`;

const SingleItem = styled.div`
  cursor: grab;
  background-color: ${props => props.theme.darker};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  padding: 1rem;

  @media screen and (max-width: 980px) {
    padding: 0;
  }
`;

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  & > * {
    width: 50%;
  }

  @media screen and (max-width: 980px) {
    flex-direction: column;
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    & > * {
      width: 80%;
    }
  }
`;

const ImagePart = styled.div`
  padding: 1rem;

  & > img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 980px) {
    padding: 0;
  }
`;

const DescriptionPart = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: left;
  position: relative;

  & > span {
    line-height: 1.5;
  }

  @media screen and (max-width: 980px) {
    padding: 0;
  }
`;

const Text = styled.div`
  & > span {
    line-height: 2;
  }
`;

const Arrows = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 2em;
  }

  @media screen and (max-width: 980px) {
    justify-content: space-between;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 5vmin;
  margin-top: 5vmin;
`;

const Slide = ({ slide, sliderAPI }) => {
  return (
    <SingleItem>
      <Article>
        <ImagePart>
          <img src={slide.imageUrl} alt={slide.title} />
        </ImagePart>
        <DescriptionPart>
          <Text>
            <h1>
              <FormattedMessage id={slide.titleId} defaultMessage={slide.titleDefault} />
            </h1>
            <span>
              <FormattedMessage id={slide.spanId} defaultMessage={slide.spanDefault} />
            </span>
          </Text>
          <Arrows>
            <Arrow type="left" onClick={() => sliderAPI.slickPrev()} />
            <Arrow type="right" onClick={() => sliderAPI.slickNext()} />
          </Arrows>
        </DescriptionPart>
      </Article>
    </SingleItem>
  );
};

export default class SimpleSlider extends Component {
  state = {
    slides: data,
  };

  render() {
    const { slides } = this.state;
    const { hideSlider, showSlider, setRef, sliderAPI } = this.props;

    const settings = {
      speed: 500,
      infinite: true,
      dots: false,
      arrows: false,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      swipe: true,
    };

    return (
      <OuterWrapper showSlider={showSlider}>
        <Header>
          <Exit onClick={hideSlider} />
        </Header>

        <Slider {...settings} ref={slider => setRef(slider)}>
          {slides.map(slide => (
            <Slide key={slides} slide={slide} hideSlider={hideSlider} sliderAPI={sliderAPI} />
          ))}
        </Slider>
      </OuterWrapper>
    );
  }
}
