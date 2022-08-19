import React from "react";
import style from "./App.module.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import Directions from "../Directions/Directions";
import Header from "../Header/Header";
import Mobile from "../Mobile/Mobile";
import MobileNavTwoButton from "../MobileNavTwoButton/MobileNavTwoButton"
import MobileNavThreeButton from "../MobileNavThreeButton/MobileNavThreeButton";
import MobileNavFourButton from "../MobileNavFourButton/MobileNavFourButton";
import MobileNavFiveButton from "../MobileNavFiveButton/MobileNavFiveButton";
import Desktop from "../Desktop/Desktop";
import DesktopHeader from "../Desktop/DesktopHeader";
import { useHistory } from "react-router-dom";

import MobileMenuReusable from "../Mobile/MobileMenuReusable/MobileMenuReusable";
import MobileAboutUs from "../Mobile/MobileAboutUs/MobileAboutUs";
import DesktopMenu from "../Desktop/DesktopMenu/DesktopMenu";

const App = () => {
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
        <div className={style.mobileApp}>
          <Header setNav={setNav} nav={nav} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Mobile
                  {...props}
                  setNav={setNav}
                  nav={nav}
                  menuList={menuList}
                  setFilter={setFilter}
                />
              )}
            />
            {/* <Route
              exact
              path="/menu"
              render={(props) => (
                <MobileMenuReusable
                  {...props}
                  setNav={setNav}
                  nav={nav}
                  filter={filter}
                  setFilter={setFilter}
                  menuList={menuList}
                />
              )}
            /> */}
            <Route
              exact
              path="/about-us"
              render={(props) => (
                <MobileAboutUs
                  {...props}
                  setNav={setNav}
                  nav={nav}
                  filter={filter}
                  setFilter={setFilter}
                  menuList={menuList}
                />
              )}
            />
            <Route
              exact
              path="/construction"
              render={(props) => (
                <MobileConstruction
                  {...props}
                  setNav={setNav}
                  nav={nav}
                  filter={filter}
                  setFilter={setFilter}
                  menuList={menuList}
                />
              )}
            />
          </Switch>
          <MobileNavTwoButton setNav={setNav} setFilter={setFilter} />
        </div>
      </Router>
    );
  } else if (isBrowser) {
    return (
      <Router>
        <div className={style.app}>
          <DesktopHeader />
          <Switch>
            <Route
              path="/about-us"
              render={(props) => (
                <DesktopAboutUs
                  {...props}
                  // setMenu={setMenu}
                  setNav={setNav}
                  // menu={menu}
                  nav={nav}
                />
              )}
            />
            <Route
              path="/menu"
              render={(props) => (
                <DesktopMenu
                  {...props}
                  // setMenu={setMenu}
                  setNav={setNav}
                  // menu={menu}
                  nav={nav}
                />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <Desktop
                  {...props}
                  // setMenu={setMenu}
                  setNav={setNav}
                  // menu={menu}
                  nav={nav}
                />
              )}
            />
          </Switch>
          <DesktopFooter />
        </div>
      </Router>
    );
  }
};

export default App;
