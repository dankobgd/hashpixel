import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FullPageWrapper from './fullpage/FullpageWrapper'
import PageNotFound from './pages/PageNotFound';
import { ThemeProvider } from 'styled-components';
import  { mainTheme } from './shared/theme'
import Loader from './shared/Loader';
import './App.css';


class App extends Component {
  state = {
    loading: true
  }

  componentDidMount(){
    this.setState({ loading: false })
  }

  render() {
    return (
      <>
        {this.state.loading ? <Loader /> : (
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
        )}
      </>
    )
  }
}


export default App;
