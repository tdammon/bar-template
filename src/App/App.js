import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {isMobile, isBrowser} from 'react-device-detect';
import Mobile from "../Mobile/Mobile";
import MobileServices from "../MobileServices/MobileServices";
import MobileNavThreeButton from "../MobileNavThreeButton/MobileNavThreeButton";
import MobileNavFourButton from "../MobileNavFourButton/MobileNavFourButton";
import MobileNavFiveButton from "../MobileNavFiveButton/MobileNavFiveButton";
import Desktop from "../Desktop/Desktop";



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
          path="/services"
          component={MobileServices}
        />  
        </Switch>
        <MobileNavThreeButton />
      </Router>)
    } else if(isBrowser) {
      return (
        <Router>
          <Switch>
          <Route
              exact
              path="/"
              component={Desktop}
            />
          </Switch>
        </Router>
      );
    }
    
  }
}

export default (App);