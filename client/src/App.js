import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FullPageWrapper from './fullpage/FullpageWrapper';
import PageNotFound from './pages/PageNotFound';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './shared/theme';
import './App.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import sr from 'react-intl/locale-data/sr';
import translations from './translations/translations.json';

addLocaleData([...en, ...sr]);

class App extends Component {
  state = {
    lang: 'en',
  };

  componentDidMount() {
    const lang = localStorage.getItem('locale');
    this.setState({ lang });
  }

  setLocale = lang => {
    this.setState({ lang });
    localStorage.setItem('locale', lang);
  };

  render() {
    const { lang } = this.state;

    return (
      <IntlProvider locale="en" messages={translations[lang]}>
        <ThemeProvider theme={mainTheme}>
          <Router>
            <Switch>
              <Route exact path="/" render={() => <FullPageWrapper setLocale={this.setLocale} lang={lang} />} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default App;
