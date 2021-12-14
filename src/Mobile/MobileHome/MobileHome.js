import React from "react";
import style from "./MobileHome.module.css";
import MenuNavigation from "../MobileMenuNavigation/MobileMenuNavigation";

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
        <div className={style.mainContent}></div>
      )}
    </div>
  );
};

export default Mobile;
