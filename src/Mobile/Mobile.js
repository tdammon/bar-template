import React from 'react';
import style from "./Mobile.module.css";
import { useHistory } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import homePicture from "../CompanyImages/cheese-and-bread.jpg";
import companyLogo from "../CompanyImages/FrenchPress.png"


const Mobile = ()=> {
  const history =useHistory()

    return (
      <div className={style.app}>
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
        <img className={style.mainImage} src={homePicture} alt="Bread and Cheese" />
        </div>
      </div>
    );

}

export default (Mobile);