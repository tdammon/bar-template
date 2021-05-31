import React from "react";
import style from "./App.module.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import Directions from "../Directions/Directions";
import Header from "../Header/Header";
import Mobile from "../Mobile/Mobile";
import MobileNavThreeButton from "../MobileNavThreeButton/MobileNavThreeButton";
import MobileNavFourButton from "../MobileNavFourButton/MobileNavFourButton";
import MobileNavFiveButton from "../MobileNavFiveButton/MobileNavFiveButton";
import Desktop from "../Desktop/Desktop";
import DesktopHeader from "../Desktop/DesktopHeader";
import { useHistory } from "react-router-dom";

import MobileMenuReusable from "../MobileMenuReusable/MobileMenuReusable";
import AdminEditPage from "../Desktop/AdminEditPage/AdminEditPage";

const App = () => {
  const [menuList, setMenuList] = React.useState([]);
  const [nav, setNav] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const history = useHistory();

  const fetchData = () => {
    fetch(
      "https://ry8ufzi4hd.execute-api.us-east-1.amazonaws.com/default/get-restaraunt-data"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setMenuList(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const updateMenuItem = (editItem, editPrice, editId) => {
    fetch(
      `https://vuyz86rjhk.execute-api.us-east-1.amazonaws.com/default/updateEvolvMobileData?item=${editItem}&price=${editPrice}&id=${editId}`
    ).then(() => fetchData());
  };

  const deleteMenuItem = (id, item) => {
    fetch(
      `https://kpx4fa4pfj.execute-api.us-east-1.amazonaws.com/default/deleteEvolvMobileData?id=${id}&item=${item}`
    ).then(() => fetchData());
  };

  const addMenuItem = (item, price, category) => {
    fetch(
      `https://ct4apf1p5i.execute-api.us-east-1.amazonaws.com/default/add-restaraunt-data?restaurant_name=Test&group_name=${category}&group_type=null&item=${item}&price=${price}&description=null`
    ).then(() => fetchData());
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (isMobile) {
    return (
      <Router>
        <div className={style.app}>
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
          <MobileNavFourButton setNav={setNav} setFilter={setFilter} />
        </div>
      </Router>
    );
  } else if (isBrowser) {
    return (
      <Router>
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
            path="/admin"
            render={(props) => (
              <AdminEditPage
                {...props}
                menuList={menuList}
                updateMenuItem={updateMenuItem}
                deleteMenuItem={deleteMenuItem}
                addMenuItem={addMenuItem}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => <Desktop {...props} nav={nav} />}
          />
        </Switch>
      </Router>
    );
  }
};

export default App;
