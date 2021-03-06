import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FullPageWrapper from './fullpage/FullpageWrapper';
import PageNotFound from './pages/PageNotFound';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './shared/theme';
import { I18nProvider } from './locales/I18nContext';
import './App.css';

function App() {
  return (
    <I18nProvider>
      <ThemeProvider theme={mainTheme}>
        <Router>
          <Switch>
            <Route exact path="/" component={FullPageWrapper} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
