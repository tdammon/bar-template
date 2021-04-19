import React from "react";
import { useHistory } from "react-router-dom";
import style from "./MenuNavigation.module.css";

const MenuNavigation = ({ setNav, menuList, setFilter }) => {
  const history = useHistory();

  const getGroupNames = (menuList) => {
    let temp = [];
    for (let item of menuList) {
      if (temp.indexOf(item.group_name) === -1) {
        temp.push(item.group_name);
      }
    }
    return temp;
  };

  return (
    <div className={style.navMenu}>
      {getGroupNames(menuList).map((groupName, index) => (
        <div key={index}>
          <button
            className={style.navMenuButton}
            onClick={() => {
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
