import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import Directions from "../Contact/Contact";
import Header from "../Header/Header";
import Mobile from "../Mobile/Mobile";
// import MobileMenu from "../MobileMenu/MobileMenu";
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
import Axios from "axios";
import MobileMenuReusable from "../MobileMenuReusable/MobileMenuReusable";
ReactGA.pageview(window.location.pathname + window.location.search);
const trackingId = "UA-167603833-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, {
  debug: true,
});

const App = () => {
  const [menu, setMenu] = React.useState("beer");
  const [menuList, setMenuList] = React.useState([]);
  const [nav, setNav] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    fetch(
      "https://8pevqu8dyg.execute-api.us-east-1.amazonaws.com/default/get-evolv-mobile-data"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setMenuList(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

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
                  menuList={menuList}
                  setFilter={setFilter}
                />
              )}
            />
            <Route
              exact
              path="/menu"
              render={(props) => (
                <MobileMenuReusable
                  {...props}
                  setMenu={setMenu}
                  setNav={setNav}
                  menu={menu}
                  nav={nav}
                  filter={filter}
                  setFilter={setFilter}
                  menuList={menuList}
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
              path="/directions"
              render={(props) => (
                <Directions
                  {...props}
                  setMenu={setMenu}
                  setNav={setNav}
                  menu={menu}
                  nav={nav}
                  filter={filter}
                  setFilter={setFilter}
                  menuList={menuList}
                />
              )}
            />
            {/* <Route
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
            /> */}
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
