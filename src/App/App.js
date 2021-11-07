import React from "react";
import style from "./App.module.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import Directions from "../Mobile/Directions/Directions";
import Header from "../Mobile/Header/Header";
import Mobile from "../Mobile/MobileHome/Mobile";
import MobileNavThreeButton from "../Mobile/MobileFooter/MobileNavThreeButton/MobileNavThreeButton";
import MobileNavFourButton from "../Mobile/MobileFooter/MobileNavFourButton/MobileNavFourButton";
import MobileNavFiveButton from "../Mobile/MobileFooter/MobileNavFiveButton/MobileNavFiveButton";
import MobileNavTwoButton from "../Mobile/MobileFooter/MobileNavTwoButton/MobileNavTwoButton";
import Desktop from "../Desktop/DesktopHome/Desktop";
import DesktopHeader from "../Desktop/DesktopHeader/DesktopHeader";
import DesktopFooter from "../Desktop/DesktopFooter/DesktopFooter";
import { useHistory } from "react-router-dom";

import MobileMenuReusable from "../Mobile/MobileMenuReusable/MobileMenuReusable";

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
            <Route
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
            />
            <Route
              exact
              path="/directions"
              render={(props) => (
                <Directions
                  {...props}
                  setNav={setNav}
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
            {/* <Route exact path="/" component={DesktopImage} /> */}
            {/* <Route
            path="/"
            component={() => {
              window.location.href = "https://www.facebook.com/Port507/";
              return null;
            }}
          /> */}
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
