import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import translations from './translations.json';
import en from 'react-intl/locale-data/en';
import sr from 'react-intl/locale-data/sr';
const { Provider, Consumer } = React.createContext();

addLocaleData([...en, ...sr]);

// fix later do check for navigator lang...
// const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

class I18nProviderWrapper extends Component {
  componentDidMount() {
    const lang = localStorage.getItem('language');
    this.setState({ locale: lang });
  }

  changeLanguage = lang => {
    this.setState({ locale: lang });
    localStorage.setItem('language', lang);
  };

  state = {
    locale: 'en',
    translations,
    changeLanguage: this.changeLanguage,
  };

  render() {
    const { children } = this.props;
    const { locale } = this.state;
    return (
      <Provider value={this.state}>
        <IntlProvider locale={locale} messages={translations[locale]} defaultLocale="en">
          {children}
        </IntlProvider>
      </Provider>
    );
  }
}

export { I18nProviderWrapper as I18nProvider, Consumer as I18nConsumer };
