import React from "react";
import { BrowserView } from "react-device-detect";
import style from "./Desktop.module.css";
import homePage from "../CompanyImages/homePage.png";
import { useHistory } from "react-router-dom";

const BrowserImage = () => {
  const history = useHistory();

  React.useEffect(() => {
    history.replace("www.facebook.com/Port507/");
  });

  return (
    <BrowserView>
      <div className={style.appImage}>
        <img src={homePage} />
      </div>
    </BrowserView>
  );
};

export default BrowserImage;
