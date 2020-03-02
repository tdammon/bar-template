import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {isMobile, isBrowser} from 'react-device-detect';
import Mobile from "../Mobile/Mobile";
import Desktop from "../Desktop/Desktop";
import DesktopServices from "../Desktop/DesktopServices";
import MobileClients from "../Mobile/MobileClients";
import MobileContacts from "../Mobile/MobileContacts";
import MobileNav from "../Mobile/MobileNav";

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
        </Switch>
        <MobileNav />
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