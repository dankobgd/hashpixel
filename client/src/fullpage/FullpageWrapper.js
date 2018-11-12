import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '../../node_modules/fullpage.js/vendors/scrolloverflow';
import fullpageOptions from './fullpageOptions';
import Navigation from '../navigation/Navigation';
import Sections from '../sections';
import Bullets from '../navigation/Bullets';

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
      setFooterHidden: this.setFooterHidden,
    };

    return (
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <Navigation
                fpState={state}
                fpApi={fullpageApi}
                footerUILogic={footerUILogic}
                setLocale={this.props.setLocale}
                lang={this.props.lang}
              />
              <Sections fpState={state} fpApi={fullpageApi} footerUILogic={footerUILogic} />
              <Bullets fpState={state} fpApi={fullpageApi} footerUILogic={footerUILogic} />
            </>
          );
        }}
      />
    );
  }
}

export default FullPageWrapper;
