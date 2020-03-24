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
import DesignView from "../DesignView/DesignView"

import Amplify, { Analytics } from 'aws-amplify';
import Auth from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    identityPoolId: 'COGNITO_IDENTITY_POOL_ID',
    region: 'us-east-1'
  }
}
//Initialize Amplify
Auth.configure(amplifyConfig);

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: 'd15tt0uwt69iby',
        // Amazon service region
        region: 'us-east-1',
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)
//Record an event
Analytics.record('some-event-name');

//Record a custom event
Analytics.record({
    name: 'Album',
    attributes: { genre: 'Rock', year: '1989' }
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
          path="/services"
          component={MobileServices}
        />  
        <Route
          exact
          path="/designs"
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
              component={Desktop}
            />
          </Switch>
        </Router>
      );
    }
    
  }
}

export default (App);