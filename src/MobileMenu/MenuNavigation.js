import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MobileMenu.module.css";

const MenuNavigation = ({ setNav, setMenu, menuList, setFilter }) => {
  const history = useHistory();

  const getGroupNames = (menuList) => {
    let temp = [];
    for (let item of menuList) {
      if (temp.indexOf(item.group_name) === -1) {
        temp.push(item.group_name);
      }
    }
    return temp;
    // setResult([...temp]);
  };

  return (
    <div className={style.navMenu}>
      {getGroupNames(menuList).map((groupName, index) => (
        <div>
          <button
            className={style.navMenuButton}
            onClick={() => {
              setMenu("drinks");
              setNav(false);
              setFilter(groupName);
              history.push("/menu");
            }}
          >
            {groupName}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MenuNavigation;
