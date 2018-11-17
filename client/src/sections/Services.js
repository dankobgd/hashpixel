import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Marketing from './icons/Marketing';
import Design from './icons/Design';
import Development from './icons/Development';
import Hosting from './icons/Hosting';
import Seo from './icons/Seo';
import Identity from './icons/Identity';
import bgImage from '../images/section_services.jpg';
import { FormattedMessage } from 'react-intl';
import { Container, Section, Heading, ContentWrapper, Content, Header } from '../shared/common';
import Arrow from '../images/Arrow';
import Exit from '../images/Exit';

import slideData from '../slider/data';

const cardData = [
  { id: 'Services.DesignTitle', defaultMessage: 'Web Design', icon: <Design /> },
  { id: 'Services.IdentityTitle', defaultMessage: 'Visual Identity', icon: <Identity /> },
  { id: 'Services.DevelopmentTitle', defaultMessage: 'Web Development', icon: <Development /> },
  { id: 'Services.HostingTitle', defaultMessage: 'Web Hosting', icon: <Hosting /> },
  { id: 'Services.MarketingTitle', defaultMessage: 'Digital Marketing', icon: <Marketing /> },
  { id: 'Services.SeoTitle', defaultMessage: 'Seo Optimization', icon: <Seo /> },
];

const SectionWrapper = styled(Section)`
  background-image: url(${bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    & > div {
      flex-basis: auto;
    }
  }
`;

const CardIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 0.825rem;
  width: 300px;
  flex-grow: 1;
  flex: 1 1 calc(100% / 3);

  &:hover > svg {
    transform: scale(1.1);
    transition: 500ms;
  }

  & > svg {
    transition: 500ms;
  }

  & > h1 {
    color: ${props => props.theme.primary};
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
  }

  & > span {
    color: ${props => props.theme.primary};
    padding: 0.5rem;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
`;

// ***********************************************************************************************
const Slider = styled.div`
  display: none;
  position: relative;

  ${props =>
    props.showSlider
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`;

const PageContent = styled.div`
  display: ${props => (props.showSlider ? 'none' : 'block')};
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

    & > * {
      width: 60%;
    }
  }

  @media screen and (max-width: 800px) {
    & > * {
      width: 70%;
    }
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
    line-height: 1;
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
const IconHolder = styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  margin-right: auto;
  margin-left: 5vmin;
  margin-top: 5vmin;
`;

const Slide = ({ slide, fpApi }) => {
  return (
    <div className="slide">
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
              <Arrow type="left" onClick={() => fpApi.moveSlideLeft()} />
              <Arrow type="right" onClick={() => fpApi.moveSlideRight()} />
            </Arrows>
          </DescriptionPart>
        </Article>
      </SingleItem>
    </div>
  );
};

function showNavElements() {
  document.querySelector('.dots-list').style.display = 'none';
  document.querySelector('#nav').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
}

function hideNavElements() {
  document.querySelector('.dots-list').style.display = 'flex';
  document.querySelector('#nav').style.display = 'flex';
  document.querySelector('body').style.overflow = 'visible';
}

class ServicesSection extends Component {
  state = {
    showSlider: false,
  };

  openSlider = (fpApi, index) => {
    this.setState({ showSlider: true }, () => {
      showNavElements();
      fpApi.moveTo('Services', index);
    });
  };

  hideSlider = () => {
    hideNavElements();
    this.setState({ showSlider: false });
  };

  render() {
    const { showSlider } = this.state;
    const { fpApi } = this.props;

    return (
      <SectionWrapper>
        <Slider showSlider={showSlider}>
          <IconHolder>
            <Exit onClick={this.hideSlider} />
          </IconHolder>

          {slideData.map(slide => (
            <Slide key={slide.titleId} slide={slide} fpApi={fpApi} />
          ))}
        </Slider>

        <PageContent showSlider={showSlider}>
          <Container style={{ maxWidth: '980px' }}>
            <ContentWrapper>
              <Header>
                <Heading>
                  <FormattedMessage id="Services.Title" defaultMessage="What we do" />
                </Heading>
              </Header>

              <Content>
                <MainBox>
                  {cardData.map((card, index) => (
                    <CardIcon key={card.id} onClick={() => this.openSlider(fpApi, index)}>
                      {card.icon}
                      <h1>
                        <FormattedMessage id={card.id} defaultMessage={card.defaultMessage} />
                      </h1>
                    </CardIcon>
                  ))}
                </MainBox>
              </Content>
            </ContentWrapper>
          </Container>
        </PageContent>
      </SectionWrapper>
    );
  }
}

export default ServicesSection;
