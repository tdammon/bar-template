import React from "react";
import style from "./Mobile.module.css";
import { useHistory } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import homePicture from "../CompanyImages/Port507Bar.jpg";
//import companyLogo from "../CompanyImages/PortLogo.png"

const Mobile = () => {
  const history = useHistory();

  return (
    <div
      className={style.app}
    >
      {/* <img className={style.mainImage} src={homePicture} alt="Home Logo" /> */}
      {/* <div className={style.mobileHeader}>
          <div className={style.logoBox}>
            <img className={style.logoPicture} src={companyLogo} alt="French Press Logo" />
          </div>
          <div className={style.contactBox}>
            <a className={style.phoneNumberLink} href="tel:+900300400">
              Call Us!
              <CallIcon style={{fontSize: "3rem"}}/>
            </a>
          </div>
        </div> */}
      <div className={style.mainContent}>
        <div
          style={{ color: "white", paddingTop: "2rem", fontSize: "2rem" }}
        ></div>
 
        {/* <div>
          <p>Monday 1:00PM - 12:00AM</p>
          <p>Tuesday 1:00PM - 12:00AM</p>
          <p>Wednesday 1:00PM - 12:00AM</p>
          <p>Thursday 1:00PM - 2:00AM</p>
          <p>Friday 1:00PM - 2:00AM</p>
          <p>Saturday 1:00PM - 2:00AM</p>
          <p>Sunday 1:00PM - 12:00AM</p>
        </div> */}
      </div>
    </div>
  );
};

export default Mobile;
