import React from "react";
import { useHistory } from "react-router-dom";
import style from "./Header.module.css";
import hamburgerMenu from "../../CompanyImages/hamburgerMenu.png";
import Logo from "../../CompanyImages/BackwaterBBQLogo.png";

const Header = ({ setNav, nav }) => {
  const history = useHistory();

  return (
    <div className={style.mobileHeader}>
      <div
        className={style.mobileLogo}
        onClick={() => {
          history.push("/");
          setNav(false);
        }}
      >
        <img className={style.menuImage} src={Logo} alt="company logo" />
      </div>
      <div className={style.imageContainer}>
        <img
          className={style.menuImage}
          src={hamburgerMenu}
          alt="hamburger menu icon"
          onClick={() => {
            setNav(!nav);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
