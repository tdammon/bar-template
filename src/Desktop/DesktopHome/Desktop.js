import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import style from "./Desktop.module.css";
import Logo from "../../CompanyImages/BackwaterFacebookLogo.jpg";

import ReactGA from "react-ga";

const trackingId = "UA-167603833-1";

// ReactGA.set({
//   userId: Math.random(),

// })

const Browser = () => {
  const history = useHistory();

  return (
    <BrowserView>
      <div className={style.app}>
        <div className={style.underConstruction}>
          <div
            className="desktopHeaderLogo"
            onClick={() => {
              history.push("/");
            }}
          >
            <img className="menuImage" src={Logo} alt="company logo" />
            {/* <div style={{ whiteSpace: "nowrap" }}>Backwater BBQ</div> */}
          </div>
          <div>Opening Soon</div>
          <div>Winona, MN</div>
        </div>
      </div>
    </BrowserView>
  );
};

export default Browser;
