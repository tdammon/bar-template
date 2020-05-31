import React from 'react';
import style from "./MobileMenu.module.css";
import { useHistory } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import companyLogo from "../CompanyImages/FrenchPress.png"
import homePicture from "../CompanyImages/cheese-and-bread.jpg";
import BreakfastMenu from "./BreakfastMenu"

const MobileMenu = () => {
  const history = useHistory()

    return (
      <div className={style.app}>
        <div className={style.mobileHeader}>
          <div className={style.logoBox}>
            <img className={style.logoPicture} src={companyLogo} alt="French Press Logo" />
          </div>
          <div className={style.contactBox}>
            <a className={style.phoneNumberLink} href="tel:+900300400">
              Call Us!
              <CallIcon style={{fontSize: "3rem"}}/>
            </a>
          </div>
        </div>
        <div className={style.mainContent}>
            <div className={style.menuNav}>
                <div className={style.menuNavButton}>Breakfast</div>
                <div className={style.menuNavButton}>Lunch</div>
                <div className={style.menuNavButton}>Dinner</div>
                <div className={style.menuNavButton}>Dessert</div>
            </div>
            <div className={style.menu}>
                <BreakfastMenu />
           </div>
        </div>
      </div>
    );

}

export default (MobileMenu);