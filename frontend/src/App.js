import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {
  Home
} from './pages';
import { Helmet } from "react-helmet";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
            <title>PixelAds Dapp</title>
        </Helmet>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}