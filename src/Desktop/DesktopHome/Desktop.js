import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import style from "./Desktop.module.css";

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
          <div>Coming Soon</div>
          <div>To Winona MN</div>
        </div>
      </div>
    </BrowserView>
  );
};

export default Browser;
