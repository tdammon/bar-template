import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import hamburgerMenu from "../../CompanyImages/hamburgerMenu.png";
import Logo from "../../CompanyImages/BackwaterFacebookLogo.jpg";

const Header = ({ setNav, nav }) => {
  const history = useHistory();

  return (
    <div className="mobileHeader">
      <div
        className="mobileLogo"
        onClick={() => {
          history.push("/");
          setNav(false);
        }}
      >
        <img className="menuImage" src={Logo} alt="company logo" />
      </div>
      <div className="imageContainer">
        <div id="mobilePhoneNumber">(507)-474-2220</div>
        <div>1213 Gilmore Avenue #T-8</div>
        <div> NW corner of Winona Mall</div>
        <div>Winona, MN 55987</div>
      </div>
    </div>
  );
};

export default Header;
