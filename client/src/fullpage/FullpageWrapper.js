import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '../../node_modules/fullpage.js/vendors/scrolloverflow';
import fullpageOptions from './fullpageOptions';
import { HeroSection, AboutSection, MeetOurTeamSection, ServicesSection, ContactSection, Footer, Empty } from '../sections';
import Navigation from '../navigation/Navigation';
import Bullets from '../bullets/Bullets'
import { toggleFooter } from '../helpers';

const Sections = ({ fpState, fpApi, footerUILogic }) => {
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


class FullPageWrapper extends Component {
  state = {
    isFooterOpen: false,
  };

  setFooterVisible = () => {
    const { isFooterOpen } = this.state;

    if (!isFooterOpen) {
      this.setState({ isFooterOpen: true });
    }
  };

  setFooterHidden = () => {
    const { isFooterOpen } = this.state;

    if (isFooterOpen) {
      this.setState({ isFooterOpen: false });
    }
  };

  render() {
    const footerUILogic = {
      isFooterOpen: this.state.isFooterOpen,
      setFooterVisible: this.setFooterVisible,
      setFooterHidden: this.setFooterHidden
    }

    return (
      <ReactFullpage
      {...fullpageOptions}
      render={({ state, fullpageApi }) => (
          <>
            <Navigation fpState={state} fpApi={fullpageApi} footerUILogic={footerUILogic} />
            <Sections fpState={state} fpApi={fullpageApi} footerUILogic={footerUILogic} />
            <Bullets fpState={state} fpApi={fullpageApi} footerUILogic={footerUILogic} />
          </>
          )}
      />
    )
  }
}


export default FullPageWrapper;
