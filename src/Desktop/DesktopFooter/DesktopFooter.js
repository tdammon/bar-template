import React from "react";
import { useHistory } from "react-router-dom";
import EvolvLogo from "../../CompanyImages/EvolvLogoWhite.png";
import "./DesktopFooter.css";

const DesktopFooter = () => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="footerColumn" id="phoneNumber">
        (507)-474-2220
      </div>
      <div className="footerColumn">
        <div style={{ textAlign: "center" }}>1213 Gilmore Avenue #T-8</div>
        <div style={{ textAlign: "center" }}> NW corner of Winona Mall</div>
        <div style={{ textAlign: "center" }}>Winona, MN 55987</div>
      </div>
      <div className="footerColumn">
        <div id="evolv">
          <img src={EvolvLogo} alt="evolv mobile logo" id="evolvMobileLogo" />
          <div>Powered by EvolvMobile</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
