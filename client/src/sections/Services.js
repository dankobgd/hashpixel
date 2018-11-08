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
          </Card>

          <Card onClick={() => this.openSlider(1)}>
            <Identity/>
            <h1><FormattedMessage id='Services.IdentityTitle' defaultMessage='Visual Identity'/></h1>
          </Card>

          <Card onClick={() => this.openSlider(2)}>
            <Development/>
            <h1><FormattedMessage id='Services.DevelopmentTitle' defaultMessage='Web Development'/></h1>
          </Card>
        </MainBox>

        <MainBox>
          <Card onClick={() => this.openSlider(3)}>
            <Hosting/>
            <h1><FormattedMessage id='Services.HostingTitle' defaultMessage='Web Hosting'/></h1>
          </Card>

          <Card onClick={() => this.openSlider(4)}>
            <Marketing/>
            <h1><FormattedMessage id='Services.MarketingTitle' defaultMessage='Digital Marketing'/></h1>
          </Card>

          <Card onClick={() => this.openSlider(5)}>
            <Seo/>
            <h1><FormattedMessage id='Services.SeoTitle' defaultMessage='SEO Optimization'/></h1>
          </Card>
        </MainBox>
      </Container>
    </SectionWrapper>
   )
  }
};

export default ServicesSection;
