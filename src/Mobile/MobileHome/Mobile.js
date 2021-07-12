import React from "react";
import style from "./Mobile.module.css";
import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Mobile = ({ nav, setNav, menuList, setFilter }) => {
  return (
    <div className={style.app}>
      {nav ? (
        <MenuNavigation
          setNav={setNav}
          menuList={menuList}
          setFilter={setFilter}
        />
      ) : (
        <div className={style.mainContent}>
          <div className={style.underConstruction}>
            <div>Coming Soon</div>
            <div> To Winona MN</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile;
