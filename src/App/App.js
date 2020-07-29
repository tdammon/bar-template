import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {isMobile, isBrowser} from 'react-device-detect';
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
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
import MenuNavigation from '../MobileMenu/MenuNavigation';
ReactGA.pageview(window.location.pathname + window.location.search);
const trackingId = 'UA-167603833-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, {
    debug: true
});


const App = ()=> {
  const [menu, setMenu] = React.useState('breakfast');
  const [nav, setNav] = React.useState(false)
    if(isMobile){
      return(
      <Router>
        <Header setMenu={setMenu} setNav={setNav} menu={menu} nav={nav}/>
        
          {nav ? <MenuNavigation setMenu={setMenu} setNav={setNav} menu={menu} nav={nav}/> :
          <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Mobile {...props} setMenu={setMenu} setNav={setNav} menu={menu} nav={nav} />
          )}
        />
        <Route
          exact
          path="/menu"
          render={(props) => (
            <MobileMenu {...props} setMenu={setMenu} setNav={setNav} menu={menu} nav={nav}/>
          )}
        />  
        <Route
          exact
          path="/specials"
          render={(props) => (
            <MobileServices {...props} setMenu={setMenu} setNav={setNav} menu={menu} nav={nav}/>
          )}
        />  
        <Route
          exact
          path="/catering"
          render={(props) => (
            <DesignView {...props} setMenu={setMenu} setNav={setNav} menu={menu} nav={nav}/>
          )}
        />  
        <Route
          exact
          path="/contact"
          render={(props) => (
            <Contact {...props} setMenu={setMenu} setNav={setNav} menu={menu} nav={nav}/>
          )}
        /></Switch>  }
        
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

export default (App);