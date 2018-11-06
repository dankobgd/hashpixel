import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import data from './data';



const StyledSlide = styled.div`
  height: 500px;
  width: 500px;
  cursor: grab;
  background-color: ${props => props.bg};
`;

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
    const { slide, index, bg, hide, ...props } = this.props;

    return (
      <>
        <span onClick={hide}>QUIT</span>

        <StyledSlide bg={bg} {...props}>
          <h2>{slide.title}</h2>
          <span>{slide.description}</span>
          <img src={slide.imageUrl} alt=''/>
        </StyledSlide>
      </>
    );
  }
}

export default class SimpleSlider extends Component {
  state = {
    slidesData: data,
    showSlider: false,
    slideIndex: 0,
    updateCount: 0
  }

  openSlider = (e) => {
    const activeIndex = Number.parseInt(e.target.getAttribute('data-number'));
    this.slider.slickGoTo(activeIndex)

    this.setState({ showSlider: true, slideIndex: activeIndex })
  }

  hideSlider = () => {
    this.setState({ showSlider: false })
  }


  render() {
    const { showSlider, slidesData, slideIndex } = this.state;


    const settings = {
      speed: 500,
      infinite: true,
      dots: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // afterChange: () => this.setState(state => ({ updateCount: state.updateCount + 1 })),
      // beforeChange: (current, next) => this.setState({ slideIndex: next }),
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
      <>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='0'>1</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='1'>2</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='2'>3</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='3'>4</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='4'>5</button>
      <button style={{ width: '50px' }} onClick={this.openSlider} data-number='5'>6</button>

      <OuterWrapper showSlider={showSlider}>
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          <CustomSlide slide={slidesData[slideIndex]} hide={this.hideSlider} bg='green' index={1} />
          <CustomSlide slide={slidesData[slideIndex]} hide={this.hideSlider} bg='orange' index={2} />
          <CustomSlide slide={slidesData[slideIndex]} hide={this.hideSlider} bg='palevioletred' index={3} />
          <CustomSlide slide={slidesData[slideIndex]} hide={this.hideSlider} bg='rebeccapurple' index={4} />
          <CustomSlide slide={slidesData[slideIndex]} hide={this.hideSlider} bg='darkred' index={5} />
          <CustomSlide slide={slidesData[slideIndex]} hide={this.hideSlider} bg='lightblue' index={6} />
        </Slider>
      </OuterWrapper>
      </>
    );
  }
}
