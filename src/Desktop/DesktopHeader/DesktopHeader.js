import React from "react";
import { useHistory } from "react-router-dom";
import style from "./DesktopHeader.module.css";
import Logo from "../../CompanyImages/BackwaterFacebookLogo.jpg";

const DesktopHeader = ({ setNav, nav }) => {
  const history = useHistory();

  return (
    <div className={style.desktopHeader}>
      <div
        className={style.desktopHeaderLogo}
        onClick={() => {
          history.push("/");
        }}
      >
        <img className={style.menuImage} src={Logo} alt="company logo" />
        {/* <div style={{ whiteSpace: "nowrap" }}>Backwater BBQ</div> */}
      </div>
      <div className={style.desktopHeaderRoutes}>
        {/* <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/")}
        >
          Home
        </button> */}
        <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/about-us")}
        >
          Our Story
        </button>
        <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/order")}
        >
          Online Ordering
        </button>
        {/* <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/specials")}
        >
          Specials
        </button> */}
      </div>
    </div>
  );
};

export default DesktopHeader;
