import React, { Component } from 'react';
import styled from 'styled-components';
import Marketing from './icons/Marketing';
import Design from './icons/Design';
import Development from './icons/Development';
import Hosting from './icons/Hosting';
import Seo from './icons/Seo';
import Identity from './icons/Identity';
import { Container, Section } from '../shared/style';
import bgImage from '../images/bg-whatwedo.jpg'
import { FormattedMessage } from 'react-intl';
import SimpleSlider from '../slider/Slider';


const SectionWrapper = styled(Section)`
  background-image: url(${bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: ${props => props.theme.primary};;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    flex: 1;
  }

  @media screen and (max-width: 800px) {
    & > div {
      flex-basis: auto;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.825rem;
  cursor: pointer;

  & > svg {
    transition: 500ms;
  }

  &:hover > svg {
    transform: scale(1.1);
    transition: 500ms;
  }

  & > h1 {
    color: ${props => props.theme.primary};;
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }

  & > span {
    color: ${props => props.theme.primary};;
    padding: 0.5rem;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
`;

class ServicesSection extends Component {
  state = {
    showSlider: false,
  }

  setRef = node => {
    this.sliderAPI = node;
  }

  openSlider = (num) => {
    this.sliderAPI.slickGoTo(num);
    this.setState({ showSlider: true })
    document.querySelector('.dots-list').style.display = 'none';
    document.querySelector('#nav').style.display = 'none';
  }

  hideSlider = () => {
    this.setState({ showSlider: false });
    document.querySelector('.dots-list').style.display = 'flex';
    document.querySelector('#nav').style.display = 'flex';
  }

  render() {
   return (
    <SectionWrapper>
      <SimpleSlider hideSlider={this.hideSlider} showSlider={this.state.showSlider} setRef={this.setRef} sliderAPI={this.sliderAPI} />

      <Container style={{ maxWidth: '980px' }}>
        <TopBox>
          <Title><FormattedMessage id='Services.Title' defaultMessage='What we do'/></Title>
        </TopBox>

        <MainBox>
          <Card onClick={() => this.openSlider(0)}>
            <Design/>
            <h1><FormattedMessage id='Services.DesignTitle' defaultMessage='Web Design' /></h1>
            {/* <span>
            <FormattedMessage id='Services.DesignText' defaultMessage='In a fast, simple and quality way, we create accesible and interactive websites in accordance with Your needs.'/>
            </span> */}
          </Card>

          <Card onClick={() => this.openSlider(1)}>
            <Identity/>
            <h1><FormattedMessage id='Services.IdentityTitle' defaultMessage='Visual Identity'/></h1>
            {/* <span>
              <FormattedMessage id='Services.IdentityText' defaultMessage='By using modern technologies, with the cooperation and consulting, we create ideal solution which will contribute to the recognition and authenticity of Your product.'/>
            </span> */}
          </Card>

          <Card onClick={() => this.openSlider(2)}>
            <Development/>
            <h1><FormattedMessage id='Services.DevelopmentTitle' defaultMessage='Web Development'/></h1>
            {/* <span>
              <FormattedMessage id='Services.DevelopmentText' defaultMessage='Maintenance of internet pages, promotion and reorganization of existing ones and designing of the innovative strategies for improvement are the part of our large portfolio when it comes to web development.'/>
            </span> */}
          </Card>
        </MainBox>

        <MainBox>
          <Card onClick={() => this.openSlider(3)}>
            <Hosting/>
            <h1><FormattedMessage id='Services.HostingTitle' defaultMessage='Web Hosting'/></h1>
            {/* <span>
              <FormattedMessage id='Services.HostingText' defaultMessage='Maintenance and setting up web pages on servers, creating an official e-mail, creating and maintaining database are just some of solutions we offer You when it comes to maintaining and upgrading Your everyday buisness.'/>
            </span> */}
          </Card>

          <Card onClick={() => this.openSlider(4)}>
            <Marketing/>
            <h1><FormattedMessage id='Services.MarketingTitle' defaultMessage='Digital Marketing'/></h1>
            {/* <span>
              <FormattedMessage id='Services.MarketingText' defaultMessage='How to position your brand on market, how to maintain social media as well as which types of content and their ways of presentations are the most suitable today are just some of the questions that our team will gladly answer and offer adequate solution. '/>
            </span> */}
          </Card>

          <Card onClick={() => this.openSlider(5)}>
            <Seo/>
            <h1><FormattedMessage id='Services.SeoTitle' defaultMessage='SEO Optimization'/></h1>
            {/* <span>
              <FormattedMessage id='Services.SeoText' defaultMessage='With the help from our modern technologies we offer You a chance to be among the first from your area of work that will answer the needs of your clients by taking the top positions at search results.'/>
            </span> */}
          </Card>
        </MainBox>
      </Container>
    </SectionWrapper>
   )
  }
};

export default ServicesSection;
