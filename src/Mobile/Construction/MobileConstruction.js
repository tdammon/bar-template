import React from "react";
import style from "./MobileConstruction.module.css";
// import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Mobile = ({ nav, setNav, menuList, setFilter }) => {
  return (
    <div className={style.app}>
      <div className={style.mainContent}>
        <div className={style.underConstruction}>
          <div>Under Construction</div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
