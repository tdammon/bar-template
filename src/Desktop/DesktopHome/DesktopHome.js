import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import style from "./DesktopHome.module.css";

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
          <div>Website under construction.</div>
          <div> Please reach out at</div>
          <div>xxx-xxx-xxxx</div>
        </div>
      </div>
    </BrowserView>
  );
};

export default Browser;
