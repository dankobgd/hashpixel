import React from 'react';
import HeroSection from './Hero';
import AboutSection from './About';
import MeetOurTeamSection from './MeetOurTeam';
import ServicesSection from './Services';
import ContactSection from './Contact';
import Footer from './Footer';
import Empty from './Empty';
import { toggleFooter } from '../helpers'


export default ({ fpState, fpApi, footerUILogic }) => {
  toggleFooter(fpState, footerUILogic);

  return (
    <div style={{ position: 'relative' }}>
      <HeroSection fpApi={fpApi}/>
      <AboutSection />
      <MeetOurTeamSection />
      <ServicesSection />
      <ContactSection />
      <Empty />
      <Footer fpState={fpState} fpApi={fpApi} isFooterOpen={footerUILogic.isFooterOpen}/>
    </div>
  )
}
