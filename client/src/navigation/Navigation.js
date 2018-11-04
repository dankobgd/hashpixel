import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Desktop from './Desktop';
import Mobile from './Mobile';

class Navigation extends Component {
  state = {
    isMenuOpen: false,
    position: 'right',
  };

  handleEnter = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: true });
  };

  handleLeave = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: false });
  };

  handleClick = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const navigationUILogic = {
      isMenuOpen: this.state.isMenuOpen,
      position: this.state.position,
      handleEnter: this.handleEnter,
      handleLeave: this.handleLeave,
      handleClick: this.handleClick
    }

    const { fpState, fpApi, footerUILogic, setLocale, lang } = this.props;

    return ReactDOM.createPortal(
      <div>
        <Desktop fpState={fpState} fpApi={fpApi} footerUILogic={footerUILogic} navigationUILogic={navigationUILogic} setLocale={setLocale} lang={lang}/>
        <Mobile fpState={fpState} fpApi={fpApi} footerUILogic={footerUILogic} navigationUILogic={navigationUILogic} setLocale={setLocale} lang={lang}/>
      </div>,
      document.getElementById('nav')
    );
  }
}

export default Navigation;
