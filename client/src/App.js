import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FullPageWrapper from './fullpage/FullpageWrapper'
import PageNotFound from './pages/PageNotFound';
import { ThemeProvider } from 'styled-components';
import  { mainTheme } from './shared/theme'
import './App.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import sr from 'react-intl/locale-data/sr';
import localeMessages from './localeMessages.json';


addLocaleData(en);
addLocaleData(sr);


class App extends Component {
  state = {
    lang: 'en'
  }

  setLocale = lang => {
    this.setState({ lang })
  }

  render() {
    const { lang } = this.state;

    return (
      <IntlProvider locale='en-US' messages={localeMessages[lang]}>
        <ThemeProvider theme={mainTheme}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={FullPageWrapper}
              />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </IntlProvider>
    )
  }
}


export default App;
