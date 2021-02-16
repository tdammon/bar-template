import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Mobile from "../Mobile/Mobile";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileServices from "../MobileServices/MobileServices";
import MobileNavThreeButton from "../MobileNavThreeButton/MobileNavThreeButton";
import MobileNavFourButton from "../MobileNavFourButton/MobileNavFourButton";
import MobileNavFiveButton from "../MobileNavFiveButton/MobileNavFiveButton";
import Desktop from "../Desktop/Desktop";
import DesktopHeader from "../Desktop/DesktopHeader";
import { useHistory } from "react-router-dom";
import homePicture from "../CompanyImages/Port507Bar.jpg";

import DesignView from "../DesignView/DesignView";

import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);
const trackingId = "UA-167603833-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, {
  debug: true,
});

const App = () => {
  const [menu, setMenu] = React.useState("beer");
  const [nav, setNav] = React.useState(false);
  const history = useHistory();

  if (isMobile) {
    return (
      <Router>
        <div
          style={{
            backgroundImage: `url(${homePicture})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "100vh",
            width: "100vw",
            backgroundSize: "cover",
            zIndex: "-999",
          }}
        >
          <Header setMenu={setMenu} setNav={setNav} menu={menu} nav={nav} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Mobile
                  {...props}
                  setMenu={setMenu}
                  setNav={setNav}
                  menu={menu}
                  nav={nav}
                />
              )}
            />
            <Route
              exact
              path="/menu"
              render={(props) => (
                <MobileMenu
                  {...props}
                  setMenu={setMenu}
                  setNav={setNav}
                  menu={menu}
                  nav={nav}
                />
              )}
            />
            <Route
              exact
              path="/specials"
              render={(props) => (
                <MobileServices
                  {...props}
                  setMenu={setMenu}
                  setNav={setNav}
                  menu={menu}
                  nav={nav}
                />
              )}
            />
            <Route
              exact
              path="/catering"
              render={(props) => (
                <DesignView
                  {...props}
                  setMenu={setMenu}
                  setNav={setNav}
                  menu={menu}
                  nav={nav}
                />
              )}
            />
            <Route
              exact
              path="/directions"
              render={(props) => (
                <Contact
                  {...props}
                  setMenu={setMenu}
                  setNav={setNav}
                  menu={menu}
                  nav={nav}
                />
              )}
            />
          </Switch>
          <MobileNavFourButton setNav={setNav} setMenu={setMenu} />
        </div>
      </Router>
    );
  } else if (isBrowser) {
    return (
      <Router>
        <DesktopHeader />
        <Switch>
          {/* <Route exact path="/" component={DesktopImage} /> */}
          <Route
            path="/"
            component={() => {
              window.location.href = "https://www.facebook.com/Port507/";
              return null;
            }}
          />
          {/* <Route
            path="/"
            render={(props) => (
              <Desktop
                {...props}
                setMenu={setMenu}
                setNav={setNav}
                menu={menu}
                nav={nav}
              />
            )}
          /> */}
        </Switch>
      </Router>
    );
  }
};

export default App;
