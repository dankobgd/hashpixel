import React, { Component } from 'react';
import styled from 'styled-components';
import Marketing from './icons/Marketing';
import Design from './icons/Design';
import Development from './icons/Development';
import Hosting from './icons/Hosting';
import Seo from './icons/Seo';
import Identity from './icons/Identity';
import bgImage from '../images/section_services.jpg';
import { FormattedMessage } from 'react-intl';
import SimpleSlider from '../slider/Slider';
import { Container, Section, Heading, ContentWrapper, Content, Header } from '../shared/common';

const SectionWrapper = styled(Section)`
  background-image: url(${bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
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

function toggleFocusedTask({ focusedTask = false }) {
  if (focusedTask) {
    document.querySelector('.dots-list').style.display = 'none';
    document.querySelector('#nav').style.display = 'none';
    document.querySelector('.services-screen').style.display = 'none';
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('.dots-list').style.display = 'flex';
    document.querySelector('#nav').style.display = 'flex';
    document.querySelector('.services-screen').style.display = 'block';
    document.querySelector('body').style.display = 'visible';
  }
}

class ServicesSection extends Component {
  state = {
    showSlider: false,
  };

  setRef = node => {
    this.sliderAPI = node;
  };

  openSlider = num => {
    this.sliderAPI.slickGoTo(num);
    this.setState({ showSlider: true });
    toggleFocusedTask({ focusedTask: true });
  };

  hideSlider = () => {
    this.setState({ showSlider: false });
    toggleFocusedTask({ focusedTask: false });
  };

  render() {
    return (
      <SectionWrapper>
        <SimpleSlider
          hideSlider={this.hideSlider}
          showSlider={this.state.showSlider}
          setRef={this.setRef}
          sliderAPI={this.sliderAPI}
        />

        <div className="services-screen">
          <Container style={{ maxWidth: '980px' }}>
            <ContentWrapper>
              <Header>
                <Heading>
                  <FormattedMessage id="Services.Title" defaultMessage="What we do" />
                </Heading>
              </Header>

              <Content>
                <MainBox>
                  <CardIcon onClick={() => this.openSlider(0)}>
                    <Design />
                    <h1>
                      <FormattedMessage id="Services.DesignTitle" defaultMessage="Web Design" />
                    </h1>
                  </CardIcon>

                  <CardIcon onClick={() => this.openSlider(1)}>
                    <Identity />
                    <h1>
                      <FormattedMessage id="Services.IdentityTitle" defaultMessage="Visual Identity" />
                    </h1>
                  </CardIcon>

                  <CardIcon onClick={() => this.openSlider(2)}>
                    <Development />
                    <h1>
                      <FormattedMessage id="Services.DevelopmentTitle" defaultMessage="Web Development" />
                    </h1>
                  </CardIcon>

                  <CardIcon onClick={() => this.openSlider(3)}>
                    <Hosting />
                    <h1>
                      <FormattedMessage id="Services.HostingTitle" defaultMessage="Web Hosting" />
                    </h1>
                  </CardIcon>

                  <CardIcon onClick={() => this.openSlider(4)}>
                    <Marketing />
                    <h1>
                      <FormattedMessage id="Services.MarketingTitle" defaultMessage="Digital Marketing" />
                    </h1>
                  </CardIcon>

                  <CardIcon onClick={() => this.openSlider(5)}>
                    <Seo />
                    <h1>
                      <FormattedMessage id="Services.SeoTitle" defaultMessage="SEO Optimization" />
                    </h1>
                  </CardIcon>
                </MainBox>
              </Content>
            </ContentWrapper>
          </Container>
        </div>
      </SectionWrapper>
    );
  }
}

export default ServicesSection;
