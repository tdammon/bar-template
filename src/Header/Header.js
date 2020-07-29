import React from 'react';
import style from "./Header.module.css";
import hamburgerMenu from "../CompanyImages/hamburgerMenu.png";

const Header = ({setNav, setMenu}) => {

    return (         
    <div className={style.mobileHeader}>
        <div className={style.mobileLogo}>
          Logo
        </div>
        <div className={style.imageContainer}>
          <img className={style.menuImage} src={hamburgerMenu} alt="hamburger menu icon" onClick={()=>{setNav(true); setMenu('nav')}}/>
        </div>
    </div>);
}

export default (Header);