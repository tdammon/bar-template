import React from "react";
import Logo from "../../CompanyImages/BackwaterFacebookLogo.jpg";
import style from "./Mobile.module.css";

// import MenuNavigation from "../MenuNavigation/MenuNavigation";

const Mobile = ({ nav, setNav, menuList, setFilter }) => {
  return (
    <div className={style.app}>
      {/* {nav ? (
        <MenuNavigation
          setNav={setNav}
          menuList={menuList}
          setFilter={setFilter}
        />
      ) : ( */}
      <div className={style.mainContent}>
        <img className={style.mainLogo} src={Logo} alt="company logo" />
        <div className={style.underConstruction}>
          <div>Coming Soon</div>
          <div>Winona MN</div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Mobile;
