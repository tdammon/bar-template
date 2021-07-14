import React from "react";
import style from "./App.module.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import MobileDirections from "../Mobile/MobileDirections/MobileDirections";
import MobileHeader from "../Mobile/MobileHeader/MobileHeader";
import MobileHome from "../Mobile/MobileHome/MobileHome";
import MobileNavThreeButton from "../Mobile/MobileBottomNav/MobileNavThreeButton/MobileNavThreeButton";
import MobileNavFourButton from "../Mobile/MobileBottomNav/MobileNavFourButton/MobileNavFourButton";
import MobileNavFiveButton from "../Mobile/MobileBottomNav/MobileNavFiveButton/MobileNavFiveButton";
import DesktopHome from "../Desktop/DesktopHome/DesktopHome";
import DesktopHeader from "../Desktop/DesktopHeader/DesktopHeader";
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
        <div className={style.appMobile}>
          <MobileHeader setNav={setNav} nav={nav} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <MobileHome
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
                <MobileDirections
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
          <MobileNavFourButton setNav={setNav} setFilter={setFilter} />
        </div>
      </Router>
    );
  } else if (isBrowser) {
    return (
      <Router>
        <div className={style.appDesktop}>
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
              <DesktopHome
                {...props}
                setMenu={setMenu}
                setNav={setNav}
                menu={menu}
                nav={nav}
              />
            )}
          /> */}
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
