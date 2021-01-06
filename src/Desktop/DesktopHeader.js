import React from "react";
import { useHistory } from "react-router-dom";
import style from "./Desktop.module.css";
import EvolvMobile from "../CompanyImages/EvolvLogoWhite.png";

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
        <img className={style.menuImage} src={EvolvMobile} alt="company logo" />
        <div style={{ whiteSpace: "nowrap" }}>Evolv Mobile</div>
      </div>
      <div className={style.desktopHeaderRoutes}>
        <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/")}
        >
          Home
        </button>
        <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/about-us")}
        >
          About Us
        </button>
        <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/menu")}
        >
          Menu
        </button>
        <button
          className={style.desktopHeaderButton}
          onClick={() => history.push("/specials")}
        >
          Specials
        </button>
      </div>
    </div>
  );
};

export default DesktopHeader;
