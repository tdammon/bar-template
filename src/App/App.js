import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {isMobile, isBrowser} from 'react-device-detect';
import Mobile from "../Mobile/Mobile";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileServices from "../MobileServices/MobileServices";
import MobileNavThreeButton from "../MobileNavThreeButton/MobileNavThreeButton";
import MobileNavFourButton from "../MobileNavFourButton/MobileNavFourButton";
import MobileNavFiveButton from "../MobileNavFiveButton/MobileNavFiveButton";
import Desktop from "../Desktop/Desktop";
import DesktopImage from "../Desktop/DesktopImage";

import DesignView from "../DesignView/DesignView"

import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname + window.location.search);
const trackingId = 'UA-167603833-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, {
    debug: true
});


class App extends Component {

  render() {
    if(isMobile){
      return(
      <Router>
        <Switch>
        <Route
          exact
          path="/"
          component={Mobile}
        />
        <Route
          exact
          path="/menu"
          component={MobileMenu}
        />  
        <Route
          exact
          path="/specials"
          component={MobileServices}
        />  
        <Route
          exact
          path="/catering"
          component={DesignView}
        />  
        </Switch>
        <MobileNavFourButton />
      </Router>)
    } else if(isBrowser) {
      return (
        <Router>
          <Switch>
          <Route
              exact
              path="/"
              component={DesktopImage}
            />
          </Switch>
        </Router>
      );
    }
    
  }
}

export default (App);