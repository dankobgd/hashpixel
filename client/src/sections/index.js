import React, { Component } from 'react';
import HeroSection from './Hero';
import AboutSection from './About';
import MeetOurTeamSection from './MeetOurTeam';
import ServicesSection from './Services';
import ContactSection from './Contact';
import Footer from './Footer';
import Empty from './Empty';
import { toggleFooter } from '../helpers'


export default class Sections extends Component {
  componentDidUpdate(prevProps) {
    const { fpState, footerUILogic } = prevProps;
    toggleFooter(fpState, footerUILogic);
  }

  render() {
    const { fpState, fpApi, footerUILogic: { isFooterOpen } } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <HeroSection fpApi={fpApi}/>
        <AboutSection />
        <MeetOurTeamSection />
        <ServicesSection />
        <ContactSection />
        <Empty />
        <Footer fpState={fpState} fpApi={fpApi} isFooterOpen={isFooterOpen}/>
      </div>
    )
  }
}
